import React from "react";
import Logo from "../../assets/images/logo.svg";
import Logo_Small from "../../assets/images/logo-small.svg";
import { Link } from "react-router-dom";
import { BiLink } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { useState, useEffect } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { useAuth } from "../../utils/AuthContext";
const Navbar = ({ isHome = false, isProfile = false }) => {
  const { user } = useAuth();
  const [isMobile, setIsMobile] = useState(false);
  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 480);
  };

  useEffect(() => {
    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  });

  return (
    <div className="flex dark:bg-black justify-between w-[96.5%] m-auto bg-white 
    mt-[1.5rem] py-[1rem] px-[1rem] items-center rounded-lg sm:mt-[0] sm:w-[100%]">
      <div className="">
        <img src={isMobile ? Logo_Small : Logo} alt="" className="h-[2rem]" />
      </div>
      <div className="flex gap-x-[1.5rem] font-bold text-gray-500 dark:text-gray-300">
        <Link
          to="/"
          className={`flex gap-x-[.2rem] items-center ${
            isHome ? "bg-gray-200 dark:bg-[#333] px-[1.5rem] rounded-lg text-indigo-600 " : ""
          } text-[16px]  hover:text-indigo-600
        py-[.7rem]`}
        >
          <BiLink className="text-[1.3rem]" />
          <h3 className="sm:hidden">Links</h3>
        </Link>

        <Link
          to="/profile"
          className={`flex gap-x-[.2rem] items-center ${
            isProfile
              ? "bg-gray-200 px-[1.5rem] dark:bg-[#333] rounded-lg text-indigo-600 "
              : ""
          }  hover:text-indigo-600
        py-[.7rem]`}
        >
          <BiUserCircle className="text-[1.4rem]" />
          <h3 className="sm:hidden">Profile</h3>
        </Link>
      </div>
      <div
        className={`py-[.7rem] ${
          isMobile ? "px-[.9rem]" : "px-[1.8rem]"
        } border-blue-700 border-[1.5px] rounded-lg
       hover:bg-violet-200 cursor-pointer text-blue-700 font-bold ${
         isMobile ? "text-[1.4rem]" : "text-[16px]"
       }`}
      >
        <Link to={`/@${user.name}`}>
          {isMobile ? <AiOutlineEye /> : <h3>Preview</h3>}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
