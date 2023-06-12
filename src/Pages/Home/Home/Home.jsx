import BannerBottom from "../BannerBottom/BannerBottom";
import PopularClasses from "../PopularClasses/PopularClasses";
import HeroBanner from "../TopBanner/HeroBanner";


const Home = () => {
    return (
        <>
           <HeroBanner></HeroBanner>
           <BannerBottom></BannerBottom> 
           <PopularClasses></PopularClasses>
        </>
    );
};

export default Home;