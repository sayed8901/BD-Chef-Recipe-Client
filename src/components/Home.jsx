import React from "react";
import Chefs from "./Chefs";


const Home = () => {
  return (
    <div className="mb-8">
      <div
        className="hero min-h-screen mb-24"
        style={{
          minHeight: `calc(100vh - 124px)`,
          backgroundImage: `url("https://images.unsplash.com/photo-1490914327627-9fe8d52f4d90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlZiUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Welcome to BD Chef Recipe World
            </h1>
            <p className="mb-5">
              <br /> <br />
              Here you can find most artistic chef & their delicious recipe of variety of taste. We promote our countrys culture & ancient food heritage.
              <br /> <br />
              You can contact our professional chefs for any of your social
              occasion or festival caterings.
              <br /> <br />
              We believe in quality. You can check out our services.
              <br /> <br />
            </p>
          </div>
        </div>
      </div>

      <Chefs></Chefs>
    </div>
  );
};

export default Home;
