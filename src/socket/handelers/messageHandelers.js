import { MessageSerive } from "../../module/message/message.service.js";

const registerMessageHandlers = (io, socket) => {
  socket.on("sendMessage", async ({ conversationId, content }) => {
    const sender = socket.user.userId;

    const message = await  MessageSerive.createMesasgeInDb({
      conversationId,
      sender,
      content
    });

    console.log("from emit msg hadlar",message);

    io.to(conversationId).emit("receiveMessage", message);
  });
};

export default registerMessageHandlers;
