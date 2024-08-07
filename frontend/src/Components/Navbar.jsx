import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import { useAuth } from "../Context/AuthProvider";
const Navbar = () => {


  const [authUser,setauthUser] = useAuth()
  console.log(authUser);




  const [sticky, Setsticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        Setsticky(true);
      } else {
        Setsticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = () => {
    return (
      <>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to={"/course"}>Course</Link>
        </li>
        <li>
          <Link>Contact</Link>
        </li>
        <li>
          <Link>About</Link>
        </li>
      </>
    );
  };
  return (
    <div
      className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 ${
        sticky
          ? "sticky-navbar shadow-md bg-base-300 duration-300 transition-all ease-in-out"
          : ""
      } `}
    >
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems()}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl cursor-pointer font-bold">
            Store
          </a>
        </div>
        <div className="navbar-end space-x-3">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems()}</ul>
          </div>
          <div className=" hidden md:block">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <label className="grid cursor-pointer place-items-center">
              <input
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
              />
              <svg
                className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>
        
        {
          authUser ? <Logout/> :
          <div >
            <Link
              to={"/login"}
              className="btn bg-black text-white rounded-full p-2"
            >
              Login
            </Link>
          </div>
        }


        </div>
      </div>
    </div>
  );
};

export default Navbar;
