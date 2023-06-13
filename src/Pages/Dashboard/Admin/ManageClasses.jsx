import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import ClassItem from './ClassItem/ClassItem';
import { Helmet } from 'react-helmet-async';

const ManageClasses = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: allClasses = [], refetch } = useQuery(['allClasses'], async () => {
        const res = await axiosSecure.get('/allclasses')
        return res.data;
    })
    return (
        <>
            <Helmet>
                <title>Manage Classes | Music Enhancer</title>
            </Helmet>
            <div className='bg-dashboard rounded-md'>
                <div className='flex md:px-5 px-3 bg-[#fccaa1] py-3 justify-between rounded-t-md'>
                    <h2 className='font-bold sec-title md:text-xl '>Manage Classes</h2>
                    <h2 className='font-bold sec-title md:text-xl'>Total Class: {allClasses.length}</h2>
                </div>

                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full text-left text-sm font-light bg-dashboard">
                                    <thead className="border-b font-medium dark:border-neutral-500">
                                        <tr>
                                            <th scope="col" className="px-6 py-4">Photo</th>
                                            <th scope="col" className="px-3 py-4">Name</th>
                                            <th scope="col" className="px-3 py-4">Instructor Name</th>
                                            <th scope="col" className="px-3 py-4">Email</th>
                                            <th scope="col" className="px-3 py-4">Seats</th>
                                            <th scope="col" className="px-3 py-4">Price</th>
                                            <th scope="col" className="px-3 py-4">Status</th>
                                            <th scope="col" className="px-3 py-4">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {allClasses?.map(classItem => {
                                            return (
                                                <ClassItem key={classItem._id} classItem={classItem} refetch={refetch}></ClassItem>
                                            )
                                        })}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
};

export default ManageClasses;