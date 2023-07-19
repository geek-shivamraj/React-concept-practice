import { useState } from "react";

export default function SyncedInputs() {
  const [text, setText] = useState("");
  const handleInputChange = (event) => {
    setText(event.target.value);
    //console.log(event.target.value);
  };
  return (
    <>
      <h2>State Lifting up example</h2>
      <Input
        label="First input"
        handleChange={handleInputChange}
        inputValue={text}
      />
      <br /> <br />
      <Input
        label="Second input"
        handleChange={handleInputChange}
        inputValue={text}
      />
    </>
  );
}

function Input({ label, handleChange, inputValue }) {
  return (
    <label>
      {label} <input value={inputValue} onChange={handleChange} />
    </label>
  );
}
