export default function ClickButton() {
  const clickHandler = () => {
    alert("Button has been clicked!!");
  };

  return (
    <div>
      <button onClick={clickHandler}>Click me!!</button>
      <button
        onClick={function handleClick() {
          alert("Online Button has been click!!");
        }}
      >
        Click me Inline!!
      </button>

      <button
        onClick={() => {
          alert("Arrow function Button has been click!!");
        }}
      >
        Click me arrow function
      </button>
    </div>
  );
}
