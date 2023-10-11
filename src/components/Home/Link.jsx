import React, { useState } from "react";
import { LuEqual } from "react-icons/lu";
import ColorPicker from "../Profile/ColorPicker";
import { useDispatch } from "react-redux";
import { removeLink } from "../../redux/slices/global/globalSlice";
import { updateLink } from "../../redux/slices/global/globalSlice";
import Icon from "./Icon";
const Link = ({ item }) => {
  const dispatch = useDispatch();
  const [platformName, setPlatformName] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [color, setColor] = useState("#fff");
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

<<<<<<< HEAD
        <div className="w-[100%] ">
          <label htmlFor="link" className="text-[.8rem] text-gray-500">
            Choose bg-color
          </label>
          <ColorPicker
            color={color}
            onChange={(e) => {
              setColor(e);
              const updateColor = { ...item, color: e.hex };
              dispatch(updateLink(updateColor));
            }}
          />
        </div>

        <div className="w-[30%] lg:w-[50%]">
          <button
            className="my-[.5rem] bg-violet-400 px-[1rem] py-[.5rem] h-fit text-[15px] text-white font-bold rounded-lg
              "
          >
            Choose icon
          </button>
=======
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
>>>>>>> 8f34a235d682feaa72ce67eed6ecaa685beb6c7f
        </div>
        <Icon />
      </div>
    </div>
  );
};

export default Link;
