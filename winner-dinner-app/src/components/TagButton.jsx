import { useState } from "react";

export default function TagButton({ data, addItem, removeItem }) {
  let [selected, setSelected] = useState(false);
  function clickHandler() {
    if (selected) {
      removeItem(data);
    } else {
      addItem(data);
    }
    setSelected(!selected);
  }
  const classUnclicked =
    "text-lg bg-white border-2 border-black rounded-full px-2 m-1";
  const classClicked =
    "text-lg text-white bg-emerald-600 border-2 border-black rounded-full px-2 m-1";
  return (
    <li>
      <button
        className={selected ? classClicked : classUnclicked}
        onClick={clickHandler}
      >
        {data}
      </button>
    </li>
  );
}
