import getRecipe from "../customHooks/getRecipe";
import getCarb from "../customHooks/getCarb";
import getProtein from "../customHooks/getProtien";
import getLink from "../customHooks/getLink";

export default function RandomRecipe({ recipeChosenHandler, totalRecipes }) {
  async function clickHandler() {
    const randomID = Math.ceil(Math.random() * totalRecipes);
    const data = await getRecipe(randomID);
    console.log(data);
    data.payload.carb = await getCarb(data.payload.carbs_type);
    data.payload.protein = await getProtein(data.payload.protein_type);
    data.payload.link = await getLink(data.payload.recipe_link);
    recipeChosenHandler(data.payload);
  }
  return (
    <>
      <button
        className="text-center text-2xl rounded-2xl bg-orange-400 border-black border-4 p-4 shadow-block hover:shadow-blockhover m-auto mb-4"
        onClick={clickHandler}
      >
        Choose a random recipe!
      </button>
    </>
  );
}
