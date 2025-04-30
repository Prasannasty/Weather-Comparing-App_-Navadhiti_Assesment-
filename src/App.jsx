import React, { useState } from 'react';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';
import Favorites from './components/Favorites';
import Header from './components/Header';
import { saveToLocalStorage, getFromLocalStorage } from './utils/localStorage';

const App = () => {
  const [city1, setCity1] = useState('Bengaluru');
  const [city2, setCity2] = useState('Delhi');
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = getFromLocalStorage();
    return Array.isArray(storedFavorites) ? storedFavorites : [];
  });

  const handleCitySaved = (city) => {
    if (!favorites.includes(city)) {
      const updatedFavorites = [...favorites, city]; // Add city without duplicates
      setFavorites(updatedFavorites);
      saveToLocalStorage(updatedFavorites); // Save updated favorites to local storage
    }
  };

  const handleCityDeleted = (city) => {
    const updatedFavorites = favorites.filter((fav) => fav !== city); // Remove the city
    setFavorites(updatedFavorites);
    saveToLocalStorage(updatedFavorites); // Update local storage
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gradient-to-r dark:from-[#0f172a] dark:to-[#334155] text-gray-900 dark:text-white">
      <Header />
      <div className="max-w-6xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <SearchBar onSelectCity={setCity1} label="City 1" />
            <WeatherCard city={city1} onCitySaved={handleCitySaved} />
          </div>
          <div>
            <SearchBar onSelectCity={setCity2} label="City 2" />
            <WeatherCard city={city2} onCitySaved={handleCitySaved} />
          </div>
        </div>
        <Favorites
          onSelect={setCity1}
          favorites={favorites}
          onDelete={handleCityDeleted}
        />
      </div>
    </div>
  );
};

export default App;