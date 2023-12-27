import { useState } from "react";
import "./App.css";
import RandomRecipe from "./RandomRecipe.jsx";
import RecipeCard from "./RecipeCard.js";
import RecipeChooseForm from "./RecipeChooseForm.jsx";

export default function App() {
  let [recipeChosen, setRecipeChosen] = useState(false);
  let [currentRecipe, setCurrentRecipe] = useState({ name: "food" });
  function recipeChosenHandler(data) {
    setCurrentRecipe(data);
    setRecipeChosen(true);
    console.log(currentRecipe);
  }
  return (
    <main className="text-black">
      <div className="flex justify-center py-16">
        {recipeChosen ? null : (
          <RandomRecipe recipeChosenHandler={recipeChosenHandler} />
        )}
        {recipeChosen ? <RecipeCard currentRecipe={currentRecipe} /> : null}
        {/* <RecipeChooseForm /> */}
      </div>
    </main>
  );
}
