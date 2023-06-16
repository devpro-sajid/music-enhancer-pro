import React, { useEffect, useState } from 'react';
import SectionTopTitle from '../../../Components/SectioTopTitle/SectionTopTitle';
import InstructorCard from './InstructorCard';
import { Fade } from 'react-awesome-reveal';

const AllInstructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('https://music-enhancer-server.vercel.app/allInstructors')
            .then(res => res.json())
            .then(data => setInstructors(data));
    }, [])
    return (
        <div className='dark:bg-[#151515]'>
            <div className='main-container py-12'>
                <SectionTopTitle sectionTitle='Our Music Instructors' sectionTitleTop='Our Instructors' sectionDesc='Highly professional from different countries'></SectionTopTitle>
                <Fade down delay={300} duration={2000} fraction={0}><div className='grid sm:grid-cols-2 md:grid-cols-3 md:gap-8 gap-5 pt-10 pb-6'>
                    {instructors?.map(instructor => <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)}
                </div></Fade>


            </div>
        </div>

    );
};

export default AllInstructors;