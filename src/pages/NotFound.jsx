import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 gap-16">
      <div className="text-center lg:text-left">
        <h1 className="my-2 text-gray-800 font-bold text-2xl">
          Looks like you've found the doorway to the great nothing
        </h1>
        <p className="my-2 text-gray-800">
          Sorry about that! Please visit our homepage to get where you need to
          go.
        </p>
        <Link to={"/"}>
          <button className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
            Take me there!
          </button>
        </Link>
      </div>
      <div className="flex flex-col items-center lg:flex-row gap-16">
        <img src="https://i.ibb.co/G9DC8S0/404-2.png" alt="404" />
      </div>
    </div>
  );
}

export default NotFound;
