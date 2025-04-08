import React from 'react';
import '../styles/forecast.css';

export default function Forecast({ hourly, daily }) {
  return (
    <div className="forecast-container">
      <h3>Hourly Forecast</h3>
      <div className="hourly-scroll">
        {hourly.map((hour, index) => (
          <div key={index} className="hour-card">
            <p>{hour.time}</p>
            <p>{hour.temp}°C</p>
          </div>
        ))}
      </div>

      <h3 className="weekly-header">7-Day Forecast</h3>
      <div className="daily-forecast">
        {daily.map((day, index) => (
          <div key={index} className="day-card">
            <p>{day.day}</p>
            <div className="temp-range">
              <span className="high">{day.high}°</span>
              <span className="low">{day.low}°</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}