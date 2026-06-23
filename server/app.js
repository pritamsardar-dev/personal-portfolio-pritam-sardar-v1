import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import "./src/models/index.js";

import pageRoutes from "./src/routes/page.routes.js";
import workItemsRoutes from "./src/routes/workitems.routes.js";
import globalRoutes from "./src/routes/global.routes.js";
import messageRoutes from "./src/routes/message.routes.js";

import authAdminRoutes from "./src/routes/admin/auth.admin.routes.js";
import pageAdminRoutes from "./src/routes/admin/page.admin.routes.js";
import sectionAdminRoutes from "./src/routes/admin/section.admin.routes.js";
import rowAdminRoutes from "./src/routes/admin/row.admin.routes.js";
import globalAdminRoutes from "./src/routes/admin/global.admin.routes.js";
import messageAdminRoutes from "./src/routes/admin/message.admin.routes.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN.split(","),
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

// Health check
app.get("/api/v1/health", (req, res) => {
  res.status(200).json({
    status: "ok",
  });
});

// Public routes
app.use("/api/v1/pages", pageRoutes);
app.use("/api/v1", workItemsRoutes);
app.use("/api/v1", globalRoutes);
app.use("/api/v1", messageRoutes);

// Admin routes
app.use("/api/v1/admin/auth", authAdminRoutes);
app.use("/api/v1/admin/pages", pageAdminRoutes);
app.use("/api/v1/admin/pages", sectionAdminRoutes);
app.use("/api/v1/admin/pages", rowAdminRoutes);
app.use("/api/v1/admin/globals", globalAdminRoutes);
app.use("/api/v1/admin/messages", messageAdminRoutes);

export { app };
