/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  //   console.log(user);
  const location = useLocation();
//   console.log(location);

  if (loading) {
    return (
      <div
        className="hero min-h-screen"
        style={{ minHeight: `calc(100vh - 124px)` }}
      >
        <TailSpin
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"} state={{from: location}} replace></Navigate>;
  }
};

export default ProtectedRoute;
