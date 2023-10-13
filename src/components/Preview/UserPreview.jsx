import React from "react";
import UserImage from "../../assets/images/avatar.png";
import * as ReactFaIcons from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
const UserPreview = () => {
  const links = [
    {
      id:1,
      color: "#000",
      link: "https://github.com",
      icon: "FaGithub",
      platform: "Github"
    },
    {
      id:2,
      color: "#F99417",
      link: "https://google.com",
      icon: "FaGoogle",
      platform: "Google"
    },    {
      id:3,
      color: "#362FD9",
      link: "https://facebook.com",
      icon: "FaFacebook",
      platform: "Facebook"
    },    {
      id:4,
      color: "#005B41",
      link: "https://whatsapp.com",
      icon: "FaWhatsapp",
      platform: "Whatsapp"
    },
  ]
  return (
    <div className="bg-white mb-[2rem] h-auto rounded-lg shadow-md mt-[6rem] w-[30%] mb:w-[50%] m-auto sm:w-[90%] relative p-[1rem]">
      <div className="flex justify-center">
        <img
          src={UserImage}
          alt=""
          className="absolute top-[-4rem] h-[8rem] w-[8rem] rounded-full border-[2px] border-indigo-600"
        />
        <div className="mt-[4rem]">
          <h2 className="text-[18px] font-bold text-center text-gray-400 mb-[.3rem]">
            Soumayadip Saha
          </h2>
          <p className="text-center text-[13px] text-violet-600 mb-[.6rem]">
            Student
          </p>
        </div>
      </div>
      <div className="mt-[1rem]">
        {links.map((link) => (
          <div
            key={link.id}
            className="p-[1rem] mt-[.8rem] first:mt-0 flex justify-between rounded-lg hover:scale-[1.02] transition-all shadow-sm text-white cursor-pointer items-center"
            style={{ backgroundColor: link.color }}
            onClick={(e) => (location.href = link.link)}
          >
            <div className="flex items-center gap-x-[.8rem]">
              <div className="flex justify-center">
                {ReactFaIcons[link.icon] &&
                  ReactFaIcons[link.icon]({
                    className: "text-[1.5rem] sm:text-[1rem]",
                  })}
              </div>
              <h3 className="text-center text-[1rem] sm:mt-0 sm:text-[.8rem] font-bold">
                {link.platform}
              </h3>
            </div>
            <FaArrowRight />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPreview;
