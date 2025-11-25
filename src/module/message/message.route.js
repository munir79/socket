import express from "express";
import { MessageControllers } from "./message.controller.js";
import { protect } from "../../middleware/auth.js";


const router = express.Router();

router.post("/send", protect, MessageControllers.sendMessageController);
router.get("/:chatId", authMiddleware, MessageControllers.getMessagesController);

export const MessageRouter = router;
