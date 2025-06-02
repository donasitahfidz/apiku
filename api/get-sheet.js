const axios = require("axios");

module.exports = async (req, res) => {
  try {
    const gasUrl =
      process.env.GAS_URL ||
      "https://script.google.com/macros/s/AKfycbwFK5_EolFfB34107pJHG44KuhFQRyp_HP21aIiXTHkYIZC8yZiXG2Oz49KyvdPOqdr/exec";
    const response = await axios.get(gasUrl, { timeout: 10000 });

    if (!Array.isArray(response.data)) {
      throw new Error("Response is not an array");
    }

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error in /api/get-sheet:", error);
    res.status(500).json({
      error: true,
      message: error.message || "Internal server error",
      details: error.response ? error.response.data : null,
    });
  }
};
