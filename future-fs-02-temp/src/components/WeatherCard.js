import React from 'react';
import './Weather.css';

function WeatherCard({ data }) {
  if (!data || !data.main || !data.weather) {
    return null;
  }

  return (
    <div className="weather-card">
      <h2>{data.name}, {data.sys.country}</h2>
      <div className="weather-details">
        <p>🌡️ Temperature: {Math.round(data.main.temp)}°C</p>
        <p>💧 Humidity: {data.main.humidity}%</p>
        <p>🌬️ Wind: {data.wind.speed} m/s</p>
        <p>☁️ Conditions: {data.weather[0].description}</p>
      </div>
    </div>
  );
}

export default WeatherCard;