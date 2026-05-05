import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema({
  incidentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Incident"
  },

  rescueId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  status: {
    type: String,
    enum: ["ASSIGNED", "EN_ROUTE", "COMPLETED"],
    default: "ASSIGNED"
  }

}, { timestamps: true });

export const assignment = mongoose.model("assignment", assignmentSchema)