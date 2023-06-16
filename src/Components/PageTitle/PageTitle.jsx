import { FaAngleRight } from "react-icons/fa";

const PageTitle = ({pageTitleBg,pageTitle,pageTitleBottom}) => {
    return (
        <div style={{ backgroundImage: `url(${pageTitleBg})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover' }} >
            <div className="bg-black bg-opacity-50 pt-32 pb-20 sm:pt-36 sm:pb-24">
                <div className="main-container">
                    <h2 className="sec-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl  text-white font-bold pb-2">{pageTitle}</h2>
                    <p className="flex items-center space-x-2 text-white font-semibold sec-desc"><span className="text-prime">Home</span><FaAngleRight></FaAngleRight>{pageTitleBottom}</p>
                </div>
            </div>
        </div>
    );
};

export default PageTitle;