
import express from "express";
import { protect } from "../../middleware/auth.js";
import { messageControllers } from "./message.controllers.js";


const router = express.Router();

router.post("/send",protect,messageControllers.sendMessageControllers);
router.get("get-message/:otherUserId", protect, messageControllers.getMessageControllers);

export  const MessageRouter= router;
