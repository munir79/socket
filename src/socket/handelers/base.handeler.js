// import connectedUsers from "../connectedUsers.js";

// const registerBaseHandelers=(io,socket)=>{
//     const userId=socket.user.userId;

//     //save user as connected 
//      connectedUsers.set(userId,socket.id);
//      console.log("user online",userId);


//      socket.on('disconnect',()=>{
//         connectedUsers.delete(userId);
//         console.log("user offline",userId);
//      })

// }

// export default registerBaseHandelers;




import connectedUsers from "../connectedUsers.js";

const registerBaseHandelers=(io,socket)=>{
   const userId=socket.user.userId;
   console.log("user online",userId);

   connectedUsers.set(userId,socket.Id);

   socket.on('disconnect',()=>{
      connectedUsers.delete(userId);
   })
}


export default registerBaseHandelers;