import React, { useState } from "react";
import axios from "axios";

const CitySearch = ({ onCitySelected }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = async (event) => {
    const userInput = event.target.value;
    setQuery(userInput);
    if (userInput.length < 3) {
      setSuggestions([]);
      return;
    }

    const options = {
      method: "GET",
      url: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
      params: { namePrefix: userInput, limit: 5 },
      headers: {
        "X-RapidAPI-Key": "7683017f96mshda7b15745e1a5f2p137d39jsnb48570c75e7a",
        "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setSuggestions(response.data.data);
    } catch (error) {
      console.error("Error fetching cities:", error);
      setSuggestions([]);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && query) {
      onCitySelected({ name: query, countryCode: "FR" });
      setQuery("");
      setSuggestions([]);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="weather-search"
        value={query}
        onChange={handleSearch}
        onKeyPress={handleKeyPress}
        placeholder="Search format: City name, Country code"
      />
      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((city, index) => (
            <li
              key={index}
              onClick={() => {
                onCitySelected(city);
                setQuery("");
                setSuggestions([]);
              }}
            >
              {city.name}, {city.countryCode}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CitySearch;
