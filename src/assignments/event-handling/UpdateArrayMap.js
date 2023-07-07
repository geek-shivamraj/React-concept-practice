
import { useState } from "react";

let nextId = 0;

export default function UpdateArray() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);

  const clickHandler = () => {
    setArtists([...artists, { id: nextId++, name: name }]);
  };

  return (
    <div>
      <h1>Inspiring sculptors:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />

      <button onClick={clickHandler}>Add</button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </div>
  );
}


