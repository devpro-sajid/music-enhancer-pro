import React, { useContext } from "react";
import { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import SidebarData from "./SidebarData";
import UserProfile from "./UserProfile";
import { AuthContext } from "../../providers/AuthProvider";
const Sidebar = () => {
  const {toggle, setToggle} = useContext(AuthContext);
  return (
    <div className={`${toggle ? "lg:w-[8%] sm:w-[12%] sidebar-contain" : "sidebar-container"} `}>
      <UserProfile toggle={toggle} />
      <SidebarData toggle={toggle} />
      <div
        className="absolute top-[7rem] flex justify-center items-center -left-5 w-10 h-10 bg-glass rounded-full cursor-pointer"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <BiChevronLeft
          className={`${
            toggle ? "rotate-180" : ""
          } text-3xl transition-all duration-300 bg-prime rounded-full hidden sm:block text-white`}
        />
      </div>
    </div>
  );
};

export default Sidebar;