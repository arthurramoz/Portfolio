'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
const HtmlLangUpdater = () => {
  const { language } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return null;
};

export default HtmlLangUpdater;
