export const fetchRecipe = async (ingredients, difficulty, mealType) => {
  try {
    const response = await fetch("http://localhost:3000/api/recipes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ingredients, difficulty, mealType }),
    });

    const data = await response.json();
    return data.recipe;
  } catch (error) {
    console.error("Error fetching recipe:", error);
    return null;
  }
};
