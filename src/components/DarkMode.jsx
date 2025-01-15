import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { moon, sun } from '../assets';

const DarkMode = () => {
  const { isDark, toggleDarkMode } = useContext(AppContext);

  const handleClick = () => {
    toggleDarkMode(!isDark); // Toggle dark mode state
  };

  return (
    <div
      className={`w-10 h-10 z-20 fixed bottom-10 right-10 rounded-md flex items-center justify-center shadow-lg cursor-pointer ${
        isDark ? 'bg-white' : 'bg-gray-900'
      }`}
      onClick={handleClick}
    >
      <img src={isDark ? sun : moon} alt="Theme Icon" className="w-6 h-6" />
    </div>
  );
};

export default DarkMode;
