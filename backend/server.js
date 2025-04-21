const express = require('express');
const ipoRoutes= require('./routes/ipoRoutes')
const stockRoutes= require('./routes/stockRoutes')
const app = express();
const axios=require('axios');
const cors= require('cors')

app.use(cors());


const PORT = 5000;


// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Stock API!');
});


app.get('/test', async (req, res) => {
    const url = 'https://api.github.com';
    try {
      const result = await axios.get(url);
      res.json(result.data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  app.use('', ipoRoutes);
  app.use('', stockRoutes);


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});