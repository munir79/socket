// src/testClient.js
import { io } from "socket.io-client";

// Create two separate clients
const userA = io("http://localhost:5000");
const userB = io("http://localhost:5000");

//  User A connects
userA.on("connect", () => {
  console.log("User A connected:", userA.id);
  userA.emit("register_user", "Munir");

  // Send message to B after 3s
  setTimeout(() => {
    userA.emit("private_message", {
      sender: "Munir",
      receiver: "Rafi",
      text: "Hello Rafi!",
    });
  }, 3000);
});

//  User B connects
userB.on("connect", () => {
  console.log("User B connected:", userB.id);
  userB.emit("register_user", "Rafi");
});

//  User B receives private message
userB.on("receive_private_message", (data) => {
  console.log("Private message received:", data);
});
