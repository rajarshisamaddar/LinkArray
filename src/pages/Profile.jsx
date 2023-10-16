import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Mobile from "../components/Home/Mobile";
import Form from "../components/Home/Form";
import { useSelector } from "react-redux";
const Profile = () => {
  const links = useSelector((state) => state.global.links);
  return (
    <>
      <Navbar isProfile />
      <div
        className={`grid grid-cols-[31.5rem,auto]
        gap-x-[2rem] w-[96.5%] m-auto mb-[2rem] mb:grid-cols-1 sm:grid-cols-1`}
      >
        <Mobile data={links} />
        <Form
          isProfile
          heading="Profile Details"
          description="Add your details to create a personal touch to your profile."
        />
      </div>
    </>
  );
};

export default Profile;
