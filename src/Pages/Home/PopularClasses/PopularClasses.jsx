import React, { useEffect, useState } from 'react';

const PopularClasses = () => {
    const [classes,setClasses]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/popularClasses')
        .then(res=>res.json())
        .then(data=>setClasses(data));
    },[])
    return (
        <div>
            <h2>This is {classes.length}</h2>
        </div>
    );
};

export default PopularClasses;