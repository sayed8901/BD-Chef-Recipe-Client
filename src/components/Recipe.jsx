/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { toast } from "react-toastify";

const Recipe = ({ recipe }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleComplete = (e) => {
    toast("Wow! You have successfully added this recipe to favorite!!");
    console.log("onClick");
    setIsClicked(!isClicked);
    console.log(isClicked);
  };

  // console.log(recipe);
  const { name, cooking_method, rating, ingredients } = recipe;
  return (
    <div className="card gradient-color text-primary-content">
      <div className="card-body">
        <div className="flex justify-between items-center gap-6 mb-4 h-12">
          <h2 className="card-title text-warning">{name}</h2>
          <button
            onClick={handleComplete}
            disabled={isClicked}
            className="btn btn-sm btn-outline font-bold"
          >
            favorite
          </button>
        </div>
        <div className="mb-4">
          <b>Ingredients:</b>
          {ingredients.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <li key={item}>{item}</li>
          ))}
        </div>
        <p className="mb-4">
          <b>Rating:</b> {rating}
        </p>
        <p>
          <b>Cooking method:</b> <br />
          {cooking_method}
        </p>
      </div>
    </div>
  );
};

export default Recipe;
