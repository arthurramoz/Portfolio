'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  ReactNode,
} from 'react';

import ptDict from '@/locales/pt.json';
import enDict from '@/locales/en.json';
import frDict from '@/locales/fr.json';
import ruDict from '@/locales/ru.json';
import esDict from '@/locales/es.json';

export type Language = 'pt' | 'en' | 'fr' | 'ru' | 'es';

type Dictionary = Record<string, string>;
export type DictionaryKeys = keyof typeof ptDict;

const dictionaries: Record<Language, Dictionary> = {
  pt: ptDict,
  en: enDict,
  fr: frDict,
  ru: ruDict,
  es: esDict,
};

const getTranslation = (dict: Dictionary, key: string) => {
  return dict[key] || key;
};

interface LanguageContextData {
  language: Language;
  isChangingLanguage: boolean;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: DictionaryKeys) => string;
}

const LanguageContext = createContext<LanguageContextData>({
  language: 'pt',
  isChangingLanguage: false,
  toggleLanguage: () => {},
  setLanguage: () => {},
  t: (key: DictionaryKeys) => getTranslation(dictionaries.pt, key),
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('pt');
  const [isChangingLanguage, setIsChangingLanguage] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('@Portfolio:lang') as Language;
    let targetLang: Language = 'pt';

    if (savedLanguage && dictionaries[savedLanguage]) {
      targetLang = savedLanguage;
    } else {
      const nav = navigator.language;
      if (nav.startsWith('fr')) targetLang = 'fr';
      else if (nav.startsWith('ru')) targetLang = 'ru';
      else if (nav.startsWith('es')) targetLang = 'es';
      else if (nav.startsWith('pt')) targetLang = 'pt';
      else targetLang = 'en';
    }

    setLanguageState(targetLang);
  }, []);

  const applyLanguage = useCallback(
    (newLang: Language) => {
      if (newLang === language) return;
      setIsChangingLanguage(true);
      setTimeout(() => {
        setLanguageState(newLang);
        localStorage.setItem('@Portfolio:lang', newLang);
        setIsChangingLanguage(false);
      }, 400);
    },
    [language],
  );

  const toggleLanguage = useCallback(() => {
    const newLang = language === 'pt' ? 'en' : 'pt';
    applyLanguage(newLang);
  }, [language, applyLanguage]);

  const t = useCallback(
    (key: DictionaryKeys) => getTranslation(dictionaries[language], key),
    [language],
  );

  return (
    <LanguageContext.Provider
      value={{
        language,
        isChangingLanguage,
        toggleLanguage,
        setLanguage: applyLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

