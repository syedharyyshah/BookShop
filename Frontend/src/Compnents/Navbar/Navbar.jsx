import React, { useEffect, useState } from "react";
import Login from "../Login/Login";
import { Link } from "react-router-dom";

const Navbar = () => {
  // 🌙 Dark Mode State
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // 📌 Sticky Navbar State
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🏷️ Navigation Links
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Course">Course</Link>
      </li>
      <li>
        <Link to="/Contact">Contact</Link>
      </li>
      <li>
        <Link to="/About">About</Link>
      </li>
    </>
  );

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-10 max-w-screen-2xl container mx-auto px-4 md:px-20 bg-gray-100 
      dark:bg-slate-900 dark:text-white transition-all duration-300 ease-in-out ${
        sticky ? "shadow-md bg-white dark:bg-gray-800" : ""
      }`}
    >
      <div className="navbar flex justify-between items-center py-4">
        {/* 🍔 Mobile Menu */}
        <div className="navbar-start flex items-center">
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              aria-label="Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
            </button>
            <ul className="menu menu-sm dropdown-content bg-white dark:bg-gray-900 rounded-box shadow-md mt-2 w-52 p-2 z-50">
              {navItems}
            </ul>
          </div>
          <Link to="/" className="text-2xl font-bold">
            BookShop
          </Link>
        </div>

        {/* 🏷️ Desktop Menu */}
        <div className="hidden lg:flex navbar-center">
          <ul className="menu menu-horizontal px-2">{navItems}</ul>
        </div>

        <div className="navbar-end flex items-center space-x-3">
          {/* 🔍 Search Bar */}
          <div className="hidden md:flex border rounded-md px-3 py-2 dark:bg-gray-800">
            <input
              type="text"
              className="outline-none bg-transparent text-black dark:text-white"
              placeholder="Search..."
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
{/* 🌙 Dark Mode Toggle */}
<button
  className="swap swap-rotate transition-transform duration-300 ease-in-out"
  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
  aria-label="Toggle Dark Mode"
>
  {theme === "dark" ? (
    // 🌙 Moon Icon for Dark Mode (Fixed Alignment)
    <svg
      className="h-8 w-8 fill-current text-yellow-400 transform transition-transform duration-300 ease-in-out rotate-[360deg]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05A1,1,0,0,0,21.64,13Z" />
    </svg>
  ) : (
    // ☀️ Sun Icon for Light Mode (Fixed Alignment)
    <svg
      className="h-8 w-8 fill-current text-gray-800 dark:text-white transform transition-transform duration-300 ease-in-out rotate-[360deg]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
    </svg>
  )}
</button>


          {/* 🔐 Login Button */}
          <button
            className="px-4 py-2 bg-black text-white rounded-md dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-300 transition-all"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Login
          </button>
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
