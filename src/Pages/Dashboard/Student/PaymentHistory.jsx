import React, { useEffect, useState } from 'react';
import dateFormat from 'dateformat';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import { Helmet } from 'react-helmet-async';

const PaymentHistory = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const [paidHistory, setPaidHistory] = useState([])
    useEffect(() => {
        axiosSecure.get(`enrolledClasses?email=${user?.email}`)
            .then(data => {
                setPaidHistory(data.data)
            })

    }, [axiosSecure, user])

    return (
        <>
            <Helmet>
                <title>Payment History | Music Enhancer</title>
            </Helmet>
            <div className='bg-dashboard rounded-md'>
                <div className='flex md:px-5 px-3 bg-[#fccaa1] py-3 justify-between rounded-t-md'>
                    <h2 className='font-bold sec-title md:text-xl '>Payment History</h2>
                    <h2 className='font-bold sec-title md:text-xl'>Total Paid for: {paidHistory.length}</h2>
                </div>

                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full text-left text-sm font-light bg-dashboard">
                                    <thead className="border-b font-medium dark:border-neutral-500">
                                        <tr>
                                            <th scope="col" className="px-6 py-4">Class Name</th>
                                            <th scope="col" className="px-6 py-4">Date</th>
                                            <th scope="col" className="px-6 py-4">Transaction Id</th>
                                            <th scope="col" className="px-6 py-4">Paid</th>
                                            <th scope="col" className="px-6 py-4">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {paidHistory?.map(classItem => {
                                            return (
                                                <tr className="border-b last:border-0 dark:border-neutral-500" key={classItem?._id}>
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        {classItem?.className}
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4">{dateFormat(classItem?.date, " mmmm dS, yyyy, h:MM:ss TT")}</td>
                                                    <td className="whitespace-nowrap px-6 py-4">{classItem?.transactionId}</td>
                                                    <td className="whitespace-nowrap px-6 py-4">{classItem?.price}$</td>
                                                    <td className="whitespace-nowrap px-6 py-4">{classItem?.status}</td>
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

export default PaymentHistory;