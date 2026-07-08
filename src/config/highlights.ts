import { IconType } from 'react-icons';
import {
  FiCreditCard,
  FiMessageCircle,
  FiLayers,
  FiStar,
  FiZap,
  FiGlobe,
} from 'react-icons/fi';

export interface HighlightMock {
  title: string;
  icon: IconType;
  accent: string;
  lines: string[];
  tags: string[];
  rotate: number;
  position: Record<string, string>;
  delay: number;
}

export interface HighlightFeature {
  icon: IconType;
  accent: string;
  titleKey: string;
  descKey: string;
  ctaKey?: string;
  action?: string;
}

export interface HighlightConfig {
  badgeKey: string;
  titleKey: string;
  descKey: string;
  ctaKey: string;
  ctaPath: string;
  mocks: HighlightMock[];
  features: HighlightFeature[];
}

export const HIGHLIGHT_CONFIG: HighlightConfig = {
  badgeKey: 'whatsnew.badge',
  titleKey: 'whatsnew.title',
  descKey: 'whatsnew.description',
  ctaKey: 'whatsnew.cta',
  ctaPath: '/cases',

  mocks: [
    {
      title: 'Cases — Pagar.me v5',
      icon: FiCreditCard,
      accent: '#22d3ee',
      lines: ['90%', '70%', '50%'],
      tags: ['Node.js', 'PIX', 'Split'],
      rotate: -2,
      position: { top: '15%', left: '8%' },
      delay: 0.3,
    },
    {
      title: 'Skills — Favoritas',
      icon: FiStar,
      accent: '#fb6f92',
      lines: ['85%', '65%', '75%'],
      tags: ['React', 'Next.js', 'TypeScript'],
      rotate: 2,
      position: { bottom: '10%', right: '8%' },
      delay: 0.45,
    },
  ],

  features: [
    {
      icon: FiLayers,
      accent: '#22d3ee',
      titleKey: 'whatsnew.cases.title',
      descKey: 'whatsnew.cases.desc',
      ctaKey: 'whatsnew.cases.cta',
      action: 'cases-page',
    },
    {
      icon: FiStar,
      accent: '#fb6f92',
      titleKey: 'whatsnew.favorites.title',
      descKey: 'whatsnew.favorites.desc',
      ctaKey: 'whatsnew.favorites.cta',
      action: 'skills-page',
    },
    {
      icon: FiZap,
      accent: '#a855f7',
      titleKey: 'whatsnew.ambient.title',
      descKey: 'whatsnew.ambient.desc',
    },
    {
      icon: FiGlobe,
      accent: '#10b981',
      titleKey: 'whatsnew.seo.title',
      descKey: 'whatsnew.seo.desc',
    },
  ],
};
