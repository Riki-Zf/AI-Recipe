import React, { useState } from "react";
import { fetchRecipe } from "../../api";
import ReactMarkdown from "react-markdown";

const RecipeInput = () => {
  const [ingredients, setIngredients] = useState([]);
  const [difficulty, setDifficulty] = useState("");
  const [mealType, setMealType] = useState("");
  const [recipe, setRecipe] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const levels = ["easy", "medium", "hard"];

  const handleGenerata = async () => {
    try {
      setIsLoading(true);
      setRecipe(""); // Clear previous results while loading
      const result = await fetchRecipe(ingredients, difficulty, mealType);
      setRecipe(result);
    } catch (error) {
      console.error("Error fetching recipe:", error);
      setRecipe("Terjadi kesalahan saat mencari resep. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center w-full px-4">
      <div className="flex flex-col w-full max-w-4xl gap-6 p-4 md:p-6 lg:p-8">
        {/* Ingredients Input */}
        <div className="w-full">
          <div className="label-text text-base md:text-lg mb-2">Masukkan bahan-bahan disini</div>
          <textarea placeholder="contoh : garam, telur, kecap" className="textarea textarea-bordered textarea-md w-full h-24 md:h-32" onChange={(e) => setIngredients(e.target.value.split(","))}></textarea>
        </div>

        {/* Difficulty Level Selection */}
        <div className="w-full">
          <div className="label-text text-base md:text-lg mb-2">Pilih Level Masakan</div>
          <div className="flex flex-col sm:flex-row gap-2">
            {levels.map((level) => (
              <div key={level} className="form-control flex-1">
                <label className="label cursor-pointer justify-between px-4 py-2  rounded-md ">
                  <span className="label-text mr-4">{level.charAt(0).toUpperCase() + level.slice(1)}</span>
                  <input type="radio" name="difficulty" value={level} className="radio checked:bg-blue-500" checked={difficulty === level} onChange={(e) => setDifficulty(e.target.value)} />
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Meal Type Selection */}
        <div className="w-full">
          <select className="select select-bordered w-full" onChange={(e) => setMealType(e.target.value)}>
            <option disabled selected>
              mau makan untuk apa?
            </option>
            <option>sarapan</option>
            <option>makan siang</option>
            <option>makan malam</option>
            <option>cemilan</option>
          </select>
        </div>

        {/* Generate Button */}
        <div className="w-full">
          <button className="btn btn-primary w-full sm:w-auto" onClick={handleGenerata}>
            cari resep
          </button>
        </div>

        {/* Recipe Result with Loading State */}
        <div className="w-full">
          <div className="label-text text-base md:text-lg mb-2">Hasil :</div>
          <div className=" p-4 rounded-lg min-h-24 overflow-x-auto">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-8">
                <div className="loading loading-spinner loading-lg text-primary mb-4"></div>
                <p className="text-gray-600">Sedang mencari resep yang cocok...</p>
              </div>
            ) : (
              <div className="recipe-content prose prose-sm md:prose lg:prose-lg max-w-none">{recipe ? <ReactMarkdown>{recipe}</ReactMarkdown> : ""}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeInput;
