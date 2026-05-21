import { FiZap, FiMessageCircle, FiLayout, FiGlobe } from 'react-icons/fi';
import { IconType } from 'react-icons';

export interface CaseMetric {
  labelKey: string;
  value: string;
}

export interface CaseStudy {
  id: string;
  titleKey: string;
  problemKey: string;
  approachKey: string;
  resultKey: string;
  tags: string[];
  metrics: CaseMetric[];
  accentColor: string;
  icon: IconType;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'saas-multitenant',
    titleKey: 'cases.saas.title',
    problemKey: 'cases.saas.problem',
    approachKey: 'cases.saas.approach',
    resultKey: 'cases.saas.result',
    tags: ['React', 'Next.js', 'Node.js', 'Prisma', 'PostgreSQL', 'Pagar.me'],
    metrics: [
      { labelKey: 'cases.saas.metric1.label', value: '+16' },
      { labelKey: 'cases.saas.metric2.label', value: 'RBAC' },
      { labelKey: 'cases.saas.metric3.label', value: 'Multi-tenant' },
    ],
    accentColor: '#48cae4',
    icon: FiZap,
  },
  {
    id: 'realtime-chat',
    titleKey: 'cases.chat.title',
    problemKey: 'cases.chat.problem',
    approachKey: 'cases.chat.approach',
    resultKey: 'cases.chat.result',
    tags: ['Firebase', 'WebSockets', 'React', 'TypeScript', 'Node.js'],
    metrics: [
      { labelKey: 'cases.chat.metric1.label', value: 'Real-time' },
      { labelKey: 'cases.chat.metric2.label', value: 'WebSockets' },
      { labelKey: 'cases.chat.metric3.label', value: '< 100ms' },
    ],
    accentColor: '#fb6f92',
    icon: FiMessageCircle,
  },
  {
    id: 'admin-dashboards',
    titleKey: 'cases.dashboard.title',
    problemKey: 'cases.dashboard.problem',
    approachKey: 'cases.dashboard.approach',
    resultKey: 'cases.dashboard.result',
    tags: ['React', 'Next.js', 'TypeScript', 'Styled-Components', 'REST API'],
    metrics: [
      { labelKey: 'cases.dashboard.metric1.label', value: '+5' },
      { labelKey: 'cases.dashboard.metric2.label', value: 'B2B & B2C' },
      { labelKey: 'cases.dashboard.metric3.label', value: 'Figma → Code' },
    ],
    accentColor: '#90e0ef',
    icon: FiLayout,
  },
  {
    id: 'international-freelance',
    titleKey: 'cases.freelance.title',
    problemKey: 'cases.freelance.problem',
    approachKey: 'cases.freelance.approach',
    resultKey: 'cases.freelance.result',
    tags: ['Next.js', 'TypeScript', 'Upwork', 'Figma', 'Vercel'],
    metrics: [
      { labelKey: 'cases.freelance.metric1.label', value: 'USA' },
      { labelKey: 'cases.freelance.metric2.label', value: 'Upwork' },
      { labelKey: 'cases.freelance.metric3.label', value: '100%' },
    ],
    accentColor: '#ff8fab',
    icon: FiGlobe,
  },
];
