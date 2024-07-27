import Navbar from "../components/molecules/navbar";
import MenuMantenimientos from "../components/organisms/MenuMantenimientos";
import { useContext } from "react";

import { Navigate} from "react-router-dom";
import UserContext from "../context/userContext";

function Mantenimientos() {
    const value = useContext(UserContext)
        return ( 
        value.user.name  ? 
        <div>
        <Navbar/>
        <MenuMantenimientos/>
    </div>
        : <Navigate to="/"/>
            
);
}

export default Mantenimientos;
