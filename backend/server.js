//
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const recipeRoutes = require("./routes/recipeRoutes");

const app = express();

// Middleware
app.use(
  cors({
    // Mengizinkan akses dari frontend Anda
    origin: ["https://ai-recipe-oojp.vercel.app", "http://localhost:5173"],

    // HTTP methods yang diizinkan
    methods: ["GET", "POST", "PUT", "DELETE"],

    // Headers yang diizinkan dalam request
    allowedHeaders: ["Content-Type", "Authorization"],

    // Mengizinkan cookies dan credentials dalam request
    credentials: true,
  })
);
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Recipe API is running!" });
});

// Routes
app.use("/api/recipes", recipeRoutes);

// Menangani 404
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Untuk development lokal
if (process.env.NODE_ENV !== "production") {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

// Export app untuk Vercel
module.exports = app;
