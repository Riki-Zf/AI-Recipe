require("dotenv").config();
const express = require("express");
const cors = require("cors");
const recipeRoutes = require("./routes/recipeRoutes");

const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: "https://ai-recipe-fe.vercel.app/", // Ganti dengan domain frontend kamu
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running on Vercel!");
});

//routes
app.use("/api/recipes", recipeRoutes);

app.listen(port, () => {
  console.log(`hello world using port ${port} yap`);
});

// Pastikan menggunakan export handler
module.exports = app;
