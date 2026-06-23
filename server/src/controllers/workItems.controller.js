import Section from "../models/Section.model.js";
import RowView from "../models/RowView.model.js";
import { extractClientIp, hashIp } from "../utils/ipHash.js";
import { attachViewedFlag } from "../utils/attachViewedFlag.js";

export const getExperienceFeaturedRows = async (req, res) => {
  try {
    const limit = req.query.limit ? parseInt(req.query.limit) : 1;

    // Fetch enabled featured experience rows sorted by topOrder
    const rows = await Section.aggregate([
      { $match: { id: "work-items" } },
      { $unwind: "$rows" },
      {
        $match: {
          "rows.enabled": { $ne: false },
          "rows.domain": "experience",
          "rows.featured": true,
        },
      },
      { $replaceRoot: { newRoot: "$rows" } },
      { $sort: { "topOrder.experience": 1 } },
      { $limit: limit },
    ]);

    const rowsWithViewed = await attachViewedFlag(rows, req);

    res.status(200).json({ success: true, data: rowsWithViewed });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getExperienceAllRows = async (req, res) => {
  try {
    // Fetch all enabled experience rows sorted by topOrder
    const rows = await Section.aggregate([
      { $match: { id: "work-items" } },
      { $unwind: "$rows" },
      {
        $match: {
          "rows.enabled": { $ne: false },
          "rows.domain": "experience",
        },
      },
      { $replaceRoot: { newRoot: "$rows" } },
      { $sort: { "topOrder.experience": 1 } },
    ]);

    res.status(200).json({ success: true, data: rows });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getPaginatedWorkItemsRows = async (req, res) => {
  try {
    const {
      scope = "all",
      primary = "all",
      secondary,
      sort = "top",
      page = 1,
      limit = 1,
    } = req.query;

    const currentPage = Math.max(Number(page), 1);
    const perPage = Math.max(Number(limit), 1);
    const secondaryKeys = secondary ? secondary.split(",") : [];

    // Build dynamic match from active filters
    const rowMatch = { "rows.enabled": { $ne: false } };

    if (scope !== "all") rowMatch["rows.domain"] = scope;
    if (primary !== "all") rowMatch["rows.primaryCategory.key"] = primary;
    if (secondaryKeys.length > 0) {
      rowMatch["rows.secondaryCategories.key"] = { $in: secondaryKeys };
    }

    // Resolve sort field from query param
    const sortStage = (() => {
      switch (sort) {
      case "newest":
        return { "rows.createdAt": -1 };
      case "popular":
        return { "rows.views": -1 };
      case "top":
      default:
        return { "rows.topOrder": 1 };
      }
    })();

    // Facet returns paginated data and total count in one pass
    const pipeline = [
      { $match: { id: "work-items" } },
      { $unwind: "$rows" },
      { $match: rowMatch },
      {
        $facet: {
          data: [
            { $sort: sortStage },
            { $skip: (currentPage - 1) * perPage },
            { $limit: perPage },
            { $replaceRoot: { newRoot: "$rows" } },
          ],
          pagination: [{ $count: "total" }],
        },
      },
      {
        $project: {
          data: 1,
          pagination: {
            page: currentPage,
            limit: perPage,
            total: {
              $ifNull: [{ $arrayElemAt: ["$pagination.total", 0] }, 0],
            },
            totalPages: {
              $max: [
                1,
                {
                  $ceil: {
                    $divide: [
                      {
                        $ifNull: [{ $arrayElemAt: ["$pagination.total", 0] }, 0],
                      },
                      perPage,
                    ],
                  },
                },
              ],
            },
          },
        },
      },
    ];

    const [result] = await Section.aggregate(pipeline);

    const rowsWithViewed = await attachViewedFlag(result?.data || [], req);

    return res.status(200).json({
      success: true,
      data: rowsWithViewed,
      pagination: result?.pagination?.[0] || {
        total: 0,
        totalPages: 1,
        page: currentPage,
        limit: perPage,
      },
    });
  } catch (error) {
    console.error("getPaginatedWorkItemsRows error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch rows",
    });
  }
};

export const getWorkItemRowByIdWithRelatedRows = async (req, res) => {
  try {
    const { rowId } = req.params;
    const includeCurrent = req.query.includeCurrent === "true";

    const pipeline = [
      { $match: { id: "work-items" } },

      // Isolate the requested row as current
      {
        $project: {
          rows: 1,
          current: {
            $first: {
              $filter: {
                input: "$rows",
                as: "row",
                cond: { $eq: ["$$row.id", rowId] },
              },
            },
          },
        },
      },

      // Stop pipeline early if row not found
      { $match: { current: { $ne: null } } },

      { $addFields: { currentDomain: "$current.domain" } },

      // Filter related rows to same domain, respecting includeCurrent flag
      {
        $project: {
          current: 1,
          related: {
            $filter: {
              input: "$rows",
              as: "row",
              cond: {
                $and: [
                  { $eq: ["$$row.domain", "$currentDomain"] },
                  { $ne: ["$$row.enabled", false] },
                  includeCurrent ? { $ne: ["$$row.id", null] } : { $ne: ["$$row.id", rowId] },
                ],
              },
            },
          },
        },
      },

      { $unwind: { path: "$related", preserveNullAndEmptyArrays: true } },

      // Score each related row for relevance ranking
      {
        $addFields: {
          "related.featuredScore": { $cond: ["$related.featured", 1, 0] },

          "related.primaryScore": {
            $cond: [
              {
                $eq: ["$related.primaryCategory.key", "$current.primaryCategory.key"],
              },
              1,
              0,
            ],
          },

          "related.secondaryScore": {
            $size: {
              $setIntersection: [
                {
                  $map: {
                    input: { $ifNull: ["$related.secondaryCategories", []] },
                    as: "cat",
                    in: "$$cat.key",
                  },
                },
                {
                  $map: {
                    input: { $ifNull: ["$current.secondaryCategories", []] },
                    as: "cat",
                    in: "$$cat.key",
                  },
                },
              ],
            },
          },
        },
      },

      // Sort by relevance scores then topOrder as tiebreaker
      {
        $sort: {
          "related.featuredScore": -1,
          "related.primaryScore": -1,
          "related.secondaryScore": -1,
          "related.topOrder": 1,
        },
      },

      // Reassemble into single document
      {
        $group: {
          _id: null,
          current: { $first: "$current" },
          related: { $push: "$related" },
        },
      },

      // Strip null entries and cap related at 10
      {
        $project: {
          _id: 0,
          current: 1,
          related: {
            $slice: [
              {
                $filter: {
                  input: "$related",
                  as: "row",
                  cond: { $ifNull: ["$$row.id", false] },
                },
              },
              10,
            ],
          },
        },
      },
    ];

    const [result] = await Section.aggregate(pipeline);

    if (!result) {
      return res.status(200).json({
        success: true,
        current: null,
        related: [],
      });
    }

    const [currentWithViewed, ...relatedWithViewed] = await attachViewedFlag(
      [result.current, ...(result.related || [])],
      req,
    );

    return res.status(200).json({
      success: true,
      current: currentWithViewed,
      related: relatedWithViewed,
    });
  } catch {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch row",
    });
  }
};

export const getProjectFeaturedRows = async (req, res) => {
  try {
    const limit = Math.max(Number(req.query.limit) || 0, 1);

    // Fetch enabled featured project rows sorted by topOrder
    const pipeline = [
      { $match: { id: "work-items" } },
      { $unwind: "$rows" },
      {
        $match: {
          "rows.featured": true,
          "rows.domain": "project",
          "rows.enabled": true,
        },
      },
      { $sort: { "rows.topOrder": 1 } },
      { $limit: limit },
      { $replaceRoot: { newRoot: "$rows" } },
    ];

    const rows = await Section.aggregate(pipeline);

    const rowsWithViewed = await attachViewedFlag(rows, req);

    return res.status(200).json({ success: true, data: rowsWithViewed });
  } catch {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch featured work items",
    });
  }
};

// Records a unique view for a row, one count per visitor for life
export const recordRowView = async (req, res) => {
  try {
    const { rowId } = req.params;

    const ipHash = hashIp(extractClientIp(req));

    const alreadyViewed = await RowView.findOne({ rowId, ipHash }).lean();
    if (alreadyViewed) {
      return res.status(200).json({ success: true, counted: false });
    }

    try {
      await RowView.create({ rowId, ipHash });
    } catch (err) {
      if (err.code === 11000) {
        return res.status(200).json({ success: true, counted: false });
      }
      throw err;
    }

    await Section.updateOne(
      { id: "work-items", "rows.id": rowId },
      { $inc: { "rows.$[row].views": 1 } },
      { arrayFilters: [{ "row.id": rowId }] },
    );

    return res.status(200).json({ success: true, counted: true });
  } catch (error) {
    console.error("recordRowView error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to record view",
    });
  }
};
