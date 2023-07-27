import Link from "next/link";
import React from "react";

const CategoryMeal = ({ catWiseData }) => {
  const { strMeal, strMealThumb } = catWiseData;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{strMeal}</h2>
      </div>
      <figure>
        <img src={strMealThumb} />
      </figure>
    </div>
  );
};

export default CategoryMeal;
