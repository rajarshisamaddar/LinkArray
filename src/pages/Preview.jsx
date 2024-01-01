import React, { useState, useEffect } from "react";
import UserPreview from "../components/Preview/UserPreview";
import PreviewNav from "../components/Preview/PreviewNav";
import { useParams } from "react-router-dom";
import {
  databases,
  DATABASE_ID,
  USERS_ID,
  storage,
  BUCKET_ID,
} from "../lib/appwriteConfig";
import { Query } from "appwrite";
import Loading from "../components/Loading/Loading";
import { useAuth } from "../utils/AuthContext";

const Preview = () => {
  const { username } = useParams();

  const { user } = useAuth();
  console.log(user);
  const [userDetails, setUserDetails] = useState([]);
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserProfile = async () => {
      const response = await databases.listDocuments(DATABASE_ID, USERS_ID, [
        Query.equal("username", username),
      ]);
      if (response.total === 0) alert("user not exist");
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
        const response = storage.getFileView(BUCKET_ID, userDetails.image);
        if (response) setImage(response.href);
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
        <div>
          <PreviewNav />
          <UserPreview user={userDetails} image={image} />
        </div>
      )}
    </div>
  );
};

export default Preview;
