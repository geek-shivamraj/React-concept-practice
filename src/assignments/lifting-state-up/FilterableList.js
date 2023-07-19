import { useState } from "react";
import { foods, filterItems } from "./data.js";

export default function FilterableList() {
  const [query, setQuery] = useState("D");
const results = filterItems(foods, query);
  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };
  return (
    <>
      <SearchBar searchParam={query} handleChange={handleQueryChange}/>
      <hr />
      <List items={results} />
    </>
  );
}

function SearchBar({searchParam, handleChange}) {
  return (
    <label>
      Search: <input value={searchParam} onChange={handleChange} />
    </label>
  );
}

function List({ items }) {
  return (
    <table>
      <tbody>
        {items.map((food) => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
