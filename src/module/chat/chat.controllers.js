import { ChatService } from "./chat.service.js";

// CREATE CHAT
const createChatController = async (req, res) => {
  try {
    const { receiverId } = req.body;

    const chat = await ChatService.createChatIntoDb(req.user._id, receiverId);

    res.status(201).json({
      success: true,
      message: "Chat created successfully",
      data: chat,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// GET MY CHATS
const getMyChatsController = async (req, res) => {
  try {
    const chats = await ChatService.getMyChatsFromDb(req.user._id);

    res.status(200).json({
      success: true,
      total: chats.length,
      data: chats,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// FIND CHAT BETWEEN TWO USERS
const findChatController = async (req, res) => {
  try {
    const { receiverId } = req.params;

    const chat = await ChatService.findChatFromDb(req.user._id, receiverId);

    res.status(200).json({
      success: true,
      data: chat,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const ChatControllers = {
  createChatController,
  getMyChatsController,
  findChatController,
};
