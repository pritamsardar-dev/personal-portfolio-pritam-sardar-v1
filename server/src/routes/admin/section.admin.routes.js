import { Router } from "express";

import {
  resetSectionToDefault,
  updateSection,
  getSection,
} from "../../controllers/admin/section.admin.controller.js";
import { protectAdmin } from "../../middlewares/auth.middleware.js";
import upload from "../../middlewares/upload.middleware.js";

const sectionAdminRoutes = Router();

sectionAdminRoutes.use(protectAdmin);

sectionAdminRoutes.get("/:slug/sections/:sectionKey", getSection);
sectionAdminRoutes.post("/:slug/sections/:sectionKey/reset", resetSectionToDefault);
sectionAdminRoutes.post("/:slug/sections/:sectionKey/update", upload.any(), updateSection);

export default sectionAdminRoutes;
