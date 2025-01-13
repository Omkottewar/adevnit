import React from "react";
import { hero, sap } from "../assets";

const Hero = () => {
  return (
    <div className="w-full relative text-left h-screen flex flex-col lg:flex-row justify-between px-10 lg:px-32 items-center bg-gray-900">
      <div className="flex flex-col justify-center items-center lg:items-start w-full lg:w-[700px] gap-10">
        <div className="text-white flex flex-col gap-3 text-center lg:text-left">
          <p className="text-4xl lg:text-5xl text-[#2DBFD9] font-semibold">
            We Provide SAP Services.
          </p>
          <p className="text-xl lg:text-3xl mt-4 lg:mt-10">
            We solve complex SAP challenges by
          </p>
          <p className="text-xl lg:text-3xl">leveraging our extensive expertise in SAP</p>
          <p className="text-xl lg:text-3xl">development and modern SAP solutions.</p>
        </div>
        <button className="bg-white w-40 lg:w-52 h-12 lg:h-16 rounded-full">
          Contact Us
        </button>
      </div>
      {/* Background Image */}
      <img
        className="w-72 h-72 lg:w-[500px] lg:h-[500px] mt-10 lg:mt-0"
        src={sap}
        alt="Hero Background"
      />
    </div>
  );
};

export default Hero;
