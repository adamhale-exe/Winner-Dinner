import { URL } from "../backendURL";

export default async function getTags() {
  try {
    const res = await fetch(`${URL}/tags/`);

    if (!res.ok) {
      throw new Error(`Something went wrong, status: ${res.status}`);
    }

    const data = await res.json();
    return data.payload;
  } catch (error) {
    console.log(error);
  }
}
