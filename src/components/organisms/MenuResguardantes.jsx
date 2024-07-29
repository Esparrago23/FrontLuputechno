import React, { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Label from "../atoms/Label";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';
import FormularioBuscar from '../molecules/FormularioBuscar';
import BotonMenu from '../molecules/BotonMenu';
import FormularioResguardante from '../molecules/FormularioResguardante';

const MySwal = withReactContent(Swal);

function MenuResguardantes() {
    const inputValueRef = useRef('');
    const formRef = useRef({});
    const [form, setForm] = useState({});
    const navigate = useNavigate();
    const resetInputValue = () => {
        inputValueRef.current = '';
    };

    const handlerClickE =  () => {
        MySwal.fire({
            title: 'Ingresa los datos del Resguardante',
            html: (
                <FormularioBuscar type="text" placeholder="Curp"
                    onChange={(value) => {inputValueRef.current = value}}
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
        }).then(async(result)  => {
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
                throw new Error('No existe ese Resguardante');
            }
            const data = await response.json();
            setForm(data)
            MySwal.fire({
                title: 'Ingresa los datos del Resguardante',
                html: <FormularioResguardante onChange={(values) => (formRef.current = values)}  data={data}/>,
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

    const NavigateToVizualizar =  () =>{
            navigate("/VerResguardantes"); // redirige al usuario a la página de login o cualquier otra página
    };

    return (
        <div className="mt-16 flex flex-col items-center">
    <div className="mb-4 text-xl text-center bg-slate-200 sm:text-2xl md:text-3xl lg:text-4xl text-stone-950 w-full">
        <Label className="m-2 font-bold" text="¡LISTO PARA TRABAJAR!" />
    </div>
    <div className="grid grid-cols-2 gap-4 mt-16 bg-slate-200 lg:flex sm:grid-cols-2 lg:justify-evenly w-full">
        <div className="p-2 flex justify-center">
            <BotonMenu title={"Visualizar"} image={"/Resguardante.png"} onClick={NavigateToVizualizar} />
        </div>
        <div className="p-2 flex justify-center">
            <BotonMenu title={"Editar"} image={"/pen-svgrepo-com(2).svg"} onClick={handlerClickE} />
        </div>
    </div>
</div>

    );
}

export default MenuResguardantes;