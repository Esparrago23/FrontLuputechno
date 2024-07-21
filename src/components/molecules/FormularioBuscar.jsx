import React from 'react';
import Input from '../atoms/Input';

function FormularioBuscar(props) {
    return (
        <div>
            <Input
                onChange={props.onChange}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
            />
        </div>
    );
}

export default FormularioBuscar;