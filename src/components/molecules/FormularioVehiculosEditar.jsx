import React, { useState, useEffect } from 'react';
import Input from '../atoms/Input';
import Label from '../atoms/Label';
import Field from './Field';

function FormularioVehiculosEditar({ onChange,tipoVehiculo,data }) {
    const [error, setError] = useState('')
    const [formValues, setFormValues] = useState({
        NumeroEconomico: data.NumeroEconomico,
        Placas: data.Placas,
        TipoVehiculo: tipoVehiculo,
        Tipo: data.Tipo,
        Marca: data.Marca,
        Modelo: data.Modelo,
        Estatus: data.Estatus,
        bujias: data.bujias,
        FiltroAire: data.FiltroAire,
        FiltroAceite: data.FiltroAceite,
        FiltroGasolina: data.FiltroGasolina,
    });
    console.log(data.NumeroEconomico)
    useEffect(() => {
        onChange(formValues);
    }, [formValues, onChange]);

    const handleChange = (name, value) => {
        const regex = /^\s*[a-zA-Z]*\s*$/;
    if(name==="NumeroEconomico"||name==="Placas"||name==="FiltroAire"||name=="FiltroAceite"||name=="FiltroGasolina"||name=="bujias"||name=="Tipo"||name=="Marca"||name=="Modelo"){
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
            {/* Vehiculos */}
            <Label text="Vehiculos" />
            <div className='grid grid-cols-2'>
                <Field value={formValues.NumeroEconomico} onChange={(value) => handleChange('NumeroEconomico', value)} type="text" placeholder={data.NumeroEconomico} text="Numero economico"/>
                <Field value={formValues.Placas} onChange={(value) => handleChange('Placas', value)} type="text" placeholder={data.Placas} text="Placas"/>
                <Field value={formValues.Tipo} onChange={(value) => handleChange('Tipo', value)} type="text" placeholder={data.Tipo} text="Tipo"/>
                <Field value={formValues.Marca} onChange={(value) => handleChange('Marca', value)} type="text" placeholder={data.Marca} text="Marca" />
                <Field value={formValues.Modelo} onChange={(value) => handleChange('Modelo', value)} type="text" placeholder={data.Modelo} text="Modelo" />
                <Field value={formValues.Estatus} onChange={(value) => handleChange('Estatus', value)} type="text" placeholder={data.Estatus} text="Estatus" />
                <Field value={formValues.bujias} onChange={(value) => handleChange('bujias', value)} type="text" placeholder={data.bujias} text="Bujias" />
                <Field value={formValues.FiltroAire} onChange={(value) => handleChange('FiltroAire', value)} type="text" placeholder={data.FiltroAire} text="Filtro de aire"/>
                <Field value={formValues.FiltroAceite} onChange={(value) => handleChange('FiltroAceite', value)} type="text" placeholder={data.FiltroAceite} text="Filtro de aceite" />
                <Field value={formValues.FiltroGasolina} onChange={(value) => handleChange('FiltroGasolina', value)} type="text" placeholder={data.FiltroGasolina} text="Filtro de gasolina"/>
            </div>
            <label style={{color:"red"}}>{error}</label>
        </div>
    );
}

export default FormularioVehiculosEditar;