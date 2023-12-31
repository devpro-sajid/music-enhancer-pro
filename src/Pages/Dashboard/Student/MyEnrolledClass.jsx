import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useClasses from '../../../Hooks/useClasses';
import { Helmet } from 'react-helmet-async';

const MyEnrolledClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const classes = useClasses();
    const [enrolledClasses, setEnrolledClass] = useState([]);
    useEffect(() => {
        axiosSecure.get(`enrolledClasses?email=${user?.email}`)
            .then(data => {
                let enrolled = [];
                for (const enrolledClass of data.data) {
                    const enrollClass = classes.filter(classItem => classItem._id == enrolledClass.selectedId);
                    enrolled.push(enrollClass[0]);
                }
                setEnrolledClass([...enrolled]);
            })

    }, [classes, axiosSecure, user])
    return (
        <>
            <Helmet>
                <title>Enrolled Classes | Music Enhancer</title>
            </Helmet>
            <div className='bg-dashboard rounded-md'>
                <div className='flex md:px-5 px-3 bg-[#fccaa1] py-3 justify-between rounded-t-md'>
                    <h2 className='font-bold sec-title md:text-xl '>My Enrolled Classes</h2>
                    <h2 className='font-bold sec-title md:text-xl'>Total Enrolled: {enrolledClasses.length}</h2>
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
                                            <th scope="col" className="px-6 py-4">Instructor name</th>
                                            <th scope="col" className="px-6 py-4">Available Seats</th>
                                            <th scope="col" className="px-6 py-4">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {enrolledClasses?.map(classItem => {
                                            return (
                                                <tr className="border-b last:border-0 dark:border-neutral-500" key={classItem?._id}>
                                                    <td className="whitespace-nowrap px-6 py-4 font-medium"> <img className='md:w-20 w-[52px] h-[52px] md:h-20 rounded-sm' src={classItem?.image} alt="" /></td>
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        {classItem?.className}
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        {classItem?.instructorName}
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4">{classItem?.availableSeats}</td>
                                                    <td className="whitespace-nowrap px-6 py-4">{classItem?.price}$</td>
                                                </tr>
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
    );
};

export default MyEnrolledClass;