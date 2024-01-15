import React from "react";
import MobileFrame from "../../assets/images/illustration-empty2.svg";
import UserImage from "../../assets/images/avatar.png";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import * as ReactFaIcons from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
const Mobile = ({ data }) => {
  const user = useSelector((state) => state.global.user);

  // const maxVisibleItems = 7;
  // const visibleItems = data.slice(0, maxVisibleItems);
  return (
    <>
      <div
        className="bg-white dark:bg-black px-[4rem] py-[4rem] flex items-center justify-center mt-[1.8rem] 
      rounded-[1rem] h-auto mb:hidden sm:hidden"
      >
        <div className="h-[90%] m-[2rem] flex-1 relative overflow-hidden">
          <div className="flex justify-center h-[100%]">
            <img src={MobileFrame} alt="" className="h-[100%] select-none" />
          </div>
          <div className="text-black absolute w-[90%] top-[12%] left-[5%] right[5%] h-[80%] m-[0,auto]">
            <div className="flex justify-center">
              <img
                src={user.image ? user.image : UserImage}
                alt=""
                className="rounded-full h-[7rem] w-[7rem] border-[.3rem] border-indigo-600 select-none"
              />
            </div>

            <div>
              <h2 className="mt-[1rem] font-bold text-slate-800 dark:text-slate-300 text-center text-[1.1rem]">
                {user ? `${user.fname || ""}  ${user.lname || ""}` : ""}
              </h2>

              <p className="mt-[.2rem] text-gray-800 dark:text-gray-300 text-center text-[.7rem]">
                {user ? `${user.bio || ""}` : ""}
              </p>
            </div>
            <div className="mt-[2rem] mb-[-10rem] h-[60%] overflow-y-auto">
              <ul>
                {data.map((Item) => (
                  <li
                    className={`flex gap-x-[.7rem] mt-[.4rem] items-center  justify-between 
                      text-white w-[90%] lg:w-[80%] h-[100%] m-auto py-[.5rem] px-[1.5rem]
                    rounded-lg text-[16px] lg:last:hidden cursor-pointer last:mb-2`}
                    style={
                      Item.color
                        ? { backgroundColor: Item.color }
                        : { backgroundColor: "#ccc" }
                    }
                    key={Item.id}
                    onClick={(e) => window.open(Item.link, "_blank")}
                  >
                    <div className="flex gap-x-2 items-center">
                      {ReactFaIcons[Item.icon] &&
                        ReactFaIcons[Item.icon]({
                          className: "text-[20px]",
                        })}
                      <Link className="text-[16px]">{Item.platform}</Link>
                    </div>
                    <div>{Item.file ? <LuDownload /> : <FaArrowRight />}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobile;
