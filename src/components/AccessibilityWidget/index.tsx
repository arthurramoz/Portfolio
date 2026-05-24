'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import styled from 'styled-components';
import { useAccessibility } from '@/contexts/AccessibilityContext';
import { useLanguage } from '@/contexts/LanguageContext';

const Fab = styled(motion.button)`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 99998;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.btnSecondaryBorder};
  background: ${({ theme }) => theme.colors.navbarBg};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.subtitle};
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
  transition: background 0.2s, border-color 0.2s, color 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.navbarBgHover};
    color: ${({ theme }) => theme.colors.title};
    border-color: ${({ theme }) => theme.colors.primary1}40;
  }

  ${({ theme }) => theme.media.sm} {
    bottom: 16px;
    right: 16px;
    width: 44px;
    height: 44px;
  }
`;

const Panel = styled(motion.div)`
  position: fixed;
  bottom: 84px;
  right: 24px;
  z-index: 99998;
  width: 280px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.btnSecondaryBorder};
  background: ${({ theme }) => theme.colors.navbarBg};
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.2);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;

  ${({ theme }) => theme.media.sm} {
    bottom: 72px;
    right: 16px;
    width: 260px;
    padding: 16px;
  }
`;

const PanelTitle = styled.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary1};
  margin-bottom: 8px;
`;

const OptionRow = styled.button<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid ${({ $active, theme }) =>
    $active ? `${theme.colors.primary1}40` : 'transparent'};
  background: ${({ $active, theme }) =>
    $active ? `${theme.colors.primary1}12` : 'transparent'};
  color: ${({ theme }) => theme.colors.title};
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  transition: all 0.2s;

  &:hover {
    background: ${({ $active, theme }) =>
      $active ? `${theme.colors.primary1}18` : theme.colors.btnSecondaryBg};
  }
`;

const OptionIcon = styled.div<{ $active: boolean }>`
  width: 34px;
  height: 34px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: ${({ $active, theme }) =>
    $active ? `${theme.colors.primary1}20` : theme.colors.btnSecondaryBg};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.primary1 : theme.colors.subtitle};
  transition: all 0.2s;
`;

const OptionText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const OptionLabel = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.title};
`;

const OptionDesc = styled.span`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.3;
`;

const AccessibilityWidget = () => {
  const [open, setOpen] = useState(false);
  const { largeText, reduceAnimations, toggleLargeText, toggleReduceAnimations } =
    useAccessibility();
  const { t } = useLanguage();

  return (
    <>
      <Fab
        onClick={() => setOpen(prev => !prev)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={t('a11y.title')}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="4.5" r="2.5" />
          <path d="M12 7v6" />
          <path d="M8 21l4-8 4 8" />
          <path d="M6 12h12" />
        </svg>
      </Fab>

      <AnimatePresence>
        {open && (
          <Panel
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <PanelTitle>{t('a11y.title')}</PanelTitle>

            <OptionRow $active={largeText} onClick={toggleLargeText}>
              <OptionIcon $active={largeText}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 7V4h16v3" />
                  <path d="M9 20h6" />
                  <path d="M12 4v16" />
                </svg>
              </OptionIcon>
              <OptionText>
                <OptionLabel>{t('a11y.largeText')}</OptionLabel>
                <OptionDesc>{t('a11y.largeText.desc')}</OptionDesc>
              </OptionText>
            </OptionRow>

            <OptionRow $active={reduceAnimations} onClick={toggleReduceAnimations}>
              <OptionIcon $active={reduceAnimations}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </OptionIcon>
              <OptionText>
                <OptionLabel>{t('a11y.reduceMotion')}</OptionLabel>
                <OptionDesc>{t('a11y.reduceMotion.desc')}</OptionDesc>
              </OptionText>
            </OptionRow>
          </Panel>
        )}
      </AnimatePresence>
    </>
  );
};

export default AccessibilityWidget;
