import { Router } from "express";

import { loginAdmin, logoutAdmin, getMe } from "../../controllers/admin/auth.admin.controller.js";
import { protectAdmin } from "../../middlewares/auth.middleware.js";

const authAdminRoutes = Router();

authAdminRoutes.post("/login", loginAdmin);
authAdminRoutes.post("/logout", logoutAdmin);
authAdminRoutes.get("/me", protectAdmin, getMe);

export default authAdminRoutes;
