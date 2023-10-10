import React from "react";
import { LuEqual } from "react-icons/lu";
const Form = () => {
  const array = [{ id: 1 }, { id: 2 }, { id: 3 }];
  return (
    <div className="h-[24rem] overflow-y-auto mb:h-auto mt-[2rem] sm:w-[100%] pr-[2rem] mb:pr-0">
      {array.map((item) => (
        <div
          className="h-auto bg-[#fafafa] mt-[.8rem] first:mt-[0] p-[1rem] rounded-lg"
          key={item.id}
        >
          <div className="flex justify-between">
            <h3 className="flex gap-x-[.5rem] items-center font-bold text-gray-500">
              <LuEqual /> Link #{item.id}
            </h3>
            <h2 className="cursor-pointer" onClick={()=>{}}>Remove</h2>
          </div>
          <div className="mt-[1rem]">
            <div className="w-[100%]">
              <label htmlFor="platform" className="text-[.8rem] text-gray-500">Platform</label>
              <input
                type="text"
                name="platform"
                id=""
                className="w-[100%] border-[1.5px] border-gray-300 outline-none py-[.6rem] px-[1rem] rounded-lg my-[.5rem]"
                placeholder=".e.g Github"
              />
            </div>

            <div className="w-[100%]">
              <label htmlFor="link" className="text-[.8rem] text-gray-500">Link</label>
              <input
                type="text"
                name="link"
                id=""
                className="w-[100%] border-[1.5px] border-gray-300 outline-none py-[.6rem] px-[1rem] rounded-lg my-[.5rem]"
                placeholder=".e.g https://github.com/jhon"
              />
            </div>

            <div className="w-[20%]">
              <label htmlFor="color" className="text-[15px] text-gray-500 mb-[.8rem]">choose color</label>
              <input
                type="color"
                name="color"
                id=""
                className="w-[100%] rounded-lg bg-transparent"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Form;
