import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./config/connectionDB.js";

dotenv.config();

/* =====================
   INIT APP
===================== */
const app = express();
app.use(cors());
app.use(express.json());

/* =====================
   STATIC IMAGES
===================== */
app.use("/images", express.static("images"));

/* =====================
   CONNECT DATABASE
===================== */
connectDB();

/* =====================
   DOG SCHEMA & MODEL
===================== */
const dogSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    origin: String,
    life_span: String,
    temperament: String,
    image: String
  },
  {
    collection: "dogs",
    timestamps: true
  }
);

const Dog = mongoose.model("profile-dog", dogSchema);

/* =====================
   ROUTES
===================== */

// 🐕 GET ALL DOGS
app.get("/api/dogs", async (req, res) => {
  try {
    const dogs = await Dog.find();
    res.json(dogs);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch dogs" });
  }
});

// 🔍 SEARCH DOG BY NAME
app.get("/api/dogs/search", async (req, res) => {
  try {
    const { q } = req.query;

    const dogs = await Dog.find({
      name: { $regex: q || "", $options: "i" }
    });

    res.json(dogs);
  } catch (err) {
    res.status(500).json({ error: "Search failed" });
  }
});

// 🐶 GET DOG BY ID
app.get("/api/dogs/:id", async (req, res) => {
  try {
    const dog = await Dog.findById(req.params.id);

    if (!dog) {
      return res.status(404).json({ error: "Dog not found" });
    }

    res.json(dog);
  } catch (err) {
    res.status(400).json({ error: "Invalid dog ID" });
  }
});


/* =====================
   START SERVER
===================== */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
