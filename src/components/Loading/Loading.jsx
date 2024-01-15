import React from "react";

const Loading = () => {
  return (
    <div className="flex h-screen bg-white dark:bg-black">
      <div className="m-auto">
        <div class="flex gap-2">
          <div class="w-5 h-5 rounded-full animate-pulse bg-indigo-600"></div>
          <div class="w-5 h-5 rounded-full animate-pulse bg-indigo-500"></div>
          <div class="w-5 h-5 rounded-full animate-pulse bg-indigo-400"></div>
          <div class="w-5 h-5 rounded-full animate-pulse bg-indigo-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
