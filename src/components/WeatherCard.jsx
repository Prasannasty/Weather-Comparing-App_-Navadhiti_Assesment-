import React, { useEffect, useState } from 'react';
import { fetchWeather } from '../services/weatherAPI';
import { saveToLocalStorage } from '../utils/localStorage';
import {
  Thermometer,
  Droplets,
  Wind,
  Eye,
  Gauge,
  Sunrise,
  Sunset,
  MapPin,
  BookmarkCheck,
} from 'lucide-react';

const WeatherCard = ({ city, onCitySaved }) => {
  const [weather, setWeather] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    fetchWeather(city)
      .then((data) => {
        setWeather(data);
        setLastUpdated(new Date());
      })
      .catch((err) => {
        console.error('Error fetching weather:', err);
        setError('Failed to fetch weather data. Please try again.');
      });
  }, [city]);

  const handleSaveCity = () => {
    saveToLocalStorage(city);
    onCitySaved(city);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>;
  }

  if (!weather) {
    return (
      <div className="p-4 text-gray-500 dark:text-gray-400">
        Loading weather for {city}...
      </div>
    );
  }

  const {
    name = 'N/A',
    main = {},
    weather: weatherDetails = [{}],
    wind = {},
    visibility = 'N/A',
    sys = {},
  } = weather;

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl p-6 max-w-md mx-auto text-zinc-900 dark:text-white border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 class="city-title" className="city-title text-xl font-bold flex items-center gap-2">
            <MapPin size={20} /> {name}, {sys?.country || 'N/A'}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Updated: {lastUpdated?.toLocaleTimeString() || 'N/A'}
          </p>
        </div>

        <button
          className="bookmarkBtn bg-white text-black border border-sky-500 hover:bg-sky-500 hover:text-white dark:bg-transparent dark:text-white dark:hover:bg-sky-600"
          onClick={handleSaveCity}
        >
          <span className="IconContainer">
            <BookmarkCheck className="icon" />
          </span>
          <p className="text">Save</p>
        </button>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <img
          src={`https://openweathermap.org/img/wn/${weatherDetails[0]?.icon || '01d'}@2x.png`}
          alt={weatherDetails[0]?.description || 'N/A'}
          className="w-20 h-20"
        />
        <div>
          <p className="text-5xl font-bold">
            {Math.round(main.temp) || 'N/A'}°C
          </p>
          <p className="capitalize text-sm text-gray-600 dark:text-gray-300">
            {weatherDetails[0]?.description || 'N/A'}
          </p>
        </div>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2">
          <Thermometer size={16} /> Feels Like: {Math.round(main.feels_like) || 'N/A'}°C
        </div>
        <div className="flex items-center gap-2">
          <Droplets size={16} /> Humidity: {main.humidity || 'N/A'}%
        </div>
        <div className="flex items-center gap-2">
          <Wind size={16} /> Wind Speed: {wind.speed || 'N/A'} km/h
        </div>
        <div className="flex items-center gap-2">
          <Gauge size={16} /> Pressure: {main.pressure || 'N/A'} hPa
        </div>
        <div className="flex items-center gap-2">
          <Eye size={16} /> Visibility: {visibility / 1000 || 'N/A'} km
        </div>
      </div>

      <div className="mt-6 text-xs text-gray-500 dark:text-gray-400 space-y-1">
        <div className="flex items-center gap-2">
          <Sunrise size={16} /> Sunrise:{' '}
          {sys.sunrise ? new Date(sys.sunrise * 1000).toLocaleTimeString() : 'N/A'}
        </div>
        <div className="flex items-center gap-2">
          <Sunset size={16} /> Sunset:{' '}
          {sys.sunset ? new Date(sys.sunset * 1000).toLocaleTimeString() : 'N/A'}
        </div>
      </div>

      {showPopup && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg flex items-center gap-2 z-50">
          <span>✔️ Saved successfully!</span>
          <button onClick={() => setShowPopup(false)} className="text-sm underline">
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
