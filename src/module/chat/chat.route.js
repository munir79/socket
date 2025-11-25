import express from "express";
import { ChatControllers } from "./chat.controllers.js";
import { protect } from "../../middleware/auth.js";


const router = express.Router();

router.post("/create-chat", protect, ChatControllers.createChatController);
router.get("/get-my-chat", protect, ChatControllers.getMyChatsController);
router.get("/all-chat/:receiverId",  ChatControllers.findChatController);

export const ChatRouter= router;
