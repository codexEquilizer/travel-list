import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmitEvent(e) {
    e.preventDefault();

    if (description === "") return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  /* JSX */
  return (
    <form className="add-form" onSubmit={handleSubmitEvent}>
      <h3>What do you need for this trip?✈️</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Items..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        // the above technique is called Controlled Element technique where we are handling the state form DOM to React
      />
      <button>Add</button>
    </form>
  );
}
