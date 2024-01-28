import React, { useState } from "react";
import { RiSearch2Line, RiShoppingBag2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Featured", href: "/featured" },
    { label: "Recommended", href: "/recommended" },
  ];

  return (
    <nav className="flex items-center justify-between flex-wrap pt-6 lg:px-12 ">
      <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
        <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
          <Link to="/" className="font-semisemibold text-xl tracking-tight">
            <img className="w-[150px] h-auto" src="/images/logo.png" alt="" />
          </Link>
        </div>
        <div className="flex items-center lg:hidden">
          <RiShoppingBag2Line className="text-black ml-2 h-6 w-6 fill-current lg:hidden inline-block" />
          <button
            id="nav"
            className="flex items-center px-3 py-2 border-2 rounded text-gray-700  hover:text-white hover:bg-gray-800"
            onClick={toggleMenu}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="lg:block hidden text-sm font-semibold text-gray-700 mr-auto">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="block mt-4 lg:inline-block  hover:text-gray-700 px-4 py-2  text-gray-500"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div
        className={`menu w-full ${
          isMenuOpen ? "inline-block" : "hidden"
        } lg:flex lg:items-center lg:w-auto lg:px-3 px-8`}
      >
        <div className="block lg:hidden text-sm font-semibold text-gray-700  mr-auto ">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="block  lg:inline-block lg:mt-0 hover:text-gray-700 px-4 py-2  text-gray-500"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="relative mx-auto text-gray-600 lg:block hidden">
          <button type="submit" className="absolute left-2 top-0 mt-3 mr-2">
            <RiSearch2Line className="text-gray-600 h-4 w-4 fill-current" />
          </button>
          <input
            className="border-2 border-gray-300 bg-white h-10 pl-8 pr-9 text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search Product"
          />
        </div>

        <RiShoppingBag2Line className="text-black ml-2 h-6 w-6 fill-current hidden lg:block" />

        <div className="flex lg:ml-12">
          <Link
            to="#"
            className="block text-sm px-4 py-2 text-white ml-2 font-semibold bg-black hover:text-gray-800 mt-4 lg:mt-0"
          >
            Sign Up
          </Link>

          <Link
            to="#"
            className=" block text-sm px-4 ml-2 py-2 border-2 text-gray-500 font-semibold hover:text-gray-800 mt-4 lg:mt-0"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};
