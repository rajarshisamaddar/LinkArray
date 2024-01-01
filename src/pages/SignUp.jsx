import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import { useAuth } from "../utils/AuthContext";

function SignUp() {
  const navigate = useNavigate();
  const { registerUser, user } = useAuth();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === password2) {
      const userInfo = { username, email, password, password2 };
      registerUser(userInfo);
    } else {
      alert("Password mismatch ☹️");
      setPassword("");
      setPassword2("");
    }
  };

  return (
    <form
      className="flex bg-gradient-to-b from-violet-100 to-gray-50 text-gray-500 h-screen"
      onSubmit={handleSubmit}
    >
      <div className="m-auto border p-8 bg-white/30 rounded-2xl backdrop-blur-lg">
        <img className="mx-auto" src={Logo} width="150px"></img>
        <h3 className="font-semibold text-xl mt-8">Create account</h3>
        <p className="text-lg mt-1">
          Let's get you started sharing your links!
        </p>

        <div className="flex flex-col mt-4">
          <label className="text-sm font-thin">Username</label>
          <input
            title="Username can be 5 to 20 alpha characters"
            className="border rounded-md h-10 p-4 mt-1 bg-transparent focus:outline-indigo-600"
            placeholder="rahulinks"
            type="username"
            pattern="[A-Za-z0-9]{5,20}"
            required
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>

        <div className="flex flex-col mt-4">
          <label className="text-sm font-thin">Email address</label>
          <input
            title="Email must be in format of name@email.com"
            className="border rounded-md h-10 p-4 mt-1 bg-transparent focus:outline-indigo-600"
            placeholder="rahul@email.com"
            type="email"
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="flex flex-col mt-4">
          <label className="text-sm font-thin">Password</label>
          <input
            className="border rounded-md h-10 p-4 mt-1 bg-transparent focus:outline-indigo-600"
            type="password"
            required
            placeholder="Password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div className="flex flex-col mt-4">
          <label className="text-sm font-thin">Confirm password</label>
          <input
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
            className="border rounded-md h-10 p-4 mt-1 bg-transparent focus:outline-indigo-600"
            placeholder="Confirm password"
            type="password"
            required
            value={password2}
            onChange={(e) => {
              setPassword2(e.target.value);
            }}
          />
        </div>

        <button className="w-full mt-6 p-4 text-white rounded-md font-bold bg-gradient-to-l from-indigo-600 via-blue-700 to-indigo-600">
          Create new account
        </button>

        <p className="text-center mt-4 font-medium">
          Already have an account?{" "}
          <a className="text-indigo-600 font-semibold" href="/sign-in">
            Login
          </a>
        </p>
      </div>
    </form>
  );
}

export default SignUp;
