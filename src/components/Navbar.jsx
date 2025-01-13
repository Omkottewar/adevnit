import React, { useState } from "react";
import { cross, menu } from "../assets";

const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  const [isSubMenu, setIsSubMenu] = useState("");

  const navItems = ["Home", "Services", "Industries", "Blog", "About Us"];

  const handleMouseEnter = (item) => {
    setIsSubMenu(isSubMenu === item ? "" : item);
  };

  const handleMouseLeave = () => {
    setIsSubMenu("");
  };

  return (
    <div className="bg-[#111827] text-white h-16 flex justify-between items-center relative shadow-md px-10">
      {/* Logo */}
      <div className="text-xl font-bold">Logo</div>

      {/* Desktop Navbar */}
      <div className="hidden lg:flex">
        <ul className="flex gap-8">
          {navItems.map((item, index) => (
            <div
              className="relative cursor-pointer group"
              key={index}
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={handleMouseLeave}
            >
              <p className="text-base hover:text-gray-400 transition">{item}</p>
              <ul
                className={`${
                  isSubMenu === item ? "block" : "hidden"
                } absolute top-10 left-0 bg-white text-black w-48 py-2 shadow-lg rounded-md z-20`}
              >
                {[1, 2, 3, 4, 5].map((subItem, i) => (
                  <li
                    key={i}
                    className="px-4 py-2 hover:bg-gray-200 transition"
                  >
                    Submenu {subItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className="flex gap-5 lg:hidden">
        <img
          className="w-8 cursor-pointer"
          onClick={() => setMenuClicked(!menuClicked)}
          src={menuClicked ? cross : menu}
          alt="Menu Icon"
        />
        <ul
          className={`${
            menuClicked ? "block" : "hidden"
          } absolute top-16 right-0 bg-[#111827] text-white w-full z-50 flex flex-col py-4 shadow-md`}
        >
          {navItems.map((item, index) => (
            <li
              key={index}
              className="px-6 py-3 hover:bg-gray-800 transition"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Us Button */}
      <button className="hidden lg:block text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-500 transition">
        Contact Us
      </button>
    </div>
  );
};

export default Navbar;
