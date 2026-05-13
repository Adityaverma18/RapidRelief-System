import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema({
  incidentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Incident",
    required: true
  },

  rescueId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  status: {
    type: String,
    enum: ["ASSIGNED", "EN_ROUTE", "COMPLETED"],
    default: "ASSIGNED"
  },

  assignedAt: {
      type: Date,
      default: Date.now
    },

  completedAt: Date


}, { timestamps: true });

assignmentSchema.index({
  rescueId: 1,
  status: 1
});

assignmentSchema.index({
  incidentId: 1
});

export const assignment = mongoose.model("assignment", assignmentSchema)