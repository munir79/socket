import { MessageService } from "./message.service.js";

// Send Message
const sendMessageController = async (req, res) => {
  try {
    const { receiverId, chatId, message } = req.body;

    const newMessage = await MessageService.sendMessageToDb(
      req.user._id,
      receiverId,
      chatId,
      message
    );

    res.status(201).json({
      success: true,
      data: newMessage,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get Messages of a Chat
const getMessagesController = async (req, res) => {
  try {
    const { chatId } = req.params;

    const messages = await MessageService.getMessagesFromDb(chatId);

    res.status(200).json({
      success: true,
      total: messages.length,
      data: messages,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const MessageControllers = {
  sendMessageController,
  getMessagesController,
};
