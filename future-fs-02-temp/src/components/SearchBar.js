import React, { useState } from 'react';
import '../Weather.css';

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button 
        className="search-button"
        onClick={() => onSearch(city)}
      >
        Search
      </button>
    </div>
  );
}