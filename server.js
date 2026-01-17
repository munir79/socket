
// import dotenv from "dotenv";
import http from 'http';
import {Server} from "socket.io"

// dotenv.config();

import app from "./app.js";
import { initSockets } from './src/config/initSocket.js';


const server=http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});


initSockets(io)
server.listen(5000, () => {
  console.log("Server running on port 5000");
});


// const port = process.env.PORT || 5000;
// const DATABASE_URL = process.env.MONGODB_URL;

// //  mongodb conncet and start

// const startSerevr = async () => {
//   try {
//     await mongoose.connect(DATABASE_URL,{
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
//     app.listen(port, () => {
//       console.log(`🚀 Server running at http://localhost:${port}`);
//     });
//   } catch (error) {
//     console.error("❌ MongoDB Connection Failed:", error.message);
//     process.exit(1);
//   }
// };

// startSerevr();