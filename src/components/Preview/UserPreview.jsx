import React from "react";
import UserImage from "../../assets/images/avatar.png";
import * as ReactFaIcons from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
const UserPreview = ({ user, image }) => {
  console.log(image);
  return (
    <div className="bg-white mb-[2rem] h-auto rounded-lg shadow-md mt-[6rem] w-[30%] mb:w-[50%] m-auto sm:w-[90%] relative p-[1rem]">
      <div className="flex justify-center">
        <img
          src={image !== "" ? image : UserImage}
          alt=""
          className="absolute top-[-4rem] h-[8rem] w-[8rem] rounded-full border-[2px] border-indigo-600"
        />
        <div className="mt-[4rem]">
          <h2 className="text-[18px] font-bold text-center text-gray-400 mb-[.3rem]">
            {user.fname} {user.lname}
          </h2>
          <p className="text-center text-[13px] text-violet-600 mb-[.6rem]">
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
            <FaArrowRight />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UserPreview;
