import { createContext, useState, useEffect, useContext } from "react";
import {
  account,
  databases,
  DATABASE_ID,
  USERS_ID,
} from "../lib/appwriteConfig";
import { useNavigate } from "react-router-dom";
import { ID } from "appwrite";
import Loading from "../components/Loading/Loading";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUserStatus();
  }, []);

  const loginUser = async (userInfo) => {
    setLoading(true);

    console.log("userInfo", userInfo);

    try {
      let response = await account.createEmailSession(
        userInfo.email,
        userInfo.password
      );
      let accountDetails = await account.get();
      setUser(accountDetails);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const logoutUser = async () => {
    await account.deleteSession("current");
    setUser(null);
  };

  const registerUser = async (userInfo) => {
    setLoading(true);

    try {
      let response = await account.create(
        ID.unique(),
        userInfo.email,
        userInfo.password
      );

      await account.createEmailSession(userInfo.email, userInfo.password);
      await account.updateName(userInfo.username);
      await databases.createDocument(DATABASE_ID, USERS_ID, response.$id, {
        username: `@${userInfo.username}`,
        email: userInfo.email,
        fname: "",
        lname: "",
        bio: "",
        image: "",
        theme:""
      });
      let accountDetails = await account.get();
      setUser(accountDetails);

      navigate("/");
    } catch (error) {
      alert(error.message);
    }

    setLoading(false);
  };

  const checkUserStatus = async () => {
    try {
      let accountDetails = await account.get();
      setUser(accountDetails);
    } catch (error) {}
    setLoading(false);
  };

  const contextData = {
    user,
    loginUser,
    logoutUser,
    registerUser,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <Loading /> : children}
    </AuthContext.Provider>
  );
};

//Custom Hook
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
