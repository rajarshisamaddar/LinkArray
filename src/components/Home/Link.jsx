import React, { useState, useEffect } from "react";
import { LuEqual } from "react-icons/lu";
import ColorPicker from "../Profile/ColorPicker";
import { useDispatch } from "react-redux";
import { removeLink } from "../../redux/slices/global/globalSlice";
import { updateLink } from "../../redux/slices/global/globalSlice";
import { deleteLinks } from "../../CRUD/LinkCrud";
import { FaHashtag } from "react-icons/fa";
import Icon from "./Icon";
const Link = ({ item }) => {
  const dispatch = useDispatch();
  const [colorValue, setColorValue] = useState();
  return (
    <div
      className="h-auto bg-[#fafafa] dark:bg-[#111] mt-[.8rem] text-gray-500
        dark:text-gray-300 first:mt-[0] p-[1rem] rounded-lg"
      key={item.id}
    >
      <div className="flex justify-between">
        <h3 className="flex gap-x-[.5rem] items-center font-bold">
          <LuEqual /> Link #{item.count}
        </h3>
        <h2
          className="cursor-pointer"
          onClick={() => {
            deleteLinks(item.id);
            dispatch(removeLink(item));
          }}
        >
          Remove
        </h2>
      </div>
      <div className="mt-[1rem]">
        <div className="mt-[1rem]">
          <div className="w-[100%] z-[10]">
            <p className="text-[0.8rem]">Downloadable</p>
            <div className="flex items-center gap-x-2 mt-[.5rem]">
              <div className="flex items-center gap-x-1">
                <p>Yes</p>
                <input
                  className={`w-4 h-4 appearance-none ${
                    item.file
                      ? "bg-violet-500 dark:bg-violet-600"
                      : "bg-violet-200"
                  } rounded-xl`}
                  type="checkbox"
                  checked={item.file}
                  onChange={() => {
                    if (!item.file) {
                      dispatch(updateLink({ ...item, file: true }));
                    }
                  }}
                />
              </div>
              <div className="flex items-center gap-x-1">
                <p>No</p>
                <input
                  className={`w-4 h-4 appearance-none ${
                    !item.file
                      ? "bg-violet-500 dark:bg-violet-600"
                      : "bg-violet-200"
                  } rounded-xl`}
                  type="checkbox"
                  checked={!item.file}
                  onChange={() => {
                    if (item.file) {
                      dispatch(updateLink({ ...item, file: false }));
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[100%] mt-[.5rem]">
          <label htmlFor="platformName" className="text-[.8rem] ">
            Title
          </label>
          <input
            maxLength={64}
            type="text"
            className="w-[100%] border-[1.5px] border-gray-300 
              dark:bg-black dark:border-gray-600 outline-none py-[.6rem] px-[1rem] rounded-lg my-[.5rem]"
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
          <label htmlFor="link" className="text-[.8rem] ">
            {item.file ? "Download link" : "Link to"}
          </label>
          <input
            maxLength={512}
            type="url"
            name="link"
            value={item.link}
            onChange={(e) => {
              const updateLinkUrl = { ...item, link: e.target.value };
              dispatch(updateLink(updateLinkUrl));
            }}
            className="w-[100%] border-[1.5px] dark:bg-black dark:border-gray-600 border-gray-300 outline-none py-[.6rem] px-[1rem] rounded-lg my-[.5rem]"
            placeholder=".e.g https://github.com/jhon"
          />
        </div>

        <div className="w-[100%]">
          <label htmlFor="link" className="text-[.8rem]">
            Background hex code
          </label>
          <div className="flex items-center border-[1.5px] dark:bg-black dark:border-gray-600 border-gray-300 outline-none py-[.6rem] px-[1rem] rounded-lg my-[.5rem]">
            <FaHashtag
              className="text-gray-600 mr-1 dark:text-gray-300"
              size={20}
            />

            <input
              type="text"
              name="color"
              value={
                item.color
                  ? item.color.slice(1)
                  : colorValue
                  ? colorValue.slice(1)
                  : ""
              }
              onChange={(e) => {
                let newColor = "#" + e.target.value;
                if (newColor.length <= 7) {
                  setColorValue(newColor);
                  const updateLinkColor = { ...item, color: newColor };
                  dispatch(updateLink(updateLinkColor));
                }
              }}
              className="w-[100%] bg-transparent outline-none uppercase placeholder:lowercase"
              placeholder="background color e.g. hexcode"
            />
          </div>
        </div>

        <div className="w-[100%] ">
          <label htmlFor="link" className="text-[.8rem]">
            Choose background color
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
