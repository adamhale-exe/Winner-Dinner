import getRecipe from "./custom functions/getRecipe";

export default function RandomRecipe({ recipeChosenHandler }) {
  async function clickHandler() {
    const randomID = Math.ceil(Math.random() * 4);
    const data = await getRecipe(randomID);
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
