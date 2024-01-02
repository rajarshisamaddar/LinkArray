import React from "react";
import { BsImage } from "react-icons/bs";
const UploadImagePreview = () => {
  return (
    <div
      className="flex flex-col justify-center items-center cursor-pointer 
bg-[#efebff] dark:bg-[#222] h-[100%] px-[1rem] py-[3.5rem] text-indigo-600 font-bold 
rounded-lg sm:h-full lg:h-full sm:w-[70%] lg:w-[70%]"
    >
      <>
        <BsImage className="text-[2rem]" />
        <p className="text-[15px] mt-[.7rem]">+ Upload Image</p>
      </>
    </div>
  );
};

export default UploadImagePreview;
