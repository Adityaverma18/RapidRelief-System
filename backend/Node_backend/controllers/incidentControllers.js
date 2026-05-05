import { Incident } from "../models/incidentModel.js";

export const createIncident = async (req, res) => {
  try {
    const { lat, lon, severity } = req.body;

    const incident = new Incident({
      userId: req.user?.id || null, // allow guest
      location: { lat, lon },
      severity
    });

    await incident.save();

    res.json({
      message: "Help request created",
      incident
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};