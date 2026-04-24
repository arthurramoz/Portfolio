const breakpoints = {
  sm: '480px',
  md: '768px',
  lg: '1024px',
  xl: '1440px',
};

const media = {
  sm: `@media (max-width: ${breakpoints.sm})`,
  md: `@media (max-width: ${breakpoints.md})`,
  lg: `@media (max-width: ${breakpoints.lg})`,
  xl: `@media (max-width: ${breakpoints.xl})`,
};

const baseColors = {
  primary1: '#48cae4',
  primary2: '#90e0ef',
  secondary1: '#fb6f92',
  secondary2: '#ff8fab',
};

export const lightTheme = {
  colors: {
    ...baseColors,
    bgPrimary1: '#48cae426',
    bgPrimary2: '#90e0ef26',
    bgSecondary1: '#fb6f9226',
    bgSecondary2: '#ff8fab26',

    title: '#333',
    subtitle: '#555',
    text: '#666',
    textGradientEnd: '#777',

    btnPrimaryBg: '#333',
    btnPrimaryText: '#fff',
    btnPrimaryHoverBg: '#000',
    btnPrimaryShadow: 'rgba(0, 0, 0, 0.12)',
    btnPrimaryHoverShadow: 'rgba(0, 0, 0, 0.18)',

    btnSecondaryBg: 'rgba(255, 255, 255, 0.6)',
    btnSecondaryText: '#333',
    btnSecondaryBorder: 'rgba(0, 0, 0, 0.08)',

    navbarBg: 'rgba(255, 255, 255, 0.4)',
    navbarBgHover: 'rgba(255, 255, 255, 0.55)',
    navbarBorder: 'rgba(255, 255, 255, 0.5)',
    navbarShadow: 'rgba(0, 0, 0, 0.05)',
    navbarShadowHover: 'rgba(0, 0, 0, 0.1)',
    navbarLogoText: '#444',
    navbarLinkActive: 'rgba(26, 26, 26, 1)',
    navbarLinkInactive: 'rgba(26, 26, 26, 0.5)',
    navbarLinkBgActive: 'rgba(26, 26, 26, 0.06)',
    navbarLinkBgHover: 'rgba(26, 26, 26, 0.04)',
    navbarCtaBg: '#90e0ef',
    navbarCtaText: '#333',

    dropdownBg: '#ffffff',

    footerBg: '#1a1a1f',
    footerText: 'rgba(255, 255, 255, 0.5)',
    footerHeading: '#ffffff',
    footerLink: 'rgba(255, 255, 255, 0.6)',
    footerLinkHover: '#ffffff',
    footerBorder: 'rgba(255, 255, 255, 0.08)',
    footerIcon: 'rgba(255, 255, 255, 0.4)',
    footerIconHover: '#ffffff',
  },
  breakpoints,
  media,
  max: '1440px',
} as const;

export const darkTheme = {
  colors: {
    ...baseColors,
    bgPrimary1: '#1a1a1f',
    bgPrimary2: '#1e1e24',
    bgSecondary1: '#1a1a1f',
    bgSecondary2: '#1e1e24',

    title: '#f0f0f2',
    subtitle: '#a0a0a8',
    text: '#8a8a94',
    textGradientEnd: '#6a6a72',

    btnPrimaryBg: '#f0f0f2',
    btnPrimaryText: '#111',
    btnPrimaryHoverBg: '#ffffff',
    btnPrimaryShadow: 'rgba(0, 0, 0, 0.3)',
    btnPrimaryHoverShadow: 'rgba(0, 0, 0, 0.45)',

    btnSecondaryBg: 'rgba(255, 255, 255, 0.06)',
    btnSecondaryText: '#d0d0d4',
    btnSecondaryBorder: 'rgba(255, 255, 255, 0.1)',

    navbarBg: 'rgba(30, 30, 36, 0.6)',
    navbarBgHover: 'rgba(30, 30, 36, 0.8)',
    navbarBorder: 'rgba(255, 255, 255, 0.08)',
    navbarShadow: 'rgba(0, 0, 0, 0.2)',
    navbarShadowHover: 'rgba(0, 0, 0, 0.35)',
    navbarLogoText: '#e0e0e4',
    navbarLinkActive: 'rgba(255, 255, 255, 0.95)',
    navbarLinkInactive: 'rgba(255, 255, 255, 0.45)',
    navbarLinkBgActive: 'rgba(255, 255, 255, 0.08)',
    navbarLinkBgHover: 'rgba(255, 255, 255, 0.05)',
    navbarCtaBg: '#48cae4',
    navbarCtaText: '#0a0a0b',

    dropdownBg: '#2a2a30',

    footerBg: '#111114',
    footerText: 'rgba(255, 255, 255, 0.4)',
    footerHeading: '#e0e0e4',
    footerLink: 'rgba(255, 255, 255, 0.5)',
    footerLinkHover: '#e0e0e4',
    footerBorder: 'rgba(255, 255, 255, 0.06)',
    footerIcon: 'rgba(255, 255, 255, 0.35)',
    footerIconHover: '#e0e0e4',
  },
  breakpoints,
  media,
  max: '1440px',
} as const;

export type AppTheme = typeof lightTheme;
