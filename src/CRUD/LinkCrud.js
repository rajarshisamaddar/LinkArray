import { addLink, addUserData } from "../redux/slices/global/globalSlice";
import {
  databases,
  DATABASE_ID,
  LINKS_ID,
  USERS_ID,
  storage,
  BUCKET_ID,
} from "../lib/appwriteConfig";
import toast from "react-hot-toast";

export const getLinks = async (dispatch, user) => {
  try {
    const response = await databases.getDocument(
      DATABASE_ID,
      USERS_ID,
      user.$id
    );
    if (response) {
      dispatch(
        addUserData({
          user: {
            fname: response.fname,
            lname: response.lname,
            bio: response.bio,
            imageId: response.image,
          },
        })
      );

      response.links.map((link) => {
        dispatch(
          addLink({
            id: link.$id,
            count: link.rank,
            platform: link.platformName,
            link: link.link,
            color: link.color,
            icon: link.icon,
            file:link.file,
            db: true,
          })
        );
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getImage = async (dispatch, myUser) => {
  try {
    if (myUser.imageId !== "") {
      const response = storage.getFileView(BUCKET_ID, myUser.imageId);
      if (response) {
        dispatch(
          addUserData({ user: { image: response.href ? response.href : "" } })
        );
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const createLinks = async (links, user) => {
  let created = 0;
  let updated = 0;
  try {
    for (const item of links) {
      if (item.db === false) {
        const response = await databases.createDocument(
          DATABASE_ID,
          LINKS_ID,
          item.id,
          {
            link: item.link,
            platformName: item.platform,
            icon: item.icon,
            color: item.color,
            rank: item.count,
            user:user.$id,
            file:item.file
          }
        );
        if (response) {
          created++;
        }
      } else {
        const response = await databases.updateDocument(
          DATABASE_ID,
          LINKS_ID,
          item.id,
          {
            platformName: item.platform,
            link: item.link,
            icon: item.icon,
            color: item.color,
            rank: item.count,
            file:item.file
          }
        );
        if (item.db === true && response) {
          updated++;
        }
      }
    }
    toast.success(
      `${updated} previous links updated and ${created} new links created.`,
      {
        className: "dark:bg-[#222] bg-white dark:text-white",
      }
    );
  } catch (error) {
    toast.error("An error occurred while saving links", {
      className: "dark:bg-[#222] bg-white dark:text-white",
    });
  }
};

export const deleteLinks = async (id) => {
  try {
    const response = await databases.deleteDocument(DATABASE_ID, LINKS_ID, id);
    if (response) {
      toast.success("Successfully Removed", {
        className: "dark:bg-black bg-white dark:text-white",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
