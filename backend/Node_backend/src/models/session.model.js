// models/session.model.js

import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    index: true
  },

  token: {
    type: String,
    required: true
  },

  ipAddress: String,

  device: String,

  location: {lat: Number, lon: Number},

  isActive: {
    type: Boolean,
    default: true
  },

  expiresAt: {
    type: Date,
    required: true
  }

}, { timestamps: true });

// 🔥 auto-delete expired sessions
sessionSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export const Session =  mongoose.model("Session", sessionSchema);