import React, { useState } from "react";
import { LuEqual } from "react-icons/lu";
import ColorPicker from "../Profile/ColorPicker";
import { useSelector, useDispatch } from "react-redux";
import { removeLink } from "../../redux/slices/global/globalSlice";
import { updateLink } from "../../redux/slices/global/globalSlice";
import { RxCross2 } from "react-icons/rx";
const Link = ({ item }) => {
  const dispatch = useDispatch();
  const [platformName, setPlatformName] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [color, setColor] = useState("#fff");
  const [showIcon, setShowIcon] = useState(false);

  return (
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
          <label htmlFor="platformName" className="text-[.8rem] text-gray-500">
            Platform
          </label>
          <input
            type="text"
            className="w-[100%] border-[1.5px] border-gray-300 outline-none py-[.6rem] px-[1rem] rounded-lg my-[.5rem]"
            placeholder=".e.g Github"
            name="platformName"
            value={platformName}
            onChange={(e) => {
              setPlatformName(e.target.value);
              const updatePlatform = { ...item, platform: e.target.value };
              dispatch(updateLink(updatePlatform));
            }}
          />
        </div>

        <div className="w-[100%]">
          <label htmlFor="link" className="text-[.8rem] text-gray-500">
            Link
          </label>
          <input
            type="url"
            name="link"
            value={linkUrl}
            onChange={(e) => {
              setLinkUrl(e.target.value);
              const updateLinkUrl = { ...item, link: e.target.value };
              dispatch(updateLink(updateLinkUrl));
            }}
            className="w-[100%] border-[1.5px] border-gray-300 outline-none py-[.6rem] px-[1rem] rounded-lg my-[.5rem]"
            placeholder=".e.g https://github.com/jhon"
          />
        </div>

        <div className="w-[100%]">
          <label
            htmlFor="color"
            className="text-[15px] text-gray-500 mb-[.8rem]"
          >
            Choose background
          </label>
          <div className="mt-2 mb-2">
            <ColorPicker
              color={color}
              onChange={(e) => {
                setColor(e);
                const updateColor = { ...item, color: e.hex };
                dispatch(updateLink(updateColor));
              }}
            />
          </div>
        </div>

        <div className="w-[30%] lg:w-[50%]">
          <button
            className="my-[.5rem] bg-violet-400 px-[1rem] py-[.5rem] h-fit text-[15px] text-white font-bold rounded-lg
              "
            onClick={(e) => setShowIcon(true)}
          >
            Choose icon
          </button>
          <div
            className={`bg-gray-200 fixed h-[70%] ${
              showIcon ? "visible opacity-1" : "hidden opacity-0"
            } transition-opacity ease-in-out delay-200 w-[50%] top-1/2 px-[2rem] py-[1.5rem] rounded-lg shadow-xl left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
          >
            <div
              className="absolute right-[1rem] top-[1rem] text-[1.6rem] text-indigo-800 font-bold cursor-pointer bg-violet-200
            rounded-full p-[.5rem]"
              onClick={(e) => setShowIcon(false)}
            >
              <RxCross2 />
            </div>
            hello
          </div>
        </div>
      </div>
    </div>
  );
};

export default Link;
