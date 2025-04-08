import React, { useState, useEffect } from 'react';

const WeatherApp = () => {
  const [city, setCity] = useState('London');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    setLoading(true);
    setError(null);
    try {
      const API_KEY = 'd9ef9f7f9cad4f4f930213355250804';
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
      );
      if (!response.ok) throw new Error('City not found');
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  useEffect(() => {

  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.glassCard}>
        <h1 style={styles.title}>🌤️ Weather Finder</h1>
        
        <form onSubmit={handleSubmit} style={styles.searchContainer}>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Search city..."
            style={styles.searchInput}
          />
          <button 
            type="submit" 
            style={styles.searchButton}
            disabled={loading}
          >
            {loading ? (
              <span className="spinner">🌀</span>
            ) : (
              'Search'
            )}
          </button>
        </form>

        {error && (
          <div style={styles.errorBox}>
            ⚠️ {error}
          </div>
        )}

        {weather && (
          <div style={styles.weatherDisplay}>
            <div style={styles.location}>
              <h2 style={styles.city}>
                {weather.location.name}, {weather.location.country}
              </h2>
              <p style={styles.date}>
                {new Date(weather.location.localtime).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>

            <div style={styles.weatherMain}>
              <div style={styles.temperature}>
                <img
                  src={`https:${weather.current.condition.icon}`}
                  alt={weather.current.condition.text}
                  style={styles.weatherIcon}
                />
                <span style={styles.tempValue}>
                  {Math.round(weather.current.temp_c)}°
                </span>
              </div>
              <p style={styles.condition}>
                {weather.current.condition.text}
              </p>
            </div>

            <div style={styles.weatherDetails}>
              <div style={styles.detailItem}>
                <span style={styles.detailIcon}>💨</span>
                <div>
                  <p style={styles.detailLabel}>Wind</p>
                  <p style={styles.detailValue}>{weather.current.wind_kph} km/h</p>
                </div>
              </div>
              
              <div style={styles.detailItem}>
                <span style={styles.detailIcon}>💧</span>
                <div>
                  <p style={styles.detailLabel}>Humidity</p>
                  <p style={styles.detailValue}>{weather.current.humidity}%</p>
                </div>
              </div>
              
              <div style={styles.detailItem}>
                <span style={styles.detailIcon}>🌡️</span>
                <div>
                  <p style={styles.detailLabel}>Feels Like</p>
                  <p style={styles.detailValue}>{Math.round(weather.current.feelslike_c)}°</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #72EDF2 0%, #5151E5 100%)',
    padding: '20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  glassCard: {
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    padding: '30px',
    width: '100%',
    maxWidth: '500px',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    color: '#fff'
  },
  title: {
    textAlign: 'center',
    marginBottom: '25px',
    fontSize: '2rem',
    fontWeight: '600',
    textShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  searchContainer: {
    display: 'flex',
    marginBottom: '20px',
    gap: '10px'
  },
  searchInput: {
    flex: 1,
    padding: '12px 15px',
    borderRadius: '30px',
    border: 'none',
    fontSize: '16px',
    background: 'rgba(255, 255, 255, 0.8)',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    outline: 'none',
    ':focus': {
      background: 'rgba(255, 255, 255, 0.95)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
    }
  },
  searchButton: {
    padding: '12px 25px',
    background: 'rgba(255, 255, 255, 0.8)',
    color: '#5151E5',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '600',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    ':hover': {
      background: 'rgba(255, 255, 255, 0.95)',
      transform: 'translateY(-2px)'
    },
    ':disabled': {
      opacity: '0.7',
      transform: 'none'
    }
  },
  errorBox: {
    background: 'rgba(255, 99, 71, 0.8)',
    padding: '10px 15px',
    borderRadius: '8px',
    marginBottom: '20px',
    textAlign: 'center',
    fontWeight: '500'
  },
  weatherDisplay: {
    animation: 'fadeIn 0.5s ease-out'
  },
  location: {
    textAlign: 'center',
    marginBottom: '20px'
  },
  city: {
    margin: '0',
    fontSize: '1.8rem',
    fontWeight: '600'
  },
  date: {
    margin: '5px 0 0',
    fontSize: '1rem',
    opacity: '0.9'
  },
  weatherMain: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px 0'
  },
  temperature: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px'
  },
  weatherIcon: {
    width: '80px',
    height: '80px'
  },
  tempValue: {
    fontSize: '3.5rem',
    fontWeight: '300',
    marginLeft: '10px',
    lineHeight: '1'
  },
  condition: {
    margin: '0',
    fontSize: '1.3rem',
    fontWeight: '500',
    textTransform: 'capitalize'
  },
  weatherDetails: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '15px',
    marginTop: '30px'
  },
  detailItem: {
    background: 'rgba(255, 255, 255, 0.15)',
    borderRadius: '12px',
    padding: '15px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    transition: 'all 0.3s ease',
    ':hover': {
      background: 'rgba(255, 255, 255, 0.25)',
      transform: 'translateY(-3px)'
    }
  },
  detailIcon: {
    fontSize: '1.5rem'
  },
  detailLabel: {
    margin: '0',
    fontSize: '0.8rem',
    opacity: '0.8'
  },
  detailValue: {
    margin: '5px 0 0',
    fontSize: '1.1rem',
    fontWeight: '600'
  }
};

export default WeatherApp;