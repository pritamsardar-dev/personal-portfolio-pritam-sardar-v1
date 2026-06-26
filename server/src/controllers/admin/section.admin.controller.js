import Page from "../../models/Page.model.js";
import Section from "../../models/Section.model.js";

import { sectionTemplates } from "../../templates/index.js";
import { extractPublicIds } from "../../utils/extractPublicIds.js";
import { deleteAllAssets } from "../../utils/deleteFromCloudinary.js";
import { processTemplateAssets } from "../../utils/processTemplateAssets.js";
import unflattenObject from "../../utils/unflattenObject.js";
import { uploadFromBuffer } from "../../utils/uploadToCloudianry.js";

export const getSection = async (req, res) => {
  try {
    const { slug, sectionKey } = req.params;

    const page = await Page.findOne({ slug });

    if (!page) {
      return res.status(404).json({
        success: false,
        message: "Page not found",
      });
    }

    const sectionMeta = page.sections.find((section) => section.key === sectionKey);

    if (!sectionMeta) {
      return res.status(404).json({
        success: false,
        message: "Section not found",
      });
    }

    const section = await Section.findById(sectionMeta.ref);

    if (!section) {
      return res.status(404).json({
        success: false,
        message: "Section data missing",
      });
    }

    res.status(200).json({
      success: true,
      data: section,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const resetSectionToDefault = async (req, res) => {
  try {
    const { slug, sectionKey } = req.params;

    const template = sectionTemplates[sectionKey];

    if (!template) {
      return res.status(400).json({
        success: false,
        message: "No template found for this section",
      });
    }

    const page = await Page.findOne({ slug });

    if (!page) {
      return res.status(404).json({
        success: false,
        message: "Page not found",
      });
    }

    const section = page.sections.find((s) => s.key === sectionKey);

    if (!section) {
      return res.status(404).json({
        success: false,
        message: "Section not found",
      });
    }

    if (!Section) {
      return res.status(400).json({
        success: false,
        message: `Model not registered: ${section.refModel}`,
      });
    }

    // Fetch existing section doc to extract old Cloudinary assets
    const existingSection = await Section.findById(section.ref);

    // Delete all old assets before replacing with template defaults
    if (existingSection) {
      const oldPublicIds = extractPublicIds(existingSection.toObject());
      if (oldPublicIds.length > 0) {
        await deleteAllAssets(oldPublicIds);
      }
    }

    // Deep clone template to avoid mutating the original
    const freshTemplate = JSON.parse(JSON.stringify(template));

    // Upload fresh template assets to Cloudinary
    const folder = `portfolio_pritam/${template.assetFolder || "misc"}`;
    await processTemplateAssets(freshTemplate, folder);

    // Fully replace the section document in DB
    const updatedSection = await Section.findOneAndReplace({ _id: section.ref }, freshTemplate, {
      returnDocument: "after",
      upsert: true,
    });

    res.status(200).json({
      success: true,
      message: "Section reset to default",
      data: updatedSection,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateSection = async (req, res) => {
  try {
    const { slug, sectionKey } = req.params;

    const flatData = req.body;
    const files = req.files || [];

    const page = await Page.findOne({ slug });

    if (!page) {
      return res.status(404).json({
        success: false,
        message: "Page not found",
      });
    }

    const sectionMeta = page.sections.find((s) => s.key === sectionKey);

    if (!sectionMeta) {
      return res.status(404).json({
        success: false,
        message: "Section not found",
      });
    }

    const existingSection = await Section.findById(sectionMeta.ref);

    if (!existingSection) {
      return res.status(404).json({
        success: false,
        message: "Section document not found",
      });
    }

    // Extract old public_ids before any changes
    const oldPublicIds = extractPublicIds(existingSection.toObject());

    // Upload new files to Cloudinary
    const uploadedFilesMap = {};
    const folder = `portfolio_pritam/${existingSection.assetFolder || "misc"}`;

    for (const file of files) {
      const uploaded = await uploadFromBuffer(file.buffer, folder, {
        mimetype: file.mimetype,
        originalname: file.originalname,
      });

      uploadedFilesMap[file.fieldname] = {
        src: uploaded.url,
        public_id: uploaded.public_id,
      };
    }

    // Merge flat body with uploaded file data
    const finalFlatData = { ...flatData };

    for (const key in uploadedFilesMap) {
      finalFlatData[key] = uploadedFilesMap[key];
    }

    // Convert flattened data to nested object for DB
    const nestedData = unflattenObject(finalFlatData);

    // Find deleted or replaced images and remove from Cloudinary
    const newPublicIds = extractPublicIds(nestedData);
    const idsToDelete = oldPublicIds.filter((id) => !newPublicIds.includes(id));

    if (idsToDelete.length > 0) {
      await deleteAllAssets(idsToDelete);
    }

    // Fully replace the section document in DB
    const updatedSection = await Section.findOneAndReplace({ _id: sectionMeta.ref }, nestedData, {
      returnDocument: "after",
      upsert: true,
    });

    res.status(200).json({
      success: true,
      message: "Section updated successfully",
      data: updatedSection,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
