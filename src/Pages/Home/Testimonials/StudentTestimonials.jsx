import React from 'react';
import SectionTopTitle from '../../../Components/SectioTopTitle/SectionTopTitle';
import { FaStar } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';

const StudentTestimonials = () => {
    const testimonials = [
        {}
    ]
    return (
        <div className='bg-fixed bg-cover bg-center bg-n-repeat bg-[url("https://i.ibb.co/qnX1hbP/musicslide2.jpg")] '>
            <div className='bg-black bg-opacity-50 py-16'>
                <div className='main-container text-center'>
                    <p className="text-white mb-2 sec-title-top text-[25px] font-bold">Testimonials</p>
                    <h3 className="lg:text-3xl text-2xl  pb-2 sec-title font-semibold text-prime">What Our Students Say
                    </h3>
                    <p className="mb-12 sec-desc text-white">Integer in justo euismod nulla feugiat lacinia non porta velit.
                    </p>
                    {/* Testimonials */}
                    <Swiper
                        loop={true}
                        breakpoints= {{
                            480: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            767: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            },
                            
                        }

                        }
                        autoplay={{
                            delay: 6000,
                            disableOnInteraction: false,

                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >

                        <SwiperSlide className='bg-white  dark:bg-[#151515] rounded-sm p-8'>
                            <div className='flex flex-col items-center justify center'>

                                <div className='flex space-x-2 items-center justify-center'>
                                    <FaStar className='text-prime'></FaStar>
                                    <FaStar className='text-prime'></FaStar>
                                    <FaStar className='text-prime'></FaStar>
                                    <FaStar className='text-prime'></FaStar>
                                    <FaStar className='text-prime'></FaStar>
                                </div>

                                <p className='pt-5 pb-8 sec-desc text-gray-500 dark:text-gray-300'>I am most grateful that my son's guitar teacher not only makes learning fun and shares his knowledge, but his passion for music as well. I could not have found a better place for him to learn guitar.</p>
                                <img className='w-16' src="https://wpmet.com/plugin/elementskit/wp-content/uploads/2021/04/testimonial2_author_img_01.png" alt="" />
                                <h4 className="sm:text-2xl text-xl font-bold sec-title pt-2 dark:text-white">Martin Wood</h4>
                                <p className="font-semibold text-prime">Parent</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='bg-white  dark:bg-[#151515] rounded-sm p-8'>
                            <div className='flex flex-col items-center justify center'>

                                <div className='flex space-x-2 items-center justify-center'>
                                    <FaStar className='text-prime'></FaStar>
                                    <FaStar className='text-prime'></FaStar>
                                    <FaStar className='text-prime'></FaStar>
                                    <FaStar className='text-prime'></FaStar>
                                    <FaStar className='text-prime'></FaStar>
                                </div>

                                <p className='pt-5 pb-8 sec-desc text-gray-500 dark:text-gray-300'>My son has been taking piano and guitar lessons for more than a year. He loves his teachers and I can tell that they really care about my kid too. Your music school is wonderful and I highly recommend.</p>
                                <img className='w-16' src="https://wpmet.com/plugin/elementskit/wp-content/uploads/2021/04/testimonial2_author_img_02.png" alt="" />
                                <h4 className="sm:text-2xl text-xl font-bold sec-title pt-2 dark:text-white">Louise Flores</h4>
                                <p className="font-semibold text-prime">Parent</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='bg-white  dark:bg-[#151515] rounded-sm p-8'>
                            <div className='flex flex-col items-center justify center'>

                                <div className='flex space-x-2 items-center justify-center'>
                                    <FaStar className='text-prime'></FaStar>
                                    <FaStar className='text-prime'></FaStar>
                                    <FaStar className='text-prime'></FaStar>
                                    <FaStar className='text-prime'></FaStar>
                                    <FaStar className='text-prime'></FaStar>
                                </div>

                                <p className='pt-5 pb-8 sec-desc text-gray-500 dark:text-gray-300'>The school has everything that children need for successful study: textbooks, daily assignments, planner, notebooks, music sheets, a staff who are very nice and kind, and ready to help at any time.I Rate them 10/10</p>
                                <img className='w-16' src="https://wpmet.com/plugin/elementskit/wp-content/uploads/2021/04/testimonial2_author_img_03.png" alt="" />
                                <h4 className="sm:text-2xl text-xl font-bold sec-title pt-2 dark:text-white">Diana Jones</h4>
                                <p className="font-semibold text-prime">Parent</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='bg-white  dark:bg-[#151515] rounded-sm p-8'>
                            <div className='flex flex-col items-center justify center'>

                                <div className='flex space-x-2 items-center justify-center'>
                                    <FaStar className='text-prime'></FaStar>
                                    <FaStar className='text-prime'></FaStar>
                                    <FaStar className='text-prime'></FaStar>
                                    <FaStar className='text-prime'></FaStar>
                                    <FaStar className='text-prime'></FaStar>
                                </div>

                                <p className='pt-5 pb-8 sec-desc text-gray-500 dark:text-gray-300'>I am most grateful that my son's guitar teacher not only makes learning fun and shares his knowledge, but his passion for music as well. I could not have found a better place for him to learn guitar.</p>
                                <img className='w-16' src="https://wpmet.com/plugin/elementskit/wp-content/uploads/2021/04/testimonial2_author_img_01.png" alt="" />
                                <h4 className="sm:text-2xl text-xl font-bold sec-title pt-2 dark:text-white">Martin Wood</h4>
                                <p className="font-semibold text-prime">Parent</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='bg-white  dark:bg-[#151515] rounded-sm p-8'>
                            <div className='flex flex-col items-center justify center'>

                                <div className='flex space-x-2 items-center justify-center'>
                                    <FaStar className='text-prime'></FaStar>
                                    <FaStar className='text-prime'></FaStar>
                                    <FaStar className='text-prime'></FaStar>
                                    <FaStar className='text-prime'></FaStar>
                                    <FaStar className='text-prime'></FaStar>
                                </div>

                                <p className='pt-5 pb-8 sec-desc text-gray-500 dark:text-gray-300'>My son has been taking piano and guitar lessons for more than a year. He loves his teachers and I can tell that they really care about my kid too. Your music school is wonderful and I highly recommend.</p>
                                <img className='w-16' src="https://wpmet.com/plugin/elementskit/wp-content/uploads/2021/04/testimonial2_author_img_02.png" alt="" />
                                <h4 className="sm:text-2xl text-xl font-bold sec-title pt-2 dark:text-white">Louise Flores</h4>
                                <p className="font-semibold text-prime">Parent</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='bg-white  dark:bg-[#151515] rounded-sm p-8'>
                            <div className='flex flex-col items-center justify center'>

                                <div className='flex space-x-2 items-center justify-center'>
                                    <FaStar className='text-prime'></FaStar>
                                    <FaStar className='text-prime'></FaStar>
                                    <FaStar className='text-prime'></FaStar>
                                    <FaStar className='text-prime'></FaStar>
                                    <FaStar className='text-prime'></FaStar>
                                </div>

                                <p className='pt-5 pb-8 sec-desc text-gray-500 dark:text-gray-300'>The school has everything that children need for successful study: textbooks, daily assignments, planner, notebooks, music sheets, a staff who are very nice and kind, and ready to help at any time.I Rate them 10/10</p>
                                <img className='w-16' src="https://wpmet.com/plugin/elementskit/wp-content/uploads/2021/04/testimonial2_author_img_03.png" alt="" />
                                <h4 className="sm:text-2xl text-xl font-bold sec-title pt-2 dark:text-white">Diana Jones</h4>
                                <p className="font-semibold text-prime">Parent</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='bg-white  dark:bg-[#151515] rounded-sm p-8'>
                            <div className='flex flex-col items-center justify center'>

                                <div className='flex space-x-2 items-center justify-center'>
                                    <FaStar className='text-prime'></FaStar>
                                    <FaStar className='text-prime'></FaStar>
                                    <FaStar className='text-prime'></FaStar>
                                    <FaStar className='text-prime'></FaStar>
                                    <FaStar className='text-prime'></FaStar>
                                </div>

                                <p className='pt-5 pb-8 sec-desc text-gray-500 dark:text-gray-300'>I am most grateful that my son's guitar teacher not only makes learning fun and shares his knowledge, but his passion for music as well. I could not have found a better place for him to learn guitar.</p>
                                <img className='w-16' src="https://wpmet.com/plugin/elementskit/wp-content/uploads/2021/04/testimonial2_author_img_01.png" alt="" />
                                <h4 className="sm:text-2xl text-xl font-bold sec-title pt-2 dark:text-white">Martin Wood</h4>
                                <p className="font-semibold text-prime">Parent</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='bg-white  dark:bg-[#151515] rounded-sm p-8'>
                            <div className='flex flex-col items-center justify center'>

                                <div className='flex space-x-2 items-center justify-center'>
                                    <FaStar className='text-prime'></FaStar>
                                    <FaStar className='text-prime'></FaStar>
                                    <FaStar className='text-prime'></FaStar>
                                    <FaStar className='text-prime'></FaStar>
                                    <FaStar className='text-prime'></FaStar>
                                </div>

                                <p className='pt-5 pb-8 sec-desc text-gray-500 dark:text-gray-300'>My son has been taking piano and guitar lessons for more than a year. He loves his teachers and I can tell that they really care about my kid too. Your music school is wonderful and I highly recommend.</p>
                                <img className='w-16' src="https://wpmet.com/plugin/elementskit/wp-content/uploads/2021/04/testimonial2_author_img_02.png" alt="" />
                                <h4 className="sm:text-2xl text-xl font-bold sec-title pt-2 dark:text-white">Louise Flores</h4>
                                <p className="font-semibold text-prime">Parent</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='bg-white  dark:bg-[#151515] rounded-sm p-8'>
                            <div className='flex flex-col items-center justify center'>

                                <div className='flex space-x-2 items-center justify-center'>
                                    <FaStar className='text-prime'></FaStar>
                                    <FaStar className='text-prime'></FaStar>
                                    <FaStar className='text-prime'></FaStar>
                                    <FaStar className='text-prime'></FaStar>
                                    <FaStar className='text-prime'></FaStar>
                                </div>

                                <p className='pt-5 pb-8 sec-desc text-gray-500 dark:text-gray-300'>The school has everything that children need for successful study: textbooks, daily assignments, planner, notebooks, music sheets, a staff who are very nice and kind, and ready to help at any time.I Rate them 10/10</p>
                                <img className='w-16' src="https://wpmet.com/plugin/elementskit/wp-content/uploads/2021/04/testimonial2_author_img_03.png" alt="" />
                                <h4 className="sm:text-2xl text-xl font-bold sec-title pt-2 dark:text-white">Diana Jones</h4>
                                <p className="font-semibold text-prime">Parent</p>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>




        </div>
    );
};

export default StudentTestimonials;