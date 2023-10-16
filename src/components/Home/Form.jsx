import React, { useState, useEffect } from "react";
import Empty from "./Empty";
import UserData from "../Profile/UserData";
import Link from "./Link";
import { addLink } from "../../redux/slices/global/globalSlice";
import { useDispatch, useSelector } from "react-redux";
import { addUserData } from "../../redux/slices/global/globalSlice";
import { useAuth } from "../../utils/AuthContext";
import { v4 as uuidv4 } from "uuid";
import {
  databases,
  DATABASE_ID,
  LINKS_ID,
  USERS_ID,
  account,
} from "../../lib/appwriteConfig";

const Form = ({ heading, description, isProfile = false }) => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const links = useSelector((state) => state.global.links);
  const myUser = useSelector((state) => state.global.user);

  useEffect(() => {
    const promise = databases.getDocument(DATABASE_ID, USERS_ID, user.$id);

    promise.then(
      function (response) {
        dispatch(
          addUserData({
            user: {
              fname: response.firstName,
              lname: response.lastName,
              bio: response.bio,
            },
          })
        );
        response.links.map((item) => {
          const addNewLink = {
            id: item.$id,
            count: item.rank,
            platform: item.platformName,
            link: item.link,
            color: item.color,
            icon: item.icon,
            db: true,
          };
          dispatch(addLink(addNewLink));
        });
      },
      function (error) {
        console.log(error); // Failure
      }
    );
  }, []);

  const addNewLink = () => {
    const count = links.length + 1;
    const newLink = {
      id: uuidv4(),
      count: count,
      platform: "",
      link: "",
      color: "",
      icon: "",
      db: false,
    };
    dispatch(addLink(newLink));
  };

  const handleSave = async () => {
    const promise = account.get();
    promise.then(
      function (response) {
        if (isProfile) {
          if (myUser.fname) {
            databases.updateDocument(DATABASE_ID, USERS_ID, response.$id, {
              firstName: myUser.fname,
            });
          }
          if (myUser.lname) {
            databases.updateDocument(DATABASE_ID, USERS_ID, response.$id, {
              lastName: myUser.lname,
            });
          }
          if (myUser.bio) {
            databases.updateDocument(DATABASE_ID, USERS_ID, response.$id, {
              bio: myUser.bio,
            });
          }
        } else {
          // console.log("links data save");
          links.map((item) => {
            if (item.db === false) {
              databases.createDocument(DATABASE_ID, LINKS_ID, item.id, {
                users: response.$id,
                rank: item.count,
                link: item.link,
                platformName: item.platform,
                icon: item.icon,
                color: item.color,
              });
            } else {
              databases.updateDocument(DATABASE_ID, LINKS_ID, item.id, {
                platformName: item.platform,
              });
            }
          });
        }
      },
      function (error) {
        console.log(error); // Failure
      }
    );
  };

  return (
    <div
      className="bg-white h-[auto] mt-[1.8rem] rounded-[1rem] py-[1.4rem]  
      sm:w-[96.5%] sm:m-auto sm:mt-[1rem] mb:w-[100%] mb:mt-[1rem]  mb:m-auto"
    >
      <div className="w-[90%] m-auto">
        <h1 className="text-[32px] text-gray-700 font-bold sm:text-[24px]">
          {heading}
        </h1>
        <p className="text-[16px] text-gray-600 mt-[1rem] sm:mt-[0]">
          {description}
        </p>
        {isProfile ? (
          <UserData />
        ) : (
          <div>
            <div
              className="mt-[2rem] w-[100%] hover:bg-violet-200 text-center border-[1.5px] border-blue-700 text-indigo-600
        font-bold text-[16px] py-[.8rem] rounded-[.6rem]"
            >
              <button className="w-[100%]" onClick={addNewLink}>
                + Add new link
              </button>
            </div>
            {links.length === 0 ? (
              <Empty />
            ) : (
              <div className="h-96 overflow-y-auto mb:h-auto mt-[2rem] sm:w-[100%] pr-[2rem] mb:pr-0">
                {links.map((item) => (
                  <Link key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      <p className="mt-[2rem] border-t-[.1rem] border-gray-300"></p>
      <div className="flex justify-end mt-[2.4rem] w-[90%] m-auto sm:w-[80%]">
        <button
          className="bg-indigo-600 w-fit sm:w-[100%] px-[2.5rem] py-[.7rem] text-[16px] text-white rounded-[.6rem] 
        hover:bg-violet-300"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Form;
