// const connectedUsers=new Map();

// // here we will do all socket event handle 
// const socketHandler = (io) => {
//   // when new user client connected
//   io.on("connection", (socket) => {
//     console.log("New user connected:", socket.id);


//     //1.*******************add user id bussines logic************************************  */
// socket.on('addUser',(userId)=>{
//     connectedUsers.set(userId,socket.id);

//     // *********in front -end 
//     //   useEffect(() => {
//     // socket.emit("addUser", userId);

   

// //  const myMap = new Map();
// // myMap.set("name", "Jakir");
// // myMap.set("age", 25);

// // console.log(myMap.get("name")); // Output: Jakir
// // console.log(myMap.get("age"));  // Output: 25



//     // এর সুবিধা: যখন আমরা কোনো নির্দিষ্ট ব্যবহারকারীকে মেসেজ পাঠাতে চাই, আমরা তার socket.id জানি, তাই সরাসরি সেই socket-এ মেসেজ পাঠাতে পারি।

//     console.log("connected USers",Array.from(connectedUsers.entries()));

// })


// // ****************************end add user ************************************


// // 2.**********************send private message *********************

// socket.on("sendPrivateMessage",({toUserId,message})=>{
//   const targeteSocketUd=connectedUsers.get(toUserId);
//   if(targeteSocketUd){
//     io.to(targeteSocketUd).emit('receivePrivateMessage',{
//       from:socket.id,
//       message
//     })
//   }
// })


// //******************************send private message 



    

//     // Disconnect handle
//    socket.on("disconnect", () => {
//       for (let [userId, id] of connectedUsers.entries()) {
//         if (id === socket.id) {
//           connectedUsers.delete(userId);
//           break;
//         }
//       }
//       console.log("User disconnected:", socket.id);
//     });
//   });
// };

// export default socketHandler;

























// *************************************************final 


const socketHandler = (io) => {
  io.on("connection", (socket) => {
    console.log("✅ New user connected:", socket.id);

    // Test event
    socket.on("testMessage", (data) => {
      console.log("📩 Message from client:", data);

      // Broadcast to all clients
      io.emit("testResponse", data);
    });

    socket.on("disconnect", () => {
      console.log("❌ User disconnected:", socket.id);
    });
  });
};

export default socketHandler;
