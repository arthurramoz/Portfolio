'use client';

import { AnimatePresence } from 'motion/react';
import { FiGlobe } from 'react-icons/fi';
import { useLanguage } from '@/contexts/LanguageContext';
import { Overlay, LoadingContent, IconWrapper, LoadingLabel, Spinner } from './styles';

const LanguageLoading = () => {
  const { isChangingLanguage } = useLanguage();

  return (
    <AnimatePresence>
      {isChangingLanguage && (
        <Overlay
          key="lang-loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <LoadingContent>
            <IconWrapper>
              <FiGlobe size={28} />
            </IconWrapper>
            <Spinner />
            <LoadingLabel>Translating…</LoadingLabel>
          </LoadingContent>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default LanguageLoading;
