import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelopeOpenText, FaFacebook, FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
const Footer = () => {
    return (
        <>
            <footer className="bg-[#151515]  text-white">
            <div className='main-container '>
                    <div className='py-10 lg:flex items-center lg:space-x-8 z-50 border-b border-[#ffffff32]'>
                        <div className='lg:w-6/12 flex items-center space-x-3 lg:justify-start justify-center'>
                            <FaEnvelopeOpenText className='md:text-3xl text-xl text-prime'></FaEnvelopeOpenText>
                            <h2 className='md:text-2xl text-xl font-bold font-fred'>Subscribe to Newsletter</h2>
                        </div>
                        <div className='lg:w-6/12 lg:py-0 py-6'>
                            <form className="w-full lg:max-w-full max-w-md bg-white px-3 border border-[#FF7703] rounded-md lg:mx-0 mx-auto">
                                <div className="flex items-center py-2 ">
                                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="example@gmail.com" aria-label="Full name" />
                                    <button className="flex-shrink-0 bg-[#FF7703] hover:text-[#FF7703] border border-[#FF7703]  hover:bg-white duration-500 text-sm text-white py-2 px-4 rounded font-semibold" type="submit">
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="mx-6 py-10 text-center md:text-left main-container ">
                    <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {/* <!-- Middle Footer --> */}
                        <div className="">
                            <h6
                                className="mb-4 flex items-center justify-center md:justify-start md:text-3xl text-xl font-bold sec-title">
                                <img className='md:w-10 w-8 mr-3' src="https://i.ibb.co/j3rj1J3/music-education.png" alt="" />
                                Music <span className='text-prime ml-2'> Enhancer</span>
                            </h6>
                            <p className='sec-desc'>
                            Join our Music Academy and Ignite Your Love for Music - Elevate Your Skills with World-Class Instruction on Our Renowned Music School.
                            </p>
                        </div>
                        {/* <!-- Products section --> */}
                        <div className="sec-desc">
                            <h6
                                className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                Quick Links
                            </h6>
                            <p className="mb-4">
                                <Link className="text-white"
                                >About Us</Link>
                            </p>
                            <p className="mb-4">
                                <Link className="text-white"
                                >Services</Link>
                            </p>
                            <p className="mb-4">
                                <Link className="text-white"
                                >Career</Link>
                            </p>
                            <p>
                                <Link className="text-white"
                                >Contact</Link>
                            </p>
                        </div>
                        {/* <!-- Useful links section --> */}
                        <div className="sec-desc">
                            <h6
                                className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                Useful links
                            </h6>
                            <p className="mb-4">
                                <Link to="/" className="text-white"
                                >Home</Link>
                            </p>
                            <p className="mb-4">
                                <Link to="/blog" className="text-white"
                                >Disclaimer</Link>
                            </p>
                            <p className="mb-4">
                                <Link to="/" className="text-white"
                                >Support</Link>
                            </p>
                            <p>
                                <Link to="/" className="text-white"
                                >Faq</Link>
                            </p>
                        </div>
                        {/* <!-- Contact section --> */}
                        <div className=' sec-desc'>
                            <h6
                                className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                Contact
                            </h6>
                            <p className="mb-4 flex items-center justify-center md:justify-start">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="mr-3 h-5 w-5">
                                    <path
                                        d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                    <path
                                        d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                                </svg>
                                New York,USA
                            </p>
                            <p className="mb-4 flex items-center justify-center md:justify-start">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="mr-3 h-5 w-5">
                                    <path
                                        d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                    <path
                                        d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                </svg>
                                info@musicenhancer.com
                            </p>
                            <p className="mb-4 flex items-center justify-center md:justify-start">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="mr-3 h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                        clipRule="evenodd" />
                                </svg>
                                + 01 234 567 88
                            </p>
                            <p className="flex items-center justify-center md:justify-start">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="mr-3 h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z"
                                        clipRule="evenodd" />
                                </svg>
                                + 01 234 567 89
                            </p>
                        </div>
                    </div>
                </div>

                {/* <!--Copyright section--> */}
                <div className='main-container mx-auto' >
                    <div className="text-center  border-t border-[#ffffff32] md:flex justify-between items-center py-4 text-white">
                        <span>© 2023 Copyright/All Rights Reserved By Music Enhancer</span>
                        <div className='flex items-center justify-center space-x-2 md:pt-0 pt-2'>
                            <Link to='/privacy-policy'>Privacy Policy</Link>
                            <Link to='/terms-conditions'>Terms & conditions</Link>
                        </div>
                    </div>
                </div>

            </footer>

        </>
    );
};

export default Footer;