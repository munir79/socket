import http from 'http';

import { Server } from 'socket.io';
import app from './app.js';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';

dotenv.config();
connectDB();
const PORT = process.env.PORT || 5000;

// create http server

const server = http.createServer(app);

// setup Socket Io server

const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

//socket setup 

//socket events

io.on("connection",(socket)=>{
  console.log("new user connected",socket,id);

  //Event "receiving message data from client"
  socket.on("send_message",(data)=>{
    console.log("received",data);

    // sending back to the client 
    socket.emit("receive_message",{message:"Message received",data})
  });

  // client disconnect

  socket.on("disconnect",()=>{
    console.log("user disConnected",socket.id);
  })
})

// handle socket connection

// start server

server.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
