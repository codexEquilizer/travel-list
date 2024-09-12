export default function Stats({ items }) {
  if (items.length === 0)
    return (
      <footer className="stats">
        <em>Start adding items to your list</em>
      </footer>
    );

  const numItem = items.length;
  const packedItems = items.filter((item) => item.packed === true).length;
  const percentCalc = Math.round((packedItems / numItem) * 100);

  return (
    <footer className="stats">
      <em>
        {percentCalc === 100
          ? "You got everything! Ready to go... 🌍✈️"
          : `👜You have ${numItem} items in your list and you already packed ${packedItems} (${percentCalc}%)`}
      </em>
    </footer>
  );
}
