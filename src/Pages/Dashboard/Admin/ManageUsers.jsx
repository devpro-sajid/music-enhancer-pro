import React from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handleMakeAdmin = user =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(data => {
            console.log(data)
            if(data.data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    const handleMakeInstructor = user =>{
        axiosSecure.patch(`/users/instructor/${user._id}`)
        .then(data => {
            console.log(data)
            if(data.data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Instructor Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    const handleMakeStudent = user =>{
        axiosSecure.patch(`/users/student/${user._id}`)
        .then(data => {
            console.log(data)
            if(data.data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Student Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    return (
        <div className='bg-dashboard rounded-md'>
            <div className='flex md:px-5 px-3 bg-[#fccaa1] py-3 justify-between rounded-t-md'>
                <h2 className='font-bold sec-title md:text-xl '>User Management</h2>
                <h2 className='font-bold sec-title md:text-xl'>Total Users: {users.length}</h2>
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
                                        <th scope="col" className="px-6 py-4">Email</th>
                                        <th scope="col" className="px-6 py-4">Role</th>
                                        <th scope="col" className="px-6 py-4">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users?.map(user => {
                                        return (
                                            <tr className="border-b last:border-0 dark:border-neutral-500" key={user?._id}>
                                                <td className="whitespace-nowrap px-6 py-4 font-medium"> <img className='w-12 h-12 rounded-full' src={user?.image} alt="" /></td>
                                                <td className="whitespace-nowrap px-6 py-4">
                                                {user?.name}
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4">{user?.email}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{user?.role}</td>
                                                <td className="whitespace-nowrap px-6 py-4 my-auto"><span className='flex items-center  space-x-2'>
                                                    {user?.role=='admin'&& <>
                                                    <button onClick={()=>handleMakeInstructor(user)}className='bg-prime px-2 py-1 font-semibold rounded-md text-white'>Make Instructor</button>
                                                  <button onClick={()=>handleMakeStudent(user)}className='bg-prime px-2 py-1 font-semibold rounded-md text-white'>Make Student</button>
                                                    </> }

                                                    {user?.role=='instructor'&& <>
                                                    <button onClick={()=>handleMakeAdmin(user)} className='bg-prime px-2 py-1 font-semibold rounded-md text-white'>Make Admin</button>
                                                  <button onClick={()=>handleMakeStudent(user)}  className='bg-prime px-2 py-1 font-semibold rounded-md text-white'>Make Student</button>
                                                    </> }

                                                    {user?.role=='student'&& <>
                                                    <button onClick={()=>handleMakeAdmin(user)}  className='bg-prime px-2 py-1 font-semibold rounded-md text-white'>Make Admin</button>
                                                  <button onClick={()=>handleMakeInstructor(user)}  className='bg-prime px-2 py-1 font-semibold rounded-md text-white'>Make Instructor</button>
                                                    </> }
                                                </span>
                                                  </td>
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
    );
};

export default ManageUsers;