import Image from "next/image";
import RandomRecipe from "./RandomRecipe";
import RecipeChooseForm from "./RecipeChooseForm";

export default function Home() {
  return (
    <main className="text-black">
      <div className="flex justify-center py-16">
        <RandomRecipe />
        <RecipeChooseForm />
      </div>
    </main>
  );
}
