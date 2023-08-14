import React from "react";
import SectionTopTitle from "../../../Components/SectioTopTitle/SectionTopTitle";

const AboutUs = () => {
  return (
    <div className="md:flex md:space-x-5 space-y-5 md:space-y-0 py-20">
      {/* left */}
      <div className="mx-auto md:w-1/2  pr-8">
        <p className="text-prime mb-2 sec-title-top text-[25px] font-bold">
          ABOUT US
        </p>
        <h3 className="lg:text-3xl text-2xl dark:text-white  pb-2 sec-title font-semibold">
          We Help You to Grow Faster and Better
        </h3>
        <p className="mb-2 sec-desc text-gray-500 dark:text-gray-300">
          Est ante in nibh mauris cursus mattis molestie a. Tincidunt nunc
          pulvinar sapien et ligula ullamcorper malesuada. Tellus rutrum tellus
          pellentesque eu tincidunt tortor.
        </p>

        {/* icon box */}
        <div className="flex flex-col space-y-5 py-4">
          <div className="flex space-x-3">
            <div className="sm:w-[10%] w-[15%]">
              <img src="./instructors.png" alt="" />
            </div>

            <div className="sm:w-[90%] w-[85%]">
              <h4 className="md:text-2xl text-xl font-bold sec-title dark:text-white">
                Expert Instructor
              </h4>
              <p className="sec-desc text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut.
              </p>
            </div>
          </div>
          <div className="flex space-x-3">
            <div className="sm:w-[10%] w-[15%]">
              <img src="./support.png" alt="" />
            </div>

            <div className="sm:w-[90%] w-[85%]">
              <h4 className="md:text-2xl text-xl font-bold sec-title dark:text-white">
              Lifetime Online Support
              </h4>
              <p className="sec-desc text-gray-500 dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
              </p>
            </div>
          </div>
        </div>
        {/* button */}
        <button className="bg-prime text-white rounded-sm md:py-3 py-1.5 px-3 md:px-8 md:text-lg sec-desc hover-bg-btn mt-4">More About Us</button>
      </div>

      {/* Right */}
      <div className="flex flex-col items-end justify-center md:w-1/2">
        <img
          className="rounded-xl lg:h-80"
          src="https://i.ibb.co/qnX1hbP/musicslide2.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutUs;
