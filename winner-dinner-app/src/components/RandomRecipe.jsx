import getRecipe from "../custom functions/getRecipe";
import getCarb from "../custom functions/getCarb";
import getProtein from "../custom functions/getProtien";
import getLink from "../custom functions/getLink";

export default function RandomRecipe({ recipeChosenHandler }) {
  async function clickHandler() {
    const randomID = Math.ceil(Math.random() * 4);
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
        className="flex flex-col text-center text-2xl justify-center rounded-2xl bg-orange-400 border-black border-4 mx-10 p-4 shadow-block hover:shadow-blockhover"
        onClick={clickHandler}
      >
        Choose a random recipe!
      </button>
    </>
  );
}
