import React, { useEffect, useState } from 'react';
import SectionTopTitle from '../../../Components/SectioTopTitle/SectionTopTitle';
import ClassCard from './ClassCard';

const PopularClasses = () => {
    const [classes,setClasses]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/popularClasses')
        .then(res=>res.json())
        .then(data=>setClasses(data));
    },[])
    return (
        <div className='bg-dashboard py-12'>
            <SectionTopTitle sectionTitle='Most Popular Classes' sectionTitleTop='Our Classes' sectionDesc='Well organized for beginners and everyone as well'></SectionTopTitle>

            <div className='grid sm:grid-cols-2  sm:gap-4 md:gap-8 gap-6  main-container md:pt-10 pt-6 pb-4 lg:grid-cols-3'>
                {classes?.map(classItem=><ClassCard key={classItem._id} classItem={classItem}></ClassCard>)}

            </div>
        </div>
    );
};

export default PopularClasses;