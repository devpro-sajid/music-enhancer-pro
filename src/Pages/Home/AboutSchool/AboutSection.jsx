import React from 'react';

const AboutSection = () => {
    return (
        <div className='bg-[url("https://i.ibb.co/qjZx7Dy/parallax-about.jpg")] py-20 bg-cover bg-center bg-no-repeat'>
            {/* main Container */}
            <div className='main-container sm:flex items-center'>
                {/* left side */}
                <div className="sm:pr-8 md:pr-12 sm:w-1/2">
                    <p className="text-white mb-2 sec-title-top text-[25px] font-bold">About Us</p>
                    <h3 className="lg:text-3xl text-2xl  pb-2 sec-title font-semibold text-prime">Music Enhancer Pro</h3>
                    <p className="mb-2 sec-desc text-white">Integer in justo euismod nulla feugiat lacinia non porta velit. Vestibulum vulputate purus sit amet vestibulum ultrices mauris malesuada.
                    </p>
                    <p className='mt-6 sec-desc text-white'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum sem ligula. Phasellus eleifend vel justo sit amet volutpat. Duis vitae maximus ligula, nec mattis libero. Donec eget felis odio.
                    </p>
                    <button className="bg-prime text-white rounded-sm md:py-3 py-1.5 px-3 md:px-8 md:text-lg sec-desc hover-bg-btn mt-4">Learn More</button>
                </div>
                {/* right side */}
                <div className='sm:w-1/2 flex flex-col items-center sm:items-end sm:pt-0 pt-16'>
                    <div className='md:w-80 w-64  bg-prime rounded-xl'>
                        <img className='rounded-xl relative -left-6 -top-6' src="https://i.ibb.co/c1S2822/family.jpg" alt="" />
                    </div>

                </div>

            </div>
        </div>
    );
};

export default AboutSection;