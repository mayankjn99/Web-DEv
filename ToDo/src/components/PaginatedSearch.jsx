// src/PaginatedSearch.js
import { useState, useEffect, useRef } from 'react';
import ListResults from './ListResults';

const API_URL = 'https://reqres.in/api/users';

const PaginatedSearch = () => {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState('');
  const timeoutRef = useRef(null);
  
  // Function to fetch results from the API based on page and search term
  const fetchResults = async (currentPage, searchTerm) => {
    try {
      const response = await fetch(
        `${API_URL}?page=${currentPage}&per_page=3${searchTerm ? `&q=${searchTerm}` : ''}`
      );
      const data = await response.json();
      setResults(data.data);
      setTotalPages(data.total_pages);
    } catch (e) {
      console.log('Error:', e);
    }
  };

  // Debounce function
  const debounce = (cb, delay) => {
    return (...args) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        console.log('Executing debounced function after delay', timeoutRef.current);
        cb(...args);
      }, delay);
    };
  };

  // Debounced version of the fetch results function
  const debouncedFetchResults = debounce((searchTerm) => {
    fetchResults(1, searchTerm);
  }, 500);

  // Function to handle changes in the search input
  const handleInput = (event) => {
    const searchTerm = event.target.value;
    setQuery(searchTerm);
    setPage(1); // Reset to the first page on new search query
    debouncedFetchResults(searchTerm);
  };

  // Navigate to the next page
  const handleNextPage = () => {
    if (page < totalPages) {
      const nextPage = page + 1;
      setPage(nextPage);
    }
  };

  // Navigate to the previous page
  const handlePrevPage = () => {
    if (page > 1) {
      const prevPage = page - 1;
      setPage(prevPage);
    }
  };

  // Fetch data when the page changes
  useEffect(() => {
    fetchResults(page, query);
  }, [page]);

  return (
    <div>
      <h2>Users List with Search and Pagination</h2>
      <input
        type='text'
        value={query}
        onChange={handleInput}
        placeholder='Search for users...'
      />
      <ListResults Results={results} />
      <div>
        <button onClick={handlePrevPage} disabled={page === 1}>
          Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={page === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginatedSearch;
