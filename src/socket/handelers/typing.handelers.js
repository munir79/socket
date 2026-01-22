// const registerTypingHandelers=(io,socket)=>{
//     socket.on("typing",({conversationId})=>{
//         socket.to(conversationId).emit("typing",{
//             userId:socket.user.userId,//who is typing this information send to thers

//             // conversationId  
//         })
//     });


//     //user stops typing  
//     socket.on('stopTyping',({conversationId})=>{
//         socket.to(conversationId).emit('stopTyping',{
//             userId:socket.user.userId,
//             // conversationId
//         })
//     })

// }

// export default registerTypingHandelers;




const registerTypingHandlers = (io, socket) => {
  socket.on("typing", ({ conversationId, userName }) => {
    socket.to(conversationId).emit("typing", { userName, userId: socket.user.userId });
  });

  socket.on("stopTyping", ({ conversationId }) => {
    socket.to(conversationId).emit("stopTyping", { userId: socket.user.userId });
  });
};

export default registerTypingHandlers;
