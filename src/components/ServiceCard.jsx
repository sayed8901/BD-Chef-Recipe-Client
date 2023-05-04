/* eslint-disable react/prop-types */
import React from "react";

const ServiceCard = ({ service }) => {
  const serviceData = service;

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-4 text-primary">{serviceData.name}</h2>
          <p>{serviceData.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Check out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
