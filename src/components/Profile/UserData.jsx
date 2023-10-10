import React, { useRef } from "react";
import { BsImage } from "react-icons/bs";
const UserData = () => {
  const fileInputRef = useRef(null);
  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="grid grid-rows-2 gap-y-[1.5rem] h-full mt-[3rem]">
      <div className="bg-[#fafafa] h-[13rem] sm:h-auto lg:h-auto flex items-center px-[1.5rem] rounded-lg sm:py-[1.5rem] lg:py-[2rem]">
        <div className="grid grid-cols-3 gap-x-[3rem] items-center sm:grid-cols-1 lg:grid-cols-1">
          <p className="text-[15px] text-gray-600 sm:mb-[1rem] lg:mb-[1rem]">Profile picture</p>
          <div
            className="flex flex-col justify-center items-center cursor-pointer 
            bg-[#efebff] h-[100%] px-[1rem] py-[3.5rem] text-indigo-600 font-bold rounded-lg sm:h-full lg:h-full sm:w-[70%] lg:w-[70%]"
            onClick={handleFileUpload}
          >
            <BsImage className="text-[2rem]" />
            <p className="text-[15px] mt-[.7rem]">+ Upload Image</p>
          </div>
          <p className="text-[12px] text-gray-600 sm:mt-[1rem] lg:mt-[1rem]">
            Image must be below 1024x1024px. Use PNG or JPG format.
          </p>
          <input type="file" ref={fileInputRef} className="hidden" />
        </div>
      </div>

      <div className="bg-[#fafafa] h-[13rem] sm:h-auto lg:h-auto grid items-center px-[1.5rem] lg:py-[1rem] rounded-lg">
        <div className="grid grid-cols-[6.7rem,auto] gap-x-[2rem] items-center sm:grid-cols-1 lg:grid-cols-1 gap-y-[1rem]">
            <label htmlFor="fname" className="text-[.8rem] text-gray-600">Firstname</label>
            <input type="text" name="fname" placeholder=".e.g. Samaddar" className="w-[100%] p-[10px] border-[1px] border-gray-400
            rounded-lg outline-[1px] outline-indigo-600" />
        </div>

        <div className="grid grid-cols-[6.7rem,auto] gap-x-[2rem] items-center sm:grid-cols-1 gap-y-[1rem] lg:grid-cols-1">
            <label htmlFor="lname" className="text-[.8rem] text-gray-600">Lastname</label>
            <input type="text" name="lname" placeholder=".e.g. Rajarshi" className="w-[100%] p-[10px] border-[1px] border-gray-400
            rounded-lg outline-[1px] outline-indigo-600" />
        </div>

        <div className="grid grid-cols-[6.7rem,auto] gap-x-[2rem] items-center sm:grid-cols-1 gap-y-[1rem] lg:grid-cols-1">
            <label htmlFor="bio" className="text-[.8rem] text-gray-600 w-full">Add Bio</label>
            <input type="text" name="bio" placeholder=".e.g. Student" className="w-[100%] p-[10px] border-[1px] border-gray-400
            rounded-lg outline-[1px] outline-indigo-600" />
        </div>
      </div>
    </div>
  );
};

export default UserData;
