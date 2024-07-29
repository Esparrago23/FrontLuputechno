import React, { useState,useRef } from 'react';
import BotonMenu from "../components/molecules/BotonMenu";
import Table from '../components/atoms/Table';
import Navbar from '../components/molecules/navbar';
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';
import FormularioBuscar from '../components/molecules/FormularioBuscar';

function VizualizarVehiculos() {
    const MySwal = withReactContent(Swal);
    const [vehicles, setVehicles] = useState([]);
    const inputValueRef = useRef('');

    const handlerClickM = async () => {
        const response = await fetch(`${import.meta.env.VITE_URL_API}/Vehiculos?Tipo=Motos`, {
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
        setVehicles(data);
        console.log('Vehiculos data:', data);
    }
    const handlerClick =  () => {
        MySwal.fire({
            title: 'Ingresa los datos del vehiculo',
            html: (
                <FormularioBuscar
                    type="text"
                    placeholder="No. económico"
                    onChange={(value) => {
                        inputValueRef.current = value;
                    }}
                />
            ),
            showCloseButton: true, 
            confirmButtonText: 'Buscar',
            preConfirm: () => {
                if (!inputValueRef.current) {
                    Swal.showValidationMessage('Por favor ingresa el No. económico');
                    return false;
                }
                return inputValueRef.current;
            },
        }).then(async (result) => {
            if (result.isConfirmed) { 
                const response = await fetch(`${import.meta.env.VITE_URL_API}/Vehiculos/${inputValueRef.current}`, {
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
                const vehiclesArray = Array.isArray(data) ? data : [data];
                setVehicles(vehiclesArray);
            }})
        }

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
    ];


    return (
        <div>
            <Navbar />
                <div className="bg-slate-200 flex justify-evenly max-sm:grid max-sm:gap-4 sm:grid-cols-2 mt-16">
                    <BotonMenu title={"Mostrar"} image={"/Moto.png"} onClick={handlerClickM} />
                    <BotonMenu title={"Buscar"} image={"/Moto.png"} onClick={handlerClick} />
                </div>
                <div className="overflow-x-auto">
                    <Table columns={columns} data={vehicles} />
                </div>
        </div>

    );
}

export default VizualizarVehiculos;