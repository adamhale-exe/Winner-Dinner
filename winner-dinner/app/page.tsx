import Image from "next/image";

export default function Home() {
  return (
    <main className="text-black">
      <div className="flex justify-center my-16">
        <h1 className="text-5xl">Winner Dinner</h1>
      </div>
      <div className="flex justify-center py-16">
        <div className="flex flex-col text-center justify-center rounded-2xl bg-white border-black border-4 mx-10 w-80 h-80">
          <h2>Choose a random recipe!</h2>
        </div>
        <div className="flex flex-col text-center justify-center rounded-2xl bg-white border-black border-4 mx-10 w-80 h-80">
          <h2>I&apos;m hungry for:</h2>
          <form className="flex flex-col items-center">
            <label className="m-2">
              <input
                type="text"
                className="rounded-xl border-black border-2"
              ></input>
            </label>
            <label className="m2">
              <input
                type="text"
                className="rounded-xl border-black border-2"
              ></input>
            </label>
            <input
              type="submit"
              className="m-2 rounded-xl w-20 border-black border-2"
            ></input>
          </form>
        </div>
      </div>
    </main>
  );
}
