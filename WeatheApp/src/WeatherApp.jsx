import { useState, useEffect } from "react";
import WeatherDisplay from "./WeatherDisplay";
import SearchBar from "./SearchBar";

function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const weatherapi = "3b0220567fcd0933fc95fde89c39a261";

  const fetchWeatherData = async (city) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherapi}&units=metric`
      );

      if (!response.ok) {
        throw new Error(`City didn't found`);
      }
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  const handleCityChange = (newCity) => {
    setCity(newCity);
  };

  useEffect(() => {
    if (city) {
      fetchWeatherData(city);
    }
  }, [city]);

  return (
    <div className="container">
      <h1>Weather App</h1>
      <SearchBar onCityChange={handleCityChange} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {weather && <WeatherDisplay weather={weather} />}
    </div>
  );
}
export default WeatherApp;
