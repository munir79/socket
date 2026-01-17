const registerSocketHandlers = (io, socket) => {
  socket.on("message", (data) => {
    console.log("message:", data);
  });
};

export default registerSocketHandlers;
