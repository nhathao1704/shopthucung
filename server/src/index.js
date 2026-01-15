import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());

const BASE_URL = "https://api.thedogapi.com/v1";
const headers = {
  "x-api-key": process.env.DOG_API_KEY
};

// 🔍 Search dog by name
app.get("/api/dogs/search", async (req, res) => {
  const { q } = req.query;

  try {
    const response = await fetch(
      `${BASE_URL}/breeds/search?q=${q}`,
      { headers }
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch dogs" });
  }
});

// 🖼 Get dog image by breed id
app.get("/api/dogs/image/:id", async (req, res) => {
  try {
    const response = await fetch(
      `${BASE_URL}/images/search?breed_id=${req.params.id}`,
      { headers }
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch image" });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Backend running on port ${process.env.PORT}`);
});
