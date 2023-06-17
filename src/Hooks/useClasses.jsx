import { useEffect, useState } from "react";

const useClasses = () => {
    const [classes,setClasses]=useState([]);
    useEffect(()=>{
        fetch('https://music-enhancer-server.vercel.app/allClasses')
        .then(res=>res.json())
        .then(data=>setClasses(data));
    },[])
    return classes;
};

export default useClasses;