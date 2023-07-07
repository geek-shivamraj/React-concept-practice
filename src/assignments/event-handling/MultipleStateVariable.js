import { useState } from "react";
import { sculptureList } from "./StateData";

export default function MultipleStateVariable() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const prevHandler = () => {
    index === 0 ? setIndex(sculptureList.length - 1) : setIndex(index - 1);
  };

  const nextHandler = () => {
    index === sculptureList.length - 1 ? setIndex(0) : setIndex(index + 1);
  };

  const showMoreHandler = () => {
    setShowMore(!showMore);
  };

  let sculpture = sculptureList[index];
  return (
    <div>
      <button onClick={prevHandler}>Previous</button>
      <button onClick={nextHandler}>Next</button>
      <h2>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={showMoreHandler}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <br />
      <br />
      <img src={sculpture.url} alt={sculpture.alt} />
    </div>
  );
}
