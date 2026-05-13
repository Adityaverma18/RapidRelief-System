
import { assignment } from "../models/assignment.model.js";
import { User } from "../models/user.model.js";


// 🔹 ASSIGN RESCUE
export const assignRescue = async (req, res) => {
    try {

      const { incidentId } = req.body;

      const rescue =
        await User.findOne({
          role: "RESCUE",
          status: "ACTIVE"
        });

      if (!rescue) {
        return res.status(404).json({
          success: false,
          message:
            "No rescue available"
        });
      }

      const assignment =
        await assignment.create({
          incidentId,
          rescueId: rescue._id
        });

      return res.status(201).json({
        success: true,
        assignment
      });

    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message
      });

    }
};


// 🔹 UPDATE STATUS
export const updateTaskStatus =
  async (req, res) => {

    try {

      const {
        assignmentId,
        status
      } = req.body;

      const task =
        await Assignment.findById(
          assignmentId
        );

      task.status = status;

      await task.save();

      return res.status(200).json({
        success: true,
        task
      });

    } catch (error) {

      return res.status(500).json({
        success: false,
        message: error.message
      });

    }
};