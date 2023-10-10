import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Mobile from "../components/Home/Mobile";
import Link from "../components/Home/Link";
import { FaFacebookF } from "react-icons/fa";
const Profile = () => {
    const data = [
        {
          id: 1,
          icon: FaFacebookF,
          p: "Facebook",
        },
    
        {
          id: 2,
          icon: FaFacebookF,
          p: "Facebook",
        },
    
        {
          id: 3,
          icon: FaFacebookF,
          p: "Facebook",
        },
    
        {
          id: 4,
          icon: FaFacebookF,
          p: "Facebook",
        },
    
        {
          id: 5,
          icon: FaFacebookF,
          p: "Facebook",
        },
    
        {
          id: 6,
          icon: FaFacebookF,
          p: "Facebook",
        },
        {
          id: 7,
          icon: FaFacebookF,
          p: "Facebook",
        },
    ];
  return (
    <>
      <Navbar isProfile />
      <div
        className={`grid grid-cols-[31.5rem,auto]
        gap-x-[2rem] w-[96.5%] m-auto mb-[2rem] mb:grid-cols-1 sm:grid-cols-1`}
      >
        <Mobile data={data} isProfile />
        <Link isProfile heading="Profile Details" description="Add your details to create a personal touch to your profile." />
      </div>
    </>
  );
};

export default Profile;
