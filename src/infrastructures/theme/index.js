import React from "react";
import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components/native";

import { darkColors, lightColors } from "./colors";
import { fonts, fontSizes, fontWeights } from "./fonts";
import { sizes } from "./sizes";
import { lineHeights, space } from "./spacing";

const lightTheme = {
  fonts,
  fontSizes,
  fontWeights,
  colors: lightColors,
  sizes,
  lineHeights,
  space,
};
const darkTheme = {
  fonts,
  fontSizes,
  fontWeights,
  colors: darkColors,
  sizes,
  lineHeights,
  space,
};

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = isDarkMode ? darkTheme : lightTheme;

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};
