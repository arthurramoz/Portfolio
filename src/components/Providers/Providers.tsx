'use client';

import { PropsWithChildren } from 'react';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import NextNProgress from 'nextjs-progressbar';

import StyledComponentsRegistry from '@/libs/registry';
import { GlobalStyle } from '@/styles/global';
import { theme } from '@/styles/theme';

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <NextNProgress
          color={theme.colors.primary1}
          options={{ easing: 'ease', speed: 500 }}
        />
        {children}
        <ToastContainer
          style={{
            zIndex: 999999,
          }}
        />
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
