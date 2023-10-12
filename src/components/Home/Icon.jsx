import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import IconPicker from "./IconPicker";
import SearchIcon from "./SearchIcon";
const Icon = ({item}) => {
  const [showIcon, setShowIcon] = useState(false);
  const [searchInput, setSearchInput] = useState("");
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
        } transition-opacity overflow-hidden ease-in-out z-[10000] w-[60%]  mb:w-[90%] sm:h-[70%]  top-1/2 px-[2rem] sm:px-[.8rem] py-[1.5rem] rounded-lg shadow-xl left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
      >
        <div
          className="absolute right-[1rem] top-[1rem] text-[1.6rem] text-white font-bold cursor-pointer bg-indigo-800
    rounded-full p-[.5rem] sm:text-[1rem] "
          onClick={(e) => setShowIcon(false)}
        >
          <RxCross2 />
        </div>
        <div>
          <SearchIcon setSearchInput={setSearchInput} />
          <div
            className="absolute top-[4rem] right-[2rem] bottom-[2rem] left-[2rem] 
      sm:right-[.7rem] sm:left-[.7rem] sm:bottom-[.7rem] p-[1rem] overflow-y-auto mt-[1rem] border-[1px] border-gray-400 bg-white"
          >  
          <IconPicker item={item} onSelect={()=>setShowIcon(false)} searchInput={searchInput} />          
          </div>
        </div>
      </div>
    </>
  );
};

export default Icon;
