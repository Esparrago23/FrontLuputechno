import React, { useState, useEffect } from 'react';
import Input from '../atoms/Input';
import Label from '../atoms/Label';

function FormularioMantenimientos({ onChange }) {
    const [error, setError] = useState('')
    const [formValues, setFormValues] = useState({
        NumeroFolio: '',
        NumeroEconomico: '',
        NombreTaller: '',
        DirecciónTaller: '',
        ServicioRealizado: '',
        CostoServicio: ''
    });

    useEffect(() => {
        onChange(formValues);
    }, [formValues, onChange]);

    const handleChange = (name, value) => {
        const positiveNumberRegex = /^\d*\.?\d+$/;
        const regex = /^\s*[a-zA-Z]*\s*$/;
        if(name==="NumeroFolio"||name==="NumeroEconomico"||name==="NombreTaller"||name=="DirecciónTaller"||name=="ServicioRealizado"||name=="CostoServicio"){
            const regex = /^\s*[a-zA-Z0-9]*\s*$/;
            if(!regex.test(value )){
                setError("no ingrese digitos especiales")
                setTimeout(()=>{
                    setError('')
                    
                },3000)
                return
            }
        }else {
        if(!regex.test(value )){
            setError("Solo mayúsculas")
            setTimeout(()=>{
                setError('')
                
            },3000)
            return
        }
    }if (name === "CostoServicio") {
        if (!positiveNumberRegex.test(value)) {
            setError("Ingrese solo números positivos para el costo del servicio.");
            setTimeout(() => {
                setError('');
            }, 3000);
            return;
        }
    }
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: value,
        }));
    };

    return (
        <div>
            
            <Label text="Mantenimiento" />
            <div className='grid grid-cols-2'>
                <Input value={formValues.NumeroFolio} onChange={(value) => handleChange('NumeroFolio', value)} type="text" placeholder="NumeroFolio" />
                <Input value={formValues.NumeroEconomico} onChange={(value) => handleChange('NumeroEconomico', value)} type="text" placeholder="NumeroEconomico" />
                <Input value={formValues.NombreTaller} onChange={(value) => handleChange('NombreTaller', value)} type="text" placeholder="NombreTaller" />
                <Input value={formValues.DirecciónTaller} onChange={(value) => handleChange('DirecciónTaller', value)} type="text" placeholder="DirecciónTaller" />
                <Input value={formValues.ServicioRealizado} onChange={(value) => handleChange('ServicioRealizado', value)} type="text" placeholder="ServicioRealizado" />
                <Input value={formValues.CostoServicio} onChange={(value) => handleChange('CostoServicio', value)} type="text" placeholder="CostoServicio" />
            </div>
            <label style={{color:"red"}}>{error}</label>
        </div>
    );
}

export default FormularioMantenimientos;