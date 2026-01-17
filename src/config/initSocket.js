import registerSocketHandlers from "../socket/socket.js";

export const initSockets=(io)=>{
    io.on("connection",(socket)=>{
        console.log("user connected",socket.id);
         registerSocketHandlers(io,socket);


    socket.on("disconnect",()=>{
        console.log("user disconneted",socket.id);
    });

    });

   
};



