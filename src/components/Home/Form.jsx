import React from "react";
import { LuEqual } from "react-icons/lu";
const Form = () => {
  const array = [{ id: 1 }, { id: 2 }, { id: 3 }];
  return (
    <div className="h-[24rem] overflow-y-auto mb:h-auto mt-[2rem] sm:w-[100%]">
      {array.map((item) => (
        <div
          className="h-[12rem] bg-[#fafafa] mt-[.8rem] first:mt-[0] p-[1rem] rounded-lg"
          key={item.id}
        >
          <div className="flex justify-between">
            <h3 className="flex gap-x-[.5rem] items-center">
              <LuEqual /> Link #{item.id}
            </h3>
            <h2>Remove</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Form;
