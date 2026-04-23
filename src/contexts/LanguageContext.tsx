'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type Language = 'pt' | 'en';

const dictionaries = {
  pt: {
    'hero.greeting': 'Olá, eu sou',
    'hero.role': 'Software Engineer & Full Stack',
    'hero.description': 'Construindo experiências digitais modernas, fluidas e focadas na excelência de produto, do design elegante à arquitetura robusta.',
    'hero.btn.primary': 'Prosseguir',
    'hero.btn.secondary': 'Entrar em Contato',
    'nav.home': 'Início',
    'nav.about': 'Sobre mim',
    'nav.projects': 'Projetos',
    'nav.courses': 'Cursos',
    'nav.cta': 'Contato',
    'settings.theme': 'Tema',
    'settings.theme.light': 'Claro',
    'settings.theme.dark': 'Escuro',
    'settings.language': 'Idioma',
  },
  en: {
    'hero.greeting': 'Hi, I am',
    'hero.role': 'Software Engineer & Full Stack',
    'hero.description': 'Building modern, fluid digital experiences focused on product excellence, from elegant design to robust architecture.',
    'hero.btn.primary': 'Continue',
    'hero.btn.secondary': 'Get in Touch',
    'nav.home': 'Home',
    'nav.about': 'About me',
    'nav.projects': 'Projects',
    'nav.courses': 'Courses',
    'nav.cta': 'Contact',
    'settings.theme': 'Theme',
    'settings.theme.light': 'Light',
    'settings.theme.dark': 'Dark',
    'settings.language': 'Language',
  },
} as const;

type DictionaryKeys = keyof typeof dictionaries.pt;

const getTranslation = (lang: Language, key: DictionaryKeys) => {
  return dictionaries[lang][key] || key;
};

interface LanguageContextData {
  language: Language;
  toggleLanguage: () => void;
  t: (key: DictionaryKeys) => string;
}

const LanguageContext = createContext<LanguageContextData>({
  language: 'pt',
  toggleLanguage: () => {},
  t: (key: DictionaryKeys) => getTranslation('pt', key),
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('@Portfolio:lang') as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    } else {
      const browserLang = navigator.language.startsWith('en') ? 'en' : 'pt';
      setLanguage(browserLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'pt' ? 'en' : 'pt';
    setLanguage(newLang);
    localStorage.setItem('@Portfolio:lang', newLang);
  };

  const t = (key: DictionaryKeys) => getTranslation(language, key);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
