import React from "react";
import MobileFrame from "/framework-8233851.svg";
import { useState, useEffect } from "react";
import UserImage from "/avatar13.jpg";
const Mobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 991);
  };

  useEffect(() => {
    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  });
  return (
    <>
      {isMobile ? (
        ""
      ) : (
        <div className="bg-white px-[4rem] py-[4rem] flex items-center justify-center mt-[1.8rem] rounded-[1rem] ">
          <div className="h-[100%] m-[2rem] flex-1 relative overflow-hidden">
            <img src={MobileFrame} alt="" className="h-[100%]" />
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

              <div>
                <ul>
                    <li>
                       
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Mobile;
