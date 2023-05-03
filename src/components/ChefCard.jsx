/* eslint-disable react/prop-types */
import React from "react";

const ChefCard = ({ individualChef }) => {
  // console.log(individualChef);
  const { picture, name, experience, recipes, likes } = individualChef;
  return (
    <div className="card card-side bg-base-100 shadow-xl mx-8">
      <figure className="w-48 h-full">
        <img src={picture} alt="Movie" />
      </figure>
      <div className="card-body text-left">
        <h2 className="card-title mb-8">{name}</h2>
        <p>Year of Experience: {experience}</p>
        <p>No of recipes: {recipes.length}</p>
        <p>Likes: {experience}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View Recipes</button>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
