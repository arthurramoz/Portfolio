'use client';

import { PropsWithChildren, useEffect } from 'react';
import { MotionConfig } from 'motion/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NextNProgress from 'nextjs-progressbar';

import StyledComponentsRegistry from '@/libs/registry';
import { GlobalStyle } from '@/styles/global';
import { AppThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { CursorProvider, useCursor } from '@/contexts/CursorContext';
import { AccessibilityProvider, useAccessibility } from '@/contexts/AccessibilityContext';
import { lightTheme } from '@/styles/theme';
import CursorGlow from '@/components/CursorGlow';
import CustomCursor from '@/components/CustomCursor';
import AccessibilityWidget from '@/components/AccessibilityWidget';
import CookieConsent from '@/components/CookieConsent';
import LanguageLoading from '@/components/LanguageLoading';

const InnerLayout = ({ children }: PropsWithChildren) => {
  const { reduceAnimations } = useAccessibility();
  const { cursorMode } = useCursor();

  useEffect(() => {
    if (reduceAnimations) {
      document.documentElement.classList.remove('modern-cursor');
    } else if (cursorMode === 'modern') {
      document.documentElement.classList.add('modern-cursor');
    }
  }, [reduceAnimations, cursorMode]);

  return (
    <MotionConfig reducedMotion={reduceAnimations ? 'always' : 'never'}>
      <GlobalStyle />
      <NextNProgress
        color={lightTheme.colors.primary1}
        options={{ easing: 'ease', speed: 500 }}
      />
      {!reduceAnimations && <CustomCursor />}
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        {!reduceAnimations && <CursorGlow />}
        {children}
      </div>
      <AccessibilityWidget />
      <CookieConsent />
      <LanguageLoading />
      <ToastContainer
        style={{
          zIndex: 999999,
        }}
      />
    </MotionConfig>
  );
};

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <LanguageProvider>
        <AppThemeProvider>
          <CursorProvider>
            <AccessibilityProvider>
              <InnerLayout>{children}</InnerLayout>
            </AccessibilityProvider>
          </CursorProvider>
        </AppThemeProvider>
      </LanguageProvider>
    </StyledComponentsRegistry>
  );
};


export default Providers;
