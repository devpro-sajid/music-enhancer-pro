import React from 'react';
import useSelectedClasses from '../../../Hooks/useSelectedClasses';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt } from 'react-icons/fa';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MySelectedClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const [selectedClasses, refetch] = useSelectedClasses();
    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#36D399',
            cancelButtonColor: '#DC2626',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`selectedClasses/${item._id}`)
                    .then(data => {
                        if (data.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                `${item?.className} has been removed`,
                                'success',
                            )
                        }
                    })
            }
        })
    }


    return (
        <>
            <Helmet>
                <title>Selected Classes | Music Enhancer</title>
            </Helmet>
            <div className='bg-dashboard rounded-md'>
                <div className='flex md:px-5 px-3 bg-[#fccaa1] py-3 justify-between rounded-t-md'>
                    <h2 className='font-bold sec-title md:text-xl '>My Selected Classes</h2>
                    <h2 className='font-bold sec-title md:text-xl'>Total Selected: {selectedClasses.length}</h2>
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
                                            <th scope="col" className="px-6 py-4">Pay</th>
                                            <th scope="col" className="px-6 py-4">Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {selectedClasses?.map(classItem => {
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
                                                    <td className="whitespace-nowrap px-6 py-4"><Link to={`payment/${classItem?._id}`}><button className='bg-prime py-1 px-5 font-semibold text-white rounded-md'>Pay</button></Link></td>
                                                    <td className="whitespace-nowrap px-6 py-4"><FaTrashAlt onClick={() => handleDelete(classItem)} className='text-xl bg-red-600 p-3 w-10 h-10 rounded-full text-white cursor-pointer' /></td>
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

export default MySelectedClass;