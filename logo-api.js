// logo-api.js
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

// Simple Logo API using FlamingText
app.get('/logo', async (req, res) => {
  const text = req.query.text || 'MyLogo';
  const style = req.query.style || 'neon';

  try {
    const apiUrl = `https://flamingtext.com/net-fu/proxy_form.cgi?script=${style}&text=${encodeURIComponent(text)}&fontsize=60`;
    const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });

    res.set('Content-Type', 'image/png');
    res.send(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Logo generation failed' });
  }
});

app.listen(PORT, () => console.log(`✅ Logo API running at http://localhost:${PORT}`));
