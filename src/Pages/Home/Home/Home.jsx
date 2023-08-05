import { Helmet } from "react-helmet-async";
import BannerBottom from "../BannerBottom/BannerBottom";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import HeroBanner from "../TopBanner/HeroBanner";
import AboutSection from "../AboutSchool/AboutSection";
import Statistics from "../SchoolStatistics/Statistics";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Music Enhancer | Learn In an efficient way</title>
            </Helmet>
            <HeroBanner></HeroBanner>
            <BannerBottom></BannerBottom>
            <PopularClasses></PopularClasses>
            <AboutSection></AboutSection>
            <Statistics></Statistics>
            <PopularInstructors></PopularInstructors>
        </>
    );
};

export default Home;