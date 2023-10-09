import React from "react";
import Navbar from "../Navbar/Navbar";
import Mobile from "../Mobile/Mobile";
import Link from "../Links/Link";
import { useState, useEffect } from "react";
const Home = () => {
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
      <Navbar />
      <div className={`grid ${isMobile ? '' : 'grid-cols-[31.5rem,auto]'} gap-x-[2rem] w-[96.5%] m-auto mb-[2rem]`}>
        {isMobile ? '' : <Mobile />}
        <Link />
      </div>
    </>
  );
};

export default Home;
