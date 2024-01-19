import TagButton from "./TagButton";

const tagArr = [
  "Quick", "Mexican", "Chips", "Chinese", "Pasta", "Cheesy", "Steak", "Broth"
]

export default function RecipeChooseForm() {
  return (
    <>
      <div className="flex flex-col text-center justify-center rounded-2xl bg-orange-400 border-black border-4 mx-10 w-80 h-80">
        <h2>I&apos;m hungry for...</h2>
        {/* dynamically create a list of buttons.
         these buttons are tags from the database that can be used to filter recipes on submit*/}
          <ul>
          {tagArr.map(i => <TagButton tag={i} />)}
          </ul>
        {/*
         I need to fetch an array of popular options
         iterate through the array with a .map to create the button element for each
         button has state, pressed, not pressed.

         List the pressed buttons/selected options with the ability to remove them

         submit button to search for things matching those criteria
           */}
      </div>
    </>
  );
}
