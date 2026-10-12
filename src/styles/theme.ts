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
    accentText: '#0a7f98',
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

    navbarBg: 'rgba(255, 255, 255, 0.52)',
    navbarBgHover: 'rgba(255, 255, 255, 0.72)',
    navbarBorder: 'rgba(255, 255, 255, 0.75)',
    navbarShadow: 'rgba(0, 0, 0, 0.06)',
    navbarShadowHover: 'rgba(0, 0, 0, 0.12)',
    navbarGlassHighlight: 'rgba(255, 255, 255, 0.85)',
    navbarGlassShadow: '0 10px 36px rgba(0, 0, 0, 0.06), inset 0 1px 1px 0 rgba(255, 255, 255, 0.9), inset 0 -1px 1px 0 rgba(0, 0, 0, 0.03)',
    navbarGlassShadowHover: '0 14px 44px rgba(0, 0, 0, 0.1), inset 0 1px 1px 0 rgba(255, 255, 255, 0.95), inset 0 -1px 1px 0 rgba(0, 0, 0, 0.04)',
    navbarLogoText: '#444',
    navbarLinkActive: 'rgba(26, 26, 26, 1)',
    navbarLinkInactive: 'rgba(26, 26, 26, 0.55)',
    navbarLinkBgActive: 'rgba(26, 26, 26, 0.07)',
    navbarLinkBgHover: 'rgba(26, 26, 26, 0.04)',
    navbarCtaBg: '#90e0ef',
    navbarCtaText: '#333',

    dropdownBg: 'rgba(255, 255, 255, 0.82)',

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
  pagePadding: {
    default: '140px 40px 96px',
    lg: '120px 24px 64px',
    sm: '100px 16px 48px',
  },
} as const;

export const darkTheme = {
  colors: {
    ...baseColors,
    bgPrimary1: '#1a1a1f',
    bgPrimary2: '#1e1e24',
    bgSecondary1: '#1a1a1f',
    bgSecondary2: '#1e1e24',

    title: '#f0f0f2',
    accentText: '#48cae4',
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

    navbarBg: 'rgba(18, 18, 24, 0.42)',
    navbarBgHover: 'rgba(24, 24, 34, 0.62)',
    navbarBorder: 'rgba(255, 255, 255, 0.12)',
    navbarShadow: 'rgba(0, 0, 0, 0.35)',
    navbarShadowHover: 'rgba(0, 0, 0, 0.45)',
    navbarGlassHighlight: 'rgba(255, 255, 255, 0.16)',
    navbarGlassShadow: '0 12px 40px rgba(0, 0, 0, 0.42), inset 0 1px 1px 0 rgba(255, 255, 255, 0.18), inset 0 -1px 1px 0 rgba(0, 0, 0, 0.3)',
    navbarGlassShadowHover: '0 16px 48px rgba(0, 0, 0, 0.52), inset 0 1px 1px 0 rgba(255, 255, 255, 0.25), inset 0 -1px 1px 0 rgba(0, 0, 0, 0.35)',
    navbarLogoText: '#e0e0e4',
    navbarLinkActive: 'rgba(255, 255, 255, 0.98)',
    navbarLinkInactive: 'rgba(255, 255, 255, 0.5)',
    navbarLinkBgActive: 'rgba(255, 255, 255, 0.09)',
    navbarLinkBgHover: 'rgba(255, 255, 255, 0.05)',
    navbarCtaBg: '#48cae4',
    navbarCtaText: '#0a0a0b',

    dropdownBg: 'rgba(22, 22, 30, 0.78)',

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
  pagePadding: {
    default: '140px 40px 96px',
    lg: '120px 24px 64px',
    sm: '100px 16px 48px',
  },
} as const;

export type AppTheme = typeof lightTheme;
