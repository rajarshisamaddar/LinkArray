import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";
const Icon = () => {
  const [showIcon, setShowIcon] = useState(false);
  return (
    <>
      <div className="w-[30%] lg:w-[50%]">
        <button
          className="my-[.5rem] bg-violet-400 px-[1rem] py-[.5rem] h-fit text-[15px] text-white font-bold rounded-lg
        "
          onClick={(e) => setShowIcon(true)}
        >
          Choose icon
        </button>
      </div>
      <div
        className={`bg-[#fafafa] fixed h-[80%] ${
          showIcon ? "visible opacity-1" : "hidden opacity-0"
        } transition-opacity overflow-hidden ease-in-out delay-200 w-[60%]  mb:w-[90%] sm:h-[70%]  top-1/2 px-[2rem] sm:px-[.8rem] py-[1.5rem] rounded-lg shadow-xl left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
      >
        <div
          className="absolute right-[1rem] top-[1rem] text-[1.6rem] text-white font-bold cursor-pointer bg-indigo-800
    rounded-full p-[.5rem] sm:text-[1rem] "
          onClick={(e) => setShowIcon(false)}
        >
          <RxCross2 />
        </div>
        <div>
          <div className="flex gap-x-[2rem] items-center">
            <h1 className="text-center w-fit sm:hidden text-[1.2rem] text-violet-700 pb-1">
              Search Icon
            </h1>
            <div className="w-[70%] sm:w-[80%]  relative px-[1rem] flex items-center py-[.7rem] rounded-md bg-transparent border-[1px] border-blue-600">
              <BsSearch className="text-indigo-900 text-[1.1rem]" />
              <input
                type="text"
                className="w-[100%] bg-transparent outline-none h-full px-[1rem]"
              />
            </div>
          </div>
          <div
            className="absolute top-[4rem] right-[2rem] bottom-[2rem] left-[2rem] 
      sm:right-[.7rem] sm:left-[.7rem] sm:bottom-[.7rem] p-[1rem] overflow-y-auto mt-[1rem] border-[1px] border-gray-400 bg-white"
          >            
          </div>
        </div>
      </div>
    </>
  );
};

export default Icon;
