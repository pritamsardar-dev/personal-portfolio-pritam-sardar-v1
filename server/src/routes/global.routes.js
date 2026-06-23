import { Router } from "express";
import { getGlobalByType } from "../controllers/global.controller.js";

const globalRoutes = Router();

globalRoutes.get("/globals/:type", getGlobalByType);

export default globalRoutes;
