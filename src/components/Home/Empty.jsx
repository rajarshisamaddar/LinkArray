import React from "react";
import EmptyImage from "../../assets/images/illustration-empty.svg";
const Empty = () => {
  return (
    <div className="bg-[#fafafa] flex flex-col justify-center items-center p-[2rem] mt-[1.5rem] rounded-[.6rem] sm:p-[.5rem]">
      <div>
        <img src={EmptyImage} alt="" />
      </div>
      <h1 className="text-[32px] font-bold mt-[2rem] sm:text-[24px]">Let's get you started</h1>
      <p className="text-[16px] text-gray-500 text-center w-[80%] sm:w-[100%] mt-[1rem]">
        Use the “Add new link” button to get started. Once you have more than
        one link, you can reorder and edit them. We're here to help you share
        your profiles with everyone!
      </p>
    </div>
  );
};

export default Empty;
