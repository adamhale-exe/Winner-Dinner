import getRecipe from "../customHooks/getRecipe";

export default function RandomRecipe({ recipeChosenHandler, totalRecipes }) {
  async function clickHandler() {
    const randomID = Math.ceil(Math.random() * totalRecipes);
    const data = await getRecipe(randomID);
    console.log(data);
    recipeChosenHandler(data.payload);
  }
  return (
    <>
      <button
        className="text-center text-2xl rounded-2xl bg-orange-400 border-black border-4 p-4 shadow-block hover:shadow-blockhover m-auto"
        onClick={clickHandler}
      >
        Choose a random recipe!
      </button>
    </>
  );
}
