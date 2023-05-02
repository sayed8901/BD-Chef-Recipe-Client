import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1)
    };

  return (
    <div className="hero min-h-screen w-2/3 mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8">
        <img
          src="https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZXJyb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <div className="text-red-500">
            <h1 className="text-7xl font-bold">Oops!</h1>
            <h1 className="pt-4 text-3xl font-bold">Error Occurred!! Page not found!!!</h1>
          </div>
          <p className="py-6 text-2xl ">
            You May check the path or route & try again
          </p>
          <button onClick={handleBack} className="btn btn-primary">Go Back</button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
