import { Fragment, useContext, useState } from 'react';

import { Menu, Transition } from '@headlessui/react'

import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';


const Navbar = () => {
    // const { user, logOut } = useContext(AuthContext);
    const {user} = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleLogout = () => {
        // //   logOut()
        //     .then(() => {
        //       Swal.fire({
        //         icon: 'success',
        //         title: 'You have logged out Successfully',
        //         showConfirmButton: false,
        //         timer: 1500
        //       })
        //     })
        //     .catch((error) => {
        //       // toast.error(error.message);
        //     })
    }
    return (
        <>
            <div className='sticky top-0 z-10 -mb-[80px] '>
                <div className='px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-7xl md:px-24 lg:px-8'>
                    <div className='relative flex items-center justify-between'>
                        <Link
                            to='/'
                            aria-label='Music Enhancer'
                            title='Music Enhancer'
                            className='inline-flex items-center md:w-2/5 w-3/5'
                        >
                            <div className='flex items-center justify-center sm:w-10 w-8 h-12 rounded-full'>
                                <img src="https://i.ibb.co/j3rj1J3/music-education.png" alt="" />
                            </div>
                            <h2 className='ml-2 text-xl md:text-2xl lg:text-3xl font-bold tracking-wide sec-title text-white '>
                                Music <span className='text-prime'>Enhancer</span>
                            </h2>
                            
                        </Link>
                        <div className='hidden space-between lg:flex md:w-3/5 w-full'>
                            <ul className='items-center space-x-8 flex ml-auto mr-6'>
                                <li>
                                    <NavLink
                                        to='/'
                                        aria-label='Home'
                                        title='Home'
                                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/blog'
                                        aria-label='Blog'
                                        title='Blog'
                                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                                    >
                                        Blog
                                    </NavLink>
                                </li>
                            </ul>
                            <Menu as="div" className="relative flex items-center">
                                <div>
                                    {user ? (<div title={user?.displayName
                                    }><Menu.Button className="flex rounded-full  text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 ml-4 bg-white">
                                            <img
                                                className="h-10 w-10 rounded-full"
                                                src={user?.photoURL}
                                                alt=""
                                            />

                                        </Menu.Button></div>) : (
                                        <Link to='/login' className='bg-[#FF7703] sm:px-6 px-3 md:px-8 text-white md:py-2 rounded-sm sm:leading-6 leading-8 sm:block hidden ml-4 border border-[#FF7703] hover:bg-[#ea6d00] duration-500'>Login</Link>
                                    )}

                                </div>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 z-10 top-12 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <Menu.Item>

                                            <a
                                                href="#"
                                                className='block px-4 py-2 text-sm text-gray-700'
                                            >
                                                {user?.displayName}
                                            </a>
                                        </Menu.Item>
                                        <Menu.Item>

                                            <a onClick={handleLogout}
                                                href="#"
                                                className='block px-4 py-2 text-sm text-gray-700'
                                            >
                                                Sign out
                                            </a>
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>

                        <div className='lg:hidden flex items-center'>
                            <Menu as="div" className="relative flex items-center">
                                <div>
                                    {user ? (<div title={user?.displayName
                                    }><Menu.Button className="flex rounded-full  text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 bg-white">
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src={user?.photoURL}
                                                alt=""
                                            />

                                        </Menu.Button></div>) : <></>}

                                </div>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 z-10 top-12 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <Menu.Item>

                                            <a
                                                href="#"
                                                className='block px-4 py-2 text-sm text-gray-700'
                                            >
                                                {user?.displayName}
                                            </a>
                                        </Menu.Item>
                                        <Menu.Item>

                                            <a onClick={handleLogout}
                                                href="#"
                                                className='block px-4 py-2 text-sm text-gray-700'
                                            >
                                                Sign out
                                            </a>
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                            <button
                                aria-label='Open Menu'
                                title='Open Menu'
                                className='p-2 ml-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
                                onClick={() => setIsMenuOpen(true)}
                            >
                                <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                                    <path
                                        fill='currentColor'
                                        d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                                    />
                                    <path
                                        fill='currentColor'
                                        d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                                    />
                                    <path
                                        fill='currentColor'
                                        d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                                    />
                                </svg>
                            </button>
                            {isMenuOpen && (
                                <div className='absolute z-10 top-0 left-0 w-full'>
                                    <div className='p-5 bg-white border rounded shadow-sm'>
                                        <div className='flex items-center justify-between mb-4'>
                                            <div>
                                                <Link
                                                    to='/'
                                                    aria-label='HeroGadget'
                                                    title='HeroGadget'
                                                    className='inline-flex items-center'
                                                >
                                                    <div className='flex items-center justify-center w-8 h-8 rounded-full'>
                                                        <img src="https://i.ibb.co/j3rj1J3/music-education.png" alt="" />
                                                    </div>
                                                    <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                                                        Music E.
                                                    </span>
                                                </Link>
                                            </div>
                                            <div>
                                                <button
                                                    aria-label='Close Menu'
                                                    title='Close Menu'
                                                    className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                                                        <path
                                                            fill='currentColor'
                                                            d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <nav>
                                            <ul className='space-y-4'>
                                                <li>
                                                    <Link
                                                        to='/'
                                                        aria-label='Home'
                                                        title='Home'
                                                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                                    >
                                                        Home
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to='/blog'
                                                        aria-label='Blog'
                                                        title='Blog'
                                                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                                    >
                                                        Blog
                                                    </Link>
                                                </li>
                                                <li className={user ? 'hidden' : ''}>
                                                    <Link to='/login'>
                                                        <button className='text-white bg-amber-400 px-8 md:py-3 py-2 font-semibold rounded-md'>Login</button>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Navbar;