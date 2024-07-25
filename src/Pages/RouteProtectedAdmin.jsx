import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserContext from "../context/userContext";

function RouteProtectedAdmin() {
    const value = useContext(UserContext)
      
    return ( value.user.name && value.user.rol === 'admin' ? <Outlet/> : <Navigate to="/"/> );
}

export default RouteProtectedAdmin;