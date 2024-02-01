import { URL } from "../backendURL";

export default async function getRecipeByTag(input) {
  let fetchURL = `${URL}/recipestags/tagid?`;
  for (let i = 0; i < input.length; i++) {
    fetchURL += `tag[]=${input[i]}&`;
  }
  try {
    const res = await fetch(fetchURL);

    if (!res.ok) {
      throw new Error(`Something went wrong, status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
