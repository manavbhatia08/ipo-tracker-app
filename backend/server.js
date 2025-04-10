const express = require('express');

const app = express();
const PORT = 5000;

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the IPO Tracker App Backend!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});