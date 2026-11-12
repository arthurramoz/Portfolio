'use client';

import { createGlobalStyle } from 'styled-components';
import { liteMedia } from './lite';

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

  /* Cursor customizado so existe com mouse em tela larga */
  @media (hover: hover) and (pointer: fine) and (min-width: 1025px) {
    html.modern-cursor, html.modern-cursor body {
      cursor: none;
    }

    html.modern-cursor * {
      cursor: none !important;
    }
  }

  /* Modo leve: blur de fundo custa caro na GPU do celular */
  ${liteMedia} {
    *, *::before, *::after {
      backdrop-filter: none !important;
      -webkit-backdrop-filter: none !important;
    }
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

  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accentText};
    outline-offset: 3px;
  }

  input:focus-visible,
  textarea:focus-visible {
    outline: none;
  }

  h1, h2, h3 {
    text-wrap: balance;
  }

  input, textarea, button {
    font-family: inherit;
  }

  html.a11y-large-text {
    font-size: 120%;
  }

  html.a11y-reduce-motion *,
  html.a11y-reduce-motion *::before,
  html.a11y-reduce-motion *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
`;
