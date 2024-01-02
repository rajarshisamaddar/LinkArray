import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../utils/AuthContext";
import toast from "react-hot-toast";

const PreviewNav = () => {
  const { user } = useAuth();
  const copyToClipboard = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard", {
      className: "dark:bg-[#222] bg-white dark:text-white",
    });
  };

  return (
    <div
      className="flex justify-between sm:rounded-none w-[96.5%] m-auto  sm:grid sm:grid-cols-2 sm:gap-5 
    bg-white mt-[1.5rem] py-[1rem] px-[1rem] items-center rounded-lg sm:mt-[0] sm:w-[100%] dark:bg-black"
    >
      {(user && (
        <Link
          to="/profile"
          className="border-[1.5px] border-indigo-600 px-[1.8rem] py-[.7rem] rounded-lg hover:bg-violet-200
           dark:hover:bg-violet-400"
        >
          Profile
        </Link>
      )) || (
        <Link
          to="/sign-in"
          className="border-[1.5px] border-indigo-600 dark:hover:bg-violet-400 px-[1.8rem] py-[.7rem] rounded-lg hover:bg-violet-200"
        >
          Sign In
        </Link>
      )}
      <div
        onClick={copyToClipboard}
        className={`py-[.7rem] px-[1.8rem]
        border-[1.5px] border-indigo-600
        bg-indigo-600 rounded-lg text-white
       hover:opacity-40 dark:hover:opacity-85 cursor-pointer
       transition-all duration-300 ease-linear

       `}
      >
        <h3>Share Link</h3>
      </div>
    </div>
  );
};

export default PreviewNav;
