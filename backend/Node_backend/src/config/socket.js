import { Server } from "socket.io";

let io;

export const initSocket = (server) => {

  io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST", "PATCH"]
    }
  });

  io.on("connection", (socket) => {

    console.log(`⚡ User Connected: ${socket.id}`);

    // 🔹 join user room
    socket.on("joinRoom", (userId) => {
      socket.join(userId);
      console.log(`User joined room: ${userId}`);
    });

    // 🔹 disconnect
    socket.on("disconnect", () => {
      console.log(`❌ User Disconnected: ${socket.id}`);
    });
  });

  return io;
};

// 🔹 get io instance anywhere
export const getIO = () => {
  if (!io) {
    throw new Error("Socket.io not initialized");
  }
  return io;
};