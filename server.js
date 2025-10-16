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

io.on('connection',(socket)=>{
  console.log('user connected',socket.id);

  socket.on('joinRoom',(roomId)=>{
    socket.join(roomId)
  })


  socket.on('sendMessage',(data)=>{
    const {roomId,message}=data;
    io.to(roomId).emit('receiveMessage',message);
  })


  socket.on('disconnect',()=>{
    console.log("User disconnected",socket.id)
  })


})

// handle socket connection

// start server

server.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
