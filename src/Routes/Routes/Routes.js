import { createBrowserRouter } from "react-router-dom";
import Appointment from "../../Pages/Appointment/Appoinment/Appointment";
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import ManageDoctors from "../../Pages/Dashboard/ManageDoctors/ManageDoctors";
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment";
import Payment from "../../Pages/Dashboard/Payment/Payment";

import Home from "../../Pages/Home/Home/Home";
import DashbordLayout from "../../Pages/Layout/DashbordLayout";
import Main from "../../Pages/Layout/Main";
import Login from "../../Pages/Login/Login/Login";
import SignUP from "../../Pages/Login/SignUP/SignUP";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import AdminRoutes from "../AdminRoute/AdminRoutes";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/signup',
                element: <SignUP></SignUP>
            },
            {
                path: '/appointment',
                element: <PrivateRoutes><Appointment></Appointment></PrivateRoutes>
            }
        ]

    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashbordLayout></DashbordLayout></PrivateRoutes>,
        errorElement:<DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>,

            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>,

            },
            {
                path: '/dashboard/adddoctor',
                element: <AdminRoutes><AddDoctor></AddDoctor></AdminRoutes>,

            },
            {
                path: '/dashboard/managedoctors',
                element: <AdminRoutes><ManageDoctors></ManageDoctors></AdminRoutes>,

            }, 
            {
                path: '/dashboard/payment/:id',
                element: <PrivateRoutes><Payment></Payment></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
            }


        ]
    }
]);

export default router;
