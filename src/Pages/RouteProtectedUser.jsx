import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserContext from "../context/userContext";

function RouteProtectedUser() {
    const value = useContext(UserContext)
    
    return ( value.user.name && value.user.rol === 'user' ? <Outlet/> : <Navigate to="/"/> );
}

export default RouteProtectedUser;