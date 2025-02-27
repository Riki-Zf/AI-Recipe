const express = require("express");
const { generateRecipe } = require("../controller/recipeController.js");

const router = express.Router();

router.post("/", generateRecipe);

module.exports = router;
