import { Message } from "./message.model.js";

// Send message
const sendMessageToDb = async (senderId, receiverId, chatId, messageText) => {
  const message = await Message.create({
    sender: senderId,
    receiver: receiverId,
    chatId,
    message: messageText,
  });

  return message;
};

// Get all messages of a chat
const getMessagesFromDb = async (chatId) => {
  const messages = await Message.find({ chatId }).sort({ createdAt: 1 });
  return messages;
};

export const MessageService = {
  sendMessageToDb,
  getMessagesFromDb,
};
