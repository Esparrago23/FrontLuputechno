import React, { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Label from "../atoms/Label";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';
import FormularioVehiculos from '../molecules/FormularioVehiculos';
import FormularioBuscar from '../molecules/FormularioBuscar';
import FormularioMotosEditar from '../molecules/FormularioMotosEditar';
import BotonMenu from '../molecules/BotonMenu';

const MySwal = withReactContent(Swal);

function MenuMotos() {
    const inputValueRef = useRef('');
    const formRef = useRef({});
    const [form, setForm] = useState({});
    const navigate = useNavigate();
    const resetInputValue = () => {
        inputValueRef.current = '';
    };

    const handlerClickA = () => {
        MySwal.fire({
            title: 'Ingresa los datos',
            html: <FormularioVehiculos onChange={(values) => (formRef.current = values)} tipoVehiculo="Motos"/>,
            showCloseButton: true,
            confirmButtonText: 'Agregar',
            preConfirm: () => {
                const values = formRef.current;
                if (!values || Object.values(values).some(value => value === '' || value === undefined)) { 
                    Swal.showValidationMessage('Por favor, completa todos los campos');
                    return false; 
                }
                return values; 
            },
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${import.meta.env.VITE_URL_API}/Vehiculos`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                        'Authorization': sessionStorage.getItem('token')
                    },
                    body: JSON.stringify(formRef.current)
                })
                Swal.fire({
                    title: '¡Éxito!',
                    text: 'Vehiculo agregado correctamente.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                });
            }
        });
    };

    const handlerClickE =  () => {
        MySwal.fire({
            title: 'Ingresa los datos del vehiculo',
            html: (
                <FormularioBuscar type="text" placeholder="No. económico"
                    onChange={(value) => {inputValueRef.current = value}}
                />
            ),
            showCloseButton: true, 
            confirmButtonText: 'Buscar',
            preConfirm: () => {
                console.log(!inputValueRef.current)
                if (!inputValueRef.current) {
                    Swal.showValidationMessage('Por favor ingresa el id');
                    return false;
                }
                return inputValueRef.current;
            },
        }).then(async(result)  => {
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
                throw new Error('No existe ese Vehiculo');
            }
            const data = await response.json();
            setForm(data)
            MySwal.fire({
                title: 'Ingresa los datos del Vehiculo',
                html: <FormularioMotosEditar onChange={(values) => (formRef.current = values)} tipoVehiculo="Motos" data={data}/>,
                showCloseButton: true,
                confirmButtonText: 'Editar',
                preConfirm: () => {
                    const values = formRef.current;
                    if (!values || Object.values(values).some(value => value === '' || value === undefined)) { 
                        Swal.showValidationMessage('Por favor, completa todos los campos');
                        return false; 
                    }
                    return values; 
                },
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`${import.meta.env.VITE_URL_API}/Vehiculos/${inputValueRef.current}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "*",
                            'Authorization': sessionStorage.getItem('token')
                        },
                        body: JSON.stringify(formRef.current)
                    })
                    Swal.fire({
                        title: '¡Éxito!',
                        text: 'Vehiculo Editado correctamente.',
                        icon: 'success',
                        confirmButtonText: 'OK',
                    });
                }
            })      
        }
        }).catch((error) => {
            Swal.fire({
                title: "Error",
                text: error.message,
                icon: "error"
            });
        });
        resetInputValue();
    }

    const handlerClick = () => {
        MySwal.fire({
            title: 'Ingresa los datos del vehiculo',
            html: (
                <FormularioBuscar type="text" placeholder="No. económico"
                    onChange={(value) => {inputValueRef.current = value}}
                />
            ),
            showCloseButton: true, 
            confirmButtonText: 'Eliminar',
            preConfirm: () => {
                console.log(!inputValueRef.current)
                if (!inputValueRef.current) {
                    Swal.showValidationMessage('Por favor ingresa el id');
                    return false;
                }
                return inputValueRef.current;
            },
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: '¿Estás seguro?',
                    text: 'Esta acción no se puede deshacer.',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Sí, eliminar',
                    cancelButtonText: 'Cancelar',
                }).then((confirmationResult) => {
                    if (confirmationResult.isConfirmed) {
                        fetch(`${import.meta.env.VITE_URL_API}/Vehiculos/${inputValueRef.current}`, {
                            method: "DELETE",
                            headers: {
                                "Content-Type": "application/json",
                                "Access-Control-Allow-Origin": "*",
                                'Authorization': sessionStorage.getItem('token')
                                }
                        }).then((response) => {
                            if (response.ok) {
                                Swal.fire({
                                    title: "Eliminado",
                                    text: "El elemento ha sido eliminado.",
                                    icon: "success"
                                });
                            } else {
                                return response.json().then(() => {
                                    throw new Error(`No existe ese Vehiculo`);
                                });
                            }
                        }).catch((error) => {
                            Swal.fire({
                                title: "Error",
                                text: error.message,
                                icon: "error"
                            });
                        });
                    }
                })
            }   
        })
        resetInputValue();
    };
    
    const NavigateToVizualizar =  () =>{
            navigate("/VerMotos"); // redirige al usuario a la página de login o cualquier otra página
    };

    return (
        <div className="mt-16 flex flex-col items-center">
    <div className="bg-slate-200 mb-4 text-xl text-center sm:text-2xl md:text-3xl lg:text-4xl text-stone-950 w-full">
        <Label className="m-2 font-bold" text="¡LISTO PARA TRABAJAR!" />
    </div>
    <div className="bg-slate-200 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:flex lg:justify-evenly mt-16 w-full">
        <div className="p-2 flex justify-center">
            <BotonMenu title={"Añadir"} image={"/Moto.png"} onClick={handlerClickA} />
        </div>
        <div className="p-2 flex justify-center">
            <BotonMenu title={"Visualizar"} image={"/Moto.png"} onClick={NavigateToVizualizar} />
        </div>
        <div className="p-2 flex justify-center">
            <BotonMenu title={"Editar"} image={"/pen-svgrepo-com(2).svg"} onClick={handlerClickE} />
        </div>
        <div className="p-2 flex justify-center">
            <BotonMenu title={"Eliminar"} image={"/trash-xmark-svgrepo-com.svg"} onClick={handlerClick} />
        </div>
    </div>
</div>


    );
}

export default MenuMotos;
//sm:grid  w-full gap-4 sm:grid-cols-2 lg:grid-cols-4 
/*
sm	640px	@media (min-width: 640px) { ... }
md	768px	@media (min-width: 768px) { ... }
lg	1024px	@media (min-width: 1024px) { ... }
xl	1280px	@media (min-width: 1280px) { ... }
2xl	1536px	@media (min-width: 1536px) { ... }
*/