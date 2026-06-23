import { Router } from "express";

import { createMessage } from "../controllers/message.controller.js";

const messageRoutes = Router();

// Public contact form endpoint
messageRoutes.post("/messages", createMessage);

export default messageRoutes;
