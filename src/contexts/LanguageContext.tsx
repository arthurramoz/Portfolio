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
    'about.title': 'Sobre mim',
    'about.subtitle': 'Engenheiro de Software & Full Stack',
    'about.p1': 'Desenvolvedor de Software com forte especialização no Front-End (React.js, Next.js, TypeScript) e experiência sólida na arquitetura Back-End (Node.js, Prisma) para a construção de produtos SaaS completos.',
    'about.p2': 'Tenho experiência em transformar designs do Figma em aplicações web rápidas e escaláveis, unindo código limpo com regras de negócios complexas.',
    'about.p3': 'Já atuei em mais de 10 projetos corporativos e trabalhos como freelancer internacional. Faço a ponte entre o design UI/UX e boas soluções técnicas, liderando o desenvolvimento técnico de plataformas de ponta a ponta.',
    'about.stats.projects': 'Projetos B2B',
    'about.stats.years': 'Anos de Exp',
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
    'about.title': 'About me',
    'about.subtitle': 'Software Engineer & Full Stack',
    'about.p1': 'Software Developer with strong specialization in Front-End (React.js, Next.js, TypeScript) and solid experience in Back-End architecture (Node.js, Prisma) for building complete SaaS products.',
    'about.p2': 'I have experience transforming Figma designs into fast and scalable web applications, uniting clean code with complex business rules.',
    'about.p3': 'I have worked on more than 10 corporate projects and as an international freelancer. I bridge the gap between UI/UX design and technical solutions, leading end-to-end technical development.',
    'about.stats.projects': 'B2B Projects',
    'about.stats.years': 'Years Exp',
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
