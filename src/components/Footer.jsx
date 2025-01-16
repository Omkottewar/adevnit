import React, { useState } from "react";
import { Link } from "react-router-dom";
import { x_icon } from "../assets";
import { insta_icon } from "../assets";
import { linkedin_icon } from "../assets";

const Footer = () => {
  const [recipientEmail, setRecipientEmail] = useState("");

  const handleSendEmail = async () => {};

  return (
    <div className="bg-gray-900 text-white px-8 lg:px-32 pt-16 pb-4 font-poppins">
      {/* Footer Header */}
      <div className="w-full flex flex-col md:flex-row justify-between mb-10">
        <Link to="/" className="mb-4 md:mb-0">
          {/* <img src="" alt="Logo" className="w-[200px] h-[60px]" /> */}
          <div className="text-xl font-bold">Logo</div>
        </Link>
        <div className="flex gap-2.5">
          <img src={x_icon} alt="x" className="w-8 h-8" />
          <img src={insta_icon} alt="instagram" className="w-8 h-8" />
          <img src={linkedin_icon} alt="linkedin" className="w-8 h-8" />
        </div>
      </div>

      {/* Footer Body */}
      <div className="flex flex-col md:flex-row justify-between mb-10 gap-6 md:gap-0">
        {/* Company Section */}
        <div className="flex flex-col">
          <div className="mb-2.5">
            <div className="text-xl font-medium">Industries</div>
          </div>
          <Link to="/" className="mb-2 text-base">
            Industry 1
          </Link>
          <Link to="" className="mb-2 text-base">
            Industry 2
          </Link>
          <Link to="" className="mb-2 text-base">
            Industry 3
          </Link>
        </div>

        {/* Offerings Section */}
        <div className="flex flex-col">
          <div className="mb-2.5">
            <div className="text-xl font-medium">Services</div>
          </div>
          <Link to="" className="mb-2 text-base">
            Service 1
          </Link>
          <Link to="" className="mb-2 text-base">
            Service 2
          </Link>
          <Link to="" className="mb-2 text-base">
            Service 3
          </Link>
          <Link to="" className="mb-2 text-base">
            Service 4
          </Link>
        </div>

        {/* Discover Section */}
        <div className="flex flex-col">
          <div className="mb-2.5">
            <div className="text-xl font-medium">Discover</div>
          </div>
          <Link to="" className="mb-2 text-base">
            Blogs
          </Link>
          <Link to="" className="mb-2 text-base">
            About Us
          </Link>
        </div>

        {/* Contact Us Section */}
        <div className="flex flex-col">
          <div className="mb-2.5">
            <div className="text-xl font-medium">Contact Us</div>
          </div>
          <input
            type="email"
            value={recipientEmail}
            onChange={(e) => setRecipientEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-2 mb-2 rounded text-black outline-none"
          />
          <button
            onClick={handleSendEmail}
            className="w-full p-2 rounded bg-blue-600 text-white border-none cursor-pointer hover:bg-blue-500"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Footer Footer */}
      <div className="flex flex-col md:flex-row justify-between text-sm">
        <div className="mb-2 md:mb-0">
          Copyright © 2024 advenit All rights reserved
        </div>
        <div>Privacy policy, Terms & condition</div>
      </div>
    </div>
  );
};

export default Footer;
