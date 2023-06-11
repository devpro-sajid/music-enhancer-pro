import React from 'react';
import { FaCommentMedical, FaConnectdevelop, FaDesktop, FaMicrophone, FaMicrophoneAlt, FaPeopleCarry, FaRegBuilding, FaTeamspeak, FaUserAlt } from 'react-icons/fa';



const BannerBottom = () => {
    return (
        <div className='main-container grid sm:grid-cols-2 lg:grid-cols-4 md:gap-8 gap-5 relative -top-24 z-50'>

            <div className='bg-white flex flex-col items-center px-4 py-8 text-center shadow-lg'>
                <FaMicrophoneAlt className='text-prime text-5xl'></FaMicrophoneAlt>
                <h2 className='text-2xl font-bold sec-title py-2'>Free Equipment</h2>
                <p className='sec-desc'>Equipments are provided by authority</p>
            </div>
            <div className='bg-white flex flex-col items-center px-4 py-8 text-center shadow-lg'>
                <FaConnectdevelop className='text-prime text-5xl'></FaConnectdevelop>
                <h2 className='text-2xl font-bold sec-title py-2'>High Tech</h2>
                <p className='sec-desc'>We use High demand technology</p>
            </div>
            <div className='bg-white flex flex-col items-center px-4 py-8 text-center shadow-lg'>
                <FaRegBuilding className='text-prime text-5xl'></FaRegBuilding>
                <h2 className='text-2xl font-bold sec-title py-2'>Music Studio</h2>
                <p className='sec-desc'>Very organized music studio for you</p>
            </div>
            <div className='bg-white flex flex-col items-center px-4 py-8 text-center shadow-lg'>
                <FaTeamspeak className='text-prime text-5xl'></FaTeamspeak>
                <h2 className='text-2xl font-bold sec-title py-2'>Expert Teacher</h2>
                <p className='sec-desc'>Teachers are highly experienced</p>
            </div>

        </div>
    );
};

export default BannerBottom;