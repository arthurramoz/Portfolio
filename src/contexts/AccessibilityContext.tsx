'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface AccessibilityContextData {
  largeText: boolean;
  reduceAnimations: boolean;
  toggleLargeText: () => void;
  toggleReduceAnimations: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextData>({} as AccessibilityContextData);

export const AccessibilityProvider = ({ children }: { children: ReactNode }) => {
  const [largeText, setLargeText] = useState(false);
  const [reduceAnimations, setReduceAnimations] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('@Portfolio:accessibility');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setLargeText(!!parsed.largeText);
        setReduceAnimations(!!parsed.reduceAnimations);
      } catch {}
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem(
      '@Portfolio:accessibility',
      JSON.stringify({ largeText, reduceAnimations })
    );
  }, [largeText, reduceAnimations, mounted]);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle('a11y-large-text', largeText);
    document.documentElement.classList.toggle('a11y-reduce-motion', reduceAnimations);
  }, [largeText, reduceAnimations, mounted]);

  const toggleLargeText = () => setLargeText(prev => !prev);
  const toggleReduceAnimations = () => setReduceAnimations(prev => !prev);

  return (
    <AccessibilityContext.Provider
      value={{ largeText, reduceAnimations, toggleLargeText, toggleReduceAnimations }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => useContext(AccessibilityContext);
