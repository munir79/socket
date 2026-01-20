import { MessageServie } from '../../module/message/message.service.js';
import connectedUsers from '../connectedUsers.js';

const registerMessageHandlers = (io, socket) => {
  socket.on('sendMessage', async ({ receiver, content }) => {
    try {
      const sender = socket.user.userId;
      const message = await MessageServie.createMessage({ sender, receiver, content });

      console.log("from message handelar",message);
      // emit to receiver if online

      const receiverSocketId = connectedUsers.get(receiver);
      if (receiverSocketId) {
        io.to(receiverSocketId).emit('receiveMessage', message);
      }

      // emit back to sender

      socket.emit('messageSent', message);
    } catch(err) {
    //   socket.emit('errorMessage', error.message);
    console.log('new',err);
    }
  });
};

export default registerMessageHandlers;
