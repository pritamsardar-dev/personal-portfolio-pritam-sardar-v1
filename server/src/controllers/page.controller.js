import Page from "../models/Page.model.js";
import Section from "../models/Section.model.js";

export const getPageBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const page = await Page.findOne({ slug, enabled: true }).lean();

    if (!page) {
      return res.status(404).json({ message: "Page not found" });
    }

    // Populate section refs — work-items gets row metadata only, others get full doc
    const populatedSections = await Promise.all(
      page.sections.map(async (section) => {
        if (!section.ref) return section;

        // work-items: strip heavy fields to keep payload lean for list views
        if (section.key === "work-items") {
          const result = await Section.aggregate([
            { $match: { _id: section.ref } },
            {
              $project: {
                "rows.blocks": 0,
                "rows.fullCaseStudy": 0,
                "rows.description": 0,
              },
            },
          ]);

          return {
            ...section,
            ref: result[0] ?? null,
          };
        }

        // All other sections get the full document
        const sectionDoc = await Section.findById(section.ref).lean();
        return {
          ...section,
          ref: sectionDoc,
        };
      }),
    );

    res.status(200).json({
      success: true,
      data: {
        ...page,
        sections: populatedSections,
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
