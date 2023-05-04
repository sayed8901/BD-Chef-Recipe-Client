import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Recipe from "./Recipe";
import LazyLoad from "react-lazy-load";

const Chef = () => {
  const { id } = useParams();
  const singleChefData = useLoaderData();
  // console.log(id);
  // console.log(singleChefData);

  const { picture, name, bio, likes, recipes, experience } = singleChefData;

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row-reverse">
          <LazyLoad>
            <img src={picture} className="max-w-xs rounded-lg shadow-2xl" />
          </LazyLoad>
          <div className="card-body">
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-6">{bio}</p>
            <p>Likes: {likes}</p>
            <p>No of recipes: {recipes.length}</p>
            <p>Year of Experience: {experience}</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-center mt-24 mb-8">
          All Recipes from {name}
        </h2>
        <div className="my-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {recipes.map((recipe) => (
            <Recipe key={recipe.id} recipe={recipe}></Recipe>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chef;
