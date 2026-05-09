import React from "react";

const SingleItem = ({ id, name, purchased, onRemoveItem, onEditItem }) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={purchased}
        onChange={() => onEditItem(id)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: purchased && "line-through",
        }}
      >
        {name}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => onRemoveItem(id)}
      >
        delete
      </button>
    </div>
  );
};

export default SingleItem;
