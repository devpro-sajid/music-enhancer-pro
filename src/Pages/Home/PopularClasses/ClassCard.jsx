import React from 'react';
import { FaUserPlus, FaWheelchair } from 'react-icons/fa';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const ClassCard = ({ classItem }) => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const { _id, className, image, instructorName, availableSeats, price,enrolled } = classItem;
    const handleSelectClass = item => {
        console.log(item);
        if (user && user.email && availableSeats > 0) {
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
                            title: `You have already selected ${className}`,
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

        <div className={`${availableSeats === 0 ? 'bg-red-600' : 'bg-white'} rounded-xl pb-5 shadow-sm hover:shadow-lg duration-300`}>
            <img className='rounded-t-xl h-[190px] md:h-[220px] w-full' src={image} alt="" />
            <div className='md:px-6 px-4 py-3 md:pt-6 md:pb-3'>
                <div className='flex justify-between space-x-2'>
                    <h2 className={`${availableSeats == 0 ? 'text-white' : 'text-black'} md:text-2xl text-xl font-bold sec-title`}>{className}</h2>
                    <p className={`${availableSeats == 0 ? 'text-gray-300' : 'text-prime'} text-xl font-semibold`}>{price}$</p>
                </div>
                <p className={`${availableSeats == 0 ? 'text-gray-300' : 'text-gray-500'} sec-desc `}>Instructor: {instructorName}</p>

                <div className='flex sm:flex-col md:flex-row justify-between sm:space-x-0 md:space-x-2 space-x-2 sm: items-center sm:items-start md:items-end md:pt-6 sm:pt-4 pt-6'>
                    <div>
                        <p className='flex items-center md:text-lg'><FaUserPlus className='mr-2 text-lg text-prime'></FaUserPlus><span className={`${availableSeats == 0 ? 'text-gray-300' : 'text-black'}`}>Enrolled: {enrolled}</span></p>
                        <p className='flex items-center md:text-lg mt-1'><FaWheelchair className='mr-2 text-lg text-prime'></FaWheelchair><span className={`${availableSeats == 0 ? 'text-gray-300' : 'text-black'}`}>Avail. seats: {availableSeats}</span></p>
                    </div>

                    <button onClick={() => handleSelectClass(classItem)} className='bg-prime text-white font-semibold  py-2 px-5 rounded-md sm:mt-3 md:mt-0 sm:w-full md:w-auto w-auto'>Select Class</button>
                </div>
            </div>

        </div>
    );
}

export default ClassCard;