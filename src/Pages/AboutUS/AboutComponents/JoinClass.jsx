import React from "react";
import SectionTopTitle from "../../../Components/SectioTopTitle/SectionTopTitle";
import ProgressBar from "@ramonak/react-progress-bar";

const JoinClass = () => {
  return (
    <div className="md:flex md:space-x-5 space-y-5 md:space-y-0 py-20 justify-center items-center">
      {/* left */}
      <div className="mx-auto md:w-1/2  pr-8">
        <p className="text-prime mb-2 sec-title-top text-[25px] font-bold">
          Join Our Class
        </p>
        <h3 className="lg:text-3xl text-2xl dark:text-white  pb-2 sec-title font-semibold">
          Learn The Music From The Core & Become Mastery
        </h3>
        <p className="mb-2 sec-desc text-gray-500 dark:text-gray-300">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec.
        </p>

        {/* progress bar */}
        <div className="flex flex-col py-4">
          <h4 className="font-bold dark:text-white">Teaching Ability</h4>
          <ProgressBar
            completed={90}
            maxCompleted={100}
            bgColor="#FF7703"
            height="15px"
            borderRadius="0px"
            labelAlignment="outside"
            labelColor="#FF7703"
            animateOnRender={true}
          />

          <h4 className="font-bold mt-3 dark:text-white">
            Student Satisfaction
          </h4>
          <ProgressBar
            completed={80}
            maxCompleted={100}
            bgColor="#FF7703"
            height="15px"
            borderRadius="0px"
            labelAlignment="outside"
            labelColor="#FF7703"
            animateOnRender={true}
          />
        </div>

        {/* button */}
        <button className="bg-prime text-white rounded-sm md:py-3 py-1.5 px-3 md:px-8 md:text-lg sec-desc hover-bg-btn mt-4">
          Learn More
        </button>
      </div>

      {/* Right */}
      <div className="flex items-center justify-center md:w-1/2 space-x-3">
        <img
          className="rounded-xl w-3/6"
          src="https://templatekit.jegtheme.com/musicy/wp-content/uploads/sites/121/2021/07/learning-e1626147970198.jpg"
          alt=""
        />
        <div className="w-3/6">
        <img
          className="rounded-xl "
          src="https://templatekit.jegtheme.com/musicy/wp-content/uploads/sites/121/2021/07/D2YMQVN.jpeg"
          alt=""
        />
        <img
          className="rounded-xl mt-3"
          src="https://templatekit.jegtheme.com/musicy/wp-content/uploads/sites/121/2021/07/XJDYDWE.jpeg"
          alt=""
        />
        </div>
      </div>
    </div>
  );
};

export default JoinClass;
