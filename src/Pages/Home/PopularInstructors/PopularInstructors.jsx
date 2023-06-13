import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import SectionTopTitle from '../../../Components/SectioTopTitle/SectionTopTitle';
import InstructorCard from '../../Instructors/AllInstructors/InstructorCard';

const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('https://music-enhancer-server.vercel.app/allInstructors')
            .then(res => res.json())
            .then(data => setInstructors(data));
    }, [])
    return (
        <div className='main-container py-12'>
        <SectionTopTitle sectionTitle='Our Popular Instructors' sectionTitleTop='Our Instructors' sectionDesc='Highly professional from different countries'></SectionTopTitle>
        <Fade down delay={300} duration={2000} fraction={0}><div className='grid sm:grid-cols-2 md:grid-cols-3 md:gap-8 gap-5 pt-10 pb-6'>
            {instructors?.slice(0,6).map(instructor => <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)}
        </div></Fade>


    </div>
    );
};

export default PopularInstructors;