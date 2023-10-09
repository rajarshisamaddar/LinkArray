import React from "react";
import Empty from "../Empty/Empty";
const Link = () => {
  return (
    <div
      className="bg-white mx-h-[115vh] sm:h-full mb:h-full mt-[1.8rem] rounded-[1rem] py-[1.4rem]  
    sm:w-[96.5%] sm:m-auto sm:mt-[1rem] mb:w-[96.5%] mb:mt-[1rem]  mb:m-auto"
    >
      <div className="w-[90%] m-auto">
        <h1 className="text-[32px] text-gray-700 font-bold sm:text-[24px]">
          Customize your links
        </h1>
        <p className="text-[16px] text-gray-600 mt-[1rem] sm:mt-[0]">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
        <div
          className="mt-[2rem] w-[100%] hover:bg-violet-200 text-center border-[1.5px] border-blue-700 text-indigo-600
        font-bold text-[16px] py-[.8rem] rounded-[.6rem]"
        >
          <button className="w-[100%]">+ Add new link</button>
        </div>
        <Empty />
      </div>
      <p className="mt-[2rem] border-t-[.1rem] border-gray-300"></p>
      <div className="flex justify-end mt-[2.4rem] w-[90%] m-auto sm:w-[80%]">
        <button className="bg-indigo-600 w-fit sm:w-[100%] px-[2.5rem] py-[.7rem] text-[16px] text-white rounded-[.6rem] 
        hover:bg-violet-300">
            Save
        </button>
      </div>
    </div>
  );
};

export default Link;
