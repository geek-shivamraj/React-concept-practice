import { useState } from "react";

const initialItems = [
  { title: "pretzels", id: 0 },
  { title: "crispy seaweed", id: 1 },
  { title: "granola bar", id: 2 },
];

export default function PrincipleAvoidDuplicate1() {
  const [items, setItems] = useState(initialItems);
  const [selectedId, setSelectedId] = useState(0);

  const selectedItem = items.find(item => item.id == selectedId);

  const chooseHandler = (event) => {
    console.log(event.target.value);
    setSelectedId(event.target.value);
  }

  const handleItemChange = (id, e) => {
    console.log(e.target.value);
    setItems(items.map(item => {
      if(item.id === id) {
        return ({
          ...item,
          title: e.target.value
        });
      } else {
        return item;
      }
    }))
  }

  return (
    <div>
      <h2>What's your travel snack?</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input value={item.title} onChange={e => {
              handleItemChange(item.id, e)
            }}
            />
            {' '} 
            <button onClick={chooseHandler} value={item.id}>Choose</button>
          </li>
        ))}
      </ul>
      <p>You picked {selectedItem.title}</p>
    </div>
  );
}
