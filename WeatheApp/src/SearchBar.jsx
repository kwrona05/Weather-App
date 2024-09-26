import { useState } from "react";

function SearchBar({ onCityChange }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      onCityChange(inputValue);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Enter your city"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="search-input"
      />
      <button type="submit" className="search-button">
        Show weather
      </button>
    </form>
  );
}
export default SearchBar;
