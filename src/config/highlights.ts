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
  ctaPath: '/projects',

  mocks: [
    {
      title: 'Certeza que Tem: Web Expert',
      icon: FiLayers,
      accent: '#22d3ee',
      lines: ['90%', '70%', '50%'],
      tags: ['React', 'TypeScript', 'Portal Técnico'],
      rotate: -2,
      position: { top: '15%', left: '8%' },
      delay: 0.3,
    },
    {
      title: 'Posicionamento Comercial: v3',
      icon: FiStar,
      accent: '#fb6f92',
      lines: ['85%', '65%', '75%'],
      tags: ['Alta Conversão', 'Acessibilidade', 'B2B'],
      rotate: 2,
      position: { bottom: '10%', right: '8%' },
      delay: 0.45,
    },
  ],

  features: [
    {
      icon: FiLayers,
      accent: '#22d3ee',
      titleKey: 'whatsnew.expert.title',
      descKey: 'whatsnew.expert.desc',
      ctaKey: 'whatsnew.expert.cta',
      action: 'projects-page',
    },
    {
      icon: FiZap,
      accent: '#fb6f92',
      titleKey: 'whatsnew.hero.title',
      descKey: 'whatsnew.hero.desc',
      ctaKey: 'whatsnew.hero.cta',
      action: 'cases-page',
    },
    {
      icon: FiGlobe,
      accent: '#a855f7',
      titleKey: 'whatsnew.a11y.title',
      descKey: 'whatsnew.a11y.desc',
      ctaKey: 'whatsnew.a11y.cta',
      action: 'a11y-widget',
    },
    {
      icon: FiStar,
      accent: '#10b981',
      titleKey: 'whatsnew.curation.title',
      descKey: 'whatsnew.curation.desc',
      ctaKey: 'whatsnew.curation.cta',
      action: 'projects-page',
    },
  ],
};
