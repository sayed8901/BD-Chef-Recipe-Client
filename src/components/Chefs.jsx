import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import ChefCard from "./ChefCard";

const Chefs = () => {
  const [chef, setChef] = useState([]);
  useEffect(() => {
    fetch(`https://chefs-recipe-server-sayed8901.vercel.app/chef`)
      .then((res) => res.json())
      .then((data) => setChef(data))
      .catch((error) => console.log(error));
  }, []);

  //   console.log(chef);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div >
          <h1 className="text-5xl font-bold">Meet Our Master Chefs</h1>
          <p className="py-6">
            <br />
            Here you can find most artistic chef & their delicious recipe of
            variety of taste.
            <br />
            You can contact our professional chefs for any of your social
            occasion or festival caterings.
          </p>
          <div className="my-container hero">
            <Marquee speed={50} pauseOnHover={true}>
            {
                chef.map(individualChef => <ChefCard
                    key={individualChef.id}
                    individualChef = {individualChef}
                ></ChefCard>)
            }
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chefs;
