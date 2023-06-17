import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import Swal from 'sweetalert2'
import useAxiosSecure from "../../hooks/useAxiosSecure";

const SignUp = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [noMatch, setNoMatch] = useState(false)
    const onSubmit = data => {
        setNoMatch(false);
        if (data.password !== data.confirmPassword) {
            setNoMatch(true);
            reset();
            return;
        }
        createUser(data.email, data.password)
            .then(result => {

                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email,image:data.photoURL }
                        fetch('https://music-enhancer-server.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            // axiosSecure.post('/users', saveUser)
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })



                    })
                    .catch(error => console.log(error))
            })
    };

    return (
        <div className="h-screen">
            <Helmet>
                <title>SignUp | Music Enhancer</title>
            </Helmet>
            <section className="bg-gray-50 min-h-screen flex items-center justify-center lg::py-0 py-10">

                <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">

                    <div className="md:w-1/2 px-6 md:px-16">
                        <h2 className="font-bold text-2xl text-prime">Sign Up</h2>
                        <p className="text-xs pt-2 text-[#002D74]">If you are not a member yet, signUp here.</p>

                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                            <input className="p-2 mt-6 rounded-md border" type="email" name="email" {...register("email")} placeholder="Email" required />
                            <div className="relative">
                                <input className="p-2 rounded-md border w-full" type="password" name="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="Password" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                            </div>
                            <div className="relative">
                                <input className="p-2 rounded-md border w-full" type="password" {...register("confirmPassword", { required: true })} name="confirmPassword" placeholder="Confirm Password" />
                                
                                {noMatch ? <p className="text-red-600">password doesn't match</p> : <></>}
                            </div>
                            <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="p-2 rounded-md border w-full" />
                            {errors.name && <span className="text-red-600">Name is required</span>}

                            <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="p-2 rounded-md border w-full" />
                            {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}

                            <button className="bg-prime rounded-md text-white py-2 hover:scale-105 duration-300">Sign Up</button>
                        </form>

                        <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
                            <hr className="border-gray-400" />
                            <p className="text-center text-sm">OR</p>
                            <hr className="border-gray-400" />
                        </div>

                        <SocialLogin></SocialLogin>

                        <div className="mt-3 text-xs flex justify-between items-center text-black">
                            <p>Already a member?</p>
                            <button className="py-2 px-5 bg-white border rounded-md hover:scale-110 duration-300"><Link to='/login'>Login</Link></button>
                        </div>
                    </div>


                    <div className="md:block hidden w-1/2">
                        <img className="rounded-2xl" src="https://i.ibb.co/vh0YJy6/sign-page-abstract-concept-illustration-335657-3875-removebg-preview.png" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignUp;