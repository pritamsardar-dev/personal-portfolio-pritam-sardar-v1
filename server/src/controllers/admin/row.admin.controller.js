import { model } from "mongoose";

import Page from "../../models/Page.model.js";
import Section from "../../models/Section.model.js";

import { sectionTemplates } from "../../templates/index.js";
import { extractPublicIds } from "../../utils/extractPublicIds.js";
import { deleteAllAssets } from "../../utils/deleteFromCloudinary.js";
import { processTemplateAssets } from "../../utils/processTemplateAssets.js";
import unflattenObject from "../../utils/unflattenObject.js";
import { uploadFromBuffer } from "../../utils/uploadToCloudianry.js";

export const resetSectionRowToDefault = async (req, res) => {
  try {
    const { slug, sectionKey, rowId } = req.params;

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

    const SectionModel = model(section.refModel);
    const sectionDoc = await SectionModel.findById(section.ref);

    if (!sectionDoc) {
      return res.status(404).json({
        success: false,
        message: "Section document not found",
      });
    }

    const existingRow = sectionDoc.rows.find((row) => row.id === rowId);

    if (!existingRow) {
      return res.status(404).json({
        success: false,
        message: "Row not found",
      });
    }

    const plainRow = existingRow.toObject ? existingRow.toObject() : existingRow;

    // Delete existing Cloudinary assets before replacing with template defaults
    if (plainRow) {
      const oldPublicIds = extractPublicIds(plainRow);

      if (oldPublicIds.length > 0) {
        await deleteAllAssets(oldPublicIds);
      }
    }

    // Work items match by domain since their IDs are dynamic
    let templateRow;

    if (sectionKey === "work-items") {
      templateRow = template.rows.find((row) => row.domain === existingRow.domain);
    } else {
      templateRow = template.rows.find((row) => row.id === rowId);
    }

    if (!templateRow) {
      return res.status(404).json({
        success: false,
        message: "Template row not found",
      });
    }

    const freshRow = JSON.parse(JSON.stringify(templateRow));

    // Derive upload folder from existing image public_id to preserve folder structure
    const existingPublicIds = plainRow ? extractPublicIds(plainRow) : [];

    const folder =
      existingPublicIds.length > 0
        ? existingPublicIds[0].substring(0, existingPublicIds[0].lastIndexOf("/"))
        : `portfolio_pritam/${sectionDoc.assetFolder || "misc"}`;

    await processTemplateAssets(freshRow, folder);

    let rowFound = false;

    sectionDoc.rows = sectionDoc.rows.map((row) => {
      if (row.id === rowId) {
        rowFound = true;
        return freshRow;
      }
      return row;
    });

    if (!rowFound) {
      return res.status(404).json({
        success: false,
        message: "Row not found in section",
      });
    }

    await sectionDoc.save();

    res.status(200).json({
      success: true,
      message: "Row reset to default successfully",
      data: sectionDoc,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateRow = async (req, res) => {
  try {
    const { slug, sectionKey, rowId } = req.params;

    const flatData = req.body;
    const files = req.files || [];

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

    const sectionDoc = await Section.findById(sectionMeta.ref);

    if (!sectionDoc) {
      return res.status(404).json({
        success: false,
        message: "Section document not found",
      });
    }

    const existingRow = sectionDoc.rows.find((row) => row.id === rowId);

    if (!existingRow) {
      return res.status(404).json({
        success: false,
        message: "Row not found",
      });
    }

    const plainRow = existingRow.toObject ? existingRow.toObject() : existingRow;
    const oldPublicIds = extractPublicIds(plainRow);

    // Derive upload folder from existing image public_id to preserve folder structure
    const existingPublicIds = extractPublicIds(plainRow);

    const folder =
      existingPublicIds.length > 0
        ? existingPublicIds[0].substring(0, existingPublicIds[0].lastIndexOf("/"))
        : `portfolio_pritam/${sectionDoc.assetFolder || "misc"}`;

    const uploadedFilesMap = {};

    for (const file of files) {
      const uploaded = await uploadFromBuffer(file.buffer, folder);
      uploadedFilesMap[file.fieldname] = {
        url: uploaded.url,
        public_id: uploaded.public_id,
      };
    }

    const finalFlatData = { ...flatData };

    for (const fieldname in uploadedFilesMap) {
      const { url, public_id } = uploadedFilesMap[fieldname];

      // Write url as plain string and derive sibling public_id key
      finalFlatData[fieldname] = url;

      const parentPath = fieldname.substring(0, fieldname.lastIndexOf("."));
      const publicIdKey = `${parentPath}.public_id`;
      finalFlatData[publicIdKey] = public_id;
    }

    const updatedRow = unflattenObject(finalFlatData);

    // Preserve row ID through the update
    updatedRow.id = rowId;

    const newPublicIds = extractPublicIds(updatedRow);

    // Delete any Cloudinary assets removed during the update
    const idsToDelete = oldPublicIds.filter((id) => !newPublicIds.includes(id));

    if (idsToDelete.length > 0) {
      await deleteAllAssets(idsToDelete);
    }

    sectionDoc.rows = sectionDoc.rows.map((row) => (row.id === rowId ? updatedRow : row));

    await sectionDoc.save();

    res.status(200).json({
      success: true,
      message: "Row updated successfully",
      data: sectionDoc,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
