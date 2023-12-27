export default function RecipeCard({ currentRecipe }) {
  return (
    <>
      <div className="flex flex-col text-center justify-center rounded-2xl bg-white border-black border-4 mx-10 min-w-80 min-h-80">
        <h2>{currentRecipe.name}</h2>
        <h3>Length: {currentRecipe.time}</h3>
        <h3>Carb family: {currentRecipe.carb.payload.carb} </h3>
        <h3>Protien family: {currentRecipe.protein.payload.protein}</h3>
        <h3>Recipe link: {currentRecipe.link.payload.url}</h3>
      </div>
    </>
  );
}
