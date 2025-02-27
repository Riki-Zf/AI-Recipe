require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
exports.generateRecipe = async (req, res) => {
  try {
    const { ingredients, difficulty, mealType } = req.body;
    if (!ingredients || !difficulty || !mealType) {
      return res.status(400).json({ error: "isi semua form" });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const prompt = `
    Buatlah resep ${difficulty} untuk ${mealType}. Resep tersebut harus menggunakan bahan-bahan berikut: ${ingredients.join(
      ", "
    )}. jangan tambahkan bahan lain hanya gunakan bahan yg disebutkan, Berikan deskripsi singkat, dan instruksi langkah demi langkah
    `;
    const result = await model.generateContent(prompt);
    const response = result.response.text();

    res.json({ recipe: response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
