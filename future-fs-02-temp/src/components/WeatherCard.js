import './Weather.css'; // Import from same directory

function WeatherCard({ data }) {
  return (
    <div className="weather-card">
      <h2>{data.name}</h2>
      <p className="weather-detail">🌡️ Temp: {data.main.temp}°C</p>
    </div>
  );
}