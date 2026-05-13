import mongoose from "mongoose";

const incidentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  location: {
    lat: {
        type: Number,
        required: true
      },

      lon: {
        type: Number,
        required: true
      }
  },

  severity: {
    type: Number,
    required: true
  },

  status: {
    type: String,
    enum: ["PENDING", "ASSIGNED", "IN_PROGRESS", "COMPLETED"],
    default: "PENDING"
  },

  affectedPopulation: {
      type: Number,
      default: 1
    },

    disasterType: {
      type: String,
      enum: [
        "FLOOD",
        "EARTHQUAKE",
        "FIRE",
        "LANDSLIDE",
        "CYCLONE",
        "OTHER"
      ],
      default: "OTHER"
    },

    description: String,

}, {timestamps: true});


// 🔥 index
incidentSchema.index({
  status: 1,
  severity: -1
});

export const Incident = mongoose.model("Incident", incidentSchema);