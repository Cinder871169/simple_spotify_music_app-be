const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const { artist, title } = req.query;
  if (!artist || !title) {
    return res.status(400).json({ error: "Missing artist or title" });
  }
  try {
    const response = await fetch(
      `https://api.lyrics.ovh/v1/${artist}/${title}`
    );
    if (!response.ok) throw new Error("Lyrics not found");
    const data = await response.json();
    res.json({ lyrics: data.lyrics });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
