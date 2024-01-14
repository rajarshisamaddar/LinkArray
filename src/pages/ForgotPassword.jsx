import Logo from "../assets/images/logo-dark.svg";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

function ForgotPassword() {
  const { user, loginUser } = useAuth();
  const [email, setEmail] = useState("");
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setClicked(true);
    setEmail("");
    // const userInfo = { email, passwosrd };
    // loginUser(userInfo);
  };

  return (
    <form
      className="flex bg-gradient-to-b from-violet-100 to-gray-50 text-gray-500 h-screen"
      onSubmit={handleSubmit}
    >
      <div className="m-auto border p-8 w-[28rem] bg-white/30 rounded-2xl backdrop-blur-lg">
        <img className="mx-auto" src={Logo} width="150px"></img>
        <h3 className="font-semibold text-xl mt-8">Forgot Password</h3>
        <p hidden={clicked} className="text-sm mt-1">
          No worries! Just provide your email, and we'll send you a reset link.
          You'll be back in your account in no time!
        </p>

        <p hidden={!clicked} className="text-sm mt-1 text-lime-500">
          If your email is registered with us, you will receive an email with a
          link to reset your password.
        </p>

        <div className="flex flex-col mt-4">
          <label className="text-sm font-thin">Email address</label>
          <input
            title="Email must be in format of name@email.com"
            className="border rounded-md h-10 p-4 mt-1 bg-transparent focus:outline-indigo-600"
            placeholder="name@email.com"
            type="email"
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <button className="w-full mt-6 p-4 text-white rounded-md font-bold bg-gradient-to-l from-indigo-600 via-blue-700 to-indigo-600">
          Reset Password
        </button>

        <p className="text-center mt-4 font-medium">
          Remember your password?{" "}
          <a className="text-indigo-600 font-semibold" href="/sign-in">
            Sign In
          </a>
        </p>
      </div>
    </form>
  );
}

export default ForgotPassword;
