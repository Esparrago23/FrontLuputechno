import React, { useState, useEffect, useRef } from 'react';
import Label from '../atoms/Label';
import Field from './Field';

function FormularioUsuariosEditar({ onChange, data }) {
    const [error, setError] = useState('')
    const [formValues, setFormValues] = useState({
        id: data.id,
        username: data.username,
        password: data.password,
        roles: data.roles,
        created_at: data.created_at,
    });
		useEffect(() => {
			onChange(formValues);
		}, [formValues, onChange]);

    const handleChange = (name, value) => {
        const positiveNumberRegex = /^[1-9]\d*$/;
        const lettersOnlyRegex = /^[a-zA-Z]*$/;
        const lowercaseLettersOnlyRegex = /^[a-z]*$/;

        if (name === 'id') {
            if (!positiveNumberRegex.test(value)) {
                setError ( 'ID debe ser un número positivo.')
                setTimeout(() => {
                    setError('');
                }, 3000);
                return;
            }
        } else if (name === 'username') {
            if (!lettersOnlyRegex.test(value)) {
                setError ('Username solo debe contener letras mayúsculas y minúsculas.')
                setTimeout(() => {
                    setError('');
                }, 3000);
                return;
            }
        } else if (name === 'roles') {
            if (!lowercaseLettersOnlyRegex.test(value)) {
                setError ('Rol solo debe contener letras minúsculas.');
                setTimeout(() => {
                    setError('');
                }, 3000);
                return;
            }
        }
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };
    
    return (
        <div>
            <Label text="Usuarios" />
            <div className='grid grid-cols-2'>
                <Field value={formValues.id} onChange={(value) => handleChange('id', value)} type="text"  placeholder={data.id} text="Id" />
                <Field value={formValues.username} onChange={(value) => handleChange('username', value)} type="text" placeholder={data.username} text="User name" />
                <Field value={formValues.roles} onChange={(value) => handleChange('roles', value)} type="text" placeholder={data.roles} text="Rol"/>
            </div>
            <label style={{color:"red"}}>{error}</label>
        </div>
    );
}

export default FormularioUsuariosEditar;
