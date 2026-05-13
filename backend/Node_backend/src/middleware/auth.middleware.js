import { ENV } from "../config/env.js";
import { Session } from "../models/session.model.js";
import { verifyToken } from "../utils/jwt.js";
import jwt from "jsonwebtoken";



// 🔹 REQUIRED AUTH
export const authMiddleware = async (req, res, next) => {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader) {
        return res.status(401).json({
          success: false,
          message: "No token provided"
        });
      }

      // remove Bearer
      const token =
        authHeader.startsWith("Bearer ")
          ? authHeader.split(" ")[1]
          : authHeader;

      // verify JWT
      const decoded = verifyToken(token)
  

      // validate session
      const session = await Session.findOne({
        userId: decoded.id,
        token,
        isActive: true
      });

      if (!session) {
        return res.status(401).json({
          success: false,
          message: "Session expired"
        });
      }

      // attach user
      req.user = decoded;
      next();

    } catch (error) {

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