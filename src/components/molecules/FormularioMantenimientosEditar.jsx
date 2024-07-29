import React, { useState, useEffect } from 'react';
import Label from '../atoms/Label';
import Field from './Field';

function FormularioMantenimientosEditar({ onChange,data }) {
    const [error, setError] = useState('')
    const [formValues, setFormValues] = useState({
        NumeroFolio: data.NumeroFolio,
        NumeroEconomico: data.NumeroEconomico,
        NombreTaller: data.NombreTaller,
        DirecciónTaller: data.DirecciónTaller,
        ServicioRealizado: data.ServicioRealizado,
        CostoServicio: data.CostoServicio
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
                <Field value={formValues.NumeroFolio} onChange={(value) => handleChange('NumeroFolio', value)} type="text" placeholder={data.NumeroFolio} text="Numero de folio"/>
                <Field value={formValues.NumeroEconomico} onChange={(value) => handleChange('NumeroEconomico', value)} type="text" placeholder={data.NumeroEconomico}text="Numero economico" />
                <Field value={formValues.NombreTaller} onChange={(value) => handleChange('NombreTaller', value)} type="text" placeholder={data.NombreTaller} text="Nombre del taller"/>
                <Field value={formValues.DirecciónTaller} onChange={(value) => handleChange('DirecciónTaller', value)} type="text" placeholder={data.DirecciónTaller} text="Direccion del taller"/>
                <Field value={formValues.ServicioRealizado} onChange={(value) => handleChange('ServicioRealizado', value)} type="text" placeholder={data.ServicioRealizado} text="Servicio realizado" />
                <Field value={formValues.CostoServicio} onChange={(value) => handleChange('CostoServicio', value)} type="number" placeholder={data.CostoServicio} text="Costo del servicio" />
            </div>
            <label style={{color:"red"}}>{error}</label>
        </div>
    );
}

export default FormularioMantenimientosEditar;