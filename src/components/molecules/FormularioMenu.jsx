import ElementoFormulario from "../atoms/ElementoFormulario"
import React, { useState } from "react";
import Swal from 'sweetalert2';
import Button from "../atoms/Button";
import Select from "../atoms/Select";

function FormularioMenu() {
    const [inputValue, setInputValue] = useState('');

    const{handlerOnchange} = (e)=>{
        const newvalue = e.target.value
    console.log(newvalue)
    setInputValue(newvalue);
    }
    return (
        <div className="flex flex-col m-5 bg-azulIntegradorClaro" id="Mantenimiento">
            <ElementoFormulario
                text="No. Economico Vehiculo"
                placeholder="No. Economico Vehiculo"
                type="text"
                onInputChange={handlerOnchange}
            />

        </div>
    )
}

export default FormularioMenu