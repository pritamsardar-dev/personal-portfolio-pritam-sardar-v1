import { Router } from "express";

import {
  getExperienceAllRows,
  getExperienceFeaturedRows,
  getPaginatedWorkItemsRows,
  getWorkItemRowByIdWithRelatedRows,
  getProjectFeaturedRows,
  recordRowView,
} from "../controllers/workItems.controller.js";

const workItemsRoutes = Router();

// Featured experience rows
workItemsRoutes.get("/work-items/experience/featured", getExperienceFeaturedRows);

// All experience rows
workItemsRoutes.get("/work-items/experience", getExperienceAllRows);

// Homepage featured projects
workItemsRoutes.get("/work-items/featured", getProjectFeaturedRows);

// Paginated list for projects and case studies pages
workItemsRoutes.get("/work-items", getPaginatedWorkItemsRows);

// Fullscreen detail view with related rows
workItemsRoutes.get("/work-items/:rowId", getWorkItemRowByIdWithRelatedRows);

// Records a unique view for a row
workItemsRoutes.post("/work-items/:rowId/view", recordRowView);

export default workItemsRoutes;
