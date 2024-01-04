import React from "react";
import { addUserData } from "../../redux/slices/global/globalSlice";
import { useSelector, useDispatch } from "react-redux";
const UserDetails = () => {
  const userProfile = useSelector((state) => state.global.user);
  const dispatch = useDispatch();
  return (
    <div
      className="bg-[#fafafa] dark:bg-[#111] h-[13rem] sm:h-auto 
  text-gray-600 dark:text-gray-300 lg:h-auto grid items-center px-[1.5rem] lg:py-[1rem] rounded-lg"
    >
      <div className="grid grid-cols-[6.7rem,auto] gap-x-[2rem] items-center sm:grid-cols-1 lg:grid-cols-1 gap-y-[1rem]">
        <label htmlFor="fname" className="text-[.8rem] ">
          Firstname
        </label>
        <input
          maxLength={16}
          type="text"
          name="fname"
          placeholder=".e.g. Rajarshi"
          className="w-[100%] p-[10px] border-[1px] border-gray-400
        dark:bg-black dark:border-gray-600
        rounded-lg outline-[1px] outline-indigo-600"
          value={userProfile.fname}
          onChange={(e) => {
            dispatch(addUserData({ user: { fname: e.target.value } }));
          }}
        />
      </div>

      <div className="grid grid-cols-[6.7rem,auto] gap-x-[2rem] items-center sm:grid-cols-1 gap-y-[1rem] lg:grid-cols-1 sm:mt-[1rem] lg:mt-[1rem]">
        <label htmlFor="lname" className="text-[.8rem] ">
          Lastname
        </label>
        <input
          maxLength={16}
          type="text"
          name="lname"
          placeholder=".e.g. Samaddar"
          className="w-[100%] p-[10px] border-[1px] border-gray-400 dark:bg-black dark:border-gray-600
        rounded-lg outline-[1px] outline-indigo-600"
          value={userProfile.lname}
          onChange={(e) => {
            dispatch(addUserData({ user: { lname: e.target.value } }));
          }}
        />
      </div>

      <div className="grid grid-cols-[6.7rem,auto] gap-x-[2rem] items-center sm:grid-cols-1 gap-y-[1rem] lg:grid-cols-1 sm:mt-[1rem] lg:mt-[1rem]">
        <label htmlFor="bio" className="text-[.8rem]  w-full">
          Add Bio
        </label>
        <input
          type="text"
          maxLength={200}
          name="bio"
          placeholder=".e.g. Student"
          className="w-[100%] p-[10px] border-[1px] border-gray-400 dark:bg-black dark:border-gray-600
        rounded-lg outline-[1px] outline-indigo-600 h-[4rem]"
          value={userProfile.bio}
          onChange={(e) => {
            dispatch(addUserData({ user: { bio: e.target.value } }));
          }}
        />
      </div>
    </div>
  );
};

export default UserDetails;
