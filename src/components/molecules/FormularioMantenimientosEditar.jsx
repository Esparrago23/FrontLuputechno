import React, { useState, useEffect } from 'react';
import Input from '../atoms/Input';
import Label from '../atoms/Label';

function FormularioMantenimientosEditar({ onChange,data }) {
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
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: value,
        }));
    };

    return (
        <div>
            
            <Label text="Mantenimiento" />
            <div className='grid grid-cols-2'>
                <Input value={formValues.NumeroFolio} onChange={(value) => handleChange('NumeroFolio', value)} type="text" placeholder={data.NumeroFolio} />
                <Input value={formValues.NumeroEconomico} onChange={(value) => handleChange('NumeroEconomico', value)} type="text" placeholder={data.NumeroEconomico} />
                <Input value={formValues.NombreTaller} onChange={(value) => handleChange('NombreTaller', value)} type="text" placeholder={data.NombreTaller} />
                <Input value={formValues.DirecciónTaller} onChange={(value) => handleChange('DirecciónTaller', value)} type="text" placeholder={data.DirecciónTaller} />
                <Input value={formValues.ServicioRealizado} onChange={(value) => handleChange('ServicioRealizado', value)} type="text" placeholder={data.ServicioRealizado} />
                <Input value={formValues.CostoServicio} onChange={(value) => handleChange('CostoServicio', value)} type="number" placeholder={data.CostoServicio} />
            </div>
            
        </div>
    );
}

export default FormularioMantenimientosEditar;