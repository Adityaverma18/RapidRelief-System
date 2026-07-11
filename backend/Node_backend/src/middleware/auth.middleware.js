import { ENV } from "../config/env.js";
import { Session } from "../models/session.model.js";
import { verifyToken } from "../utils/jwt.js";
import jwt from "jsonwebtoken";



// 🔹 REQUIRED AUTH
export const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    console.log("Authorization:", authHeader);

    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: "No token provided"
      });
    }

    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : authHeader;

    console.log("Token:", token);
    console.log("JWT_SECRET:", ENV.JWT_SECRET);

    const decoded = verifyToken(token);
    console.log("Decoded:", decoded);

    const session = await Session.findOne({
      userId: decoded.id,
      token,
      isActive: true
    });

    console.log("Session:", session);

    if (!session) {
      return res.status(401).json({
        success: false,
        message: "Session expired"
      });
    }

    req.user = decoded;
    next();

  } catch (error) {
    console.error(error);

    return res.status(401).json({
      success: false,
      message: "Invalid token"
    });
  }
};

export const optionalAuth =
  async (req, res, next) => {
    try {
      const authHeader = req.headers.authorization;

      if (!authHeader) {
        return next();
      }

      const token =
        authHeader.startsWith("Bearer ")
          ? authHeader.split(" ")[1]
          : authHeader;

      const decoded = verifyToken(token)

      req.user = decoded;

      next();
    } catch {
      next();
    }
};