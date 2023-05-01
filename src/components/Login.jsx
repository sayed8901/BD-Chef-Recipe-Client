import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

    const { setUser, userLogin, googleSignIn } = useContext(AuthContext);

  const handleLogin = (e) => {
    setErrorMsg("");
    setSuccessMsg("");

    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    userLogin(email, password)
      .then((result) => {
        const newUser = result.user;
        console.log(newUser);
        setSuccessMsg("User Successfully Logged in");
        setUser(newUser);

        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMsg(error.message);
      });
  };

//   log in with google popup
const handleGoogleLogIn = () => {
    googleSignIn()
    .then((result) => {
        const newUser = result.user;
        console.log(newUser);
        setSuccessMsg("User Successfully Logged in with Google");
        setUser(newUser);
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMsg(error.message);
      });
}

  return (
    <form onSubmit={handleLogin} className="card-body w-1/3 mx-auto">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="email"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          name="password"
          placeholder="password"
          className="input input-bordered"
          required
        />
      </div>

      <div className="form-control mt-3">
        <button className="btn btn-primary">Login</button>
      </div>

      <small className="mt-3">
        New to this site?{" "}
        <Link to={"/register"} className="btn btn-sm btn-outline">
          Resister Now
        </Link>
      </small>

      <div className="mt-5">
        <h4 className="mb-5 text-center">More Login options</h4>
        <div className="btn-group btn-group-vertical flex gap-4 mx-auto">
          <div onClick={handleGoogleLogIn} className="btn btn-active">Login with Google</div>
          <div className="btn">Login with GitHub</div>
        </div>
      </div>

      <p className="text-center">{errorMsg ? errorMsg : successMsg}</p>
    </form>
  );
};

export default Login;
