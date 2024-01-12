export default function RecipeChooseForm() {
  return (
    <>
      <div className="flex flex-col text-center justify-center rounded-2xl bg-orange-400 border-black border-4 mx-10 w-80 h-80">
        <h2>I&apos;m hungry for:</h2>
        <form className="flex flex-col items-center">
          <label className="m-2">
            <input
              type="text"
              className="rounded-full border-black border-2"
            ></input>
          </label>
          <label className="m2">
            <input
              type="text"
              className="rounded-full border-black border-2"
            ></input>
          </label>
          <input
            type="submit"
            className="m-2 rounded-full w-20 border-black border-2"
          ></input>
        </form>
      </div>
    </>
  );
}
