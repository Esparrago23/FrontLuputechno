import React, { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Label from "../atoms/Label";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';
import FormularioVehiculos from '../molecules/FormularioVehiculos';
import FormularioBuscar from '../molecules/FormularioBuscar';
import FormularioMotosEditar from '../molecules/FormularioMotosEditar';
import BotonMenu from '../molecules/BotonMenu';
import FormularioResguardante from '../molecules/FormularioResguardante';

const MySwal = withReactContent(Swal);

function MenuResguardantes() {
    const inputValueRef = useRef('');
    const formRef = useRef({});
    const [form, setForm] = useState({});
    const navigate = useNavigate();


    const handlerClickE =  () => {
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
        }).then(async()  => {
            const response = await fetch(`${import.meta.env.VITE_URL_API}/Resguardantes/${inputValueRef.current}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': sessionStorage.getItem('token')
                }
            });if (!response.ok) {
                throw new Error('Error fetching Resguardantes');
            }
            const data = await response.json();
            setForm(data)
            MySwal.fire({
                title: 'Ingresa los datos del Resguardante',
                html: <FormularioResguardante onChange={(values) => (formRef.current = values)} data={data}/>,
                showCloseButton: true,
                confirmButtonText: 'Editar'
            }).then((result) => {
                if (result.isConfirmed) {
                    console.log(JSON.stringify(formRef.current)); // Mostrar el valor actual del formulario
                    fetch(`${import.meta.env.VITE_URL_API}/Resguardantes/${inputValueRef.current}`, {
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
                        text: 'Resguardante Editado correctamente.',
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

    const NavigateToVizualizar =  () =>{
            navigate("/VerResguardantes"); // redirige al usuario a la página de login o cualquier otra página
    };

    return (
        <div className="mt-16">
            <div className="bg-slate-200 mb-4 text-xl text-center sm:text-2xl md:text-3xl lg:text-4xl text-stone-950">
                <Label className="m-2 font-bold" text="¡LISTO PARA TRABAJAR!" />
            </div>
            <div className="bg-slate-200 flex justify-evenly max-sm:grid max-sm:gap-4 sm:grid-cols-2 mt-16">
                <BotonMenu title={"Visualizar"} image={"/Resguardante.png"} onClick={NavigateToVizualizar}/>
                <BotonMenu title={"Editar"} image={"/pen-svgrepo-com(2).svg"} onClick={handlerClickE} />
            </div>
        </div>
    );
}

export default MenuResguardantes;