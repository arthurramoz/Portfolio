import { IconType } from 'react-icons';
import { FiCreditCard, FiMessageCircle, FiMousePointer, FiZap, FiArrowRight } from 'react-icons/fi';

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
      title: 'Pagar.me v5',
      icon: FiCreditCard,
      accent: '#22d3ee',
      lines: ['90%', '70%', '50%'],
      tags: ['Node.js', 'PIX', 'Split'],
      rotate: -2,
      position: { top: '15%', left: '8%' },
      delay: 0.3,
    },
    {
      title: 'Realtime Chat',
      icon: FiMessageCircle,
      accent: '#fb6f92',
      lines: ['85%', '65%', '75%'],
      tags: ['Firebase', 'React'],
      rotate: 2,
      position: { bottom: '10%', right: '8%' },
      delay: 0.45,
    },
  ],

  features: [
    {
      icon: FiMousePointer,
      accent: '#22d3ee',
      titleKey: 'whatsnew.cursor.title',
      descKey: 'whatsnew.cursor.desc',
      ctaKey: 'whatsnew.cursor.cta',
      action: 'cursor-settings',
    },
    {
      icon: FiZap,
      accent: '#22d3ee',
      titleKey: 'whatsnew.animations.title',
      descKey: 'whatsnew.animations.desc',
    },
  ],
};
