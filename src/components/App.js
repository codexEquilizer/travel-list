import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
/* const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: false },
]; */

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(newItem) {
    setItems((items) => [...items, newItem]); //Instead of pushing the new item to the existing array we have made a copy of that item. We do this to avoid mutation which is a major 'No' in react.
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handlePackedItem(id) {
    // using map prop to make sure we are not mutating the original array
    setItems((items) =>
      items.map((item) => {
        return item.id === id ? { ...item, packed: !item.packed } : item;
      })
    );
  }

  function handleClearItems() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all Items?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onHandlePackedItem={handlePackedItem}
        onClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
