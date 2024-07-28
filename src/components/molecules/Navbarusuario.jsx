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
    <div className="bg-azulIntegrador">
  <nav className="px-4 py-3 mx-auto max-w-7xl sm:px-6 md:px-8">
    <ul className="grid grid-cols-2 gap-3 items-center justify-items-center sm:flex sm:flex-row sm:space-x-3 md:space-x-6 sm:justify-center sm:justify-items-auto">
      <li className="flex justify-center sm:flex-none">
        <Button_icons onClick={navigateToPrincipal} className="w-full sm:w-auto font-normal bg-white rounded-full p-1 sm:p-2">
          <Img image="/Logo.png" alt="Logo" className="h-12 sm:h-14" />
        </Button_icons>
      </li>
      <li className="flex justify-center sm:flex-none font-normal text-white text-sm sm:text-base">
        <Button onClick={navigateToResguardante} title="Resguardante" className="w-full sm:w-auto p-2" />
      </li>
      <li className="flex justify-center sm:flex-none text-white text-sm sm:text-base">
        <Button onClick={navigateToMantenimientos} title="Mantenimiento" className="w-full sm:w-auto p-2" />
      </li>
      <li className="flex justify-center sm:flex-none text-white text-sm sm:text-base">
        <Button onClick={navigateToBitacora} title="Bitacora" className="w-full sm:w-auto p-2" />
      </li>
      <li className="flex justify-center col-span-2 sm:col-span-1 sm:flex-none">
        <Button_icons onClick={handleLogout} className="w-full sm:w-auto p-2">
          <Img image="/CerrarSesion.png" alt="Cerrar Sesión" className="h-10 sm:h-12" />
          <div className="font-normal text-white text-sm sm:text-base">
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