import { URL } from "../backendURL";

export default async function getTotalRecipes() {
  try {
    const res = await fetch(`${URL}/recipes/`);

    if (!res.ok) {
      throw new Error(`Something went wrong, status: ${res.status}`);
    }

    const data = await res.json();
    return data.payload.length;
  } catch (error) {
    console.log(error);
  }
}
