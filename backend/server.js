require("dotenv").config();
const express = require("express");
const cors = require("cors");
const recipeRoutes = require("./routes/recipeRoutes");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

//routes
app.use("/api/recipes", recipeRoutes);

app.listen(port, () => {
  console.log(`hello world using port ${port} yap`);
});
