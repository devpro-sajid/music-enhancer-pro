import React from 'react';
import Sidebar from '../../Components/SidebarDashboard/Sidebar';
import BannerBottom from '../Home/BannerBottom/BannerBottom';

const Blog = () => {
    return (
        <div className=' flex flex-col justify-center my-12 '>
            <div className='main-container sm:flex items-center '>
                <Sidebar></Sidebar>
                <BannerBottom></BannerBottom>
            </div>
        </div>

    );
};

export default Blog;