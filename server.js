
// // import dotenv from "dotenv";
// import http from 'http';
// import {Server} from "socket.io"

// // dotenv.config();

// import app from "./app.js";
// import socketHandeler from './src/config/initSocket.js';


// const server=http.createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: "*",
//   },
// });


// socketHandeler(io);
// server.listen(5000, () => {
//   console.log("Server running on port 5000");
// });


// // const port = process.env.PORT || 5000;
// // const DATABASE_URL = process.env.MONGODB_URL;

// // //  mongodb conncet and start

// // const startSerevr = async () => {
// //   try {
// //     await mongoose.connect(DATABASE_URL,{
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // });
// //     app.listen(port, () => {
// //       console.log(`🚀 Server running at http://localhost:${port}`);
// //     });
// //   } catch (error) {
// //     console.error("❌ MongoDB Connection Failed:", error.message);
// //     process.exit(1);
// //   }
// // };

// // startSerevr();



import http from "http";
import { Server } from "socket.io";
import connectDB from "./config/db.js";
import app from "./app.js";

dotenv.config();
connectDB();

const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("🔌 Socket connected:", socket.id);
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
