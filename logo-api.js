// logo-api.js
const express = require("express");
const textpro = require("textmaker-thiccy"); // npm install textmaker-thiccy

const app = express();
const PORT = process.env.PORT || 3000;

// Available styles
const styles = {
  neon: "https://textpro.me/neon-text-effect-online-879.html",
  glitch: "https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html",
  space: "https://textpro.me/create-space-3d-text-effect-online-985.html",
  fire: "https://textpro.me/hot-fire-text-effect-online-921.html",
  ice: "https://textpro.me/ice-cold-text-effect-862.html",
  graffiti: "https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html",
  thunder: "https://textpro.me/online-thunder-text-effect-generator-1031.html",
  matrix: "https://textpro.me/matrix-style-text-effect-online-884.html",
  calligraphy: "https://textpro.me/calligraphy-text-effect-3d-online-1046.html" // ✅ Added
};

// Root route
app.get("/", (req, res) => {
  res.send("✅ Logo API Running! Example: /logo?text=Hello&style=neon OR /logo?text=Hello&style=random");
});

// Logo route
app.get("/logo", async (req, res) => {
  let { text, style } = req.query;

  if (!text) return res.status(400).json({ error: "❌ Missing text parameter!" });

  // random style
  if (!style || style.toLowerCase() === "random") {
    const keys = Object.keys(styles);
    style = keys[Math.floor(Math.random() * keys.length)];
  }

  const url = styles[style.toLowerCase()];
  if (!url) {
    return res.status(400).json({
      error: "❌ Invalid style! Available: " + Object.keys(styles).join(", ")
    });
  }

  try {
    const result = await textpro(url, [text]);
    res.json({
      status: true,
      text,
      style,
      result
    });
  } catch (err) {
    console.error("API Error:", err);
    res.status(500).json({ error: "❌ Error while generating logo!" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Logo API running on port ${PORT}`);
});    res.json({
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
