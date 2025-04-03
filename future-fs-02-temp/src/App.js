import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    setLoading(true);
    try {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.ev.REACT_APP_WEATHER_API_KEY}`;
      console.log("Using key:", process.env.REACT_APP_WEATHER_API_KEY); // Add this line
      
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log("API Response:", data); // Add this line
      
      if (!response.ok) throw new Error(data.message || 'City not found');
      setWeather(data);
    } catch (error) {
      console.error("Error:", error); // Add this line
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1>Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">⚠️ {error}</p>}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
}

export default App;