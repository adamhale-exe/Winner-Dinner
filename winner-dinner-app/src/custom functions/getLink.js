import { URL } from "../backendURL";

export default async function getLink(input) {
  try {
    const res = await fetch(`${URL}/link/${input}`);

    if (!res.ok) {
      throw new Error(`Something went wrong, status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
