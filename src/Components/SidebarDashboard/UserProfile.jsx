import React from "react";
import useAuth from "../../Hooks/useAuth";
import useAdmin from "../../Hooks/useAdmin";

const UserProfile = ({ toggle }) => {
    const {user}=useAuth();
  return (
    <div
      className={`flex md:gap-4 gap-3 items-center ${
        toggle
          ? "bg-none transition-all duration-300 delay-200"
          : "bg-white rounded-xl p-2"
      }`}
    >
      <div className="md:min-w-[3.5rem] md:h-[3.5rem] min-w-[40px] h-10">
        <img
          src={user?.photoURL}
          alt=""
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <div className={toggle ? "opacity-0 delay-200" : ""}>
        <h3 className="md:text-xl font-bold">{user?.displayName}</h3>
        <span className="text-[0.75rem] opacity-60 sm:hidden md:block block">{user?.email}</span>
      </div>
    </div>
  );
};

export default UserProfile;