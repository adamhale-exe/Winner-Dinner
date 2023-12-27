const url = "http://localhost:5000/recipes/";

export default async function getRecipe(input) {
  try {
    const res = await fetch(`${url}${input}`);

    if (!res.ok) {
      throw new Error(`Something went wrong, status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
