import React, { useContext } from "react";
import useInstructor from "../../Hooks/useInstructor";
import useAdmin from "../../Hooks/useAdmin";
import useStudent from "../../Hooks/UseStudent";
import { adminNav } from "./adminNav";
import { instructorNav } from "./instructorNav";
import { studentNav } from "./studentNav";
import { FiLogOut } from "react-icons/fi";
import { AuthContext } from '../../providers/AuthProvider';
import {  NavLink, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";

const SidebarData = ({ toggle }) => {
  const { logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [isStudent] = useStudent();
  const navigate = useNavigate();


  return (
    <div className="">
      {/* Admin */}
      {isAdmin ? <>{adminNav.map((data) => {
        return (
          <NavLink to={`${data.link}`}
            className={`${toggle ? "w-[3.6rem]" : "w-full"
              } ${({ isActive }) => (isActive ? 'active' : '')} sidebar left-4 bottom-4`}
            key={data.id}
          >
            <div className="md:mr-6 mr-2 md:text-[1.7rem] text-[20px] text-brown sec-desc">{data.icon}</div>
            <div
              className={`${toggle ? "opacity-0 delay-200" : ""
                } text-[1rem] text-brown whitespace-pre`}
            >
              {data.text}
            </div>
          </NavLink>
        );
      })}</> : <></>}
      {/* Instructor */}
      {isInstructor ? <>{instructorNav.map((data) => {
        return (
          <NavLink to={`${data.link}`}
            className={`${toggle ? "w-[3.6rem]" : "w-full"
              } ${({ isActive }) => (isActive ? 'active' : '')} sidebar left-4 bottom-4`}
            key={data.id}
          >
            <div className="md:mr-6 mr-2 md:text-[1.7rem] text-[20px] text-brown sec-desc">{data.icon}</div>
            <div
              className={`${toggle ? "opacity-0 delay-200" : ""
                } text-[1rem] text-brown whitespace-pre`}
            >
              {data.text}
            </div>
          </NavLink>
        );
      })}</> : <></>}
      {/* Student */}
      {isStudent ? <>{studentNav.map((data) => {
        return (
          <NavLink to={`${data.link}`}
            className={`${toggle ? "w-[3.6rem]" : "w-full"
              } ${({ isActive }) => (isActive ? 'bg-white' : '')} sidebar left-4 bottom-4`}
            key={data.id}
          >
            <div className="md:mr-6 mr-2 md:text-[1.7rem] text-[20px] text-brown sec-desc">{data.icon}</div>
            <div
              className={`${toggle ? "opacity-0 delay-200" : ""
                } text-[1rem] text-brown whitespace-pre`}
            >
              {data.text}
            </div>
          </NavLink>
        );
      })}</> : <></>}

      <NavLink to='/' className={`${toggle ? "w-[3.6rem]" : "w-full"
        } ${({ isActive }) => (isActive ? 'bg-white' : '')} sidebar left-4 bottom-4`}
      >
        <div className='md:mr-6 mr-2 md:text-[1.7rem] text-[20px] text-brown sec-desc' ><FaHome /></div>
        <div
          className={`${toggle ? "opacity-0 delay-200" : ""
            } text-[1rem] text-brown whitespace-pre`}
        >
          Home
        </div>
      </NavLink>
      <div onClick={() => {
        logOut();
        navigate('/', { replace: true });
      }}
        className={`${toggle ? "w-[3.6rem]" : "w-full"
          } sidebar left-4 bottom-4`}
      >
        <div className="md:mr-6 mr-2 md:text-[1.7rem] text-[20px] text-brown sec-desc"><FiLogOut /></div>
        <div
          className={`${toggle ? "opacity-0 delay-200" : ""
            } text-[1rem] text-brown whitespace-pre`}
        >
          Logout
        </div>
      </div>

    </div>
  );
};

export default SidebarData;