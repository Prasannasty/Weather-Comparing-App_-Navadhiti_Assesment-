import React from 'react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-white shadow-md px-6 py-4">
      <h1 className="text-2xl font-bold text-primary">🌤️ Weather App</h1>
      <ThemeToggle />
    </header>
  );
};

export default Header;