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
    <section className="max-w-7xl  mx-auto p-6 rounded-md">
      <h1 className="text-center text-4xl mb-10 font-bold ">
        Clients We Have Served
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
        {companies.map((company, index) => (
          <div key={index} className="flex justify-center">
            <img
              className="w-40 h-20 object-contain"
              src={company.src}
              alt={company.alt}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Companies;
