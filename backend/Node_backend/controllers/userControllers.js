import bcrypt from "bcrypt";
import { User } from "../models/UserModel.js";
import jwt from 'jsonwebtoken'
import { Session } from "../models/sessionModel.js";

export const registerUser = async (req, res) => {
  try {
    let { name, email, phoneNumber, password, confirmPassword } = req.body;

    // 🔴 Validation
    if ((!email && !phoneNumber) || !password) {
      return res.status(400).json({
        success: false,
        message: "Email/Phone and password required"
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password and confirm Password do not match"
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters"
      });
    }

    // normalize input
    email = email?.toLowerCase();
    phoneNumber = phoneNumber?.replace(/\D/g, "");
    name = name?.trim();

    // 🔍 Safe query
    const query = [];
    if (email) query.push({ email });
    if (phoneNumber) query.push({ phoneNumber });

    const existingUser = await User.findOne({ $or: query });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists"
      });
    }

    // 🔐 Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 🆕 Create user
    const user = new User({
      name,
      email,
      phoneNumber,
      password: hashedPassword,
      role: "USER",
      status: "ACTIVE",
      isGuest: false
    });

    await user.save();

    return res.status(201).json({
      success: true,
      message: "User registered successfully"
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


export const loginUser = async (req, res) => {
  try {
    const { email, phoneNumber, password } = req.body;

    if ((!email && !phoneNumber) || !password) {
      return res.status(400).json({
        message: "Credentials required"
      });
    }

    const user = await User.findOne({
      $or: [{ email }, { phoneNumber }]
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    // 🔴 Status check
    if (user.status !== "ACTIVE") {
      return res.status(403).json({
        message: "Account not active"
      });
    }

    // 🔐 Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials"
      });
    }

    // 🔑 Token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    await Session.deleteMany({ userId: user._id });

    // 🔥 Create new session
    await Session.create({
      userId: user._id,
      token,
      isActive: true,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    });

    user.isLoggedIn = true;
    user.lastLogin = new Date();
    await user.save();

    return res.json({
      success: true,
      message: "Login successful",
      token
    });


  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};