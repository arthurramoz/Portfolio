'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import styled from 'styled-components';
import { useLanguage } from '@/contexts/LanguageContext';

const ConsentBanner = styled(motion.div)`
  position: fixed;
  bottom: 24px;
  left: 24px;
  z-index: 99999;
  width: calc(100% - 48px);
  max-width: 400px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.btnSecondaryBorder};
  background: ${({ theme }) => theme.colors.navbarBg};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.25);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${({ theme }) => theme.media.sm} {
    bottom: 16px;
    left: 16px;
    width: calc(100% - 32px);
    padding: 18px;
    gap: 14px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Title = styled.h3`
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.title};
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Description = styled.p`
  font-size: 13px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text};
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;

  ${({ theme }) => theme.media.sm} {
    flex-direction: column-reverse;
  }
`;

const DeclineButton = styled.button`
  flex: 1;
  padding: 10px 16px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.btnSecondaryBorder};
  background: transparent;
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors.btnSecondaryBg};
    color: ${({ theme }) => theme.colors.title};
  }

  ${({ theme }) => theme.media.sm} {
    width: 100%;
  }
`;

const AcceptButton = styled.button`
  flex: 2;
  padding: 10px 16px;
  border-radius: 10px;
  border: none;
  background: ${({ theme }) => theme.colors.primary1};
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 4px 12px ${({ theme }) => theme.colors.primary1}33;

  &:hover {
    filter: brightness(1.1);
    transform: translateY(-1px);
    box-shadow: 0 6px 16px ${({ theme }) => theme.colors.primary1}4d;
  }

  &:active {
    transform: translateY(0);
  }

  ${({ theme }) => theme.media.sm} {
    width: 100%;
  }
`;

const CookieIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary1};
`;

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const savedConsent = localStorage.getItem('@Portfolio:cookie-consent');
    if (!savedConsent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (granted: boolean) => {
    const status = granted ? 'granted' : 'denied';

    localStorage.setItem('@Portfolio:cookie-consent', status);

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: status,
      });
    }

    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <ConsentBanner
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Content>
            <Title>
              <CookieIcon>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                  <path d="M8.5 8.5v.01" />
                  <path d="M16 15.5v.01" />
                  <path d="M12 12v.01" />
                  <path d="M11 17v.01" />
                  <path d="M7 14v.01" />
                </svg>
              </CookieIcon>
              {t('cookie.title')}
            </Title>
            <Description>{t('cookie.desc')}</Description>
          </Content>
          <Actions>
            <DeclineButton onClick={() => handleConsent(false)}>
              {t('cookie.btn.decline')}
            </DeclineButton>
            <AcceptButton onClick={() => handleConsent(true)}>
              {t('cookie.btn.accept')}
            </AcceptButton>
          </Actions>
        </ConsentBanner>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
