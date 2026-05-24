'use client';

import { PropsWithChildren } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NextNProgress from 'nextjs-progressbar';

import StyledComponentsRegistry from '@/libs/registry';
import { GlobalStyle } from '@/styles/global';
import { AppThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { CursorProvider } from '@/contexts/CursorContext';
import { AccessibilityProvider } from '@/contexts/AccessibilityContext';
import { lightTheme } from '@/styles/theme';
import CursorGlow from '@/components/CursorGlow';
import CustomCursor from '@/components/CustomCursor';
import AccessibilityWidget from '@/components/AccessibilityWidget';

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <LanguageProvider>
        <AppThemeProvider>
          <CursorProvider>
            <AccessibilityProvider>
              <GlobalStyle />
              <NextNProgress
                color={lightTheme.colors.primary1}
                options={{ easing: 'ease', speed: 500 }}
              />
              <CustomCursor />
              <div style={{ position: 'relative', minHeight: '100vh' }}>
                <CursorGlow />
                {children}
              </div>
              <AccessibilityWidget />
              <ToastContainer
                style={{
                  zIndex: 999999,
                }}
              />
            </AccessibilityProvider>
          </CursorProvider>
        </AppThemeProvider>
      </LanguageProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;

