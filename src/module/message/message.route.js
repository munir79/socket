
import express from "express";
import { protect } from "../../middleware/auth.js";
import { MessageControllers } from "./message.controllers.js";


const router = express.Router();

router.post("/send",protect,MessageControllers.createMessageControllers);
router.get("/get-message/:conversationId", protect, MessageControllers.getMessageControlleers);

export  const MessageRouter= router;
