// src/socket.js

import { Message } from './module/message/message.model.js';

// Track all connected users
const connectedUsers = {}; // { username: socket.id }

export default function socketHandler(io) {
  io.on('connection', (socket) => {
    console.log('New user connected:', socket.id);

    // Register user when they connect
    socket.on('register_user', (username) => {
      connectedUsers[username] = socket.id;
      console.log(`${username} registered with socket ID: ${socket.id}`);
    });

    //Send private message to a specific user
    socket.on('private_message', async (data) => {
      const { sender, receiver, text } = data;

      // receiver socket id
      const receiverSocketId = connectedUsers[receiver];

      if (receiverSocketId) {
        // Save message in database
        const message = new Message({ user: sender, text });
        await message.save();

        // Send message to receiver only
        io.to(receiverSocketId).emit('receive_private_message', {
          from: sender,
          text,
        });

        console.log(` ${sender} → ${receiver}: ${text}`);
      } else {
        console.log(` Receiver ${receiver} not online.`);
      }
    });

    //  Handle disconnect
    socket.on('disconnect', () => {
      console.log(' User disconnected:', socket.id);

      // remove from connected users
      for (const user in connectedUsers) {
        if (connectedUsers[user] === socket.id) {
          delete connectedUsers[user];
          console.log(`👋 ${user} logged out.`);
          break;
        }
      }
    });
  });
}
