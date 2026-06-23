import { Router } from "express";

import {
  resetHeaderToDefault,
  resetFooterToDefault,
  resetSiteConfigToDefault,
  updateHeader,
  updateFooter,
  updateSiteConfig,
} from "../../controllers/admin/global.admin.controller.js";

import { protectAdmin } from "../../middlewares/auth.middleware.js";
import upload from "../../middlewares/upload.middleware.js";

const globalAdminRoutes = Router();

globalAdminRoutes.use(protectAdmin);

globalAdminRoutes.post("/header/reset", resetHeaderToDefault);
globalAdminRoutes.post("/header/update", upload.any(), updateHeader);
globalAdminRoutes.post("/footer/reset", resetFooterToDefault);
globalAdminRoutes.post("/footer/update", upload.any(), updateFooter);
globalAdminRoutes.post("/site-config/reset", resetSiteConfigToDefault);
globalAdminRoutes.post("/site-config/update", upload.any(), updateSiteConfig);

export default globalAdminRoutes;
