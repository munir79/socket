import { Conversation } from '../../module/conversation/conversation.model.js';
import { MessageSerive } from '../../module/message/message.service.js';
import connectedUsers from '../connectedUsers.js';

const registerMessageHandlers = (io, socket) => {
  socket.on('sendMessage', async ({ conversationId, content }) => {
    try {
      const sender = socket.user.userId;

      //1. save message in db
      const message = await MessageSerive.createMesasgeInDb({
        conversationId,
        sender,
        content,
      });

      console.log('from emit msg hadlar', message);

      //2.emit to all active users in this conversation
      io.to(conversationId).emit('receiveMessage', message);

      //3.Notify other conversation members

      // const conversation = await Conversation.findById(conversationId);

      // const otherMembers = conversation.members.filter((id) => id.toString() !== sender.toString());

      // otherMembers.forEach((userId) => {
      //   const socketId = connectedUsers.get(userId.toString());
      //   if (socketId) {
      //     io.to(socketId).emit('newMessageNotification', {
      //       conversationId,
      //       message,
      //     });
      //   }
      // });

  // 3️⃣ Emit notification to receiver if they are online

  const receiverSocketId=connectedUsers.get(receiverId);
  if(receiverSocketId && receiverSocketId !==socket.id){
    io.to(receiverSocketId).emit("newMessageNotification",{})
  }

    } catch (err) {
      console.log('sendMessage error', err.message);
            // socket.emit("messageError", { message: "Message send failed" });

    }
  });
};

export default registerMessageHandlers;
