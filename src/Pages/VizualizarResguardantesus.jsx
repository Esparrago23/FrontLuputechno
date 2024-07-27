import Navbarusuario from "../components/molecules/Navbarusuario"
import BotonMenu from "../components/molecules/BotonMenu"
import Table from "../components/atoms/Table"
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';
import FormularioBuscar from '../components/molecules/FormularioBuscar';
import React, { useState,useRef } from 'react';

function VizualizarResguardantesus() {
    const MySwal = withReactContent(Swal);
    const [resguardante, setResguardante] = useState([]);
    const inputValueRef = useRef('');

    const handlerClickM = async () => {
        const response = await fetch(`${import.meta.env.VITE_URL_API}/Resguardantes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': sessionStorage.getItem('token')
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching Resguardante');
        }

        const data = await response.json();
        setResguardante(data);
        console.log('Resguardante data:', data);
    }
    const handlerClick =  () => {
        MySwal.fire({
            title: 'Ingresa los datos del Resguardante',
            html: (
                <FormularioBuscar
                    type="text"
                    placeholder="Curp"
                    onChange={(value) => {
                        inputValueRef.current = value;
                    }}
                />
            ),
            showCloseButton: true, 
            confirmButtonText: 'Buscar',
            preConfirm: () => {
                if (!inputValueRef.current) {
                    Swal.showValidationMessage('Por favor ingresa el Curp');
                    return false;
                }
                return inputValueRef.current;
            },
        }).then(async (result) => {
            if (result.isConfirmed) { 
                const response = await fetch(`${import.meta.env.VITE_URL_API}/Resguardantes/${inputValueRef.current}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Authorization': sessionStorage.getItem('token')
                    }
                });
        
                if (!response.ok) {
                    throw new Error('Error fetching Resguardantes');
                }
        
                const data = await response.json();
                console.log(data)
                const resguardanteArray = Array.isArray(data) ? data : [data];
                setResguardante(resguardanteArray);
            }})
        }

    const columns = [
        { header: 'Curp', accessor: 'Curp' },
        { header: 'NumeroEconomico', accessor: 'NumeroEconomico' },
        { header: 'Nombre', accessor: 'Nombre' },
        { header: 'Apellidos', accessor: 'Apellidos' },
        { header: 'FechaVencimientoLicencia', accessor: 'FechaVencimientoLicencia' },
        { header: 'AreaTrabajo', accessor: 'AreaTrabajo' },
        { header: 'fechaResguardo', accessor: 'fechaResguardo' },
    ];
  return (
    <div>
        <div >
            <Navbarusuario/>
            <div className="flex mt-16 bg-slate-200 justify-evenly max-sm:grid max-sm:gap-4 sm:grid-cols-2">

            <BotonMenu title={"Mostrar"} image={"/Resguardante.png"} onClick={handlerClickM} />
            <BotonMenu title={"Buscar"} image={"/Resguardante.png"} onClick={handlerClick} />
            </div>
            <Table columns={columns} data={resguardante} />
        </div>
    </div>
  )
}

export default VizualizarResguardantesus