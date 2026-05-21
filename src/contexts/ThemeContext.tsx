'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '@/styles/theme';

type ThemeMode = 'light' | 'dark';

interface ThemeContextData {
  themeMode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('dark');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const savedTheme = localStorage.getItem('@Portfolio:theme') as ThemeMode;
    if (savedTheme) {
      setThemeMode(savedTheme);
    } else {
      setThemeMode('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newTheme);
    localStorage.setItem('@Portfolio:theme', newTheme);
  };

  const currentTheme = themeMode === 'light' ? lightTheme : darkTheme;

  if (!isMounted) {
    return (
      <StyledThemeProvider theme={darkTheme}>
        {children}
      </StyledThemeProvider>
    );
  }

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <StyledThemeProvider theme={currentTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useAppTheme = () => useContext(ThemeContext);
