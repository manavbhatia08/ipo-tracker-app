const express = require("express");
const ipoRoutes = require("./routes/ipoRoutes");
const stockRoutes = require("./routes/stockRoutes");
const authRoutes = require("./routes/authroutes");
const app = express();
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
app.use(express.json());

// Replace with your own connection string
const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected ✅");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    // Optional: You can throw the error to stop the app or handle it further
    process.exit(1); // Exits the process if connection fails
  }
};

// Call the connect function
connectDB();

app.use(cors());

const PORT = 5000;

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Stock API!");
});

app.get("/test", async (req, res) => {
  const url = "https://api.github.com";
  try {
    const result = await axios.get(url);
    res.json(result.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.use("", ipoRoutes);
app.use("", stockRoutes);
app.use("", authRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
