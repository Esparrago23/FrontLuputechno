import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Home from './Pages/Home.jsx';
import './index.css';
import Vehicules from './Pages/Vehicules.jsx';
import MenuVehiculos from './Pages/MenuVehiculos.jsx';
import MenuMantenimiento from './Pages/MenuMantenimiento.jsx';
import { Navigate } from 'react-router-dom';
import Tablas from './components/atoms/Tabla.jsx';
import Homeusuario from './Pages/Homeusuario.jsx';
import MenuMantenimientoUsuario from './Pages/MenuMantenimientoUsuario.jsx';
import MenuMotos from './components/organisms/MenuMotos.jsx';
import MenuGasolina from './components/organisms/MenuGasolina.jsx';
import MenuDiesel from './components/organisms/MenuDiesel.jsx';
import MenuComodatos from './components/organisms/MenuComodatos.jsx';
import MenuResguardante from './Pages/MenuResguardante.jsx';
import VizualizarVehiculos from './Pages/VizualizarVehiculos.jsx';
import VizualizarGasolina from './Pages/VizualizarGasolina.jsx';
import VizualizarComodato from './Pages/VizualizarComodato.jsx';
import VizualizarDiesel from './Pages/VizualizarDiesel.jsx';
import VizualizarMantenimientos from './Pages/VizualizarMantenimientos.jsx';
import VizualizarResguardantes from './Pages/VizualizarResguardantes.jsx';
import RegisterUser from './Pages/RegisterUser.jsx';
const isAuthenticated = () => {
  return sessionStorage.getItem('token') !== null;
};

const PrivateRoute = ({ element: Component, ...rest }) => {
  return isAuthenticated() ? Component : <Navigate to="/" />;
};

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {path:"/Register",element:<RegisterUser/>},
  { path: "/Principal", element: <PrivateRoute element={<Home />} /> },
  { path: "/MenuVehiculos", element: <PrivateRoute element={<MenuVehiculos />} /> },
  { path: "/Resguardantes", element: <PrivateRoute element={<MenuResguardante />} /> },
  { path: "/VerMotos", element: <PrivateRoute element={<VizualizarVehiculos />} /> },
  { path: "/VerGasolina", element: <PrivateRoute element={<VizualizarGasolina />} /> },
  { path: "/VerComodato", element: <PrivateRoute element={<VizualizarComodato />} /> },
  { path: "/VerDiesel", element: <PrivateRoute element={<VizualizarDiesel />} /> },
  { path: "/VerMantenimientos", element: <PrivateRoute element={<VizualizarMantenimientos />} /> },
  { path: "/VerResguardantes", element: <PrivateRoute element={<VizualizarResguardantes />} /> },
  {
    path: "/Vehicules",
    element: <PrivateRoute element={<Vehicules />} />, // Vehicules como layout protegido
    children: [
      { path: "Gasolina", element: <PrivateRoute element={<MenuGasolina />} /> }, // Ruta hija protegida
      { path: "Motos", element: <PrivateRoute element={<MenuMotos />} /> },
      { path: "Diesel", element: <PrivateRoute element={<MenuDiesel />} /> },
      { path: "Comodato", element: <PrivateRoute element={<MenuComodatos />} /> } // Ruta hija protegida
    ],
  },
  { path: "/MenuMantenimiento", element: <PrivateRoute element={<MenuMantenimiento />} /> },
  {path: "/Tablas", element:<PrivateRoute element={<Tablas/>}/>},
  {path:"/PrincipalUsuario",element:<PrivateRoute element={<Homeusuario/>}/>},
  {path:"/MenuMantenimientoUsuarios",element:<PrivateRoute element={<MenuMantenimientoUsuario/>}/>}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);