import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import IconPicker from "./IconPicker";
import SearchIcon from "./SearchIcon";
const Icon = ({ item }) => {
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
        className={`${
          showIcon ? "visible opacity-1" : "hidden opacity-0"
        } h-screen  top-0 left-0 right-0 bottom-0 bg-[rgba(245,247,179,0.3)]  fixed flex justify-center items-center`}
      >
        <div
          className={`bg-[#fafafa] dark:bg-[#181818] h-[80%]  transition-opacity overflow-hidden ease-in-out  z-[10000] w-[60%]  
          mb:w-[90%] sm:h-[70%]  px-[2rem] relative sm:px-[.8rem] py-[1.5rem] rounded-lg shadow-xl 
          `}
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
      sm:right-[.7rem] sm:left-[.7rem] sm:bottom-[.7rem] p-[1rem] overflow-y-auto
       mt-[1rem] border-[1px] border-gray-400 dark:border-gray-500 bg-white dark:bg-gray-900"
            >
              <IconPicker
                item={item}
                onSelect={() => setShowIcon(false)}
                searchInput={searchInput}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Icon;
