import MenuMantenimientos from "../components/organisms/MenuMantenimientos";
import { useContext } from "react";
import { Navigate} from "react-router-dom";
import UserContext from "../context/userContext";
import Navbarusuario from "../components/molecules/Navbarusuario"
import MenuMantenimientosus from "../components/organisms/MenuMantenimientosus";
function MenuMantenimientoUsuario() {
  const value = useContext(UserContext)
  return (
    value.user.name  ?
    <div>
        <Navbarusuario/>
        <MenuMantenimientosus/>
    </div>
     : <Navigate to="/"/>
  )
}

export default MenuMantenimientoUsuario