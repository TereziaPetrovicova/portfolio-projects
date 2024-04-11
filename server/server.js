// server/server.js
import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());
const port = 3001; // Port where your server will be listening

app.get("/weather", async (req, res) => {
  const { location } = req.query;
  const apiKey = process.env.WEATHER_API_KEY; // Make sure to set this in your server/.env file
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    location
  )}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const weatherData = await response.json();
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
