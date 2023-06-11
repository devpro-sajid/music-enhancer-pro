import { Navigate, useLocation } from "react-router";
import useAuth from "../Hooks/useAuth";
import useStudent from "../Hooks/UseStudent";


const StudentRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isStudent, isStudentLoading] = useStudent();
    const location = useLocation();

    if(loading || isStudentLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isStudent) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default StudentRoute;