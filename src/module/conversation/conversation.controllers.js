import { ConversationService } from './conversation.service.js';

const startConversationControllers = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const { otherUserId } = req.body;
   console.log(' from conversation',userId,otherUserId);
    const conversation = await ConversationService.getOrCrateConversation(userId, otherUserId);

    res.json({
      status: 200,
      success: true,
      message: 'conversation created successfully',
      data: conversation,
    });
  } catch (err) {
    next(err);
  }
};

const myConversationsControllers = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const conversations = await ConversationService.getUserConversation(userId);

    res.json({
      success: true,
      status: 200,
      message: 'fetched successfully',
      connectedWith:conversations.length,
      data: conversations,
    });
  } catch (err) {
    next(err);
  }
};

export const conversationControllers = { startConversationControllers, myConversationsControllers };
