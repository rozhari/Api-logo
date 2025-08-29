// logo-api.js
const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

/*
Available styles:
neon, glow, gradient, graffiti, matrix, thunder, ice, sketch
*/

const BASE_URL = "https://textpro.me"; // External logo generator

// Root route - just info
app.get("/", (req, res) => {
  res.send("✅ Logo API Running! Use /logo?text=Hello&style=neon");
});

// /logo?text=Hello&style=neon
app.get("/logo", async (req, res) => {
  const { text, style } = req.query;

  if (!text) return res.status(400).json({ error: "❌ Missing text parameter!" });
  if (!style) return res.status(400).json({ error: "❌ Missing style parameter!" });

  try {
    // Example API endpoint (You can replace with textmaker/thiccy-like API if available)
    // This is a placeholder (simulate external call)
    const url = `${BASE_URL}/${style}-text-effect-online-879.html`; // Style mapping needed

    // Dummy response (replace with proper implementation if you use real generator)
    const imageUrl = `https://dummyimage.com/600x200/000/fff.png&text=${encodeURIComponent(
      text
    )}+(${style})`;

    res.json({
      status: true,
      text,
      style,
      result: imageUrl,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "❌ Error while generating logo!" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Logo API running on port ${PORT}`);
});
