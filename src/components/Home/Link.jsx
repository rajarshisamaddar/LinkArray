import React, { useState, useEffect } from "react";
import { LuEqual } from "react-icons/lu";
import ColorPicker from "../Profile/ColorPicker";
import { useDispatch } from "react-redux";
import { addLink, removeLink } from "../../redux/slices/global/globalSlice";
import { updateLink } from "../../redux/slices/global/globalSlice";
import { deleteLinks } from "../../CRUD/LinkCrud";
import { FaCircle } from "react-icons/fa";
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
        <div className="w-[100%] z-[10]">
          <div className="flex items-center gap-x-2">
            <p>File</p>
            <div
              className={`my-2 h-[1.4rem] w-[3rem] border-[.1rem] py-1
              rounded-[5rem]  cursor-pointer 
              ${!item.file ? "bg-gray-300 border-gray-800" :"bg-indigo-100 border-blue-800 "}`}
              onClick={() => {
                dispatch(updateLink({ ...item, file: !item.file }));
              }}
            >
              <div
                className={`flex items-center h-[100%] pb-[.015rem] px-[.2rem]
                ${
                  item.file ? "justify-end" : "justify-start"
                } transition-opacity duration-300 ease-in-out`}
              >
                <FaCircle
                  className={`text-base
                ${
                  item.file ? "text-blue-800" : "dark:text-black text-gray-500"
                }`}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%]">
          <label htmlFor="platformName" className="text-[.8rem] ">
            Platform
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
            {item.file ? "File Link" : "Link"}
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
            Background
          </label>
          <input
            max={10}
            type="text"
            name="color"
            value={item.color ? item.color : colorValue}
            onChange={(e) => {
              setColorValue(e.target.value);
              const updateLinkColor = { ...item, color: e.target.value };
              dispatch(updateLink(updateLinkColor));
            }}
            className="w-[100%] border-[1.5px] dark:bg-black dark:border-gray-600 border-gray-300 outline-none py-[.6rem] px-[1rem] rounded-lg my-[.5rem]"
            placeholder="baground color e.g.hexcode"
          />
        </div>

        <div className="w-[100%] ">
          <label htmlFor="link" className="text-[.8rem]">
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
