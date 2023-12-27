export default function RecipeCard({ currentRecipe, recipeChosenFalse }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col text-center justify-center rounded-2xl bg-white border-black border-4 min-w-80 min-h-80">
        <h2>{currentRecipe.name}</h2>
        <h3>Length: {currentRecipe.time}</h3>
        <h3>Carb family: {currentRecipe.carb.payload.carb} </h3>
        <h3>Protien family: {currentRecipe.protein.payload.protein}</h3>
        <h3 className="p-3">
          <a
            href={currentRecipe.link.payload.url}
            rel="noreferrer"
            target="_blank"
          >
            Recipe link
          </a>
        </h3>
      </div>
      <div
        className="flex flex-col text-center justify-center rounded-2xl bg-white border-black border-4 w-20 mt-4 min-h-8"
        onClick={recipeChosenFalse}
      >
        <h2>Back</h2>
      </div>
    </div>
  );
}
