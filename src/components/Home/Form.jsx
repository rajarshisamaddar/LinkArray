import React, { useState } from "react";
import Empty from "./Empty";
import UserData from "../Profile/UserData";
import Link from "./Link";
import { addLink } from "../../redux/slices/global/globalSlice";
import { useDispatch, useSelector } from "react-redux";

const Form = ({ heading, description, isProfile = false }) => {
  const dispatch = useDispatch();
  const links = useSelector((state) => state.global.links);

  const addNewLink = () => {
    const id = links.length + 1;
    const count = links.length + 1;
    const newLink = {
      id: id,
      count: count,
      platform: "",
      link: "",
      color:"",
      icon: ""
    };
    dispatch(addLink(newLink));
  };

  return (
    <div
      className="bg-white h-[auto] mt-[1.8rem] rounded-[1rem] py-[1.4rem]  
      sm:w-[96.5%] sm:m-auto sm:mt-[1rem] mb:w-[100%] mb:mt-[1rem]  mb:m-auto"
    >
      <div className="w-[90%] m-auto">
        <h1 className="text-[32px] text-gray-700 font-bold sm:text-[24px]">
          {heading}
        </h1>
        <p className="text-[16px] text-gray-600 mt-[1rem] sm:mt-[0]">
          {description}
        </p>
        {isProfile ? (
          <UserData />
        ) : (
          <div>
            <div
              className="mt-[2rem] w-[100%] hover:bg-violet-200 text-center border-[1.5px] border-blue-700 text-indigo-600
        font-bold text-[16px] py-[.8rem] rounded-[.6rem]"
            >
              <button className="w-[100%]" onClick={addNewLink}>
                + Add new link
              </button>
            </div>
            {links.length === 0 ? (
              <Empty />
            ) : (
              <div className="h-96 overflow-y-auto mb:h-auto mt-[2rem] sm:w-[100%] pr-[2rem] mb:pr-0">
                {links.map((item) => (
                  <Link key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      <p className="mt-[2rem] border-t-[.1rem] border-gray-300"></p>
      <div className="flex justify-end mt-[2.4rem] w-[90%] m-auto sm:w-[80%]">
        <button
          className="bg-indigo-600 w-fit sm:w-[100%] px-[2.5rem] py-[.7rem] text-[16px] text-white rounded-[.6rem] 
        hover:bg-violet-300"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Form;
