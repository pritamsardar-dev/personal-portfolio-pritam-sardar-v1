import Page from "../../models/Page.model.js";
import Section from "../../models/Section.model.js";

import { pageTemplates } from "../../templates/index.js";
import unflattenObject from "../../utils/unflattenObject.js";

export const getPageOptions = async (req, res) => {
  try {
    const pages = await Page.find({}, { slug: 1, _id: 0 });

    const options = pages.map((page) => ({
      value: page.slug,
      label: page.slug.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    }));

    // Global is not a DB page so it is added manually
    options.push({
      value: "global",
      label: "Global",
    });

    res.status(200).json({
      success: true,
      data: options,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getPageBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const page = await Page.findOne({ slug });

    if (!page) {
      return res.status(404).json({
        success: false,
        message: "Page not found",
      });
    }

    res.status(200).json({
      success: true,
      data: page,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const resetPageToDefault = async (req, res) => {
  try {
    const { slug } = req.params;

    const pageTemplate = pageTemplates[slug];

    if (!pageTemplate) {
      return res.status(400).json({
        success: false,
        message: "No page template found",
      });
    }

    let page;
    const sectionsWithRefs = [];

    // Resolve section DB refs from the template structure
    for (const section of pageTemplate.sections) {
      if (!Section) {
        continue;
      }

      let sectionDoc = await Section.findOne({ id: section.key });

      if (!sectionDoc) {
        sectionDoc = await Section.create({
          id: section.key,
          type: section.refModel,
        });
      }

      sectionsWithRefs.push({
        ...section,
        refModel: "section",
        ref: sectionDoc._id,
      });
    }

    const finalPage = {
      ...pageTemplate,
      sections: sectionsWithRefs,
    };

    // Overwrite fully if exists, create if not
    page = await Page.findOneAndReplace({ slug }, finalPage, {
      returnDocument: "after",
      upsert: true,
    });

    return res.status(200).json({
      success: true,
      message: "Page reset successfully",
      data: page,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updatePage = async (req, res) => {
  try {
    const { slug } = req.params;

    const updateData = unflattenObject(req.body);

    const updatedPage = await Page.findOneAndReplace({ slug }, updateData, {
      returnDocument: "after",
      runValidators: true,
    });

    if (!updatedPage) {
      return res.status(404).json({
        success: false,
        message: "Page not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Page updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
