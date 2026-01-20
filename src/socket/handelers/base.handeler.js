import connectedUsers from "../connectedUsers.js";

const registerBaseHandelers=(io,socket)=>{
    const userId=socket.user.userId;

    //save user as connected 
     connectedUsers.set(userId,socket.id);
     console.log("user online",userId);


     socket.on('disconnect',()=>{
        connectedUsers.delete(userId);
        console.log("user offline",userId);
     })

}

export default registerBaseHandelers;