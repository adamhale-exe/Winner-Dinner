import { useState, useEffect } from "react";
import "./App.css";
import RandomRecipe from "./components/RandomRecipe.jsx";
import RecipeCard from "./components/RecipeCard.jsx";
import RecipeChooseForm from "./components/RecipeChooseForm.jsx";
import getTotalRecipes from "./customHooks/getTotalRecipes.js";

export default function App() {
  let [recipeChosen, setRecipeChosen] = useState(false);
  let [currentRecipe, setCurrentRecipe] = useState({ name: "food" });
  let [totalRecipeCount, setTotalRecipeCount] = useState(0);
  function recipeChosenHandler(data) {
    setCurrentRecipe(data);
    setRecipeChosen(true);
  }
  function recipeChosenFalse() {
    setRecipeChosen(false);
  }
  useEffect(() => {
    const fetchData = async () => {
      const returnRecipeCount = await getTotalRecipes();
      setTotalRecipeCount(returnRecipeCount);
    };
    fetchData();
  }, []);
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
        {recipeChosen ? null : (
          <RecipeChooseForm recipeChosenHandler={recipeChosenHandler} />
        )}
      </div>
    </main>
  );
}
