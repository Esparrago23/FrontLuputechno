import React, { useState, useEffect } from 'react';
import Input from '../atoms/Input';
import Label from '../atoms/Label';

function FormularioUsuarios({ onChange }) {
    const [error, setError] = useState('')
    const [formValues, setFormValues] = useState({
        username: '',
        password: '',
    });

    useEffect(() => {
        onChange(formValues);
    }, [formValues, onChange]);

    const handleChange = (name, value) => {
        const lettersOnlyRegex = /^\s*[a-zA-Z]*\s*$/;
        if (name === "username") {
            if (!lettersOnlyRegex.test(value)) {
                setError("El nombre de usuario solo debe contener letras.");
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
            <Label text="Usuarios" />
            <div className='grid grid-cols-2'>
                <Input value={formValues.username} onChange={(value) => handleChange('username', value)} type="text" placeholder="username" />
                <Input value={formValues.password} onChange={(value) => handleChange('password', value)} type="text" placeholder="password" />
            </div>
            <label style={{color:"red"}}>{error}</label>
        </div>
    );
}

export default FormularioUsuarios;