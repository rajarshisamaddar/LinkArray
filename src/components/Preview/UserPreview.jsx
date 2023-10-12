import React from "react";
import UserImage from "../../assets/images/avatar.png";
import { useSelector } from "react-redux";
import * as ReactFaIcons from "react-icons/fa6";
const UserPreview = () => {
  const user = useSelector((state) => state.global.user);
  const links = useSelector((state) => state.global.links);
  return (
    <div className="bg-white mb-[2rem] h-auto shadow-md mt-[6rem] w-[80%] m-auto sm:w-[90%] relative p-[1rem]">
      <div className="flex justify-center">
        <img
          src={UserImage}
          alt=""
          className="absolute top-[-4rem] h-[8rem] w-[8rem] rounded-full border-[2px] border-indigo-600"
        />
        <div className="mt-[4rem]">
          <h2 className="text-[18px] font-bold text-center text-gray-400 mb-[.3rem]">
            {user ? `${user.fname || ""} ${user.lname || ""}` : ""}
          </h2>
          <p className="text-center text-[13px] text-violet-600 mb-[.6rem]">
            {user ? `${user.bio || ""}` : ""}
          </p>
        </div>
      </div>
      <div className="mt-[1rem] grid grid-cols-4 lg:grid-cols-3 mb:grid-cols-2 sm:grid-cols-1 gap-[1.5rem]">
        {links.map((link) => (
          <div key={link.id} className="p-[1rem] sm:items-center sm:flex sm:gap-x-[.5rem] rounded-lg shadow-sm text-white cursor-pointer" style={{backgroundColor: link.color}}
          onClick={(e)=>location.href=link.link}>
            <div className="flex justify-center">
              {ReactFaIcons[link.icon] &&
                ReactFaIcons[link.icon]({
                  className: "text-[4rem] sm:text-[2rem]",
                })}
            </div>
            <h3 className="text-center mt-[.8rem] text-[1.6rem] sm:mt-0 sm:text-[1.5rem] font-bold">{link.platform}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPreview;
