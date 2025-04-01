import './App.css';
import './components/Weather.css'; // Import component styles

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">Weather Dashboard</h1>
      {/* Components will inherit styles from Weather.css */}
    </div>
  );
}