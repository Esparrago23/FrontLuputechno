import React, { useState, useEffect } from 'react';
import Input from '../atoms/Input';
import Label from '../atoms/Label';
import Field from '../molecules/Field'

function FormularioVehiculos({ onChange,tipoVehiculo }) {
    const [error, setError] = useState('')
    const [formValues, setFormValues] = useState({
        NumeroEconomico: '',
        Placas: '',
        TipoVehiculo: tipoVehiculo,
        Tipo: '',
        Marca: '',
        Modelo: '',
        Estatus: '',
        bujias: '',
        FiltroAire: '',
        FiltroAceite: '',
        FiltroGasolina: '',
        Curp: '',
        Nombre: '',
        Apellidos: '',
        FechaVencimientoLicencia: '',
        AreaTrabajo: '',
        fechaResguardo: '',
    });
    const isDateGreaterThanToday = (dateString) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const inputDate = new Date(dateString);
        return inputDate > today;
    };
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
        }else if(name==="NumeroEconomico"||name==="Placas"||name==="FiltroAire"||name=="FiltroAceite"||name=="FiltroGasolina"||name=="Curp"||name=="bujias"||name=="Tipo" ||name=="Marca"||name=="Modelo"){
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
                <Input value={formValues.NumeroEconomico} onChange={(value) => handleChange('NumeroEconomico', value)} type="text" placeholder="No. económico" />
                <Input value={formValues.Placas} onChange={(value) => handleChange('Placas', value)} type="text" placeholder="Placas" />
                <Input value={formValues.Tipo} onChange={(value) => handleChange('Tipo', value)} type="text" placeholder="Tipo" />
                <Input value={formValues.Marca} onChange={(value) => handleChange('Marca', value)} type="text" placeholder="Marca" />
                <Input value={formValues.Modelo} onChange={(value) => handleChange('Modelo', value)} type="text" placeholder="Modelo" />
                <Input value={formValues.Estatus} onChange={(value) => handleChange('Estatus', value)} type="text" placeholder="Estatus" />
                <Input value={formValues.bujias} onChange={(value) => handleChange('bujias', value)} type="text" placeholder="bujias" />
                <Input value={formValues.FiltroAire} onChange={(value) => handleChange('FiltroAire', value)} type="text" placeholder="FiltroAire" />
                <Input value={formValues.FiltroAceite} onChange={(value) => handleChange('FiltroAceite', value)} type="text" placeholder="FiltroAceite" />
                <Input value={formValues.FiltroGasolina} onChange={(value) => handleChange('FiltroGasolina', value)} type="text" placeholder="FiltroGasolina" />
            </div>
            {/* Resguardante */}
            <Label text="Resguardante" />
            <div>
                <Input value={formValues.Curp} onChange={(value) => handleChange('Curp', value)} type="text" placeholder="Curp" />
                <Input value={formValues.Nombre} onChange={(value) => handleChange('Nombre', value)} type="text" placeholder="Nombre" />
                <Input value={formValues.Apellidos} onChange={(value) => handleChange('Apellidos', value)} type="text" placeholder="Apellidos" />
                <Field value={formValues.FechaVencimientoLicencia} onChange={(value) => handleChange('FechaVencimientoLicencia', value)} type="date" placeholder="Fecha Exp. Licencia de conducir" text="Fecha de vencimiento de la licencia" />
                <Input value={formValues.AreaTrabajo} onChange={(value) => handleChange('AreaTrabajo', value)} type="text" placeholder="Area de Trabajo" />
                <Field value={formValues.fechaResguardo} onChange={(value) => handleChange('fechaResguardo', value)} type="date" placeholder="Fecha Resguardo" text="Fecha de resguardo" />
            </div>
            <label style={{color:"red"}}>{error}</label>
        </div>
    );
}

export default FormularioVehiculos;