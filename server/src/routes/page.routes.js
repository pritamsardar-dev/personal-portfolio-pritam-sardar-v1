import { Router } from "express";

import { getPageBySlug } from "../controllers/page.controller.js";

const pageRoutes = Router();

pageRoutes.get("/:slug", getPageBySlug);

export default pageRoutes;
