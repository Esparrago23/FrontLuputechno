import { useState,useRef } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserContext from "./context/userContext"
import Login from "./Pages/Login.jsx"

import Home from './Pages/Home.jsx';
import Homeusuario from './Pages/Homeusuario.jsx';
import MenuMantenimientoUsuario from './Pages/MenuMantenimientoUsuario.jsx';
import MenuMotos from './components/organisms/MenuMotos.jsx';
import MenuGasolina from './components/organisms/MenuGasolina.jsx';
import MenuDiesel from './components/organisms/MenuDiesel.jsx';
import MenuComodatos from './components/organisms/MenuComodatos.jsx';
import MenuResguardanteUsuario from "./Pages/MenuResguardanteUsuario.jsx";

import VizualizarVehiculos from './Pages/VizualizarVehiculos.jsx';
import VizualizarGasolina from './Pages/VizualizarGasolina.jsx';
import VizualizarComodato from './Pages/VizualizarComodato.jsx';
import VizualizarDiesel from './Pages/VizualizarDiesel.jsx';
import VizualizarMantenimientos from './Pages/VizualizarMantenimientos.jsx';
import VizualizarResguardantes from './Pages/VizualizarResguardantes.jsx';
import Usuarios from './Pages/Usuarios.jsx';
import Vehiculos from './Pages/Vehiculos.jsx';
import VehiculoDropdown from './components/organisms/VehiculoDropdown.jsx';
import Resguardantes from './Pages/Resguardantes.jsx';
import Mantenimientos from './Pages/Mantenimientos.jsx';
import RouteProtectedAdmin from "./Pages/RouteProtectedAdmin.jsx";
import RouteProtectedUser from "./Pages/RouteProtectedUser.jsx";
import VizualizarUsuarios from "./Pages/VizualizarUsuarios.jsx";
import Bitacora from "./Pages/Bitacora.jsx";
import VizualizarResguardantesus from "./Pages/VizualizarResguardantesus.jsx";
import VerBitacoraus from "./Pages/VerBitacoraus.jsx";
import VizualizarMantenimientosUs from "./Pages/VizualizarMantenimientosUs.jsx";



function App() {
  const [user, setUser] = useState({})
  return (
    <BrowserRouter>
      <UserContext.Provider value={{user, setUser}} >
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/MenuMantenimiento" element={<Mantenimientos />} />
            <Route path="/VerMantenimientos" element={<VizualizarMantenimientos />} />
          <Route element={<RouteProtectedAdmin/>}>
            <Route path="/Principal" element={<Home />} />
            <Route path="/MenuVehiculos" element={<Vehiculos />} />
            
            <Route path="/Resguardantes" element={<Resguardantes />} />
            <Route path="/Usuarios" element={<Usuarios />} />
            <Route path="/Bitacora" element={<Bitacora />} />
           
            <Route path="/Vehicules" element={<VehiculoDropdown />}>
              <Route path="Gasolina" element={<MenuGasolina />} />
              <Route path="Motos" element={<MenuMotos />} />
              <Route path="Diesel" element={<MenuDiesel />} />
              <Route path="Comodato" element={<MenuComodatos />} />
            </Route>
            <Route path="/VerMotos" element={<VizualizarVehiculos />} />
            <Route path="/VerGasolina" element={<VizualizarGasolina />} />
            <Route path="/VerComodato" element={<VizualizarComodato />} />
            <Route path="/VerDiesel" element={<VizualizarDiesel />} />
            <Route path="/VerResguardantes" element={<VizualizarResguardantes />} />
            <Route path="/VerUsuarios" element={<VizualizarUsuarios />} />
           
          </Route>
          <Route element={<RouteProtectedUser/>}>
           
          <Route path="/PrincipalUsuario" element={<Homeusuario />} />
            <Route path="/MenuResguardanteusuarios" element={<MenuResguardanteUsuario/>} />
            <Route path="/VerResguardanteUs" element={<VizualizarResguardantesus />} />
            <Route path="/Bitacoraus" element={<VerBitacoraus />} />
            <Route path="/Mantenimientous" element={<MenuMantenimientoUsuario />} />
            <Route path="/VerMantenimientosus" element={<VizualizarMantenimientosUs />} />
          </Route>
          
           
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
export default App;
