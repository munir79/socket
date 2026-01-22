
import registerBaseHandelers from "./handelers/base.handeler.js";
import registarConversationHandelers from "./handelers/conversationHandelers.js";
import registerMessageHandlers from "./handelers/messageHandelers.js";
import registerTypingHandelers from "./handelers/typing.handelers.js";
import socketAuth from "./socketAuth.js"

const initSocket=(io)=>{
    //socket Auth Middleware 
    io.use(socketAuth);


    io.on('connection',(socket)=>{
        console.log(" Authentic Socket",socket.id);

        registerBaseHandelers(io,socket);
        registarConversationHandelers(io,socket);
        registerMessageHandlers(io,socket);
        registerTypingHandelers(io,socket);  // typing indicator 
    });




}

export default initSocket;