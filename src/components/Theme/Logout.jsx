import React from "react";
import { MdLogout } from "react-icons/md";
import { useAuth } from "../../utils/AuthContext";
const Logout = () => {
  const { logoutUser } = useAuth();
  return (
    <MdLogout
      className="cursor-pointer hover:text-rose-500 text-4xl sm:text-lg"
      onClick={logoutUser}
    />
  );
};

export default Logout;
