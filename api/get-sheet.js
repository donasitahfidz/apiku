export default async function handler(req, res) {
  const url =
    "https://script.google.com/macros/s/AKfycbyaH9ZIrIMEpyCUzsuTdvrpZP1pw-x4IlOu_pNwR38P9HbCk4TwWUFfBrSJAc7T4xsz/exec";
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (err) {
    console.error("Fetch failed:", err); // ✅ Debug error di logs Vercel
    res.status(500).json({ error: "Gagal mengambil data" });
  }
}
