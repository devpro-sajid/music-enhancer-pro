import {Outlet} from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Navbar/Footer";



const Main = () => {
    // const location = useLocation();
    
    // const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');

    return (
        <div>
            <Navbar></Navbar>
            {/* { noHeaderFooter || <NavBar></NavBar>} */}
            <Outlet></Outlet>
            {/* { noHeaderFooter || <Footer></Footer>} */}
            <Footer></Footer>
        </div>
    );
};

export default Main;