import React, { useState } from 'react';
import mockData from '../data.json'; // Import the mock data

function Search() {
    const [query, setQuery] = useState(''); // State to keep track of search query
    const [results, setResults] = useState([]); // State to keep track of results

    // Function to handle search
    const handleSearch = (event) => {
        const value = event.target.value;
        setQuery(value);

        // Filter the mock data based on the search query
        if (value.trim() !== '') {
            const filteredData = mockData.filter(item =>
                item.name.toLowerCase().includes(value.toLowerCase()) ||
                item.email.toLowerCase().includes(value.toLowerCase())
            );
            setResults(filteredData);
        } else {
            setResults([]); // Reset results if query is empty
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search by name or email..."
                value={query}
                onChange={handleSearch}
            />
            <div>
                {results.length > 0 ? (
                    <ul>
                        {results.map(item => (
                            <li key={item.id}>{item.name} - {item.email}</li>
                        ))}
                    </ul>
                ) : (
                    query !== '' && <div>No results found</div>
                )}
            </div>
        </div>
    );
}

export default Search;
