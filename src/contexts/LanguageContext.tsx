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

export type Language = 'pt' | 'en' | 'fr' | 'ru' | 'es';

type Dictionary = Record<string, string>;
export type DictionaryKeys = keyof typeof ptDict;

const loaders: Record<Language, () => Promise<{ default: Dictionary }>> = {
  pt: () => Promise.resolve({ default: ptDict }),
  en: () => import('@/locales/en.json'),
  fr: () => import('@/locales/fr.json'),
  ru: () => import('@/locales/ru.json'),
  es: () => import('@/locales/es.json'),
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
  t: (key: DictionaryKeys) => getTranslation(ptDict, key),
});

const dictCache = new Map<Language, Dictionary>();
dictCache.set('pt', ptDict);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('pt');
  const [dictionary, setDictionary] = useState<Dictionary>(ptDict);
  const [isChangingLanguage, setIsChangingLanguage] = useState(false);

  const loadDictionary = useCallback(async (lang: Language) => {
    const cached = dictCache.get(lang);
    if (cached) {
      setDictionary(cached);
      return;
    }

    try {
      const mod = await loaders[lang]();
      const dict = mod.default;
      dictCache.set(lang, dict);
      setDictionary(dict);
    } catch {
      setDictionary(ptDict);
    }
  }, []);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('@Portfolio:lang') as Language;
    let targetLang: Language = 'pt';

    if (savedLanguage) {
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
    loadDictionary(targetLang);
  }, [loadDictionary]);

  const applyLanguage = useCallback(
    (newLang: Language) => {
      if (newLang === language) return;
      setIsChangingLanguage(true);

      loadDictionary(newLang).then(() => {
        setTimeout(() => {
          setLanguageState(newLang);
          localStorage.setItem('@Portfolio:lang', newLang);
          setIsChangingLanguage(false);
        }, 400);
      });
    },
    [language, loadDictionary],
  );

  const toggleLanguage = useCallback(() => {
    const newLang = language === 'pt' ? 'en' : 'pt';
    applyLanguage(newLang);
  }, [language, applyLanguage]);

  const t = useCallback(
    (key: DictionaryKeys) => getTranslation(dictionary, key),
    [dictionary],
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
