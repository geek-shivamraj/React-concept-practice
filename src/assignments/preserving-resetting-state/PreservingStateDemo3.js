import { useState } from "react";
import './PreservingStateDemo3.css';

export default function PreservingStateDemo3() {
  const [isFancy, setIsFancy] = useState(false);
  return (
    <div>
      
      {/* Same Component at the same position preserves state */}
      {isFancy ? <Counter isFancy={true} /> : <Counter isFancy={false} />}
      
      {/* Resetting state at the same position */}
      {isFancy ? <Counter isFancy={true} /> : <div><Counter isFancy={false} /></div>}

      {/* Different components at the same position reset state */}
      {isFancy ? <Counter isFancy={true} /> : <p>See you later!</p>}


      <label>
        <input
          type="checkbox"
          checked={isFancy}
          onChange={(e) => {
            setIsFancy(e.target.checked);
          }}
        />
        Use fancy styling
      </label>
    </div>
  );
}

function Counter({ isFancy }) {
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(false);

    let className = 'counter';
    if(hover) {
        className += ' hover';
    }

    if(isFancy) {
        className += ' fancy';
    }

    return (
        <div className={className} 
        onPointerEnter={() => setHover(true)} 
        onPointerLeave={() => setHover(false)}>
            <h1>{score}</h1>
            <button onClick={() => setScore(score + 1)}>Add one</button>
        </div>
    );
}
