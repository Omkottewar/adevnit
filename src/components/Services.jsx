import React from "react";

const Services = () => {
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
  return <div className=" w-screen  bg-gray-300 py-24">
    <div className="mx-auto w-[800px] flex flex-col gap-20 ">
    <h1 className="text-4xl mx-auto mt-20">Services We Provide</h1>
    <div className="grid lg:grid-cols-2 grid-rows-2 gap-10 ">
    {services.map((item,index)=>{
        return(
            <div key={index} className=" bg-white w-96 h-96 shadow-xl  text-center flex flex-col p-10 gap-8 items-center justify-center rounded-2xl">
                <p className="text-3xl font-semibold">{item.title}</p>
                <p className="text-xl">{item.text}</p>
            </div>
        )
    })}
    </div>
    </div>
  </div>;
};

export default Services;
