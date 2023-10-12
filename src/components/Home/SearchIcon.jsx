import React, {useState} from 'react'
import { BsSearch } from "react-icons/bs";
import {Icons} from './IconData'
const SearchIcon = ({setSearchInput}) => {
  return (
    <div className="flex gap-x-[2rem] items-center">
    <h1 className="text-center w-fit sm:hidden text-[1.2rem] text-violet-700 pb-1">
      Search Icon
    </h1>
    <div className="w-[70%] sm:w-[80%]  relative px-[1rem] flex items-center py-[.7rem] rounded-md bg-transparent border-[1px] border-blue-600">
      <BsSearch className="text-indigo-900 text-[1.1rem]" />
      <input
        type="text"
        className="w-[100%] bg-transparent outline-none h-full px-[1rem]"
        onChange={(e)=>setSearchInput(e.target.value)}
      />
    </div>
  </div>
  )
}

export default SearchIcon
