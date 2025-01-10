import React from "react";
import { hero } from "../assets";

const Hero = () => {
  return (
    <div className="relative text-left h-screen flex  bg-gray-900">
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={hero}
        alt="Hero Background"
      />

    <div className="flex flex-col justify-center w-[700px] gap-10 ">
    <div className=" ml-20 z-10  text-white  flex flex-col gap-3 items-start">
        <p className="text-5xl text-[#2DBFD9]  -m-2 font-semibold">
           We Provide SAP Services. 
        </p>
        <p className=" text-3xl ">

        We solve complex SAP challenges by <br /> leveraging our extensive expertise in <br />  SAP development and modern SAP solutions.
        </p>
      </div>
    <button className=" z-10 ml-20 bg-white w-52 h-16 rounded-full " >Contact Us</button>

    </div>
    </div>
  );
};

export default Hero;
