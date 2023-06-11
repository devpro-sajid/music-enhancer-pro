import { NavLink, Outlet } from "react-router-dom";
import React, { useContext } from 'react';
import Sidebar from '../Components/SidebarDashboard/Sidebar';
import { AuthContext } from "../providers/AuthProvider";

const Dashboard = () => {
    const {toggle}=useContext(AuthContext)
    return (
       
        <div className='main-container sm:flex items-center my-10'>
            <Sidebar></Sidebar>
            <div className={`${toggle? 'lg:w-[92%] sm:w-[88%]':'sm:w-[70%] md:w-[64%] lg:w-[75%]'} sm:pl-5 sm:pt-0 pt-8`}>
            <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Dashboard;