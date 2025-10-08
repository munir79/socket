import http from 'http';

import { Server } from 'socket.io';
import app from './app.js';
import socketHandler from './src/socket.js';
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

// handle socket connection

socketHandler(io);

// start server

server.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
