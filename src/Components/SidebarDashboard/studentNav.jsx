import { RxDashboard } from "react-icons/rx";
import { FaGraduationCap, FaHistory, FaRegBookmark } from "react-icons/fa";

export const studentNav = [
  
  {
    id: 1,
    link:'selectedClass',
    icon: <FaRegBookmark />,
    text: "Selected Classes",
  },
  {
    id: 2,
    link:'enrolledClass',
    icon: <FaGraduationCap />,
    text: "Enrolled Classes",
  },
  {
    id: 3,
    link:'paymentHistory',
    icon: <FaHistory />,
    text: "Payment History",
  }

];