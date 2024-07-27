import React, { useState,useRef } from 'react';
import BotonMenu from "../components/molecules/BotonMenu";
import Table from '../components/atoms/Table';
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';
import FormularioBuscar from '../components/molecules/FormularioBuscar';
import { useContext } from "react";
import Navbarusuario from "../components/molecules/Navbarusuario"
import { Navigate} from "react-router-dom";
import UserContext from "../context/userContext";

function VizualizarMantenimientosUs() {
    const value = useContext(UserContext)
    const MySwal = withReactContent(Swal);
    const [mantenimientos, setMantenimientos] = useState([]);
    const inputValueRef = useRef('');

    const handlerClickM = async () => {
        const response = await fetch(`${import.meta.env.VITE_URL_API}/Mantenimiento`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': sessionStorage.getItem('token')
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching vehiculos');
        }

        const data = await response.json();
        setMantenimientos(data);
        console.log('Vehiculos data:', data);
    }
    const handlerClick =  () => {
        MySwal.fire({
            title: 'Ingresa los datos del Mantenimiento',
            html: (
                <FormularioBuscar
                    type="text"
                    placeholder="No. Folio"
                    onChange={(value) => {
                        inputValueRef.current = value;
                    }}
                />
            ),
            showCloseButton: true, 
            confirmButtonText: 'Buscar',
            preConfirm: () => {
                if (!inputValueRef.current) {
                    Swal.showValidationMessage('Por favor ingresa el No. Folio');
                    return false;
                }
                return inputValueRef.current;
            },
        }).then(async (result) => {
            if (result.isConfirmed) { 
                const response = await fetch(`${import.meta.env.VITE_URL_API}/Mantenimiento/${inputValueRef.current}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Authorization': sessionStorage.getItem('token')
                    }
                });
        
                if (!response.ok) {
                    throw new Error('Error fetching vehiculos');
                }
        
                const data = await response.json();
                console.log(data)
                const mantenimientosArray = Array.isArray(data) ? data : [data];
                setMantenimientos(mantenimientosArray);
            }})
        }

    const columns = [
        { header: 'NumeroFolio', accessor: 'NumeroFolio' },
        { header: 'NumeroEconomico', accessor: 'NumeroEconomico' },
        { header: 'NombreTaller', accessor: 'NombreTaller' },
        { header: 'DirecciónTaller', accessor: 'DirecciónTaller' },
        { header: 'ServicioRealizado', accessor: 'ServicioRealizado' },
        { header: 'CostoServicio', accessor: 'CostoServicio' },
    ];


  return (

        value.user.name  ? 
         <div >
         <Navbarusuario/>
         <div className="flex mt-16 bg-slate-200 justify-evenly max-sm:grid max-sm:gap-4 sm:grid-cols-2">
         <BotonMenu title={"Mostrar"} image={"/Papel.png"} onClick={handlerClickM} />
         <BotonMenu title={"Buscar"} image={"/Papel.png"} onClick={handlerClick} />
         </div>
         <Table columns={columns} data={mantenimientos} />
     </div>
         : <Navigate to="/"/>
  )
}

export default VizualizarMantenimientosUs