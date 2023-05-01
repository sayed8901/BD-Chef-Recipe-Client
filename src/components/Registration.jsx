import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Registration = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const { createNewUserByMail, updateUserData } = useContext(AuthContext);
  //   console.log(createNewUserByMail);

  const handleRegister = (e) => {
    setErrorMsg("");
    setSuccessMsg("");

    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photo.value;
    // console.log(email, password, photoURL);

    createNewUserByMail(email, password)
      .then((result) => {
        const newUser = result.user;
        console.log(newUser);
        setSuccessMsg("New User has been Created Successfully");

        //   updating user name to firebase auth
        updateUserData(name, photoURL)
        .then( () => {
            const successMessage = 'User profile has been successfully updated.';
            console.log(successMessage);
            setSuccessMsg(successMessage);
        })
        .catch((error) => {
            console.log(error.message);
            setErrorMsg(error.message);
        })

        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMsg(error.message);
      });
  };

  return (
    <form onSubmit={handleRegister} className="card-body w-1/3 mx-auto">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder="name"
          className="input input-bordered"
          required
        />
      </div>
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
      <div className="form-control">
        <label className="label">
          <span className="label-text">Photo</span>
        </label>
        <input
          type="text"
          name="photo"
          placeholder="Photo_URL"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control mt-3">
        <button className="btn btn-primary">Register</button>
      </div>

      <small className="mt-3">
        Already have an account?{" "}
        <Link to={"/login"} className="btn btn-sm btn-outline">
          Login Now
        </Link>
      </small>

      <p className="text-center">{errorMsg ? errorMsg : successMsg}</p>
    </form>
  );
};

export default Registration;
