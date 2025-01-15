import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Services = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);


  const {isDark} = useContext(AppContext);

  const handleClick = (index) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  const services = [
    {
      title: "Migration",
      text: "SAP-certified developers at Epnovate utilize a heterogeneous migration system, ensuring a unified and risk-free migration to the new SAP solution. All important business data from the old databases, websites, third-party software, and applications is securely transferred without any impairment to its integrity.",
    },
    {
      title: "Implementation",
      text: "As a certified SAP HANA consulting company, we help businesses set up a SAP implementation plan that enables a complete business overview and addresses critical requirements or challenges. Our customer-first approach assists in the implementation of appropriate, business-specific SAP solutions.",
    },
    {
      title: "Upgradation",
      text: "Upgrading from the existing SAP solution is considered a challenging activity necessitating highly professional assistance. Yet, it has never been much easier with our remarkable SAP consulting services. The constant association between our experts and your SAP team guarantees a smooth upgrade.",
    },
    {
      title: "Support Services",
      text: "Leave it to our experts when it comes to SAP system management. Our support team makes sure that system bugs, timely maintenance, and update releases are taken care of. The practice of regarding the clients as partners has helped us earn the title of the best SAP consulting firm.",
    },
  ];

  return (
    <div className={`w-full  py-24 ${isDark?"bg-gray-900 text-white" : "bg-gray-100"} flex flex-col gap-20  px-5 lg:px-32`}>
      <h1 className="text-5xl font-bold " >Our Services</h1>
      {selectedIndex !== null && (
        <div className= {` w-full   mt-8 p-4 border rounded-lg ${isDark ?"bg-gray-100 text-black" :"bg-white" } lg:h-52 flex flex-col justify-between py-7 `}>
          <h2 className="text-3xl font-bold">{services[selectedIndex].title}</h2>
          <p className="mt-2 text-lg">{services[selectedIndex].text}</p>
        </div>
      )}
            <div className="grid   lg:grid-rows-1 lg:grid-cols-4 grid-cols-2 grid-row-auto gap-20  justify-center  items-center">
        {services.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`cursor-pointer text-2xl font-semibold ${
              selectedIndex === index ? `border-b-2 ${isDark ?"border-white " :"border-gray-900" }` : ""
            }  h-12 text-center`}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
