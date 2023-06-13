import React from 'react';
import { FaWheelchair } from 'react-icons/fa';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const ClassCard = ({ classItem }) => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const { _id, className, image, instructorName, availableSeats, price } = classItem;
    const handleSelectClass = item => {
        console.log(item);
        if (user && user.email && availableSeats > 0 ){
            const selectedItem = { selectedId: _id, className, instructorName, image, price, availableSeats, email: user.email }
            fetch('https://music-enhancer-server.vercel.app/selectedClasses', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: `You have selected ${className} for enroll`,
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                    else {
                        Swal.fire({
                            position: 'center',
                            icon: 'error',
                            title: `You have already selected ${className} for enroll`,
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }

                })
        }
        else {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: `You have to login first to select classes`,
                showConfirmButton: false,
                timer: 1500
            })
            navigate('/login', { replace: true })
        }

    }
    return (
        <div className='bg-white rounded-xl pb-5 shadow-sm hover:shadow-lg duration-300'>
            <img className='rounded-t-xl h-[190px] md:h-[220px] w-full' src={image} alt="" />
            <div className='md:px-6 px-4 py-3 md:pt-6 md:pb-3'>
                <div className='flex justify-between space-x-2'>
                    <h2 className='md:text-2xl text-xl font-bold sec-title'>{className}</h2>
                    <p className='text-xl font-semibold text-prime'>{price}$</p>
                </div>
                <p className='sec-desc text-gray-500'>Instructor: {instructorName}</p>

                <div className='flex sm:flex-col md:flex-row justify-between sm:space-x-0 md:space-x-2 space-x-2 sm: items-center sm:items-start md:items-center md:pt-6 sm:pt-4 pt-6'>
                    <p className='flex items-center md:text-lg'><FaWheelchair className='mr-2 text-lg text-prime'></FaWheelchair>Available seats: {availableSeats}</p>
                    <button onClick={() => handleSelectClass(classItem)} className='bg-prime text-white font-semibold  py-2 px-5 rounded-md sm:mt-3 md:mt-0 sm:w-full md:w-auto w-auto'>Select Class</button>
                </div>
            </div>

        </div>
    );
}

export default ClassCard;