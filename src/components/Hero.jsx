import React from "react";
import { hero, sap } from "../assets";

const Hero = () => {
  return (
    <div className="w-full relative text-left h-screen flex justify-between px-32 items-center  bg-gray-900">
      

      <div className="flex flex-col justify-center items-center w-[700px] gap-10 ">
        <div className=" ml-20 z-10  text-white items-center ms flex flex-col gap-3 ">
          <p className="text-5xl text-[#2DBFD9]  -m-2 font-semibold">
            We Provide SAP Services.
          </p>
          <p className=" text-3xl mt-10">We solve complex SAP challenges by</p>
          
          <p className=" text-3xl ">leveraging our extensive expertise in SAP</p>{" "}
          <p className=" text-3xl "> development and modern SAP solutions.</p>
        </div>
        <button className=" z-10 ml-20 bg-white w-52 h-16 rounded-full ">
          Contact Us
        </button>
      </div>
      {/* Background Image */}
      <img
        className="w-[500px] h-[500px]"
        src={sap}
        alt="Hero Background"
      />
    </div>
  );
};

export default Hero;
