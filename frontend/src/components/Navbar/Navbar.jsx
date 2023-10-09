import React from "react";
import Logo from "/logo.svg";
import Logo_Small from "/logo-small.svg";
import { Link } from "react-router-dom";
import { BiLink } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { useState, useEffect } from "react";
import {AiOutlineEye} from 'react-icons/ai'
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const checkMobile = () => {
    setIsMobile(window.innerWidth<=480);
  };

  useEffect(()=>{
    checkMobile();

    window.addEventListener("resize", checkMobile);
    return ()=>{
        window.removeEventListener("resize", checkMobile)
    }
  })
  return (
    <div className="flex justify-between w-[96.5%] m-auto bg-white mt-[1.5rem] py-[1rem] px-[1rem] items-center rounded-lg sm:mt-[0] sm:w-[100%]">
      <div className="">
        <img src={isMobile ? Logo_Small : Logo} alt="" className="h-[2rem]" />
      </div>
      <div className="flex gap-x-[1.5rem] font-bold">
        <Link
          to=""
          className="flex gap-x-[.2rem] items-center bg-gray-200 text-blue-600 text-[16px]
        py-[.7rem] px-[1.5rem] rounded-lg"
        >
             <BiLink className='text-[1.3rem]' /> 
            {isMobile ? '': <h3>Links</h3>}
          
        </Link>
        <Link
          to=""
          className="flex gap-x-[.2rem] items-center text-[16px] text-gray-500
        py-[.7rem] hover:text-blue-600"
        >
          <BiUserCircle className="text-[1.4rem]" /> 
          {isMobile ? "" : <h3>Profile Details</h3>}
        </Link>
      </div>
      <div className={`py-[.7rem] ${isMobile ? 'px-[.9rem]' : 'px-[1.8rem]'} border-blue-800 border-[1.5px] rounded-lg
       hover:bg-violet-200 cursor-pointer text-blue-800 font-bold ${isMobile ? 'text-[1.4rem]' : 'text-[16px]'}`}>
        <Link to="">
            {isMobile ? <AiOutlineEye /> : <h3>Preview</h3>}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
