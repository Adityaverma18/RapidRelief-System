import mongoose from "mongoose";

const incidentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  location: {
    lat: Number,
    lon: Number
  },

  severity: {
    type: Number,
    required: true
  },

  status: {
    type: String,
    enum: ["PENDING", "ASSIGNED", "IN_PROGRESS", "COMPLETED"],
    default: "PENDING"
  }

}, { timestamps: true });

export const Incident = mongoose.model("Incident", incidentSchema);