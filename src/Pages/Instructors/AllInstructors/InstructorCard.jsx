import { FaFacebook, FaGooglePlus, FaLinkedin, FaPinterest, FaTwitter } from "react-icons/fa";


const InstructorCard = ({instructor}) => {
    return (
        
        <div className="flex flex-col items-center justify-center hover-instructor bg-[#F7F5EF] p-5 rounded-md hover:shadow-lg duration-300">
            <div className="md:w-[270px] md:h-[270px] w-[220px] h-[220px] rounded-full border border-[#FF7703] md:mb-6 mb-5">
                <div className="hover-border p-2 border-4 border-[#F7F5EF] duration-300">
                   <img className="w-full rounded-full" src={instructor?.image} alt="" />
                </div>
            </div>
            <h2 className="sm:text-2xl text-xl font-bold sec-title">{instructor?.name}</h2>
            <p className="font-semibold text-prime">{instructor?.email}</p>
            <div className="flex space-x-3 justify-center items-center text-[#85A5B2] md:pt-4 pt-3">
                <FaGooglePlus></FaGooglePlus>
                <FaFacebook></FaFacebook>
                <FaPinterest></FaPinterest>
                <FaLinkedin></FaLinkedin>
                <FaTwitter></FaTwitter>
            </div>
        </div>
      
    );
};

export default InstructorCard;