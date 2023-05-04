import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const { setUser, userLogin, googleSignIn, gitHubSignIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  const fromLocation = location.state?.from?.pathname || "/";
  console.log(fromLocation);

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
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccessMsg("User Successfully Logged in");
        setUser(loggedUser);
        form.reset();
        navigate(fromLocation, {replace: true});
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
        const googleUser = result.user;
        console.log(googleUser);
        setSuccessMsg("User Successfully Logged in with Google");
        setUser(googleUser);
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMsg(error.message);
      });
  };

  //   log in with google popup
  const handleGitHubLogIn = () => {
    gitHubSignIn()
      .then((result) => {
        const gitHubUser = result.user;
        console.log(gitHubUser);
        setSuccessMsg("User Successfully Logged in with Google");
        setUser(gitHubUser);
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMsg(error.message);
      });
  };

  return (
    <form onSubmit={handleLogin} className="card-body w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-[50%] xl:max-w-[40%] 2xl:max-w-[30%] mx-auto -mt-6">
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
          <div onClick={handleGoogleLogIn} className="btn btn-active">
            Login with Google
          </div>
          <div onClick={handleGitHubLogIn} className="btn">Login with GitHub</div>
        </div>
      </div>

      <p className="text-center my-2">{errorMsg ? errorMsg : successMsg}</p>
    </form>
  );
};

export default Login;
