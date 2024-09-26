function WeatherDisplay({ weather }) {
  const { name, main, weather: weatherDetails } = weather;

  return (
    <div className="weather-display">
      <h2 className="city-name">City: {name}</h2>
      <p className="temperature">Temperature: {main.temp}°C</p>
      <p className="humidity">Humidity: {main.humidity}%</p>
      <p className="details">Details: {weatherDetails[0].description}</p>
    </div>
  );
}
export default WeatherDisplay;
