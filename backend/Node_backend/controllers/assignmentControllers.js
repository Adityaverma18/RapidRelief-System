import { assignment } from "../models/AssignmentModel.js";
import User from "../models/UserModel.js";

export const applyForRescue = async (req, res) => {
  try {
    const userId = req.user.id;
    const { skills } = req.body;

    const user = await User.findById(userId);

    if (!user) return res.status(404).json({ message: "User not found" });

    // prevent reapply
    if (user.status === "PENDING") {
      return res.status(400).json({ message: "Already applied" });
    }

    user.skills = skills || [];
    user.status = "PENDING";

    await user.save();

    res.json({
      message: "Application submitted, waiting for admin approval"
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const assignRescue = async (req, res) => {
  try {
    const { incidentId } = req.body;

    // find available rescue
    const rescue = await User.findOne({
      role: "RESCUE",
      status: "ACTIVE"
    });

    if (!rescue) {
      return res.json({ message: "No rescue available" });
    }

    const assignment = new assignment({
      incidentId,
      rescueId: rescue._id
    });

    await assignment.save();

    res.json({
      message: "Rescue assigned",
      assignment
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};