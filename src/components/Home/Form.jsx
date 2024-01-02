import React, { useState, useEffect } from "react";
import Empty from "./Empty";
import UserData from "../Profile/UserData";
import Link from "./Link";
import { addLink } from "../../redux/slices/global/globalSlice";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../utils/AuthContext";
import { updateUser } from "../../CRUD/userCrud";
import { v4 as uuidv4 } from "uuid";
import { getLinks, createLinks } from "../../CRUD/LinkCrud";
import { getImage } from "../../CRUD/LinkCrud";
import Logout from "../Theme/Logout";
import ThemeSwitcher from "../Theme/ThemeSwitcher";
import toast from "react-hot-toast";

const Form = ({ heading, description, isProfile = false }) => {
  const { user, logoutUser } = useAuth();
  const dispatch = useDispatch();
  const links = useSelector((state) => state.global.links);
  const myUser = useSelector((state) => state.global.user);
  useEffect(() => {
    getLinks(dispatch, user);
  }, []);

  useEffect(() => {
    getImage(dispatch, myUser);
  }, [myUser.imageId]);

  const addNewLink = () => {
    const count = links.length + 1;
    const newLink = {
      id: uuidv4(),
      count: count,
      platform: "",
      link: "",
      color: "",
      icon: "",
      db: false,
    };
    dispatch(addLink(newLink));
  };

  const handleSave = async () => {
    if (isProfile) {
      updateUser(myUser, user);
    } else {
      if (links.every(validateLink)) {
        createLinks(links, user);
      } else {
        toast.error("Check all the fields before saving!");
      }
    }
  };

  const validateLink = (link) => {
    // Check if all fields are present
    if (
      !link.id ||
      !link.count ||
      !link.platform ||
      !link.link ||
      !link.color ||
      !link.icon
    ) {
      return false;
    }

    // Check if the link is in the correct format
    const urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!urlPattern.test(link.link);
  };

  return (
    <div
      className="bg-white dark:bg-black h-[auto] mt-[1.8rem] rounded-[1rem] py-[1.4rem]  
      sm:w-[96.5%] sm:m-auto sm:mt-[1rem] mb:w-[100%] mb:mt-[1rem]  mb:m-auto relative"
    >
      <div className="w-[90%] m-auto">
        <div className="justify-between items-center gap-x-2 flex mb-4">
          <ThemeSwitcher />
          <Logout />
        </div>
        <h1 className="text-[32px] text-gray-700 dark:text-gray-300 font-bold sm:text-[24px] flex justify-between items-center">
          {heading}
        </h1>
        <p className="text-[16px] text-gray-600 dark:text-gray-200 mt-[1rem] sm:mt-[0]">
          {description}
        </p>
        {isProfile ? (
          <UserData />
        ) : (
          <div>
            <div
              className="mt-[2rem] w-[100%] hover:bg-violet-200 dark:hover:bg-violet-300 text-center border-[1.5px] border-blue-700 text-indigo-600
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
      <p className="mt-[2rem] border-t-[.1rem] border-gray-300 dark:border-gray-600"></p>
      <div className="flex justify-end mt-[2.4rem] w-[90%] m-auto sm:w-[80%]">
        <button
          className="bg-indigo-600 w-fit sm:w-[100%] px-[2.5rem] py-[.7rem] text-[16px] text-white rounded-[.6rem] 
        hover:bg-violet-400"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Form;
