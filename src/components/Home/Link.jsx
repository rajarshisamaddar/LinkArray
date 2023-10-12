import React, { useState, useEffect } from "react";
import { LuEqual } from "react-icons/lu";
import ColorPicker from "../Profile/ColorPicker";
import { useDispatch } from "react-redux";
import { removeLink } from "../../redux/slices/global/globalSlice";
import { updateLink } from "../../redux/slices/global/globalSlice";
import Icon from "./Icon";
const Link = ({ item }) => {
  const dispatch = useDispatch();

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
            value={item.platform}
            onChange={(e) => {
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
            value={item.link}
            onChange={(e) => {
              const updateLinkUrl = { ...item, link: e.target.value };
              dispatch(updateLink(updateLinkUrl));
            }}
            className="w-[100%] border-[1.5px] border-gray-300 outline-none py-[.6rem] px-[1rem] rounded-lg my-[.5rem]"
            placeholder=".e.g https://github.com/jhon"
          />
        </div>

        <div className="w-[100%] ">
          <label htmlFor="link" className="text-[.8rem] text-gray-500">
            Choose bg-color
          </label>
          <div className="mt-[.5rem] mb-[.5rem]">
            <ColorPicker
              color={item.color}
              onChange={(e) => {
                const updateColor = { ...item, color: e.hex };
                dispatch(updateLink(updateColor));
              }}
            />
          </div>
        </div>
        <Icon item={item} />
      </div>
    </div>
  );
};

export default Link;
