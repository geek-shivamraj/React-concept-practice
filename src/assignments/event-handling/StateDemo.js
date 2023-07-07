
import { sculptureList } from "./StateData";
import { useState } from "react";

export default function StateDemo() {
  const [index, setIndex] = useState(0);
  const clickHandler = () => {
    setIndex(index + 1);
  };

  //let index = 0;
  // const clickHandler = () => {
  //   index += 1;
  // };
  let sculpture = sculptureList[index];
  return (
    <div>
      <button onClick={clickHandler}>Next</button>
      <h2>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
    </div>
  );
}


