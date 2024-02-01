import "material-symbols";

export default function RecipeCard({ currentRecipe, recipeChosenFalse }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col text-center justify-center items-center rounded-2xl bg-orange-400 border-black border-4 min-w-80 min-h-60 text-xl p-3 shadow-blockhover">
        <h2 className="text-2xl pb-2">You should cook:</h2>
        <h2 className="flex flex-row justify-center items-center">
          <span className="material-symbols-rounded">local_dining</span>
          {currentRecipe.name}
          <span className="material-symbols-rounded">local_dining</span>
        </h2>
        <div className="flex flex-row text-center items-center m-2">
          <div className="flex flex-col text-center justify-center items-center mr-3 p-2 bg-slate-100 rounded-2xl border-black border-4 min-h-28 min-w-24">
            <span className="material-symbols-rounded self-center">timer</span>
            <h3 className="flex flex-row text-center justify-center items-center">
              {currentRecipe.time}
            </h3>
          </div>
          <div className="flex flex-col text-center justify-center items-center ml-3 p-2 bg-slate-100 rounded-2xl border-black border-4 min-h-28 min-w-24">
            <span className="material-symbols-rounded self-center">
              Kitchen
            </span>
            <h3>{(currentRecipe.carb = "None" ? null : currentRecipe.carb)}</h3>
            <h3>
              {(currentRecipe.protein = "None" ? null : currentRecipe.protein)}
            </h3>
          </div>
        </div>

        <button className="bg-slate-400 p-3 m-4 rounded-2xl border-black border-4 shadow-block hover:shadow-blockhover">
          <a href={currentRecipe.url} rel="noreferrer" target="_blank">
            Recipe link
          </a>
        </button>
      </div>
      <button
        className="flex flex-col text-center justify-center items-center rounded-2xl bg-orange-400 border-black border-4 mt-4 min-h-8 text-2xl p-3 shadow-block hover:shadow-blockhover"
        onClick={recipeChosenFalse}
      >
        Back
      </button>
    </div>
  );
}
