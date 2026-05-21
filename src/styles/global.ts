'use client';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  * {
    scroll-behavior: smooth;
  }

  button {
    cursor: pointer;
  }

  html.modern-cursor, html.modern-cursor body {
    cursor: none;
  }

  html.modern-cursor * {
    cursor: none !important;
  }

  body {
    min-height: 100vh;
    text-rendering: optimizeLegibility;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.bgPrimary1} 0%,
      ${({ theme }) => theme.colors.bgPrimary2} 40%,
      ${({ theme }) => theme.colors.bgSecondary2} 70%,
      ${({ theme }) => theme.colors.bgSecondary1} 100%
    );
    color: ${({ theme }) => theme.colors.title};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input, textarea, button {
    font-family: inherit;
  }
`;
