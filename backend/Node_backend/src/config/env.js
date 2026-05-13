import dotenv from "dotenv";

dotenv.config();

export const ENV = {
  PORT: process.env.PORT || 3000,

  MONGODB_URI:
    process.env.MONGODB_URI ,

  JWT_SECRET:
    process.env.JWT_SECRET || "83qq982$@kuq",

  PYTHON_SERVICE_URL:
    process.env.PYTHON_SERVICE_URL ||
    "http://localhost:5001"
};