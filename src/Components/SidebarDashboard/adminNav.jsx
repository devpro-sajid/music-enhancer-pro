import { RxDashboard } from "react-icons/rx";
import { FaLayerGroup, FaUserAlt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

export const adminNav = [
  
  {
    id: 1,
    link:'manageUser',
    icon: <FaUserAlt />,
    text: "Manage Users",
  },
  {
    id: 2,
    link:'manageClass',
    icon: <FaLayerGroup />,
    text: "Manage Classes",
  },

];