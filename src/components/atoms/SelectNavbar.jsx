import React from "react";

function SelectNavbar({ opcion1, opcion2, opcion3, opcion4, opcion5, value1, value2, value3, value4, value5, OnChange}) {
    return (
        <div className="flex flex-row m-5">
            <select name="select" className="text-white font-extralight bg-azulIntegrador" onChange={OnChange}>
                <option className="p-5 m-4 text-white rounded-full bg-azulselec font-extralight w-50" value={value1}>
                    {opcion1}
                </option>
                <option className="p-5 m-4 text-white rounded-full font-extralight bg-azulselec w-50" value={value2}>
                    {opcion2}
                </option>
                <option className="p-5 m-4 text-white rounded-full bg-azulselec font-extralight w-50" value={value3}>
                    {opcion3}
                </option>
                <option className="p-5 m-4 text-white rounded-full bg-azulselec font-extralight w-50" value={value4}>
                    {opcion4}
                </option>
                <option className="p-5 m-4 text-white rounded-full bg-azulselec font-extralight w-50" value={value5}>
                    {opcion5}
                </option>
            </select>  
        </div>
    );
}

export default SelectNavbar;
