import React from "react";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import RecipePage from "./pages/RecipePage.jsx";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/recipe" element={<RecipePage />}></Route>
      </Routes>
    </>
  );
};

export default App;
