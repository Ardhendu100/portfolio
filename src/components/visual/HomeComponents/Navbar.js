/* eslint-disable jsx-a11y/anchor-is-valid */
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [menu, setmenu] = useState(false);
  const navItems = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Projects",
      url: "/project",
    },
    // {
    //   name: "Blogs",
    //   url: "/blog",
    // },
    {
      name: "Contact",
      url: "/contact",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, type: "spring", stiffness: 105 }}
      className="flex justify-between items-center w-full h-20 px-4 md:justify-around">
      {/* logo */}
      <div>
        <Link to="/">
          <h1 className="font-logo text-5xl cursor-pointer">Ardhendu</h1>
        </Link>
      </div>
      {/* menu items */}
      <ul className="hidden md:flex">
        {navItems.map((item, i) => {
          return (
            <Link to={item.url} key={i}>
              <li className="px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 duration-150 hover:underline hover:underline-offset-4">
                {item.name}
              </li>
            </Link>
          );
        })}
      </ul>
      {/* Menu bar icon for mobile device */}
      <div
        className="cursor-pointer pr-4 text-gray-500 z-10 md:hidden"
        onClick={() => setmenu(!menu)}>
        {menu ? <FaTimes size={20}></FaTimes> : <FaBars size={20}></FaBars>}
      </div>
      {/* Menu div for mobile  */}
      {menu && (
        <ul
          className="flex flex-col justify-center items-center 
      absolute top-0 left-0 w-full h-screen 
      bg-gradient-to-b from-black to-gray-800">
          {navItems.map((item, i) => {
            return (
              <li
                key={i}
                className="px-4 cursor-pointer capitalize py-4 text-2xl">
                {item.name}
              </li>
            );
          })}
        </ul>
      )}
    </motion.div>
  );
}

export default Navbar;
