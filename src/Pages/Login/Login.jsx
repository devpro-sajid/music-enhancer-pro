import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const [hidden,setHidden]=useState(true);
    const [error,setError]=useState('')
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showclassName: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideclassName: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
                form.reset();
            })
            .catch((error) => {
            
                if(error.message.includes('wrong-password')){
                    setError('Wrong Password! Please Try Again');
                }
                else if(error.message.includes('auth/user-not-found')){
                    setError('User not found'); 
                }
                else{
                    setError(error.message); 
                }
              });
    }



    return (
        <div className='h-screen'>
            <Helmet>
                <title>Music Enhancer | Login</title>
            </Helmet>
            <section className="bg-gray-50 min-h-screen flex items-center justify-center lg::py-0 py-10">
                
                <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
                    
                    <div className="md:w-1/2 px-6 md:px-16">
                        <h2 className="font-bold text-2xl text-prime">Login</h2>
                        <p className="text-xs mt-4 text-[#002D74]">If you are already a member, easily log in</p>

                        <form onSubmit={handleLogin} action="" className="flex flex-col gap-4">
                            <input className="p-2 mt-8 rounded-md border" type="email" name="email" placeholder="Email" required/>
                                <div className="relative">
                                    <input className="p-2 rounded-md border w-full" type={hidden?'password':'text'} name="password" placeholder="Password" required/>
                                <span className={hidden?'hidden':'block'} onClick={()=>setHidden(!hidden)}><FaEye className='absolute top-1/2 right-3 -translate-y-1/2'></FaEye> </span>
                                        <span className={hidden?'block':'hidden'} onClick={()=>setHidden(!hidden)}> <FaEyeSlash className='absolute top-1/2 right-3 -translate-y-1/2'></FaEyeSlash> </span>
                                        
                                </div>
                                {error?<p className="text-red-600">{error}</p>:<></>}
                                <button className="bg-prime rounded-md text-white py-2 hover:scale-105 duration-300">Login</button>
                        </form>

                        <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
                            <hr className="border-gray-400"/>
                                <p className="text-center text-sm">OR</p>
                                <hr className="border-gray-400"/>
                                </div>

                              <SocialLogin></SocialLogin>

                                <div className="mt-5 text-xs border-b border-black py-4 text-black">
                                    <a href="#">Forgot your password?</a>
                                </div>

                                <div className="mt-3 text-xs flex justify-between items-center text-black">
                                    <p>Don't have an account?</p>
                                    <button className="py-2 px-5 bg-white border rounded-md hover:scale-110 duration-300"><Link to='/signup'>Register</Link></button>
                                </div>
                        </div>

                      
                        <div className="md:block hidden w-1/2">
                            <img className="rounded-2xl" src="https://i.ibb.co/vh0YJy6/sign-page-abstract-concept-illustration-335657-3875-removebg-preview.png"/>
                        </div>
                    </div>
            </section>
        </div>
    );
};

export default Login;