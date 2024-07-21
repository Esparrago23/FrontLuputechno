import Button_icons from "../atoms/Button_icons"
import Img from "../atoms/Img";
import { useNavigate } from "react-router-dom";
import Button from "../atoms/Button";

function Navbarusuario() {
  const navigate = useNavigate();

  const handlerClick = (e) => {
    navigate("/");
  };
  const handleLogout = () => {
    sessionStorage.removeItem('token');
    navigate("/"); 
};
  return (
    <div className="bg-azulIntegrador">
      <nav>
      <ul className="flex flex-col items-center justify-between w-full space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 md:space-x-8">
          <li className="bg-green-500" >
            <Button_icons className="w-1/2 font-normal bg-white rounded-full">
              <Img image="/Logo.png" alt="Logo" />
            </Button_icons>
          </li>
          <li className="font-normal text-white bg-red-700 bg-oratext-base">
            <Button
              title="Resguardante"
            />
          </li>
          <li className="text-base font-normal text-white bg-red-700">
            <Button
              title="Mantenimiento"
            />
          </li>
          <li className="text-base font-normal text-white bg-red-700">
            <Button title="Bitacora" />
          </li>
          <li>
            <Button_icons onClick={handleLogout} className="text-base bg-green-600 ">
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