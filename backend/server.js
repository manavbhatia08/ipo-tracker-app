const express = require('express');
const axios=require('axios');
require('dotenv').config();

const app = express();
// Add this at top of your file
console.log("🚀 Server star", new Date());


const finhub_api_key = process.env.FINHUB_API_KEY;
const finhub_base_url = 'https://finnhub.io/api/v1';
const PORT = 5000;
console.log('FIN', finhub_api_key);

// Routes
app.get('/', (req, res) => {
    res.send('We');
});

app.get('/api/ipos', async (req, res) => {
    try {
        const response = await axios.get(`${finhub_base_url}/calendar/ipo?token=${finhub_api_key}`);

        res.json(response.data);
    } catch (error) {
        console.error('Erro:', error);
        res.status(500).json({ error: 'Failed to fetch IPO data' });
    }
})
app.get('/test', async (req, res) => {
    const url = 'https://api.github.com';
    try {
      const result = await axios.get(url);
      res.json(result.data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});