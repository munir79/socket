import registerBaseHandelers from "./handelers/base.handeler.js";
import registerMessageHandlers from "./handelers/message.handler.js";
import socketAuth from "./socketAuth.js"

const initSocket=(io)=>{
    //socket Auth Middleware 
    io.use(socketAuth);


    io.on('connection',(socket)=>{
        console.log(" Authentic Socket",socket.id);

        registerBaseHandelers(io,socket);
         registerMessageHandlers(io,socket);
    });




}

export default initSocket;