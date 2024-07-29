import React, { useState, useEffect } from 'react';
import Label from '../atoms/Label';
import Field from './Field';

function FormularioResguardante({ onChange,data }) {
    const [error, setError] = useState('')
    const [formValues, setFormValues] = useState({
        Curp: data.Curp,
        NumeroEconomico: data.NumeroEconomico,
        Nombre: data.Nombre,
        Apellidos: data.Apellidos,
        FechaVencimientoLicencia: data.FechaVencimientoLicencia,
        AreaTrabajo: data.AreaTrabajo,
        fechaResguardo: data.fechaResguardo
    });

    useEffect(() => {
        onChange(formValues);
    }, [formValues, onChange]);

    const handleChange = (name, value) => {
        const regex = /^\s*[a-zA-Z]*\s*$/;
        if (name==="fechaResguardo"||name === 'FechaVencimientoLicencia') {
            if (name==="FechaVencimientoLicencia"&&!isDateGreaterThanToday(value)) {
                setError("La fecha de resguardo debe ser mayor a la fecha de hoy.")
                setTimeout(()=>{
                    setError('')
                    
                },3000)   
                return;
            }
        }else if(name=="Curp"){
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
    }
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: value,
        }));
    };

    return (
        <div>
            
            <Label text="Resguardante" />
            <div className='grid grid-cols-2'>
                <Field value={formValues.Curp} onChange={(value) => handleChange('Curp', value)} type="text" placeholder={data.Curp} text="Curp"  />
                <Field value={formValues.NumeroEconomico} onChange={(value) => handleChange('NumeroEconomico', value)} type="text" placeholder={data.NumeroEconomico} text="Numero economico" />
                <Field value={formValues.Nombre} onChange={(value) => handleChange('Nombre', value)} type="text" placeholder={data.Nombre} text="Nombres."/>
                <Field value={formValues.Apellidos} onChange={(value) => handleChange('Apellidos', value)} type="text" placeholder={data.Apellidos} text="Apellidos"/>
                <Field value={formValues.FechaVencimientoLicencia} onChange={(value) => handleChange('FechaVencimientoLicencia', value)} type="date" placeholder={data.FechaVencimientoLicencia} text="Fecha de vencimiento de la licencia" />
                <Field value={formValues.AreaTrabajo} onChange={(value) => handleChange('AreaTrabajo', value)} type="text" placeholder={data.AreaTrabajo} text="Area de trabajo"/>
                <Field value={formValues.fechaResguardo} onChange={(value) => handleChange('fechaResguardo', value)} type="date" placeholder={data.fechaResguardo} text="Fecha de resguardo"/>
            </div>
            <label style={{color:"red"}}>{error}</label>
        </div>
    );
}

export default FormularioResguardante;