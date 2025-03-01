import React from "react";
import RecipeInput from "../components/RecipeInput";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const RecipePage = () => {
  return (
    <div>
      <Navbar />
      <RecipeInput />
      <Footer />
    </div>
  );
};

export default RecipePage;
