import React, { createContext, useCallback } from "react";
import { DefaultTheme } from "styled-components";

import { usePersistedState } from "../hooks/usePersistedState";

import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

interface ThemeContextData {
  theme: DefaultTheme;
  toggleTheme: Function;
}

export const ThemeContext = createContext<ThemeContextData>(
  {} as ThemeContextData
);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === "dark" ? light : dark);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
