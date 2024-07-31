import { useNavigate } from "react-router-dom";
import Button from "../atoms/Button";
import SelectNavbar from "../atoms/SelectNavbar";
import Img from "../atoms/Img";
import Button_icons from "../atoms/Button_icons";

function Navbar() {
  const navigate = useNavigate();

  const handlerClick = (e) => {
    navigate(e);
  };
  const handleChange = (e) => {
    const selectedPage = e.target.value;
    handlerClick(selectedPage)
  };

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    navigate("/"); // redirige al usuario a la página de login o cualquier otra página
};
const navigateToResguardante = () => {
  navigate("/Resguardantes"); // redirige al usuario a la página de login o cualquier otra página
};
const navigateToMantenimientos = () => {
  navigate("/MenuMantenimiento"); // redirige al usuario a la página de login o cualquier otra página
};
const navigateToPrincipal = () => {
  navigate("/Principal"); // redirige al usuario a la página de login o cualquier otra página
};
const navigateToUsuarios = () => {
  navigate("/Usuarios"); // redirige al usuario a la página de login o cualquier otra página
};
const navigateToBitacora = () => {
  navigate("/Bitacora"); // redirige al usuario a la página de login o cualquier otra página
};


  return (
    <div className="bg-azulIntegrador">
  <nav className="px-4 py-3 mx-auto max-w-7xl sm:px-6 md:px-8">
    <ul className="flex flex-wrap items-center justify-center gap-3 sm:justify-start sm:space-x-3 md:space-x-6">
      <li className="flex justify-center sm:flex-none">
        <Button_icons onClick={navigateToPrincipal} className="w-full font-normal bg-white rounded-full sm:w-auto">
          <Img image="/Logo.png" alt="Logo" className="h-12 sm:h-14" />
        </Button_icons>
      </li>
      <li className="flex justify-center text-sm font-normal text-white sm:flex-none sm:text-base">
        <Button onClick={navigateToResguardante} title="Resguardante" className="w-full p-2 sm:w-auto" />
      </li>
      <li className="flex justify-center text-sm text-white sm:flex-none sm:text-base">
        <SelectNavbar 
          OnChange={handleChange}
          opcion5="Vehiculo" value5="/MenuVehiculos"
          opcion1="Gasolina: Vehiculo" value1="/Vehicules/Gasolina"
          opcion2="Diesel: Vehiculo" value2="/Vehicules/Diesel"
          opcion3="Motos: Vehiculo" value3="/Vehicules/Motos"
          opcion4="Comodatos: Vehiculo" value4="/Vehicules/Comodato"
          className="w-full p-2 sm:w-auto"
        />
      </li>
      <li className="flex justify-center text-sm text-white sm:flex-none sm:text-base">
        <Button onClick={navigateToMantenimientos} title="Mantenimiento" className="w-full p-2 sm:w-auto" />
      </li>
      <li className="flex justify-center text-sm text-white sm:flex-none sm:text-base">
        <Button onClick={navigateToBitacora} title="Bitacora" className="w-full p-2 sm:w-auto" />
      </li>
      <li className="flex justify-center text-sm font-normal text-white sm:flex-none sm:text-base">
        <Button onClick={navigateToUsuarios} className="w-full p-2 sm:w-auto" title="Usuario" />
      </li>
      <li className="flex justify-center col-span-2 sm:col-span-1 sm:flex-none">
        <Button_icons onClick={handleLogout} className="w-full p-2 sm:w-auto">
          <Img image="/CerrarSesion.png" alt="Cerrar Sesión" className="h-10 sm:h-12" />
          <div className="text-sm font-normal text-white sm:text-base">
            <p>cerrar sesion</p>
          </div>
        </Button_icons>
      </li>
    </ul>
  </nav>
</div>


  );
}

export default Navbar;
