import React from "react";
import UserImage from "../../assets/images/avatar.png";
import * as ReactFaIcons from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { MdVerified } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { FaCode } from "react-icons/fa6";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { Link } from "react-router-dom";
const UserPreview = ({ user, image }) => {
  return (
    <div className="bg-white dark:bg-[#222] mb-[2rem] h-auto rounded-lg shadow-md mt-[6rem] w-[30%] mb:w-[50%] m-auto sm:w-[90%] relative p-[1rem]">
      <div className="flex justify-center">
        <img
          src={image !== "" ? image : UserImage}
          alt=""
          className="absolute top-[-4rem] h-[8rem] w-[8rem] rounded-full border-[4px] border-indigo-600 dark:border-indigo-400"
        />
        <div className="mt-[4rem]">
          {(user.admin && (
            <div className="flex uppercase items-center justify-center text-[18px] font-bold text-center text-gray-700 dark:text-gray-300 mb-[.3rem]">
              <h2>
                {user.fname} {user.lname}
              </h2>
              <MdVerified className="ml-1 text-blue-500" />
            </div>
          )) || (
            <h2 className="text-[18px] uppercase font-bold text-center text-gray-700 dark:text-gray-300 mb-[.3rem]">
              {user.fname} {user.lname}
            </h2>
          )}
          {user.admin && (
            <div className="mb-[.3rem] flex justify-center">
              <span className="m-1 text-xs bg-rose-500 dark:bg-rose-500 text-black px-2 py-1 rounded flex items-center">
                <FaIndianRupeeSign />
                <span className="uppercase">sponsor</span>
              </span>
              <span className="m-1 text-xs bg-yellow-500 dark:bg-yellow-300 text-black px-2 py-1 rounded flex items-center">
                <FiGithub />
                <span className="uppercase ml-1">Maintainer</span>
              </span>
              <span className="m-1 text-xs bg-indigo-500 dark:bg-indigo-300 text-black px-2 py-1 rounded flex items-center">
                <FaCode />
                <span className="uppercase ml-1">Pro</span>
              </span>
            </div>
          )}

          <p className="text-center text-[13px] text-violet-800 dark:text-violet-400 mb-[.6rem]">
            {user.bio}
          </p>
        </div>
      </div>
      <div className="mt-[1rem]">
        {user.links.map((link) => (
          <Link
            key={link.$id}
            to={link.link}
            target="_blank"
            className="p-[1rem] mt-[.8rem] first:mt-0 flex justify-between rounded-lg hover:scale-[1.02] transition-all shadow-sm text-white cursor-pointer items-center"
            style={{ backgroundColor: link.color }}
          >
            <div className="flex items-center gap-x-[.8rem]">
              <div className="flex justify-center">
                {ReactFaIcons[link.icon] &&
                  ReactFaIcons[link.icon]({
                    className: "text-[1.5rem] sm:text-[1rem]",
                  })}
              </div>
              <h3 className="text-center text-[1rem] sm:mt-0 sm:text-[.8rem] font-bold">
                {link.platformName}
              </h3>
            </div>
            <FiExternalLink size={22} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UserPreview;
