import React from 'react';
import PageTitle from '../../Components/PageTitle/PageTitle';
import AllClasses from './AllClasses/AllClasses';

const Classes = () => {
    return (
        <>
            <Helmet>
                <title>Our Classes | Music Enhancer</title>
            </Helmet>
            <PageTitle pageTitle='Our Classes' pageTitleBottom='Our Classes' pageTitleBg='https://i.ibb.co/7b2ZnQf/teacher-assisting-kids-play-musical-instrument-classroom-107420-35592.jpg'></PageTitle>
            <AllClasses></AllClasses>
        </>
    );
};

export default Classes;