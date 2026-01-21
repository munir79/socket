import express from "express";
import { protect } from "../../middleware/auth.js";
import { conversationControllers } from "./conversation.controllers.js";

const router = express.Router();

router.post("/start-conversation", protect,conversationControllers.startConversationControllers);
router.get("/get-conversation", protect, conversationControllers.myConversationsControllers);

export const ConversationRouter= router;
