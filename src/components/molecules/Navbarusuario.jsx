import Button_icons from "../atoms/Button_icons"
import Img from "../atoms/Img";
import { useNavigate } from "react-router-dom";
import Button from "../atoms/Button";

function Navbarusuario() {
  const navigate = useNavigate();

  const handlerClick = (e) => {
    navigate(e);
  };
  const handleLogout = () => {
    sessionStorage.removeItem('token');
    navigate("/"); 
};
const navigateToResguardante = () => {
  navigate("/MenuResguardanteusuarios"); // redirige al usuario a la página de login o cualquier otra página
};
const navigateToMantenimientos = () => {
  navigate("/Mantenimientous"); // redirige al usuario a la página de login o cualquier otra página
};
const navigateToPrincipal = () => {
  navigate("/PrincipalUsuario"); // redirige al usuario a la página de login o cualquier otra página
};const navigateToBitacora = () => {
  navigate("/Bitacoraus"); // redirige al usuario a la página de login o cualquier otra página
};

  return (
    

  )
}

export default Navbarusuario