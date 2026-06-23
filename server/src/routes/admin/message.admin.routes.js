import { Router } from "express";

import {
  getMessages,
  getMessage,
  updateReadStatus,
  updateSpamStatus,
  updateRespondedStatus,
  deleteMessage,
} from "../../controllers/admin/message.admin.controller.js";
import { protectAdmin } from "../../middlewares/auth.middleware.js";

const messageAdminRoutes = Router();

messageAdminRoutes.use(protectAdmin);

messageAdminRoutes.get("/", getMessages);
messageAdminRoutes.get("/:id", getMessage);
messageAdminRoutes.patch("/:id/read", updateReadStatus);
messageAdminRoutes.patch("/:id/spam", updateSpamStatus);
messageAdminRoutes.patch("/:id/responded", updateRespondedStatus);
messageAdminRoutes.delete("/:id", deleteMessage);

export default messageAdminRoutes;
