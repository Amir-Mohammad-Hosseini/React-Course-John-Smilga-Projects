import React from "react";
import SingleItem from "./SingleItem";

const Items = ({ items, onRemoveItem, onEditItem }) => {
  return (
    <div className="items">
      {items.map((item) => (
        <SingleItem
          key={item.id}
          {...item}
          onRemoveItem={onRemoveItem}
          onEditItem={onEditItem}
        />
      ))}
    </div>
  );
};

export default Items;
