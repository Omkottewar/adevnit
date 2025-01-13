import React, { useState } from "react";
import { menu, minus, plus } from "../assets";

const FAQ = () => {
    const [showData,setShowData] = useState("")
  const question = [
    {
      text: "SAP consulting helps businesses with the selection, implementation, training, and support for enterprise resource planning (ERP) software known as SAP. The SAP S/4 HANA is one of the SAP Products.",
      title: "What is SAP consulting service?",
    },
    {
      text: "The career of a SAP consultant provides excellent opportunities for development and personal growth. Moreover, the rapid growth in the ERP segment secures prolonged job opportunities. The extensive creativity required in addressing the challenges confers additional skills, always leaving space for learning.",
      title: "Why do you want to work as SAP Consultant?",
    },
    {
      text: "SAP consultation as a career exhibits long-term job prospects in the backdrop of increased integration of businesses in the ERP segment. Moreover, the constant engagement with businesses having diverse constraints imparts growing expertise. Hence, making it one of the best careers.",
      title: "Is SAP consultant a good career?",
    },
    {
      text: "SAP by itself does not have a dedicated consulting service. However, there are several best sap consulting firms such as Epnovate that offer SAP consulting.",
      title: "Does SAP provide consulting services?",
    },
    {
      text: "The Job of a SAP consultant involves the analysis, design, and configuration of novel computer software and systems according to the client’s requirement. The role of the SAP consultant varies as per the modules.",
      title: "What does a SAP consultant do?",
    },
  ];
  const handleClick =(index)=>{
    setShowData( index===showData?"":index )
  }
  return (
    <div className=" w-full flex flex-col justify-center items-center bg-gray-900 text-white py-32 gap-10 mt-24">
      <h1 className="text-3xl font-bold ">Most Frequently Asked SAP Questions</h1>
      <p className="text-lg font-semibold">
        To give a crystal-clear picture, here are some of the most frequently
        asked questions about our services.
      </p>
      <div className="flex flex-col gap-2 ">
        {question.map((item,index)=>{
            return(
                <div onClick={()=>handleClick(index)} className=" w-[800px] min-h-6  text-black cursor-pointer bg-white px-2 py-1 rounded-xl " key={index}>
                    <div className="flex justify-between items-center px-10 py-5">
                    <p className={`${showData === index ?"font-bold text-xl" :""}`}>{item.title}</p>
                    <img className="w-5 h-5" src={showData ===index ? minus:plus} alt="" />
                    </div>
                    <p className={`${showData ===index ?"":"hidden"} cursor-default px-10 pb-5 `} >{item.text}</p>
                </div>
            )
        })}
      </div>
    </div>
  );
};

export default FAQ;
