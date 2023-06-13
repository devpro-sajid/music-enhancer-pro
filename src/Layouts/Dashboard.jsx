import { NavLink, Outlet } from "react-router-dom";
import React, { useContext } from 'react';
import Sidebar from '../Components/SidebarDashboard/Sidebar';
import { AuthContext } from "../providers/AuthProvider";
import { Slide } from "react-awesome-reveal";

const Dashboard = () => {
    const { toggle } = useContext(AuthContext)
    return (

        <div className='main-container sm:flex  my-10'>
            <Sidebar></Sidebar>
            <div className={`${toggle ? 'lg:w-[92%] sm:w-[88%]' : 'sm:w-[70%] md:w-[64%] lg:w-[75%]'} sm:pl-5 sm:pt-0 pt-8`}>
                <Slide direction='right' duration={2000} fraction={0}>
                    <Outlet></Outlet>
                </Slide>
            </div>

        </div>
    );
};

export default Dashboard;