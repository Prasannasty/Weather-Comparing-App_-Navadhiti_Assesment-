import React, { useEffect, useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import cities from '../data/cities.json';

const SearchBar = ({ onSelectCity, label }) => {
  const [cityOptions, setCityOptions] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    // Convert city list to options
    const options = cities.map((city) => ({
      value: city.name,
      label: `${city.name}, ${city.country}`,
    }));
    setCityOptions(options);
  }, []);

  const handleChange = (newValue) => {
    setSelectedCity(newValue); // Update the selected city
    if (newValue) {
      onSelectCity(newValue.value); // Send selected or custom city
    } else {
      onSelectCity(null); // Clear the selection
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold mb-2">{label}</label>
      <CreatableSelect
        isClearable
        options={cityOptions}
        value={selectedCity} // Bind the selected value
        onChange={handleChange}
        placeholder="Search or enter a city"
        className="mb-2"
        styles={{
          control: (base) => ({
            ...base,
            backgroundColor: 'rgba(255, 255, 255, 0.8)', // Blurred transparent white
            backdropFilter: 'blur(5px)', // Apply blur effect
            color: 'black', // Text color
          }),
          singleValue: (base) => ({
            ...base,
            color: 'black', // Text color for selected value
          }),
          input: (base) => ({
            ...base,
            color: 'black', // Text color for input
          }),
          menu: (base) => ({
            ...base,
            color: 'black', // Text color for dropdown items
          }),
        }}
      />
    </div>
  );
};

export default SearchBar;
