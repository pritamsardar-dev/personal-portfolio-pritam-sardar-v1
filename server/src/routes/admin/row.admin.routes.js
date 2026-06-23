import { Router } from "express";

import {
  resetSectionRowToDefault,
  updateRow,
} from "../../controllers/admin/row.admin.controller.js";
import { protectAdmin } from "../../middlewares/auth.middleware.js";
import upload from "../../middlewares/upload.middleware.js";

const rowAdminRoutes = Router();

rowAdminRoutes.use(protectAdmin);

rowAdminRoutes.patch("/:slug/sections/:sectionKey/rows/:rowId/reset", resetSectionRowToDefault);
rowAdminRoutes.patch("/:slug/sections/:sectionKey/rows/:rowId/update", upload.any(), updateRow);

export default rowAdminRoutes;
