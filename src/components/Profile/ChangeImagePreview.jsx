import React from "react";
import ImageLoading from "../Loading/ImageLoading";
import { BsImage } from "react-icons/bs";
const ChangeImagePreview = ({preview, userProfile,loading}) => {
  return (
    <div
      className="flex justify-center items-center cursor-pointer 
bg-[#efebff] dark:bg-[#222] h-[10rem] w-[10rem] overflow-hidden relative"
    >
      <img
        src={preview ? preview : userProfile.image}
        alt="preview"
        className="h-full w-full opacity-80"
      />

      <div
        className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-full w-full
    flex justify-center items-center"
      >
        {!loading ? (
          <div className="flex justify-center flex-col items-center text-white font-bold ">
            <BsImage className="text-[2rem]" />
            <p className="text-[15px] mt-[.7rem]">Change Image</p>
          </div>
        ) : (
          <ImageLoading />
        )}
      </div>
    </div>
  );
};

export default ChangeImagePreview;
