import React from 'react';
import './App.css';
import Search from './components/Search'; // Make sure the path is correct

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>Search Component Demo</p>
                <Search/>
            </header>
        </div>
    );
}

export default App;
