import React, { useState, useEffect } from 'react';
import Input from '../atoms/Input';
import Label from '../atoms/Label';

function FormularioUsuarios({ onChange }) {
    const [formValues, setFormValues] = useState({
        username: '',
        password: '',
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
            <Label text="Usuarios" />
            <div className='grid grid-cols-2'>
                <Input value={formValues.username} onChange={(value) => handleChange('username', value)} type="text" placeholder="username" />
                <Input value={formValues.password} onChange={(value) => handleChange('password', value)} type="text" placeholder="password" />
            </div>
            
        </div>
    );
}

export default FormularioUsuarios;