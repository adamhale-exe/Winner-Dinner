export default function RecipeCard({ currentRecipe }) {
  return (
    <>
      <div>
        <h2>{currentRecipe.name}</h2>
        <h3>Length: {currentRecipe.time}</h3>
      </div>
    </>
  );
}
