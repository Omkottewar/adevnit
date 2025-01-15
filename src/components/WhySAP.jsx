import React from "react";
import { working } from "../assets";

const WhySAP = () => {
  return (
    <div className=" flex max-lg:flex-col max-lg:px-20 justify-between items-center xl:px-[10%] xl:gap-32 my-32">
      <div className="">
        <img className="lg:w-[600px] object-cover " src={working} alt="" />
      </div>
      <div className="lg:w-[800px] flex flex-col text-justify gap-5">
        <h1 className="text-2xl font-bold"> How SAP Consulting Helps </h1>
        {/* <p>In today's digital landscape, SAP consulting empowers organizations to implement transformative solutions tailored to their needs. By leveraging artificial intelligence and advanced data management capabilities, SAP revolutionizes business processes and drives efficiency. <br /> With applications spanning Human Resources, Supply Chain Management, and beyond, SAP has become a cornerstone for organizations seeking enhanced analysis, reporting, and data-driven decision-making. <br /> Its ability to provide real-time insights enables businesses to make informed, strategic choices that propel growth and innovation.Harness the power of SAP technology to optimize your business operations and unlock the full potential of this cutting-edge ERP solution. At Epnovate Technology, we pride ourselves on delivering top-tier, easy-to-implement SAP solutions designed to meet industry-specific needs and exceed client expectations.</p> */}
        <p>
          SAP consulting empowers organizations to implement tailored solutions,
          leveraging AI and advanced data management to transform business
          processes.
        </p>
        <p>
          From Human Resources to Supply Chain Management, SAP enhances
          analysis, reporting, and real-time decision-making, enabling
          businesses to achieve strategic growth.
        </p>
        <p>
          At Epnovate Technology, we deliver easy-to-implement,
          industry-specific SAP solutions that drive efficiency and success.
        </p>
      </div>
    </div>
  );
};

export default WhySAP;
