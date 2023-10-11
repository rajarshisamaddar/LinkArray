import React, { useState } from "react";
import { LuEqual } from "react-icons/lu";
import ColorPicker from "../Profile/ColorPicker";
import { useSelector, useDispatch } from "react-redux";
import { removeLink } from "../../redux/slices/global/globalSlice";
const Form = ({ onFormSubmit }) => {
  const links = useSelector((state) => state.global.links);
  const dispatch = useDispatch();
  const [platform, setPlatform] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const handleSubmit = () => {
    const formData = {
      platform,
      linkUrl,
    };
    onFormSubmit(formData);
    setPlatform("");
    setLinkUrl("");
  };
  return (
    <div className="h-[24rem] overflow-y-auto mb:h-auto mt-[2rem] sm:w-[100%] pr-[2rem] mb:pr-0">
      {links.map((item) => (
        <div
          className="h-auto bg-[#fafafa] mt-[.8rem] first:mt-[0] p-[1rem] rounded-lg"
          key={item.id}
        >
          <div className="flex justify-between">
            <h3 className="flex gap-x-[.5rem] items-center font-bold text-gray-500">
              <LuEqual /> Link #{item.id}
            </h3>
            <h2
              className="cursor-pointer"
              onClick={() => dispatch(removeLink(item))}
            >
              Remove
            </h2>
          </div>
          <div className="mt-[1rem]">
            <div className="w-[100%]">
              <label htmlFor="platform" className="text-[.8rem] text-gray-500">
                Platform
              </label>
              <input
                type="text"
                className="w-[100%] border-[1.5px] border-gray-300 outline-none py-[.6rem] px-[1rem] rounded-lg my-[.5rem]"
                placeholder=".e.g Github"
                name="platform"
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
              />
            </div>

            <div className="w-[100%]">
              <label htmlFor="link" className="text-[.8rem] text-gray-500">
                Link
              </label>
              <input
                type="text"
                name="link"
                value={linkUrl}
                onChange={(e) => setLinkUrl(e.target.value)}
                className="w-[100%] border-[1.5px] border-gray-300 outline-none py-[.6rem] px-[1rem] rounded-lg my-[.5rem]"
                placeholder=".e.g https://github.com/jhon"
              />
            </div>

            <div className="w-[100%] ">
              <label
                htmlFor="color"
                className="text-[15px] text-gray-500 mb-[.8rem]"
              >
                choose background
              </label>
              <ColorPicker />
            </div>

            <div className="w-[30%] lg:w-[50%]">
              <button className="my-[.5rem] bg-violet-400 px-[1rem] py-[.5rem] h-fit text-[15px] text-white font-bold rounded-lg
              " onClick={handleSubmit}>
                Choose icon
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Form;
