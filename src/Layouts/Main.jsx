import {Outlet} from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";



const Main = () => {
    // const location = useLocation();
    
    // const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');

    return (
        <div>
            <Navbar></Navbar>
            {/* { noHeaderFooter || <NavBar></NavBar>} */}
            <Outlet></Outlet>
            {/* { noHeaderFooter || <Footer></Footer>} */}
        </div>
    );
};

export default Main;