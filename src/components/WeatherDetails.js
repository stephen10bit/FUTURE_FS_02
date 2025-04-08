// src/components/WeatherDetails.jsx
import React from 'react';
import '../styles/details.css';

export default function WeatherDetails({ realFeel, wind, chanceOfRain }) {
  return (
    <div className="weather-details">
      <h3>Weather Details</h3>
      <div className="detail-item">
        <span>Real Feel:</span>
        <span>{realFeel}°C</span>
      </div>
      <div className="detail-item">
        <span>Wind:</span>
        <span>{wind} km/h</span>
      </div>
      <div className="detail-item">
        <span>Chance of Rain:</span>
        <span>{chanceOfRain}%</span>
      </div>
    </div>
  );
}