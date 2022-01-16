import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// context states
export const ThemeContext = createContext({
  darkMode: true,
  toggleMode: () => {},
});

// context provider
function ThemeContextProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  const handleToggleDarkMode = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        darkMode: darkTheme,
        toggleMode: handleToggleDarkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeContextProvider;
