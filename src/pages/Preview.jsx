import React, { useState, useEffect } from "react";
import UserPreview from "../components/Preview/UserPreview";
import PreviewNav from "../components/Preview/PreviewNav";
import { useParams } from "react-router-dom";
import { databases, DATABASE_ID, USERS_ID } from "../lib/appwriteConfig";
import { Query } from "appwrite";
const Preview = () => {
  const { username } = useParams();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    databases
      .listDocuments(DATABASE_ID, USERS_ID, [Query.equal("username", username)])
      .then((response) => {
        if (response.total === 0) alert("user not exist");
        else {
          setUser(response.documents[0]);
          setLoading(false);
          // console.log(response.documents[0].links);
        }
      });
  }, []);

  return (
    <div>
      {loading && <h1>loading</h1>}
      {!loading && (
        <div>
          <PreviewNav />
          <UserPreview user={user} />
        </div>
      )}
    </div>
  );
};

export default Preview;
