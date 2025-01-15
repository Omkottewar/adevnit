import React from 'react'
import { aboutMe } from '../assets'

const AboutMe = () => {
  return (
    <div className='flex max-lg:flex-col py-20 justify-between gap-12 px-5  lg:px-32 items-center'>
       <div className="">
        <img className='lg:w-[500px]' src={aboutMe} alt="" />
       </div>
       <div className="lg:w-[700px] ">
       <h1 className='text-3xl font-bold mb-5'>About Me</h1>
        <p className='text-lg text-justify'>About Me
With over 17 years of extensive industry experience, I bring a unique blend of technical expertise and business acumen to the SAP ecosystem. My specialization spans across SAPUI5, Fiori, and ABAP development (including ABAP on HANA and Object-Oriented ABAP), complemented by a deep understanding of SAP Cloud Platform and C4 SDK development.As a TOGAF Certified professional and Mendix Certified Developer, I have delivered innovative solutions in both backend and frontend domains, including SAPUI5, ABAP WebDynpro, and Adobe Forms. My SAP CRM experience covers both functional and technical areas across Marketing, Sales, and Service modules, along with proficiency in SAP CRM RDS, Business Partner, and Records Management.In addition to my technical skills, I am a seasoned ABAP trainer with a strong foundation in Scrum and Lean development principles. My goal is to empower businesses by delivering tailored, scalable, and impactful SAP solutions that align with their unique needs and strategic objectives.</p>
       </div>
    </div>
  )
}

export default AboutMe