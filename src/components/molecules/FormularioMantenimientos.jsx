import React, { useState, useEffect } from 'react';
import Input from '../atoms/Input';
import Label from '../atoms/Label';

function FormularioMantenimientos({ onChange }) {
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
                <Input value={formValues.CostoServicio} onChange={(value) => handleChange('CostoServicio', value)} type="number" placeholder="CostoServicio" />
            </div>
            
        </div>
    );
}

export default FormularioMantenimientos;