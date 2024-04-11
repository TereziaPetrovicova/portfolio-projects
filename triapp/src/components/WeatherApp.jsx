import React, { useState, useEffect } from "react";
import CitySearch from "./CitySearch";
import "./WeatherApp.css";

const WeatherApp = () => {
  const [city, setCity] = useState("Prague,Czechia");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (city) {
        const apiKey = "ed7a7aa9f5f1ea75c8ba3d36a502cd3d";
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
          );

          if (!response.ok) {
            throw new Error(
              `Weather data could not be fetched. Status: ${response.status}`
            );
          }

          const data = await response.json();
          setWeatherData({
            city: data.name,
            temp: `${data.main.temp.toFixed(1)}°C`,
            weather: data.weather[0].description,
            icon: data.weather[0].icon,
          });
        } catch (error) {
          setError(error.message);
        }
      }
    };

    fetchWeatherData();
  }, [city]);

  const handleCitySelection = (selectedCity) => {
    if (!selectedCity.countryCode) {
      console.error("No country code provided");
      return;
    }

    const newCity = `${
      selectedCity.name
    },${selectedCity.countryCode.toLowerCase()}`;
    setCity(newCity);
    setError("");
  };

  return (
    <div className="weather-app">
      <CitySearch
        onCitySelected={handleCitySelection}
        setCurrentCity={setCity}
      />
      {error && <p className="weather-error">Error fetching data: {error}</p>}
      {weatherData ? (
        <div className="weather-container">
          <div className="weather-header">
            <h1>{weatherData.city}</h1>
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.icon}.png`}
              alt={weatherData.weather}
            />
            <div className="weather-status">
              <p>{weatherData.temp}</p>
              <p>{weatherData.weather}</p>
            </div>
          </div>
        </div>
      ) : (
        <p className="weather-loading">Loading...</p>
      )}
    </div>
  );
};

export default WeatherApp;
