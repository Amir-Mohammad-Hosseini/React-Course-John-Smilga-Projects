import React from "react";

const Categories = ({ categories , onFilterItem }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button key={category} type="button" className="btn" onClick={() => onFilterItem(category.toLowerCase())}>
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
