export default function TagButton({ data }) {
  return (
    <li>
      <button className="text-lg bg-white border-2 border-black rounded-full px-2 m-1">{data}</button>
    </li>
  );
}
