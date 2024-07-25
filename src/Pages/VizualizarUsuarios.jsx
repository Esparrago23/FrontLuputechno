import React, { useState,useRef } from 'react';
import BotonMenu from "../components/molecules/BotonMenu";
import Table from '../components/atoms/Table';
import Navbar from '../components/molecules/navbar';
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';
import FormularioBuscar from '../components/molecules/FormularioBuscar';


function VizualizarUsuarios() {
    const MySwal = withReactContent(Swal);
    const [Usuario, setUsuario] = useState([]);
    const inputValueRef = useRef('');

    const handlerClickM = async () => {
        const response = await fetch(`${import.meta.env.VITE_URL_API}/usuarios`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': sessionStorage.getItem('token')
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching Usuarios');
        }

        const data = await response.json();
        setUsuario(data);
        console.log('Usuarios data:', data);
    }
    const handlerClick =  () => {
        MySwal.fire({
            title: 'Ingresa los datos del Usuario',
            html: (
                <FormularioBuscar
                    type="text"
                    placeholder="Id"
                    onChange={(value) => {
                        inputValueRef.current = value;
                    }}
                />
            ),
            showCloseButton: true, 
            confirmButtonText: 'Buscar',
            preConfirm: () => {
                if (!inputValueRef.current) {
                    Swal.showValidationMessage('Por favor ingresa el Id');
                    return false;
                }
                return inputValueRef.current;
            },
        }).then(async (result) => {
            if (result.isConfirmed) { 
                const response = await fetch(`${import.meta.env.VITE_URL_API}/usuarios/${inputValueRef.current}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Authorization': sessionStorage.getItem('token')
                    }
                });
        
                if (!response.ok) {
                    throw new Error('Error fetching usuarios');
                }
        
                const data = await response.json();
                console.log(data)
                const UsuarioArray = Array.isArray(data) ? data : [data];
                setUsuario(UsuarioArray);
            }})
        }

    const columns = [
        { header: 'id', accessor: 'id' },
        { header: 'username', accessor: 'username' },
        { header: 'roles', accessor: 'roles' },
        { header: 'created_at', accessor: 'created_at' },
    ];


    return (
        <div >
            <Navbar></Navbar>
            <div className="flex mt-16 bg-slate-200 justify-evenly max-sm:grid max-sm:gap-4 sm:grid-cols-2">

            <BotonMenu title={"Mostrar"} image={"/users.png"} onClick={handlerClickM} />
            <BotonMenu title={"Buscar"} image={"/users.png"} onClick={handlerClick} />
            </div>
            <Table columns={columns} data={Usuario} />
        </div>
    );
}

export default VizualizarUsuarios;