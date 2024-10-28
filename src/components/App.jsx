// src/App.jsx
import React, { useState } from 'react';
import TableComponent from './TableComponent'; // Import the TableComponent

const App = () => {
    const [columns] = useState([
        { title: 'Name', key: 'name' },
        { title: 'Age', key: 'age' },
        { title: 'Address', key: 'address' },
        { title: 'Tags', key: 'tags' },
    ]);

    const [data, setData] = useState([
        { name: 'John Doe', age: 28, address: 'New York', tags: ['developer', 'javascript'] },
        { name: 'Jane Smith', age: 32, address: 'London', tags: ['designer', 'ux'] },
        { name: 'Michael Johnson', age: 45, address: 'Sydney', tags: ['manager', 'leadership'] },
        { name: 'Emily Davis', age: 22, address: 'Paris', tags: ['student', 'frontend'] },
    ]);

    const [newEntry, setNewEntry] = useState({
        name: '',
        age: '',
        address: '',
        tags: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEntry((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate inputs
        if (!newEntry.name || !newEntry.age || !newEntry.address || !newEntry.tags) {
            alert("Please fill all fields.");
            return;
        }

        const tagsArray = newEntry.tags.split(',').map(tag => tag.trim());

        // Add new entry to the data state
        setData((prevData) => [
            ...prevData,
            {
                name: newEntry.name,
                age: Number(newEntry.age),
                address: newEntry.address,
                tags: tagsArray,
            },
        ]);

        // Reset the form fields
        setNewEntry({ name: '', age: '', address: '', tags: '' });
    };

    return (
        <div>
            <h1>Table Project</h1>
            <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={newEntry.name}
                    onChange={handleInputChange}
                    required
                    style={{ marginRight: '10px' }}
                />
                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={newEntry.age}
                    onChange={handleInputChange}
                    required
                    style={{ marginRight: '10px' }}
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={newEntry.address}
                    onChange={handleInputChange}
                    required
                    style={{ marginRight: '10px' }}
                />
                <input
                    type="text"
                    name="tags"
                    placeholder="Tags (comma separated)"
                    value={newEntry.tags}
                    onChange={handleInputChange}
                    required
                    style={{ marginRight: '10px' }}
                />
                <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white', border: 'none', padding: '10px 15px', cursor: 'pointer' }}>
                    Add
                </button>
            </form>
            {/* Pass the updated data to the TableComponent */}
            <TableComponent columns={columns} data={data} />
        </div>
    );
};

export default App;
