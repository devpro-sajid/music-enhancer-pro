import React, { useEffect, useState } from 'react';
import SectionTopTitle from '../../../Components/SectioTopTitle/SectionTopTitle';
import InstructorCard from './InstructorCard';

const AllInstructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('https://music-enhancer-server.vercel.app/allInstructors')
            .then(res => res.json())
            .then(data => setInstructors(data));
    }, [])
    return (
        <div className='main-container py-12'>
           <SectionTopTitle sectionTitle='Our Music Instructors' sectionTitleTop='Our Instructors' sectionDesc='Highly professional from different countries'></SectionTopTitle>
           <div className='grid sm:grid-cols-2 md:grid-cols-3 md:gap-8 gap-5 pt-10 pb-6'>
            {instructors?.map(instructor=><InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)}
           </div>
            
        </div>
    );
};

export default AllInstructors;