import { Message } from "./module/message/message.model.js";

// src/socket.js
export default function socketHandler(io) {
    // যখন কোনো client connect করবে

  io.on('connection', (socket) => {
    console.log(' User connected:', socket.id);

    // 🔥 Custom event: client থেকে message পাঠানো

    socket.on('send_message',async (data) => {
      console.log(' Received message in server:', data);

      //save mesaeg in database 

      const newMessage=await Message.create({
        user:data.user,
        text:data.text
      })
      console.log("new message ",newMessage);
      // broadcast to all connected clients
      io.emit('receive_message', data);
    });

        // যখন client disconnect হবে

    socket.on('disconnect', () => {
      console.log(' User disconnected:', socket.id);
    });
  });
}
