import { useState, useEffect } from "react";
import TagButton from "./TagButton";
import getRecipeByTag from "../customHooks/getRecipeByTag";
import getRecipe from "../customHooks/getRecipe";
import getTags from "../customHooks/getTags";

export default function RecipeChooseForm({ recipeChosenHandler }) {
  let [searchCritera, setSearchCriteria] = useState([]);
  let [tagArr, setTagArr] = useState([]);
  function addItem(itemName) {
    setSearchCriteria([...searchCritera, itemName]);
  }
  function removeItem(itemName) {
    const filteredList = searchCritera.filter((i) => i !== itemName);
    setSearchCriteria(filteredList);
  }
  async function clickHandler(tagArr) {
    const output = await getRecipeByTag(tagArr);
    const totalMatches = output.payload[0].tag_count;
    const filteredOutput = output.payload.filter(
      (i) => i.tag_count === totalMatches
    );
    console.log(filteredOutput);
    const randomID = Math.floor(Math.random() * filteredOutput.length);
    const data = await getRecipe(filteredOutput[randomID].recipes);
    recipeChosenHandler(data.payload);
  }
  useEffect(() => {
    const fetchData = async () => {
      const returnTagArr = await getTags();
      setTagArr(returnTagArr);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="flex flex-col text-center justify-evenly rounded-2xl shadow-block bg-orange-400 border-black border-4 mx-10 w-80 h-80 mt-4">
        <h2 className="text-2xl mb-2">I&apos;m hungry for...</h2>
        {/* dynamically create a list of buttons.
         these buttons are tags from the database that can be used to filter recipes on submit*/}
        <ul className="flex flex-wrap justify-center">
          {/* I need to fetch an array of popular options
             iterate through the array with a .map to create the button element for each*/}
          {tagArr.map((i) => (
            <TagButton
              key={i.id}
              data={i.name}
              addItem={addItem}
              removeItem={removeItem}
            />
          ))}
          {/* button has state, pressed, not pressed.
               List the pressed buttons/selected options with the ability to remove them*/}
        </ul>
        {/* submit button to search for things matching those criteria  */}
        <button
          className="bg-slate-400 text-xl p-3 m-4 rounded-2xl border-black border-4 shadow-block hover:shadow-blockhover"
          onClick={() => clickHandler(searchCritera)}
        >
          Search!
        </button>
      </div>
    </>
  );
}
