import React from 'react';
import Input from '../atoms/Input';
import { useState } from 'react';

function FormularioBuscar(props) {
    const [error, setError] = useState('')
    return (
        <div>
            <Input
                onChange={props.onChange}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
            />
            <label style={{color:"red"}}>{error}</label>
        </div>
    );
}

export default FormularioBuscar;