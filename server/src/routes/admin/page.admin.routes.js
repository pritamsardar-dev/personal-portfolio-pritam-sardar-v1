import { Router } from "express";

import {
  getPageBySlug,
  getPageOptions,
  resetPageToDefault,
  updatePage,
} from "../../controllers/admin/page.admin.controller.js";
import { protectAdmin } from "../../middlewares/auth.middleware.js";

const pageAdminRoutes = Router();

pageAdminRoutes.use(protectAdmin);

pageAdminRoutes.get("/options", getPageOptions);
pageAdminRoutes.get("/:slug", getPageBySlug);
pageAdminRoutes.post("/:slug/reset", resetPageToDefault);
pageAdminRoutes.post("/:slug/update", updatePage);

export default pageAdminRoutes;
