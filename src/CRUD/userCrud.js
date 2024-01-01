import { addUserData } from "../redux/slices/global/globalSlice";
import {
  databases,
  storage,
  DATABASE_ID,
  USERS_ID,
  BUCKET_ID,
} from "../lib/appwriteConfig";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

export const updateUser = async (myUser, user) => {
  try {
    if (myUser.fname && myUser.lname && myUser.bio) {
      const response = await databases.updateDocument(
        DATABASE_ID,
        USERS_ID,
        user.$id,
        {
          fname: myUser.fname,
          lname: myUser.lname,
          bio: myUser.bio,
        }
      );
      if (response) toast.success("biodata updated");
    } else {
      toast.error("Provide all data");
    }
  } catch (error) {
    console.log(error);
  }
};

export const uploadFile = async (files, user, userProfile, dispatch) => {
  try {
    const id = uuidv4();
    const response = await storage.createFile(BUCKET_ID, id, files);
    if (response) {
      toast.success("successfully uploaded");
      storage.deleteFile(BUCKET_ID, userProfile.imageId);
      databases.updateDocument(DATABASE_ID, USERS_ID, user.$id, {
        image: id,
      });
      dispatch(addUserData({ user: { imageId: id } }));
    }
  } catch (error) {
    console.log(error);
    toast.error("Failed to upload");
  }
};
