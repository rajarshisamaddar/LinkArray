import React from "react";
import { Link } from "react-router-dom";
const PreviewNav = () => {
  return (
    <div className="flex justify-between w-[96.5%] m-auto sm:bg-transparent sm:grid sm:grid-cols-2 sm:gap-5 bg-white mt-[1.5rem] py-[1rem] px-[1rem] items-center rounded-lg sm:mt-[0] sm:w-[100%]">
      <Link
        to="/"
        className="border-[1.5px] border-indigo-600 px-[1.8rem] py-[.7rem] rounded-lg hover:bg-violet-200"
      >
        Back to Editor
      </Link>

      <div
        className={`py-[.7rem] px-[1.8rem]
        bg-indigo-600 rounded-lg text-white
       hover:opacity-40 cursor-pointer  font-bold 
        text-[16px]
       `}
      >
        <Link to="/preview">
          <h3>Share Link</h3>
        </Link>
      </div>
    </div>
  );
};

export default PreviewNav;
