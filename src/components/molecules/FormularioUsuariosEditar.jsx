import React, { useState, useEffect } from 'react';
import Input from '../atoms/Input';
import Label from '../atoms/Label';

function FormularioUsuariosEditar({ onChange,data }) {
		const [formValues, setFormValues] = useState({
			id: data.id,
			username: data.username,
			password: data.password,
			roles: data.roles,
			created_at: data.created_at
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
					<Input value={formValues.id} onChange={(value) => handleChange('id', value)} type="text" placeholder={data.id} />
					<Input value={formValues.username} onChange={(value) => handleChange('username', value)} type="text" placeholder={data.username} />
					<Input value={formValues.roles} onChange={(value) => handleChange('roles', value)} type="text" placeholder={data.roles} />
					
				</div>
				
			</div>
		);
}

export default FormularioUsuariosEditar;