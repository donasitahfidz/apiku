import fetch from 'node-fetch';

export default async function handler(req, res) {
  const url = "https://script.google.com/macros/s/AKfycbwFK5_EolFfB34107pJHG44KuhFQRyp_HP21aIiXTHkYIZC8yZiXG2Oz49KyvdPOqdr/exec";

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (err) {
    console.error("Fetch failed:", err);
    res.status(500).json({ error: "Gagal mengambil data" });
  }
}
