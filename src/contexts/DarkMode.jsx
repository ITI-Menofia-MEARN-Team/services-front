import React, { createContext, useEffect, useState } from 'react';

const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') setIsDarkMode(true);
    else setIsDarkMode(false);
  }, []);

  const toggleDarkMode = () => {
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
    setIsDarkMode((prevState) => !prevState);
  };

  const contextValue = {
    isDarkMode,
    toggleDarkMode,
  };

  return <DarkModeContext.Provider value={contextValue}>{children}</DarkModeContext.Provider>;
};

export default DarkModeProvider;
export { DarkModeContext };
