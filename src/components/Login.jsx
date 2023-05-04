import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  // for password view/hide toggling
  const handleToggle = () => {
    setShowPassword(!showPassword);
  };

  // props extracting using AuthContext
  const { setUser, userLogin, googleSignIn, gitHubSignIn } =
    useContext(AuthContext);

  // fromLocation refers to the last path..
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  const fromLocation = location.state?.from?.pathname || "/";
  // console.log(fromLocation);

  const handleLogin = (e) => {
    setErrorMsg("");
    setSuccessMsg("");

    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    // password validation
    if (!/(?=.*[A-Z])/.test(password)) {
      setErrorMsg("At least 1 character should be in uppercase!");
      return;
    } else if (!/(?=.*[a-z].*[a-z])/.test(password)) {
      setErrorMsg("At least 2 characters should be in lowercase!");
      return;
    } else if (!/(?=.*[0-9])/.test(password)) {
      setErrorMsg("Password should contain at least 1 numbers!");
      return;
    } else if (!/(?=.*[!@#$&*])/.test(password)) {
      setErrorMsg("There should be at least 1 special character!");
      return;
    } else if (!/.{6}/.test(password)) {
      setErrorMsg("Password should contain at least 6 characters!");
      return;
    }

    // to log in an user
    userLogin(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccessMsg("User Successfully Logged in");
        setUser(loggedUser);
        form.reset();
        navigate(fromLocation, { replace: true });
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
        navigate(fromLocation, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMsg(error.message);
      });
  };

  //   log in with GitHub popup
  const handleGitHubLogIn = () => {
    gitHubSignIn()
      .then((result) => {
        const gitHubUser = result.user;
        console.log(gitHubUser);
        setSuccessMsg("User Successfully Logged in with Google");
        setUser(gitHubUser);
        navigate(fromLocation, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMsg(error.message);
      });
  };

  return (
    <form
      onSubmit={handleLogin}
      className="card-body w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-[50%] xl:max-w-[40%] 2xl:max-w-[30%] mx-auto -mt-6"
    >
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
        <div className="flex justify-between items-center gap-4">
          {/* based on password shoe/hide toggling, dynamically change the type of input field..*/}
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="password"
            className="input input-bordered w-full"
            required
          />

          {/* based on handleToggle function, dynamically change the button text.. */}
          <span className="btn w-20" onClick={handleToggle}>
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>
      </div>

      <div className="form-control mt-3">
        <button className="btn btn-primary">Login</button>
      </div>

      {/* link to go to registration form */}
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
          <div onClick={handleGitHubLogIn} className="btn">
            Login with GitHub
          </div>
        </div>
      </div>

      {/* to dynamically show either error msg or success msg & also apply styles dynamically.... */}
      <p
        className={`text-center my-1 text-xl ${
          errorMsg ? "text-primary" : "text-success"
        }`}
      >
        {errorMsg ? errorMsg : successMsg}
      </p>
    </form>
  );
};

export default Login;
