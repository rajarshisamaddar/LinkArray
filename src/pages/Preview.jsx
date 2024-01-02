import React, { useState, useEffect } from "react";
import UserPreview from "../components/Preview/UserPreview";
import PreviewNav from "../components/Preview/PreviewNav";
import { useParams, useNavigate } from "react-router-dom";
import {
  databases,
  DATABASE_ID,
  USERS_ID,
  storage,
  BUCKET_ID,
} from "../lib/appwriteConfig";
import { Query } from "appwrite";
import Loading from "../components/Loading/Loading";
// import { useAuth } from "../utils/AuthContext";
import ThemeSwitcher from "../components/Theme/ThemeSwitcher";

const Preview = () => {
  const Navigate = useNavigate();

  const { username } = useParams();

  // const { user } = useAuth();
  const [userDetails, setUserDetails] = useState([]);
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserProfile = async () => {
      const response = await databases.listDocuments(DATABASE_ID, USERS_ID, [
        Query.equal("username", username),
      ]);
      if (response.total === 0) Navigate("/user-not-found/404");
      else {
        setUserDetails(response.documents[0]);
        setLoading(false);
      }
    };
    getUserProfile();
  }, []);

  useEffect(() => {
    const getProfileImage = async () => {
      try {
        if (userDetails.image !== "") {
          const response = storage.getFileView(BUCKET_ID, userDetails.image);
          if (response) setImage(response.href);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getProfileImage();
  }, [userDetails.image]);

  return (
    <div>
      {loading && <Loading />}
      {!loading && (
        <div className="pb-8">
          <PreviewNav />
          <div className="mt-2 flex justify-end w-[94%] mb:w-[92%] sm:w-[90%] m-auto">
            <ThemeSwitcher username={username} />
          </div>
          <UserPreview user={userDetails} image={image} />
        </div>
      )}
    </div>
  );
};

export default Preview;
