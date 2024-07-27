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
  navigate("/Principal"); // redirige al usuario a la página de login o cualquier otra página
};const navigateToBitacora = () => {
  navigate("/Bitacoraus"); // redirige al usuario a la página de login o cualquier otra página
};

  return (
    <div className="bg-azulIntegrador">
      <nav>
      <ul className="flex flex-col items-center justify-between w-full space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 md:space-x-8">
          <li className="" >
            <Button_icons onClick={navigateToPrincipal} className="w-1/2 font-normal bg-white rounded-full">
              <Img image="/Logo.png" alt="Logo" />
            </Button_icons>
          </li>
          <li className="font-normal text-white bg-oratext-base">
            <Button onClick={navigateToResguardante}
              title="Resguardante"
            />
          </li>
          <li className="text-base font-normal text-white ">
            <Button onClick={navigateToMantenimientos}
              title="Mantenimiento"
            />
          </li>
          <li className="text-base font-normal text-white ">
            <Button title="Bitacora"  onClick={navigateToBitacora}/>
          </li>
          <li>
            <Button_icons onClick={handleLogout} className="text-base ">
              <Img image="/CerrarSesion.png" alt="Cerrar Sesión" />
              <div className="font-normal text-white ">
                <p>cerrar sesion</p>
              </div>
            </Button_icons>
          </li>
        </ul>
      </nav>   
    </div>
  )
}

export default Navbarusuario