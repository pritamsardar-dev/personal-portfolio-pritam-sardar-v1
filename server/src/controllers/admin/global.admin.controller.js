import Header from "../../models/Header.model.js";
import Footer from "../../models/Footer.model.js";
import SiteConfig from "../../models/SiteConfig.model.js";

import { headerGlobalTemplate } from "../../templates/global/header.global.template.js";
import { footerGlobalTemplate } from "../../templates/global/footer.global.template.js";
import { siteConfigGlobalTemplate } from "../../templates/global/siteConfig.global.template.js";

import unflattenObject from "../../utils/unflattenObject.js";

export const resetHeaderToDefault = async (req, res) => {
  try {
    const header = await Header.findOneAndReplace({ id: "global-header" }, headerGlobalTemplate, {
      returnDocument: "after",
      upsert: true,
    });

    return res.status(200).json({
      success: true,
      message: "Header reset successfully",
      data: header,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const resetFooterToDefault = async (req, res) => {
  try {
    const footer = await Footer.findOneAndReplace({ id: "global-footer" }, footerGlobalTemplate, {
      returnDocument: "after",
      upsert: true,
    });

    return res.status(200).json({
      success: true,
      message: "Footer reset successfully",
      data: footer,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const resetSiteConfigToDefault = async (req, res) => {
  try {
    const siteConfig = await SiteConfig.findOneAndReplace(
      { id: "global-site-config" },
      siteConfigGlobalTemplate,
      {
        returnDocument: "after",
        upsert: true,
      },
    );

    return res.status(200).json({
      success: true,
      message: "Site config reset successfully",
      data: siteConfig,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateSiteConfig = async (req, res) => {
  try {
    const updateData = unflattenObject(req.body);

    const updatedSiteConfig = await SiteConfig.findOneAndReplace(
      { id: "global-site-config" },
      updateData,
      {
        returnDocument: "after",
        runValidators: true,
        upsert: true,
      },
    );

    res.status(200).json({
      success: true,
      message: "Site config updated successfully",
      data: updatedSiteConfig,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateHeader = async (req, res) => {
  try {
    const updateData = unflattenObject(req.body);

    const updatedHeader = await Header.findOneAndReplace({ id: "global-header" }, updateData, {
      returnDocument: "after",
      runValidators: true,
      upsert: true,
    });

    res.status(200).json({
      success: true,
      message: "Header updated successfully",
      data: updatedHeader,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateFooter = async (req, res) => {
  try {
    const updateData = unflattenObject(req.body);

    const updatedFooter = await Footer.findOneAndReplace({ id: "global-footer" }, updateData, {
      returnDocument: "after",
      runValidators: true,
      upsert: true,
    });

    res.status(200).json({
      success: true,
      message: "Footer updated successfully",
      data: updatedFooter,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
