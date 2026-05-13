// services/python.service.js

import axios from "axios";
import { ENV } from "../config/env.js";

// 🔹 call ML allocation API
export const callPythonService = async (payload) => {
    try {

      const response =
        await axios.post(
          `${ENV.PYTHON_SERVICE_URL}/allocate`,
            payload,
            {
            timeout: 5000
            }
        );

      return response.data;
    } catch (error) {
      console.error("❌ Python Service Error");
      throw new Error(
        "ML service unavailable"
      );
    }
};