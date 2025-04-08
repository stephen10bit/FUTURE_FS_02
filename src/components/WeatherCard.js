import './../styles/weather.css';

export default function WeatherCard({ city, temp, chanceOfRain }) {
  return (
    <div className="weather-card">
      <h2>{city}</h2>
      <p className="chance-of-rain">Chance of Rain: {chanceOfRain}%</p>
      <p className="temperature">{temp}°C</p>
    </div>
  );
}