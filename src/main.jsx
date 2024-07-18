import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Home from './Pages/Home.jsx';
import './index.css';
import Vehicules from './Pages/Vehicules.jsx';
import MenuVehiculos from './Pages/MenuVehiculos.jsx';
import SectionGasolina from './components/organisms/SectionGasolina.jsx';
import SectionMotos from './components/organisms/SectionMotos.jsx';
import SectionDiesel from './components/organisms/SectionDiesel.jsx';
import SectionComodato from './components/organisms/SectionComodato.jsx';
import MenuMantenimiento from './Pages/MenuMantenimiento.jsx';
import { Navigate } from 'react-router-dom';
const isAuthenticated = () => {
  return sessionStorage.getItem('token') !== null;
};

const PrivateRoute = ({ element: Component, ...rest }) => {
  return isAuthenticated() ? Component : <Navigate to="/" />;
};

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/Principal", element: <PrivateRoute element={<Home />} /> },
  { path: "/MenuVehiculos", element: <PrivateRoute element={<MenuVehiculos />} /> },
  {
    path: "/Vehicules",
    element: <PrivateRoute element={<Vehicules />} />, // Vehicules como layout protegido
    children: [
      { path: "Gasolina", element: <PrivateRoute element={<SectionGasolina />} /> }, // Ruta hija protegida
      { path: "Motos", element: <PrivateRoute element={<SectionMotos />} /> },
      { path: "Diesel", element: <PrivateRoute element={<SectionDiesel />} /> },
      { path: "Comodato", element: <PrivateRoute element={<SectionComodato />} /> } // Ruta hija protegida
    ],
  },
  { path: "/MenuMantenimiento", element: <PrivateRoute element={<MenuMantenimiento />} /> }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);