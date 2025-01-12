import React, { useState } from 'react'
import { cross, menu } from '../assets';

const Navbar = () => {
    const [menuClicked , isMenuClicked] = useState(false);

  return (
    <div className='bg-[#111827] text-white h-16  flex justify-between items-center relative shadow-xl  px-10'>
        <div className="">
        viteLogo
        </div>

        <div className="max-lg:hidden ">
            <ul className= ' navbar__list flex gap-9'>
                <li>Home</li>
                <li>Services</li>
                <li>Industries</li>
                <li>Blog</li>
                <li>About Us</li>
            </ul>
        
        </div>
        <div className="flex gap-5  lg:hidden"> 
           <img className= 'w-8 ' onClick={()=>isMenuClicked(!menuClicked)}  src={menuClicked?cross:menu} alt="" />
           <ul
          className={`${
            menuClicked ? "block" : "hidden"
          } menu-list absolute  top-16 right-0 bg-green-300 w-screen z-50 flex flex-col justify-center items-center  shadow-lg py-2`}
        >
                <li>Home</li>
                <li>Services</li>
                <li>Industries</li>
                <li>Blog</li>
                <li>About Us</li>
            </ul>
            <button>contact us</button>
        </div>
        <button className='max-lg:hidden text-lg'>Contact Us</button>
    </div>
  )
}

export default Navbar