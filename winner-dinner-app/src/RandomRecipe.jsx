import getRecipe from "./custom functions/getRecipe";
import getCarb from "./custom functions/getCarb";
import getProtein from "./custom functions/getProtien";
import getLink from "./custom functions/getLink";

export default function RandomRecipe({ recipeChosenHandler }) {
  async function clickHandler() {
    const randomID = Math.ceil(Math.random() * 4);
    const data = Promise(await getRecipe(randomID));
    console.log(data);
    data.payload.carb = await getCarb(data.payload.carbs_type);
    data.payload.protein = await getProtein(data.payload.protein_type);
    data.payload.link = await getLink(data.payload.recipe_link);
    recipeChosenHandler(data.payload);
    
  }
  return (
    <>
      <div
        className="flex flex-col text-center justify-center rounded-2xl bg-white border-black border-4 mx-10 w-80 h-80"
        onClick={clickHandler}
      >
        <h2>Choose a random recipe!</h2>
      </div>
    </>
  );
}
