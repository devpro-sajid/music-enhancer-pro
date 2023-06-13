import React, { useEffect, useState } from 'react';
import SectionTopTitle from '../../../Components/SectioTopTitle/SectionTopTitle';
import ClassCard from '../../Home/PopularClasses/ClassCard';
import { Fade } from 'react-awesome-reveal';

const AllClasses = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('https://music-enhancer-server.vercel.app/allClasses')
            .then(res => res.json())
            .then(data => setClasses(data));
    }, [])
    return (
        <div className='bg-dashboard py-12'>
            <SectionTopTitle sectionTitle='Our Music Class' sectionTitleTop='Our Classes' sectionDesc='Well organized for beginners and everyone as well'></SectionTopTitle>
            <Fade down delay={300} duration={2000} fraction={0}>
            <div className='grid sm:grid-cols-2  sm:gap-4 md:gap-8 gap-6  main-container md:pt-10 pt-6 pb-4 lg:grid-cols-3'>
                {classes?.map(classItem => <ClassCard key={classItem._id} classItem={classItem}></ClassCard>)}

            </div>
            </Fade>
        </div>
    );
};

export default AllClasses;