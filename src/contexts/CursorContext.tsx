'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type CursorMode = 'modern' | 'default';

interface CursorContextData {
  cursorMode: CursorMode;
  toggleCursor: () => void;
}

const CursorContext = createContext<CursorContextData>({} as CursorContextData);

export const CursorProvider = ({ children }: { children: ReactNode }) => {
  const [cursorMode, setCursorMode] = useState<CursorMode>('modern');

  useEffect(() => {
    const saved = localStorage.getItem('@Portfolio:cursor') as CursorMode;
    if (saved) setCursorMode(saved);
  }, []);

  useEffect(() => {
    if (cursorMode === 'modern') {
      document.documentElement.classList.add('modern-cursor');
    } else {
      document.documentElement.classList.remove('modern-cursor');
    }
  }, [cursorMode]);

  const toggleCursor = () => {
    const next = cursorMode === 'modern' ? 'default' : 'modern';
    setCursorMode(next);
    localStorage.setItem('@Portfolio:cursor', next);
  };

  return (
    <CursorContext.Provider value={{ cursorMode, toggleCursor }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);
