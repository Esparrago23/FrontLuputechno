
import React from 'react';

function Table({ columns, data }) {
    
    return (
        <table className="min-w-full bg-white border border-gray-300">
            <thead>
                <tr>
                    {columns.map((col, index) => (
                        <th key={index} className="px-4 py-2 border-b">{col.header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        {columns.map((col, colIndex) => (
                            <td key={colIndex} className="px-4 py-2 border-b">{item[col.accessor]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;