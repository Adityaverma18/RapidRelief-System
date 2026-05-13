import { getIO } from "../config/socket.js";

// 🔹 notify assignment
export const notifyAssignment = (userId, data) => {
    const io = getIO();
    io.to(userId.toString()).emit("newAssignment", data);
};

// 🔹 notify status update
export const notifyStatusUpdate = (userId, data) => {
    const io = getIO();
    io.to(userId.toString()).emit("statusUpdate", data);
};


// 🔹 broadcast admin update
export const notifyAdmins = (data) => {
    const io = getIO();
    io.emit(
      "adminUpdate",
      data
    );
};