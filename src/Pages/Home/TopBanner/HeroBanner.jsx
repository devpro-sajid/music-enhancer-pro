import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import { Pagination } from "swiper";
const HeroBanner = () => {
    return (
        <Swiper
            pagination={{
                dynamicBullets: true,
                bulletClass: `swiper-pagination-bullet`
            }}
            loop={true}
            autoplay={{
                delay: 6000,
                disableOnInteraction: false,

            }}
            modules={[Autoplay,Pagination]}
            effect='fade'
            speed={3000}
            className="mySwiper"
        >
            <SwiperSlide style={{ backgroundImage: 'url(https://i.ibb.co/NnLVQg9/musicslide1.jpg)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className="bg-black bg-opacity-50">
                    <div className="main-container py-48 text-white">
                        <h2 className="text-5xl lg:block hidden font-bold">Discover the <span className="sec-title-top text-prime">Harmony</span> Within You, <br />Join Our Music School Today</h2>
                        <h2 className="text-3xl font-bold lg:hidden">Discover the <span className="sec-title-top text-prime">Harmony</span> Within You, Join Our Music School Today</h2>

                        <p className="sec-desc py-6 text-lg hidden lg:block">Join our Music Academy and Ignite Your Love for Music - <br />Elevate Your Skills with World-Class Instruction.</p>
                        <p className="sec-desc py-6 text-lg lg:hidden block">Join our Music Academy and Ignite Your Love for Music - Elevate Your Skills with World-Class Instruction.</p>
                        <div className="flex space-x-3">
                            <button className="bg-prime text-white rounded-sm md:py-3 py-1.5 px-3 md:px-8 md:text-lg sec-desc hover-bg-btn">Learn Music</button>
                            <button className="border border-[#FF7703] text-prime rounded-sm py-1.5 px-3 md:py-3 md:px-8 md:text-lg sec-desc hover-bg-btn">Become Instructor</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide style={{ backgroundImage: 'url(https://i.ibb.co/qnX1hbP/musicslide2.jpg)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className="bg-black bg-opacity-50">
                    <div className="main-container py-48 text-white">
                        <h2 className="text-5xl lg:block hidden font-bold">Unleash Your <span className="sec-title-top text-prime"><span className="sec-title-top text-prime">Musical</span> </span> Potential<br /> at Our Premier Music School</h2>
                        <h2 className="text-3xl font-bold lg:hidden">Unleash Your <span className="sec-title-top text-prime">Musical</span> Potential at Our Premier Music School</h2>

                        <p className="sec-desc py-6 text-lg hidden lg:block">Experience the Power of Music - Enroll Today at our Esteemed <br></br>Music School and Let Your Melodies Soar.</p>
                        <p className="sec-desc py-6 text-lg block lg:hidden">Experience the Power of Music - Enroll Today at our Esteemed Music School and Let Your Melodies Soar.</p>
                        <div className="flex space-x-3">
                            <button className="bg-prime text-white rounded-sm md:py-3 py-1.5 px-3 md:px-8 md:text-lg sec-desc hover-bg-btn">Learn Music</button>
                            <button className="border border-[#FF7703] text-prime rounded-sm py-1.5 px-3 md:py-3 md:px-8 md:text-lg sec-desc hover-bg-btn">Become Instructor</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide style={{ backgroundImage: 'url(https://i.ibb.co/hM1KdJW/musicslide3.jpg)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className="bg-black bg-opacity-50">
                    <div className="main-container py-48 text-white">
                        <h2 className="text-5xl lg:block hidden font-bold">Immerse Yourself in a <span className="sec-title-top text-prime">Vibrant </span>Community<br /> of Music Lovers and Lifelong Learners </h2>
                        <h2 className="text-3xl font-bold lg:hidden">Immerse Yourself in a <span className="sec-title-top text-prime">Vibrant </span>Community of Music Lovers and Lifelong Learners </h2>

                        <p className="sec-desc py-6 text-lg hidden lg:block">Unlock Your Musical Talents with our Premier Music School - <br />Where Passion Meets Excellence.</p>
                        <p className="sec-desc py-6 text-lg block lg:hidden">Unlock Your Musical Talents with our Premier Music School - Where Passion Meets Excellence.</p>
                        <div className="flex space-x-3">
                            <button className="bg-prime text-white rounded-sm md:py-3 py-1.5 px-3 md:px-8 md:text-lg sec-desc hover-bg-btn">Learn Music</button>
                            <button className="border border-[#FF7703] text-prime rounded-sm py-1.5 px-3 md:py-3 md:px-8 md:text-lg sec-desc hover-bg-btn">Become Instructor</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>


        </Swiper >

    );
};

export default HeroBanner;