import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEdit, FaEye, FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
const InstructorClassRow = ({ classItem, refetch }) => {
    const {image}=classItem;
    const [axiosSecure] = useAxiosSecure();
    let [isOpen, setIsOpen] = useState(false);
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

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
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgUrl = imgResponse.data.display_url;
                    const { className, instructorName, instructorEmail, availableSeatsString, priceString } = data;
                    const availableSeats = parseFloat(availableSeatsString);
                    const price = parseFloat(priceString);
                    const status = classItem.status;
                    const updatedClass = { className, image: imgUrl, instructorName, instructorEmail, availableSeats, price, status }
                    axiosSecure.patch(`/classes/${classItem._id}`, updatedClass)
                        .then(data => {
                            if (data.data.modifiedCount) {
                                refetch();
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'Class updated successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
                else{
                    const { className, instructorName,instructorEmail, availableSeatsString, priceString } = data;
                    const availableSeats = parseFloat(availableSeatsString);
                    const price = parseFloat(priceString);
                    const status = classItem.status;
                    const updatedClass = { className, instructorName,image:image, instructorEmail, availableSeats, price, status }
                    axiosSecure.patch(`/classes/${classItem._id}`, updatedClass)
                        .then(data => {
                            if (data.data.modifiedCount) {
                                refetch();
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'Class updated successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })
    
       
    }

return (
    <>
        <tr className="border-b last:border-0 dark:border-neutral-500" key={classItem?._id}>
            <td className="whitespace-nowrap px-6 py-4 font-medium"> <img className='md:w-20 w-[52px] h-[52px] md:h-20 rounded-sm' src={classItem?.image} alt="" /></td>
            <td className="whitespace-nowrap px-6 py-4">
                {classItem?.className}
            </td>
            <td className="whitespace-nowrap px-6 py-4">{classItem?.availableSeats}</td>
            <td className="whitespace-nowrap px-6 py-4">{classItem?.price}$</td>
            <td className="whitespace-nowrap px-6 py-4">{classItem?.status}</td>
            <td className="whitespace-nowrap px-6 py-4">{classItem?.feedback}</td>
            <td className="whitespace-nowrap px-6 py-4"><FaEdit className={`${classItem.status==='approved'?'hidden':'block'} text-xl`} onClick={openModal} /></td>
        </tr>


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
                    <span className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <span className="fixed inset-0 overflow-y-auto">
                    <span className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-2xl  sec-title pt-6 pb-3 text-center font-semibold leading-6 text-gray-900 md:mb-4 mb-2"
                                >
                                    Update Data
                                </Dialog.Title>
                                <span className="mt-2">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        {/* 1st row */}
                                        <span className="sm:flex sm:mb-4 sm:space-x-2 md:space-x-3 lg:space-x-4 items-center">

                                            <span className="form-control w-full ">
                                                <label className="label ">
                                                    <span className="label-text font-semibold mb-2">Class Name*</span>
                                                </label>
                                                <br />
                                                <input type="text" placeholder="Class Name"
                                                    {...register("className", { required: true, maxLength: 120 })} defaultValue={classItem?.className}
                                                    className="p-2 rounded-md border w-full mt-1" />
                                            </span>
                                            <span className="form-control w-full sm:my-0 my-3">
                                                <label className="label">
                                                    <span className="label-text font-semibold">Class Image*</span>
                                                </label>
                                                <br />
                                                <input type="file" {...register("image")}
                                                    className="p-1 bg-white rounded-md border w-full mt-1" />
                                            </span>

                                        </span>

                                        {/* 2nd row */}
                                        <span className="sm:flex sm:my-4 sm:space-x-2 md:space-x-3 lg:space-x-4 items-center">

                                            <span className="form-control w-full sm:mb-0 mb-3">
                                                <label className="label ">
                                                    <span className="label-text font-semibold mb-2">Instructor Name*</span>
                                                </label>
                                                <br />
                                                <input type="text" defaultValue={classItem?.instructorName} readOnly
                                                    {...register("instructorName", { required: true, maxLength: 120 })}
                                                    className="p-2 rounded-md border w-full mt-1" />
                                            </span>
                                            <span className="form-control w-full sm:my-0 my-3">
                                                <label className="label">
                                                    <span className="label-text font-semibold">Instructor Email*</span>
                                                </label>
                                                <br />
                                                <input type="email" defaultValue={classItem?.instructorEmail} readOnly {...register("instructorEmail", { required: true })}
                                                    className="p-2 rounded-md border w-full mt-1" />
                                            </span>

                                        </span>
                                        {/* 3rd row */}
                                        <span className="sm:flex sm:my-4 sm:space-x-2 md:space-x-3 lg:space-x-4 items-center">

                                            <span className="form-control w-full sm:mb-0 mb-3">
                                                <label className="label ">
                                                    <span className="label-text font-semibold mb-2">Available Seats*</span>
                                                </label>
                                                <br />
                                                <input type="number" placeholder='quantity' defaultValue={classItem.availableSeats}
                                                    {...register("availableSeatsString", { required: true })}
                                                    className="p-2 rounded-md border w-full mt-1" />
                                            </span>
                                            <span className="form-control w-full sm:my-0 my-3">
                                                <label className="label">
                                                    <span className="label-text font-semibold">Price*</span>
                                                </label>
                                                <br />
                                                <input type="number" placeholder='Class Price' defaultValue={classItem?.price} {...register("priceString", { required: true })}
                                                    className="p-2 rounded-md border w-full mt-1" />
                                            </span>

                                        </span>
                                        {/* 4rth row */}
                                        <span onClick={closeModal} >
                                            <input className="btn py-2 sec-desc font-semibold btn-sm mt-2 w-full bg-prime text-white rounded-sm cursor-pointer" type="submit" value="Update Class" />
                                        </span>

                                    </form>
                                </span>

                            </Dialog.Panel>
                        </Transition.Child>
                    </span>
                </span>
            </Dialog>
        </Transition>
    </>
);
};

export default InstructorClassRow;