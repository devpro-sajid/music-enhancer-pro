import React from 'react';
import PageTitle from '../../Components/PageTitle/PageTitle';
import AllInstructors from './AllInstructors/AllInstructors';

const Instructors = () => {
    return (
        <>
        <Helmet>
                <title>Our Instructors | Music Enhancer</title>
            </Helmet>
        <PageTitle pageTitle='Our Instructors' pageTitleBottom='Our Instructors' pageTitleBg='https://i.ibb.co/3v9x4pK/a-group-of-small-school-kids-and-teacher-with-guitar-sitting-on-the-floor-in-class-e1626148034185.jpg'></PageTitle>
        <AllInstructors></AllInstructors>
        
     </>
    );
};

export default Instructors;