import { useState } from "react";
import "./App.css";
import RandomRecipe from "./components/RandomRecipe.jsx";
import RecipeCard from "./components/RecipeCard.jsx";
import RecipeChooseForm from "./components/RecipeChooseForm.jsx";
import getTotalRecipes from "./customHooks/getTotalRecipes.js";

const totalRecipeCount = await getTotalRecipes();

export default function App() {
  let [recipeChosen, setRecipeChosen] = useState(false);
  let [currentRecipe, setCurrentRecipe] = useState({ name: "food" });
  function recipeChosenHandler(data) {
    setCurrentRecipe(data);
    setRecipeChosen(true);
    console.log(currentRecipe);
  }
  function recipeChosenFalse() {
    setRecipeChosen(false);
  }

  return (
    <main className="text-black">
      <div>
        <h1 className="text-5xl flex justify-center mt-6">Winner Dinner</h1>
      </div>
      <div className="flex flex-col items-center py-16">
        {recipeChosen ? null : (
          <RandomRecipe
            recipeChosenHandler={recipeChosenHandler}
            totalRecipes={totalRecipeCount}
          />
        )}
        {recipeChosen ? (
          <RecipeCard
            currentRecipe={currentRecipe}
            recipeChosenFalse={recipeChosenFalse}
          />
        ) : null}
        <RecipeChooseForm />
      </div>
    </main>
  );
}
