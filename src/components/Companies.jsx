import React from "react";
import { alliander, asml, kadaster, klm, ns, philips } from "../assets";

const Companies = () => {
  const companies = [
    { src: kadaster, alt: "Kadaster" },
    { src: ns, alt: "NS" },
    { src: philips, alt: "Philips" },
    { src: klm, alt: "KLM" },
    { src: asml, alt: "ASML" },
    { src: alliander, alt: "Alliander" },
  ];

  return (
    <section className=" mx-auto p-6 rounded-md">
      <h1 className="text-center text-4xl mb-10 font-bold">
        Clients We Have Served
      </h1>
      <div className="relative overflow-hidden">
        {/* Scrollable Container */}
        <div className="flex gap-32 animate-scroll w-[calc(200%+12rem)] mt-20">
          {companies.concat(companies).map((company, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                className="w-80 h-20 object-contain"
                src={company.src}
                alt={company.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
