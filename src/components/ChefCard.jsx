/* eslint-disable react/prop-types */
import React from "react";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const ChefCard = ({ individualChef }) => {
  // console.log(individualChef);
  const { id, picture, name, experience, recipes, likes } = individualChef;
  return (
    <div className="card card-side bg-base-100 shadow-xl mx-8">
      <LazyLoad>
        <figure className="w-48 h-full">
          <img className="rounded-xl" src={picture} alt="Movie" />
        </figure>
      </LazyLoad>
      <div className="card-body text-left">
        <h2 className="card-title mb-8">{name}</h2>
        <p>Year of Experience: {experience}</p>
        <p>No of recipes: {recipes.length}</p>
        <p>Likes: {likes}</p>
        <div className="card-actions justify-end">
          <Link to={`/chef/${id}`}>
            <button className="btn btn-primary">View Recipes</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
