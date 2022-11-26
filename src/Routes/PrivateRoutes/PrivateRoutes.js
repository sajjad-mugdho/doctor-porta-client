import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const PrivateRoutes = ({children}) => {
    const {user, loading}= useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <progress className="items-center progress w-56"></progress>
    }

    if(user){
        return children
    }
    return <Navigate to={'/logins'} state={{from: location}} replace></Navigate>;
};

export default PrivateRoutes;