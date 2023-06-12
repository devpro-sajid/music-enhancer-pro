import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import SectionTopTitle from '../../../Components/SectioTopTitle/SectionTopTitle';
import useAuth from '../../../hooks/useAuth';

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                console.log(imgResponse);
                if (imgResponse.success) {
                    const imgUrl = imgResponse.data.display_url;
                    const { className,instructorName,instructorEmail,availableSeatsString, priceString } = data;
                    const availableSeats=parseFloat(availableSeatsString);
                    const status='pending';
                    const feedback='';
                   const price= parseFloat(priceString);
                    const newClass = { className, image: imgUrl,instructorName,instructorEmail, availableSeats, price,status,feedback }
                    console.log(newClass);
                    axiosSecure.post('/classes', newClass)
                        .then(data => {
                            console.log('new item posted', data.data)
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'Class added successfully',
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
            <SectionTopTitle sectionTitleTop="New Lesson?" sectionTitle="Add a Class" sectionDesc="get connected with the students"></SectionTopTitle>
            <div className='lg:px-12 md:p-8 py-3'>
                <div className="bg-dashboard py-6 md:px-8 sm:px-6 px-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* 1st row */}
                        <div className="sm:flex sm:mb-4 sm:space-x-2 md:space-x-3 lg:space-x-4 items-center">

                            <div className="form-control w-full ">
                                <label className="label ">
                                    <span className="label-text font-semibold mb-2">Class Name*</span>
                                </label>
                                <br />
                                <input type="text" placeholder="Class Name"
                                    {...register("className", { required: true, maxLength: 120 })}
                                    className="p-2 rounded-md border w-full mt-1" />
                            </div>
                            <div className="form-control w-full sm:my-0 my-3">
                                <label className="label">
                                    <span className="label-text font-semibold">Class Image*</span>
                                </label>
                                <br />
                                <input type="file" {...register("image", { required: true })}
                                    className="p-1 bg-white rounded-md border w-full mt-1" />
                            </div>

                        </div>

                        {/* 2nd row */}
                        <div className="sm:flex sm:my-4 sm:space-x-2 md:space-x-3 lg:space-x-4 items-center">

                            <div className="form-control w-full sm:mb-0 mb-3">
                                <label className="label ">
                                    <span className="label-text font-semibold mb-2">Instructor Name*</span>
                                </label>
                                <br />
                                <input type="text" defaultValue={user?.displayName} readOnly
                                    {...register("instructorName", { required: true, maxLength: 120 })}
                                    className="p-2 rounded-md border w-full mt-1" />
                            </div>
                            <div className="form-control w-full sm:my-0 my-3">
                                <label className="label">
                                    <span className="label-text font-semibold">Instructor Email*</span>
                                </label>
                                <br />
                                <input type="email" defaultValue={user?.email} readOnly {...register("instructorEmail", { required: true })}
                                    className="p-2 rounded-md border w-full mt-1" />
                            </div>

                        </div>
                        {/* 3rd row */}
                        <div className="sm:flex sm:my-4 sm:space-x-2 md:space-x-3 lg:space-x-4 items-center">

                            <div className="form-control w-full sm:mb-0 mb-3">
                                <label className="label ">
                                    <span className="label-text font-semibold mb-2">Available Seats*</span>
                                </label>
                                <br />
                                <input type="number" placeholder='quantity'
                                    {...register("availableSeatsString", { required: true})}
                                    className="p-2 rounded-md border w-full mt-1" />
                            </div>
                            <div className="form-control w-full sm:my-0 my-3">
                                <label className="label">
                                    <span className="label-text font-semibold">Price*</span>
                                </label>
                                <br />
                                <input type="number" placeholder='Class Price' {...register("priceString", { required: true })}
                                    className="p-2 rounded-md border w-full mt-1" />
                            </div>

                        </div>
                        {/* 4rth row */}

                        <input className="btn py-2 sec-desc font-semibold btn-sm mt-2 w-full bg-prime text-white rounded-sm cursor-pointer" type="submit" value="Add Class" />
                    </form>
                </div>
            </div>

        </>

    );
};

export default AddClass;