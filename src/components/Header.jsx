import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  //   console.log(user);

  return (
    // <h1>navbar</h1>
    <div className="navbar sticky top-0 z-10 gradient-color text-black">
      <div className="navbar-start">
        {/* navbar for small screen */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                to="/chef"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Chefs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Our Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Contact us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>

        <Link to={"/"} className="btn btn-ghost normal-case text-base sm:text-xl">
          BD Chefs Recipe
        </Link>
      </div>

      {/* navbar for bigger screen */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/chef"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Chefs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Our Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="flex gap-4 justify-center items-center">
            <div className="tooltip tooltip-bottom tooltip-primary" data-tip={user.displayName}>
              <img className="rounded-full w-12" src={user.photoURL} alt="" />
            </div>
            <button onClick={logOut} className="btn btn-primary w-24">
              Log out
            </button>
          </div>
        ) : (
          <button>
            <Link to={"/login"} className="btn btn-primary w-24">
              log in
            </Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
