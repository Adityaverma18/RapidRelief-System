import User from "../models/UserModel.js";

export const approveRescue = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId);

    if (!user) return res.status(404).json({ message: "User not found" });

    user.role = "RESCUE";
    user.status = "ACTIVE";
    user.verification.isVerified = true;
    user.verification.verifiedAt = new Date();

    await user.save();

    res.json({ message: "User approved as rescue personnel" });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};