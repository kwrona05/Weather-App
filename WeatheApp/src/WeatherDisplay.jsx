function WeatherDisplay({ weather }) {
  const { name, main, weather: weatherDetails } = weather;

  return (
    <div>
      <h2>City: {name}</h2>
      <p>Temperature: {main.temp}°C</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Details: {weatherDetails[0].description}</p>
    </div>
  );
}
export default WeatherDisplay;
