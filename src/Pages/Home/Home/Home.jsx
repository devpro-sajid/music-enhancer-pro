import BannerBottom from "../BannerBottom/BannerBottom";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import HeroBanner from "../TopBanner/HeroBanner";

const Home = () => {
    return (
        <>
           <HeroBanner></HeroBanner>
           <BannerBottom></BannerBottom>
           <PopularClasses></PopularClasses>
           <PopularInstructors></PopularInstructors>
        </>
    );
};

export default Home;