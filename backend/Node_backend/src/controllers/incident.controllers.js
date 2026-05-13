import { Incident } from "../models/incident.model.js";


// 🔹 CREATE INCIDENT
export const createIncident = async (req, res) => {
  try {

    const {lat, lon, severity} = req.body;

    const incident =
      await Incident.create({
        userId: req.user?.id || null,
        location: {lat, lon},
        severity
      });

    return res.status(201).json({
      success: true,
      message: "Help request created",
      incident
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }
};


// 🔹 GET ALL INCIDENTS
export const getAllIncidents = async (req, res) => {

    try {

      const incidents = await Incident.find().sort({ createdAt: -1 });

      return res.status(200).json({
        success: true,
        incidents
      });

    } catch (error) {

      return res.status(500).json({
        success: false,
        message: error.message
      });

    }
};