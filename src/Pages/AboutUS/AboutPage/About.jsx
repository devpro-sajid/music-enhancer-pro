import React from "react";
import PageTitle from "../../../Components/PageTitle/PageTitle";
import AboutUs from "../AboutComponents/AboutUs";
import OurFeatures from "../AboutComponents/OurFeatures";
import Statistics from "../../Home/SchoolStatistics/Statistics";
import JoinClass from "../AboutComponents/JoinClass";

const About = () => {
  return (
    <div className=" dark:bg-[#151515]">
      <PageTitle
        pageTitleBg="https://i.ibb.co/fDgnzFk/about-mep.jpg"
        pageTitleBottom="About Us"
        pageTitle="About Us"
      ></PageTitle>
      <div className="main-container">
        <AboutUs></AboutUs>
        <OurFeatures></OurFeatures>
        <Statistics></Statistics>
        <JoinClass></JoinClass>
      </div>
    </div>
  );
};

export default About;
