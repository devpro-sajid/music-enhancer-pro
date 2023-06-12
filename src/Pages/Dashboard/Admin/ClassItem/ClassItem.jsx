import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const ClassItem = ({ classItem, refetch }) => {
    const [axiosSecure] = useAxiosSecure();
    let [isOpen, setIsOpen] = useState(false);
    
    const handleApproveClass=id=>{
        axiosSecure.patch(`/classes/approve/${id}`)
        .then(data => {
            if(data.data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${classItem?.className} has approved`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    const handleDenyClass=id=>{
        axiosSecure.patch(`/classes/deny/${id}`)
        .then(data => {
            if(data.data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${classItem?.className} has denied`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        data.toyPrice = parseFloat(data.toyPrice);
        fetch(`https://gaming-toy-server.vercel.app/updateToy/${toy._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(response => {
                console.log(response);

                if (response.modifiedCount > 0
                ) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                    setLoadUpdateToys(true);
                }
            })
    }
    return (
        <>
            <tr className="border-b last:border-0 dark:border-neutral-500" key={classItem?._id}>
                <td className="whitespace-nowrap pl-4 pr-2 py-4 font-medium"> <img className='md:w-16 w-[52px] h-[52px] md:h-16 rounded-sm' src={classItem?.image} alt="" /></td>
                <td className="whitespace-nowrap px-3 py-4">
                    {classItem?.className}
                </td>
                <td className="whitespace-nowrap px-3 py-4">{classItem?.instructorName}</td>
                <td className="whitespace-nowrap px-3 py-4">{classItem?.instructorEmail}</td>
                <td className="whitespace-nowrap px-3 py-4">{classItem?.availableSeats}</td>
                <td className="whitespace-nowrap px-3 py-4">{classItem?.price}</td>
                <td className="whitespace-nowrap px-3 py-4">{classItem?.status}</td>
                <td className="whitespace-nowrap px-3 py-4 ">
                    {classItem?.status==='pending'&& <>
                    <button onClick={()=>handleApproveClass(classItem._id)} className='bg-[#36D399]  w-[111px] py-1 px-2 text-white font-semibold rounded-md' >Approve Class</button><br/>
                    <button onClick={()=>handleDenyClass(classItem._id)} className='bg-red-600 w-[111px] my-2 py-1 px-2 text-white font-semibold rounded-md'>Deny Class</button><br />
                    <button className='bg-prime py-1 px-2 text-white font-semibold rounded-md' onClick={openModal}>Send Feedback</button>
                    </>}
                    {classItem?.status==='approved'&&<>
                    <button className='bg-prime py-1 px-2 text-white font-semibold rounded-md' onClick={openModal}>Send Feedback</button>
                    </>}
                    {classItem?.status==='denied'&&<>
                    <button className='bg-prime  py-1 px-2 text-white font-semibold rounded-md' onClick={openModal}>Send Feedback</button>
                    </>}
                    

                    <Transition appear show={isOpen} as={Fragment
                    }>
                        <Dialog as="div" className="relative z-10" onClose={closeModal}>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-black bg-opacity-25" />
                            </Transition.Child>

                            <div className="fixed inset-0 overflow-y-auto">
                                <div className="flex min-h-full items-center justify-center p-4 text-center">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                        <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                            <Dialog.Title
                                                as="h3"
                                                className="text-2xl pt-6 pb-3 text-center font-semibold leading-6 text-gray-900 "
                                            >
                                                Update Toy
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded md:px-8 px-2 pt-6 pb-6 " id='add-form'>
                                                    <div className="md:flex items-center md:space-x-4">
                                                        <div className='md:w-1/2 mb-3'>
                                                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                                                Toy Name
                                                            </label>
                                                            <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#26A8DF] focus:shadow-outline " {...register("toyName")} type="text"
                                                            />
                                                        </div>
                                                        <div className='md:w-1/2 mb-3'>
                                                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                                                Picture (url)
                                                            </label>
                                                            <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#26A8DF] focus:shadow-outline " {...register("toyPhoto")} type="url"
                                                                placeholder="https://toypicture.png/"  />
                                                        </div>
                                                    </div>
                                                    {/* add Button */}
                                                    <div onClick={closeModal} className=" ">
                                                        <button className="bg-[#26A8DF] mt-2 hover:bg-white text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full hover:text-[#26A8DF] border border-[#26A8DF] duration-500" type="submit">
                                                            Update Toy
                                                        </button>
                                                    </div>

                                                </form>
                                            </div>

                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>



                </td>
            </tr>
        </>
    );
};

export default ClassItem;