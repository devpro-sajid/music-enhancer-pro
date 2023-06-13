import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layouts/Dashboard";
import AdminRoute from "./AdminRoute";
import ManageClasses from "../Pages/Dashboard/Admin/ManageClasses";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import InstructorRoute from "./InstructorRoute";
import AddClass from "../Pages/Dashboard/Instructor/AddClass";
import MyClasses from "../Pages/Dashboard/Instructor/MyClasses";
import StudentRoute from "./StudentRoute";
import MyEnrolledClass from "../Pages/Dashboard/Student/MyEnrolledClass";
import MySelectedClass from "../Pages/Dashboard/Student/MySelectedClass";
import Welcome from "../Pages/Dashboard/Welcome/Welcome";
import Classes from "../Pages/Classes/Classes";
import Instructors from "../Pages/Instructors/Instructors";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/classes',
        element: <Classes></Classes>
      },
      {
        path: '/instructors',
        element: <Instructors></Instructors>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: '/dashboard',
        element: <PrivateRoute><Welcome></Welcome></PrivateRoute>
      },
      {
        path: 'manageClass',
        element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
      },
      {
        path: 'manageUser',
        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
      },
      {
        path: 'addClass',
        element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
      },
      {
        path: 'myClass',
        element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
      },
      {
        path: 'selectedClass',
        element: <StudentRoute><MySelectedClass></MySelectedClass></StudentRoute>
      },
      {
        path: 'enrolledClass',
        element: <StudentRoute><MyEnrolledClass></MyEnrolledClass></StudentRoute>
      },
    ]
  }
]);