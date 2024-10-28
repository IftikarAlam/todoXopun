// src/TableComponent.jsx
import React, { useState } from 'react';
import './TableComponent.css'; // Import the styles for the table component

const TableComponent = ({ columns, data }) => {
    const [sortedData, setSortedData] = useState(data); // Initialize sorted data with incoming data
    const [sortDirection, setSortDirection] = useState({}); // State to track sort direction

    // Effect to update sortedData whenever data changes
    React.useEffect(() => {
        setSortedData(data);
    }, [data]);

    const handleSort = (key) => {
        const direction = sortDirection[key] === 'asc' ? 'desc' : 'asc';
        const sorted = [...sortedData].sort((a, b) => {
            if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
            if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
            return 0;
        });

        setSortedData(sorted);
        setSortDirection({ [key]: direction });
    };

    const handleDelete = (index) => {
        const updatedData = sortedData.filter((_, i) => i !== index);
        setSortedData(updatedData);
    };

    return (
        <div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        {columns.map((col) => (
                            <th
                                key={col.key}
                                onClick={() => handleSort(col.key)}
                                style={{ cursor: 'pointer', border: '1px solid #ccc', padding: '8px' }}
                            >
                                {col.title} {sortDirection[col.key] === 'asc' ? '🔼' : sortDirection[col.key] === 'desc' ? '🔽' : ''}
                            </th>
                        ))}
                        <th style={{ border: '1px solid #ccc', padding: '8px' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((item, index) => (
                        <tr key={index} style={{ border: '1px solid #ccc' }}>
                            {columns.map((col) => (
                                <td key={col.key} style={{ padding: '8px', border: '1px solid #ccc' }}>
                                    {col.key === 'tags' ? (
                                        <div className="tags">
                                            {item[col.key] && item[col.key].map((tag, tagIndex) => (
                                                <span key={tagIndex} className="tag">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    ) : (
                                        Array.isArray(item[col.key]) ? item[col.key].join(', ') : item[col.key]
                                    )}
                                </td>
                            ))}
                            <td style={{ padding: '8px', border: '1px solid #ccc' }}>
                                <button onClick={() => handleDelete(index)} style={{ backgroundColor: '#ff4d4f', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableComponent;
