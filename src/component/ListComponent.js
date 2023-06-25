import React, { useState } from "react";

const CheckboxList = () => {
  const [items, setItems] = useState([
    { id: 1, text: "Item 1", isChecked: false },
    { id: 2, text: "Item 2", isChecked: false },
    { id: 3, text: "Item 3", isChecked: false },
  ]);

  const handleCheckboxChange = (itemId) => {
    // setItems((prevItems) =>
    //   prevItems.map((item) =>
    //     item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
    //   )
    // );

    //In an otherway we can write it as
    let prevItems = items.map((item) =>
      item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
    );
    setItems(prevItems);
  };

  const handleDeleteClick = (itemId) => {
    // setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    let filteredItems = items.filter((item) => item.id !== itemId);
    setItems(filteredItems)
  };

  return (
    <div>
      <h1>Checkbox List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.isChecked}
              onChange={() => handleCheckboxChange(item.id)}
            />
            {item.text}
            {item.isChecked && (
              <button onClick={() => handleDeleteClick(item.id)}>Delete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckboxList;
