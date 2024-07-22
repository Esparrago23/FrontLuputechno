import React, { useState, useEffect } from 'react';
import Input from '../atoms/Input';
import Label from '../atoms/Label';

function FormularioResguardante({ onChange,data }) {
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
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: value,
        }));
    };

    return (
        <div>
            
            <Label text="Resguardante" />
            <div className='grid grid-cols-2'>
                <Input value={formValues.Curp} onChange={(value) => handleChange('Curp', value)} type="text" placeholder={data.Curp} />
                <Input value={formValues.NumeroEconomico} onChange={(value) => handleChange('NumeroEconomico', value)} type="text" placeholder={data.NumeroEconomico} />
                <Input value={formValues.Nombre} onChange={(value) => handleChange('Nombre', value)} type="text" placeholder={data.Nombre} />
                <Input value={formValues.Apellidos} onChange={(value) => handleChange('Apellidos', value)} type="text" placeholder={data.Apellidos}/>
                <Input value={formValues.FechaVencimientoLicencia} onChange={(value) => handleChange('FechaVencimientoLicencia', value)} type="text" placeholder={data.FechaVencimientoLicencia} />
                <Input value={formValues.AreaTrabajo} onChange={(value) => handleChange('AreaTrabajo', value)} type="text" placeholder={data.AreaTrabajo} />
                <Input value={formValues.fechaResguardo} onChange={(value) => handleChange('fechaResguardo', value)} type="text" placeholder={data.fechaResguardo} />
            </div>
            
        </div>
    );
}

export default FormularioResguardante;