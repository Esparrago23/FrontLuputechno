import React, { useState } from 'react';
function Input({ type, placeholder, onchange, value }) {
    // const [value, setValue] = useState('');
    const handleChange = (event) => {
        // setValue(event.target.value);
        onchange(event.target.value);
      };
    return(
        <input type={type}
        placeholder={placeholder}
        value={value} className="block w-full px-3 py-2 mt-1 bg-white border rounded-full shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"
        onChange={handleChange}
        ></input>
    )
}
export default Input 