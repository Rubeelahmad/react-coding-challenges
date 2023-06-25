import React, { useState } from 'react';

const ListComponent = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCheckBoxChange = (index) => {
    setSelectedItem(index);
  };

  const handleCreate = () => {
    const newItem = `Item ${items.length + 1}`;
    setItems([...items, newItem]);
    setSelectedItem(null);
  };

  const handleDelete = () => {
    const updatedItems = items.filter((item, index) => index !== selectedItem);
    setItems(updatedItems);
    setSelectedItem(null);
  };

  return (
    <div>
      <h2>Ordered List</h2>
      <ol>
        {items.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={index === selectedItem}
              onChange={() => handleCheckBoxChange(index)}
            />
            {item}
          </li>
        ))}
      </ol>

      {selectedItem !== null && (
        <div>
          <button onClick={handleCreate}>Create</button>
        </div>
      )}

      {selectedItem !== null && (
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default ListComponent;
