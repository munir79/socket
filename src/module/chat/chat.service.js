import { Chat } from "./chat.model.js";

// 1. Create chat between two users
const createChatIntoDb = async (user1, user2) => {
  const existingChat = await Chat.findOne({
    participants: { $all: [user1, user2] },
  });

  if (existingChat) {
    return existingChat;
  }

  const chat = await Chat.create({
    participants: [user1, user2],
  });

  return chat;
};

// 2. Get all chats of a user
const getMyChatsFromDb = async (userId) => {
  const chats = await Chat.find({
    participants: { $in: [userId] },
  })
    .populate("participants", "name email")
    .sort({ updatedAt: -1 });

  return chats;
};

// 3. Find chat between two users
const findChatFromDb = async (user1, user2) => {
  const chat = await Chat.findOne({
    participants: { $all: [user1, user2] },
  });

  return chat;
};

export const ChatService = {
  createChatIntoDb,
  getMyChatsFromDb,
  findChatFromDb,
};
