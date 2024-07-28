import React, { useState,useRef } from 'react';
import BotonMenu from "../components/molecules/BotonMenu";
import Table from '../components/atoms/Table';
import Navbarusuario from "../components/molecules/Navbarusuario"

import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';
import FormularioBuscar from '../components/molecules/FormularioBuscar';

function VerBitacoraus() {
    const MySwal = withReactContent(Swal);
    const [Bitacoras, setBitacoras] = useState([]);
    const inputValueRef = useRef('');

    const handlerClickM = async () => {
        const response = await fetch(`${import.meta.env.VITE_URL_API}/Vehiculos/Bitacora`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': sessionStorage.getItem('token')
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching Bitacoras');
        }

        const data = await response.json();
        setBitacoras(data);
        console.log('Bitacoras data:', data);
    }
    // const handlerClick =  () => {
    //     MySwal.fire({
    //         title: 'Ingresa los datos del vehiculo',
    //         html: (
    //             <FormularioBuscar
    //                 type="text"
    //                 placeholder="No. económico"
    //                 onChange={(value) => {
    //                     inputValueRef.current = value;
    //                 }}
    //             />
    //         ),
    //         showCloseButton: true, 
    //         confirmButtonText: 'Buscar',
    //         preConfirm: () => {
    //             if (!inputValueRef.current) {
    //                 Swal.showValidationMessage('Por favor ingresa el No. económico');
    //                 return false;
    //             }
    //             return inputValueRef.current;
    //         },
    //     }).then(async (result) => {
    //         if (result.isConfirmed) { 
    //             const response = await fetch(`${import.meta.env.VITE_URL_API}/Vehiculos/${inputValueRef.current}`, {
    //                 method: 'GET',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     'Access-Control-Allow-Origin': '*',
    //                     'Authorization': sessionStorage.getItem('token')
    //                 }
    //             });
        
    //             if (!response.ok) {
    //                 throw new Error('Error fetching vehiculos');
    //             }
        
    //             const data = await response.json();
    //             console.log(data)
    //             const BitacorasArray = Array.isArray(data) ? data : [data];
    //             setBitacoras(BitacorasArray);
    //         }})
    //     }

    const columns = [
        { header: 'No.Economico', accessor: 'NumeroEconomico' },
        { header: 'Placas', accessor: 'Placas' },
        { header: 'Tipo Vehiculo', accessor: 'TipoVehiculo' },
        { header: 'Tipo', accessor: 'Tipo' },
        { header: 'Marca', accessor: 'Marca' },
        { header: 'Modelo', accessor: 'Modelo' },
        { header: 'Estatus', accessor: 'Estatus' },
        { header: 'Bujias', accessor: 'Bujias' },
        { header: 'Filtro Aire', accessor: 'FiltroAire' },
        { header: 'Filtro Aceite', accessor: 'FiltroAceite' },
        { header: 'Filtro Gasolina', accessor: 'FiltroGasolina' },
        { header: 'Nombre', accessor: 'Nombre' },
        { header: 'Apellidos', accessor: 'Apellidos' },
        {header: 'NumeroFolio', accessor: 'NumeroFolio' },
        { header: 'NombreTaller', accessor: 'NombreTaller' },
        { header: 'DirecciónTaller', accessor: 'DirecciónTaller' },
        { header: 'ServicioRealizado', accessor: 'ServicioRealizado' },
        { header: 'CostoServicio', accessor: 'CostoServicio' },
    ];
    return (
        <div className="min-h-screen flex flex-col bg-slate-200">
    <Navbarusuario />
    <div className="flex flex-grow mt-16 justify-evenly max-sm:grid max-sm:gap-4 sm:grid-cols-2 px-4">
        <BotonMenu title="Mostrar" image="/Comodato.png" onClick={handlerClickM} />
        {/* <BotonMenu title={"Buscar"} image={"/Comodato.png"} onClick={handlerClick} /> */}
    </div>
    <div className="flex flex-col items-center mt-8 px-4 flex-grow">
        <div className="w-full max-w-4xl overflow-hidden" style={{ maxHeight: 'calc(100vh - 200px)' }}>
            <div className="overflow-y-auto" style={{ maxHeight: '100%' }}>
                <Table columns={columns} data={Bitacoras} />
            </div>
        </div>
    </div>
</div>



    )
}

export default VerBitacoraus