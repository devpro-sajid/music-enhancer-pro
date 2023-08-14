import React from "react";
import SectionTopTitle from "../../../Components/SectioTopTitle/SectionTopTitle";
import { FaClipboardCheck, FaCompressArrowsAlt, FaHospitalUser } from "react-icons/fa";

const OurFeatures = () => {
  return (
    <div className="py-16">
      <SectionTopTitle
        sectionTitleTop="Our Features"
        sectionTitle="Included Features For You"
        sectionDesc="We Help You to Achieve Your Dreams"
      ></SectionTopTitle>
      {/* features list */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
        <div className="px-8 flex flex-col justify-center items-center text-center">
          <FaCompressArrowsAlt className="text-prime md:text-5xl text-4xl"></FaCompressArrowsAlt>
          <h4 className="md:text-2xl text-xl font-bold sec-title dark:text-white py-3">
            Target Oriented
          </h4>
          <p className="mb-2 sec-desc text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="px-8 flex flex-col justify-center items-center text-center">
          <FaHospitalUser className="text-prime md:text-5xl text-4xl"></FaHospitalUser>
          <h4 className="md:text-2xl text-xl font-bold sec-title dark:text-white py-3">
            Expert Instructor
          </h4>
          <p className="mb-2 sec-desc text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="px-8 flex flex-col justify-center items-center text-center">
          <FaClipboardCheck className="text-prime md:text-5xl text-4xl"></FaClipboardCheck>
          <h4 className="md:text-2xl text-xl font-bold sec-title dark:text-white py-3">
            Success Guarantee
          </h4>
          <p className="mb-2 sec-desc text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurFeatures;
