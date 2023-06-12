import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';


const MyClasses = () => {
    const {user}=useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get(`/classes?email=${user?.email}`)
        return res.data;
    })
    return (
        <div>
            <h2>My Classes{classes.length}</h2>
        </div>
    );
};

export default MyClasses;