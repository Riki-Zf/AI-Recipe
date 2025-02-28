// export const fetchRecipe = async (ingredients, difficulty, mealType) => {
//   try {
//     const response = await fetch("http://localhost:3000/api/recipes" || "https://ai-recipe-oojp.vercel.app/api/recipes", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ ingredients, difficulty, mealType }),
//     });

//     const data = await response.json();
//     return data.recipe;
//   } catch (error) {
//     console.error("Error fetching recipe:", error);
//     return null;
//   }
// };

export const fetchRecipe = async (ingredients, difficulty, mealType) => {
  // Deteksi apakah berjalan di localhost atau produksi
  const isLocalhost = typeof window !== "undefined" && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");

  const API_URL = isLocalhost ? "http://localhost:3000" : "https://ai-recipe-oojp.vercel.app";

  try {
    const response = await fetch(`${API_URL}/api/recipes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ingredients, difficulty, mealType }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`API Error (${response.status}):`, errorText);
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();
    return data.recipe;
  } catch (error) {
    console.error("Error fetching recipe:", error);
    throw error;
  }
};
