import { createBrowserRouter } from "react-router-dom";
import Appointment from "../../Pages/Appointment/Appoinment/Appointment";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import Main from "../../Pages/Layout/Main";
import Login from "../../Pages/Login/Login/Login";
import SignUP from "../../Pages/Login/SignUP/SignUP";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

 const router = createBrowserRouter([
    {
        path: '/', 
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element: <Login></Login>,
            },
            {
                path:'/signup',
                element: <SignUP></SignUP>
            },
            {
                path:'/appointment',
                element: <PrivateRoutes><Appointment></Appointment></PrivateRoutes>
            }
        ]
        
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>
    }
]);

export default router;
