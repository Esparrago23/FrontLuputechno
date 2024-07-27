import React, { useRef, useState } from 'react';
import Label from "../atoms/Label";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';
import FormularioVehiculos from '../molecules/FormularioVehiculos';
import FormularioBuscar from '../molecules/FormularioBuscar';
import FormularioMotosEditar from '../molecules/FormularioMotosEditar';
import BotonMenu from '../molecules/BotonMenu';
import FormularioMantenimientos from '../molecules/FormularioMantenimientos';
import FormularioMantenimientosEditar from '../molecules/FormularioMantenimientosEditar';
import { useNavigate } from "react-router-dom";
const MySwal = withReactContent(Swal);

function MenuMantenimientosus() {
    const inputValueRef = useRef('');
    const formRef = useRef({});
    const [form, setForm] = useState({});
    const navigate = useNavigate();

    const handlerClickA = () => {
        MySwal.fire({
            title: 'Ingresa los datos',
            html: <FormularioMantenimientos onChange={(values) => (formRef.current = values)} />,
            showCloseButton: true,
            confirmButtonText: 'Agregar',
            preConfirm: () => {
                setForm(formRef.current); // Actualizar el estado del formulario
                return formRef.current; // Devolver el valor actual del formulario
            },
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(JSON.stringify(formRef.current)); // Mostrar el valor actual del formulario
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
                    text: 'Vehiculo agregado correctamente.',
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
        }).then(async()  => {
            const response = await fetch(`${import.meta.env.VITE_URL_API}/Mantenimiento/${inputValueRef.current}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': sessionStorage.getItem('token')
                }
            });if (!response.ok) {
                throw new Error('Error fetching vehiculos');
            }
            const data = await response.json();
            setForm(data)
            console.log('Vehiculos data:', data);
            console.log('Vehiculos data:', data.NumeroEconomico);
            MySwal.fire({
                title: 'Ingresa los datos del Vehiculo',
                html: <FormularioMantenimientosEditar onChange={(values) => (formRef.current = values)}  data={data}/>,
                showCloseButton: true,
                confirmButtonText: 'Editar'
            }).then((result) => {
                if (result.isConfirmed) {
                    console.log(JSON.stringify(formRef.current)); // Mostrar el valor actual del formulario
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
                        text: 'Vehiculo Editado correctamente.',
                        icon: 'success',
                        confirmButtonText: 'OK',
                    });
                }
            });
    
        })/*
                Swal.fire({
                    title: '¿Estás Seguro de Editarlo?',
                    showCancelButton: true,
                    cancelButtonText: 'Cancelar',
                    confirmButtonText: 'Aceptar',
                });*/
           
    }

    const handlerClick = () => {
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
            confirmButtonText: 'Eliminar',
            preConfirm: () => {
                if (!inputValueRef.current) {
                    Swal.showValidationMessage('Por favor ingresa el No. Folio');
                    return false;
                }
                return inputValueRef.current;
            },
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(inputValueRef.current);
                fetch(`${import.meta.env.VITE_URL_API}/Mantenimiento/${inputValueRef.current}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                        'Authorization': sessionStorage.getItem('token')
                    }
                })
                .then((response) => {
                    if (response.ok) {
                        Swal.fire({
                            title: "Eliminado",
                            text: "El elemento ha sido eliminado.",
                            icon: "success"
                        });
                    } else {
                        return response.json().then((data) => {
                            throw new Error(data.message || 'Error al eliminar el vehiculo');
                        });
                    }
                })
                .catch((error) => {
                    Swal.fire({
                        title: "Error",
                        text: error.message,
                        icon: "error"
                    });
                });
            }
        });
    };
    const NavigateToVizualizar =  () =>{
        navigate("/VerMantenimientosus"); // redirige al usuario a la página de login o cualquier otra página
    };
  return (
    <div className="mt-16">
            <div className="mb-4 text-xl text-center bg-slate-200 sm:text-2xl md:text-3xl lg:text-4xl text-stone-950">
                <Label className="m-2 font-bold" text="¡LISTO PARA TRABAJAR!" />
            </div>
            <div className="flex mt-16 bg-slate-200 justify-evenly max-sm:grid max-sm:gap-4 sm:grid-cols-2">
                <BotonMenu title={"Añadir"} image={"/Papel2.png"} onClick={handlerClickA} />
                <BotonMenu title={"Visualizar"} image={"/Papel.png"} onClick={NavigateToVizualizar}/>
                <BotonMenu title={"Editar"} image={"/pen-svgrepo-com(2).svg"} onClick={handlerClickE} />
                <BotonMenu title={"Eliminar"} image={"/trash-xmark-svgrepo-com.svg"} onClick={handlerClick} />
            </div>
        </div>
  )
}

export default MenuMantenimientosus