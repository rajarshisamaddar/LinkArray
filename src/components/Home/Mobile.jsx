import React from "react";
import MobileFrame from "../../assets/images/illustration-phone-mockup.svg";
import UserImage from "../../assets/images/avatar13.jpg";
import { FaArrowRight } from "react-icons/fa6";

const Mobile = ({ data, isProfile = false }) => {
  const maxVisibleItems = 6;
  const visibleItems = data.slice(0, maxVisibleItems);
  return (
    <>
      <div className="bg-white px-[4rem] py-[4rem] flex items-center justify-center mt-[1.8rem] 
      rounded-[1rem] max-h-[115vh] mb:hidden sm:hidden">
        <div className="h-[100%] m-[2rem] flex-1 relative overflow-hidden">
          <div className="flex justify-center h-[100%]">
            <img src={MobileFrame} alt="" className="h-[100%]" />
          </div>
          <div className="text-black absolute w-[90%] top-[12%] left-[5%] right[5%] m-[0,auto]">
            <div className="flex justify-center">
              <img
                src={UserImage}
                alt=""
                className="rounded-full h-[7rem] w-[7rem] border-[.3rem] border-blue-700"
              />
            </div>

            <div>
              <h2 className="mt-[1rem] font-bold text-gray-500 text-center text-[1.1rem]">
                Jhon Deo
              </h2>

              <p className="mt-[.2rem] text-gray-800 text-center text-[.7rem]">
                soumayadipsaha2002@gmail.com
              </p>
            </div>
            {isProfile ? (
              ""
            ) : (
              <div className="mt-[4rem] overflow-hidden mb-[-10rem]">
                <ul>
                  {visibleItems.map((Item) => (
                    <li
                      className="flex gap-x-[.7rem] mt-[.4rem] items-center justify-between bg-black text-white w-[90%] lg:w-[80%] m-auto py-[.5rem] px-[1.5rem]
                    rounded-lg text-[16px] lg:last:hidden"
                      key={Item.id}
                    >
                      <div className="flex gap-x-[.3rem] items-center">
                        <Item.icon className="text-[16px]" />
                        <p>{Item.p}</p>
                      </div>
                      <div>
                        <FaArrowRight />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <ul>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobile;
