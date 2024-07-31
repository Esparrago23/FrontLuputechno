import React, { useRef, useState } from 'react';
import Label from "../atoms/Label";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';
import FormularioVehiculos from '../molecules/FormularioVehiculos';
import FormularioBuscar from '../molecules/FormularioBuscar';
import FormularioVehiculosEditar from '../molecules/FormularioVehiculosEditar';
import BotonMenu from '../molecules/BotonMenu';
import FormularioMantenimientos from '../molecules/FormularioMantenimientos';
import FormularioMantenimientosEditar from '../molecules/FormularioMantenimientosEditar';
import { useNavigate } from "react-router-dom";
const MySwal = withReactContent(Swal);

function MenuMantenimientos() {
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
            html: <FormularioMantenimientos onChange={(values) => (formRef.current = values)} />,
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
                fetch(`${import.meta.env.VITE_URL_API}/Mantenimiento`, {
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
                    text: 'Mantenimiento agregado correctamente.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                });
            }
        });
    };

    const handlerClickE =  () => {
        MySwal.fire({
            title: 'Ingresa los datos del Mantenimiento',
            html: (
                <FormularioBuscar type="text" placeholder="No. Folio"
                    onChange={(value) => {inputValueRef.current = value}}
                />
            ),
            showCloseButton: true, 
            confirmButtonText: 'Buscar',
            preConfirm: () => {
                if (!inputValueRef.current) {
                    Swal.showValidationMessage('Por favor ingresa el No. folio');
                    return false;
                }
                return inputValueRef.current;
            },
        }).then(async(result)  => {
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
                throw new Error('No existe ese Mantenimiento');
            }
            const data = await response.json();
            setForm(data)
            MySwal.fire({
                title: 'Ingresa los datos del Mantenimiento',
                html: <FormularioMantenimientosEditar onChange={(values) => (formRef.current = values)}  data={data}/>,
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
                    fetch(`${import.meta.env.VITE_URL_API}/Mantenimiento/${inputValueRef.current}`, {
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
                        text: 'Mantenimiento Editado correctamente.',
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
            title: 'Ingresa los datos del Mantenimiento',
            html: (
                <FormularioBuscar type="text" placeholder="No.Folio"
                    onChange={(value) => {inputValueRef.current = value}}
                />
            ),
            showCloseButton: true, 
            confirmButtonText: 'Eliminar',
            preConfirm: () => {
                console.log(!inputValueRef.current)
                if (!inputValueRef.current) {
                    Swal.showValidationMessage('Por favor ingresa el No. folio');
                    return false;
                }
                const regex = /^\s*[a-zA-Z0-9]*\s*$/;
                if(!regex.test(inputValueRef.current )){
                    Swal.showValidationMessage('No se permiten caracteres especiales');
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
                        fetch(`${import.meta.env.VITE_URL_API}/Mantenimiento/${inputValueRef.current}`, {
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
                                    throw new Error(`No existe ese Mantenimiento`);
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
        navigate("/VerMantenimientos"); // redirige al usuario a la página de login o cualquier otra página
};

    return (
        <div className="flex flex-col items-center mt-16">
    <div className="w-full mb-4 text-xl text-center bg-slate-200 sm:text-2xl md:text-3xl lg:text-4xl text-stone-950">
        <Label className="m-2 font-bold" text="¡LISTO PARA TRABAJAR!" />
    </div>
    <div className="grid w-full grid-cols-2 gap-4 mt-16 bg-slate-200 sm:grid-cols-2 lg:flex lg:justify-evenly">
        <div className="flex justify-center p-2">
            <BotonMenu title={"Añadir"} image={"/Papel2.png"} onClick={handlerClickA} />
        </div>
        <div className="flex justify-center p-2">
            <BotonMenu title={"Visualizar"} image={"/Papel.png"} onClick={NavigateToVizualizar} />
        </div>
        <div className="flex justify-center p-2">
            <BotonMenu title={"Editar"} image={"/pen-svgrepo-com(2).svg"} onClick={handlerClickE} />
        </div>
        <div className="flex justify-center p-2">
            <BotonMenu title={"Eliminar"} image={"/trash-xmark-svgrepo-com.svg"} onClick={handlerClick} />
        </div>
    </div>
</div>


    );
}

export default MenuMantenimientos;