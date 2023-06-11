import { NavLink, Outlet } from "react-router-dom";
import React from 'react';
import Sidebar from '../Components/SidebarDashboard/Sidebar';

const Dashboard = () => {
    return (
        
        <div className='main-container sm:flex  my-10 items-center'>
            <Sidebar></Sidebar>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;