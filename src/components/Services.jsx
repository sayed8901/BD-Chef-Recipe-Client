import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [chefInfo, setChefInfo] = useState([]);
  useEffect(() => {
    fetch(`https://chefs-recipe-server-sayed8901.vercel.app/info`)
      .then((res) => res.json())
      .then((data) => setChefInfo(data))
      .catch((error) => console.log(error));
  }, []);
  //   console.log(chefInfo);

  const services = chefInfo.services;

  return (
    <div className="hero my-24 flex flex-col">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Our Sevices</h1>
        <p className="py-6">
          <br />
          Here you can find most artistic chef & their delicious recipe of
          variety of taste.
          <br />
          You can contact our professional chefs for any of your social occasion
          or festival caterings.
        </p>
      </div>

      <div className="my-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services?.map((service) => (
          <ServiceCard key={service.name} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
