import { RxDashboard } from "react-icons/rx";
import { MdInsights } from "react-icons/md";
import { RiCouponLine } from "react-icons/ri";
import { FiUser, FiLogOut } from "react-icons/fi";
import { AiOutlineMessage } from "react-icons/ai";
import { BsFolder, BsWallet2 } from "react-icons/bs";
import { FaLayerGroup, FaRegCalendarPlus } from "react-icons/fa";

export const instructorNav = [
    {
        id: 2,
        link:'addClass',
        icon: <FaRegCalendarPlus/>,
        text: "Add Class",
    },
    {
        id: 3,
        link:'myClass',
        icon: <FaLayerGroup/>,
        text: "My Classes",
    }
];