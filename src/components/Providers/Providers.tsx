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
import { lightTheme } from '@/styles/theme';
import CursorGlow from '@/components/CursorGlow';
import CustomCursor from '@/components/CustomCursor';

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <LanguageProvider>
        <AppThemeProvider>
          <CursorProvider>
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
            <ToastContainer
              style={{
                zIndex: 999999,
              }}
            />
          </CursorProvider>
        </AppThemeProvider>
      </LanguageProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;

