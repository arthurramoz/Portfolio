'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Updates the <html lang=""> attribute dynamically
 * based on the currently selected language.
 * This improves accessibility and SEO for multilingual sites.
 */
const HtmlLangUpdater = () => {
  const { language } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return null;
};

export default HtmlLangUpdater;
