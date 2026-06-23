import Header from "../models/Header.model.js";
import Footer from "../models/Footer.model.js";
import SiteConfig from "../models/SiteConfig.model.js";

export const getGlobalByType = async (req, res) => {
  try {
    const { type } = req.params;

    let data = null;

    if (type === "header") {
      data = await Header.findOne({ enabled: true }).lean();
    } else if (type === "footer") {
      data = await Footer.findOne({ enabled: true }).lean();
    } else if (type === "site-config") {
      data = await SiteConfig.findOne({ enabled: true }).lean();
    } else {
      return res.status(400).json({
        success: false,
        message: "Invalid global type",
      });
    }

    if (!data) {
      return res.status(404).json({
        success: false,
        message: `${type} not found`,
      });
    }

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
