import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaEdit } from 'react-icons/fa'
import { Helmet } from 'react-helmet-async';
import InstructorClassRow from './InstructorClassRow/InstructorClassRow';

const MyClasses = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get(`/classes?email=${user?.email}`)
        return res.data;
    })

    
    return (
        <>
            <Helmet>
                <title>My Classes | Music Enhancer</title>
            </Helmet>
            <div className='bg-dashboard rounded-md'>
                <div className='flex md:px-5 px-3 bg-[#fccaa1] py-3 justify-between rounded-t-md'>
                    <h2 className='font-bold sec-title md:text-xl '>My Classes</h2>
                    <h2 className='font-bold sec-title md:text-xl'>Total Class: {classes.length}</h2>
                </div>

                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full text-left text-sm font-light bg-dashboard">
                                    <thead className="border-b font-medium dark:border-neutral-500">
                                        <tr>
                                            <th scope="col" className="px-6 py-4">Photo</th>
                                            <th scope="col" className="px-6 py-4">Name</th>
                                            <th scope="col" className="px-6 py-4">Seats</th>
                                            <th scope="col" className="px-6 py-4">Price</th>
                                            <th scope="col" className="px-6 py-4">status</th>
                                            <th scope="col" className="px-6 py-4">Feedback</th>
                                            <th scope="col" className="px-6 py-4">Update</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {classes?.map(classItem =><InstructorClassRow key={classItem._id} classItem={classItem} refetch={refetch}></InstructorClassRow>  )}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>

    );
};

export default MyClasses;