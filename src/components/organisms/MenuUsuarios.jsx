import React, { useRef, useState } from 'react';
import Label from "../atoms/Label";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';
import FormularioBuscar from '../molecules/FormularioBuscar';
import BotonMenu from '../molecules/BotonMenu';
import { useNavigate } from "react-router-dom";
import FormularioUsuarios from '../molecules/FormularioUsuarios';
import FormularioUsuariosEditar from '../molecules/FormularioUsuariosEditar';
const MySwal = withReactContent(Swal);

function MenuUsuarios() {
    const inputValueRef = useRef('');
    const formRef = useRef({});
    const [form, setForm] = useState({});
    const navigate = useNavigate();

    const handlerClickA = () => {
        MySwal.fire({
            title: 'Ingresa los datos',
            html: <FormularioUsuarios onChange={(values) => (formRef.current = values)} />,
            showCloseButton: true,
            confirmButtonText: 'Agregar',
            preConfirm: () => {
                setForm(formRef.current); // Actualizar el estado del formulario
                return formRef.current; // Devolver el valor actual del formulario
            },
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(JSON.stringify(formRef.current)); // Mostrar el valor actual del formulario
                fetch(`${import.meta.env.VITE_URL_API}/auth/register`, {
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
                    text: 'Usuario agregado correctamente.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                });
            }
        });
    };

    const handlerClickE =  () => {
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
        }).then(async()  => {
            const response = await fetch(`${import.meta.env.VITE_URL_API}/usuarios/${inputValueRef.current}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': sessionStorage.getItem('token')
                }
            });if (!response.ok) {
                throw new Error('Error fetching usuarios');
            }
            const data = await response.json();
            setForm(data)
            console.log('usuarios data:', data);
            console.log('usuarios data:', data.NumeroEconomico);
            MySwal.fire({
                title: 'Ingresa los datos del usuario',
                html: <FormularioUsuariosEditar onChange={(values) => (formRef.current = values)}  data={data}/>,
                showCloseButton: true,
                confirmButtonText: 'Editar'
            }).then((result) => {
                if (result.isConfirmed) {
                    console.log(JSON.stringify(formRef.current)); // Mostrar el valor actual del formulario
                    fetch(`${import.meta.env.VITE_URL_API}/usuarios/${inputValueRef.current}`, {
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
                        text: 'usuario Editado correctamente.',
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
            title: 'Ingresa los datos del usuario',
            html: (
                <FormularioBuscar
                    type="text"
                    placeholder="id"
                    onChange={(value) => {
                        inputValueRef.current = value;
                    }}
                />
            ),
            showCloseButton: true, 
            confirmButtonText: 'Eliminar',
            preConfirm: () => {
                if (!inputValueRef.current) {
                    Swal.showValidationMessage('Por favor ingresa el id');
                    return false;
                }
                return inputValueRef.current;
            },
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(inputValueRef.current);
                fetch(`${import.meta.env.VITE_URL_API}/usuarios/${inputValueRef.current}`, {
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
                            throw new Error(data.message || 'Error al eliminar el usuario');
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
        navigate("/VerUsuarios"); // redirige al usuario a la página de login o cualquier otra página
};

    return (
        <div className="mt-16">
            <div className="bg-slate-200 mb-4 text-xl text-center sm:text-2xl md:text-3xl lg:text-4xl text-stone-950">
                <Label className="m-2 font-bold" text="¡LISTO PARA TRABAJAR!" />
            </div>
            <div className="bg-slate-200 flex justify-evenly max-sm:grid max-sm:gap-4 sm:grid-cols-2 mt-16">
                <BotonMenu title={"Añadir"} image={"/AddUseer.png"} onClick={handlerClickA} />
                <BotonMenu title={"Visualizar"} image={"/users.png"} onClick={NavigateToVizualizar}/>
                <BotonMenu title={"Editar"} image={"/pen-svgrepo-com(2).svg"} onClick={handlerClickE} />
                <BotonMenu title={"Eliminar"} image={"/trash-xmark-svgrepo-com.svg"} onClick={handlerClick} />
            </div>
        </div>
    );
}

export default MenuUsuarios;