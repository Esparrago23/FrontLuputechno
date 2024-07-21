import React, { useState, useEffect } from 'react';
import Input from '../atoms/Input';
import Label from '../atoms/Label';

function FormularioMotosEditar({ onChange,tipoVehiculo,data }) {
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
                <Input value={formValues.NumeroEconomico} onChange={(value) => handleChange('NumeroEconomico', value)} type="text" placeholder={data.NumeroEconomico} />
                <Input value={formValues.Placas} onChange={(value) => handleChange('Placas', value)} type="text" placeholder={data.Placas} />
                <Input value={formValues.Tipo} onChange={(value) => handleChange('Tipo', value)} type="text" placeholder={data.Tipo} />
                <Input value={formValues.Marca} onChange={(value) => handleChange('Marca', value)} type="text" placeholder={data.Marca} />
                <Input value={formValues.Modelo} onChange={(value) => handleChange('Modelo', value)} type="text" placeholder={data.Modelo} />
                <Input value={formValues.Estatus} onChange={(value) => handleChange('Estatus', value)} type="text" placeholder={data.Estatus} />
                <Input value={formValues.bujias} onChange={(value) => handleChange('bujias', value)} type="text" placeholder={data.bujias} />
                <Input value={formValues.FiltroAire} onChange={(value) => handleChange('FiltroAire', value)} type="text" placeholder={data.FiltroAire} />
                <Input value={formValues.FiltroAceite} onChange={(value) => handleChange('FiltroAceite', value)} type="text" placeholder={data.FiltroAceite} />
                <Input value={formValues.FiltroGasolina} onChange={(value) => handleChange('FiltroGasolina', value)} type="text" placeholder={data.FiltroGasolina} />
            </div>
        </div>
    );
}

export default FormularioMotosEditar;