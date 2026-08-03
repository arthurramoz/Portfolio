import { FiMessageCircle, FiCreditCard, FiServer, FiLayout, FiBell } from 'react-icons/fi';
import { IconType } from 'react-icons';

export interface CaseMetric {
  labelKey: string;
  valueKey: string;
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
    id: 'push-notifications',
    titleKey: 'cases.push.title',
    problemKey: 'cases.push.problem',
    approachKey: 'cases.push.approach',
    resultKey: 'cases.push.result',
    tags: ['Expo Push', 'Firebase FCM v1', 'React Native', 'Node.js', 'Strapi', 'Google Cloud IAM', 'Real-time'],
    metrics: [
      { labelKey: 'cases.push.metric1.label', valueKey: 'cases.push.metric1.value' },
      { labelKey: 'cases.push.metric2.label', valueKey: 'cases.push.metric2.value' },
      { labelKey: 'cases.push.metric3.label', valueKey: 'cases.push.metric3.value' },
    ],
    accentColor: '#f97316',
    icon: FiBell,
  },
  {
    id: 'pagarme-gateway',
    titleKey: 'cases.pagarme.title',
    problemKey: 'cases.pagarme.problem',
    approachKey: 'cases.pagarme.approach',
    resultKey: 'cases.pagarme.result',
    tags: ['Node.js', 'Pagar.me v5', 'Factory Pattern', 'Split Payment', 'PIX', 'Webhooks', 'TypeScript'],
    metrics: [
      { labelKey: 'cases.metric.role', valueKey: 'cases.pagarme.role' },
      { labelKey: 'cases.metric.collab', valueKey: 'cases.pagarme.collab' },
      { labelKey: 'cases.metric.delivery', valueKey: 'cases.pagarme.delivery' },
    ],
    accentColor: '#22d3ee',
    icon: FiCreditCard,
  },
  {
    id: 'saas-multitenant',
    titleKey: 'cases.saas.title',
    problemKey: 'cases.saas.problem',
    approachKey: 'cases.saas.approach',
    resultKey: 'cases.saas.result',
    tags: ['Next.js', 'Node.js', 'Prisma', 'RBAC', 'Multi-tenant', 'Pagar.me', 'TypeScript'],
    metrics: [
      { labelKey: 'cases.saas.metric1.label', valueKey: 'cases.saas.metric1.value' },
      { labelKey: 'cases.saas.metric2.label', valueKey: 'cases.saas.metric2.value' },
      { labelKey: 'cases.saas.metric3.label', valueKey: 'cases.saas.metric3.value' },
    ],
    accentColor: '#a78bfa',
    icon: FiServer,
  },
  {
    id: 'realtime-chat',
    titleKey: 'cases.chat.title',
    problemKey: 'cases.chat.problem',
    approachKey: 'cases.chat.approach',
    resultKey: 'cases.chat.result',
    tags: ['Firebase', 'REST API', 'React', 'TypeScript', 'Node.js', 'E-commerce'],
    metrics: [
      { labelKey: 'cases.metric.role', valueKey: 'cases.chat.role' },
      { labelKey: 'cases.metric.collab', valueKey: 'cases.chat.collab' },
      { labelKey: 'cases.metric.delivery', valueKey: 'cases.chat.delivery' },
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
    tags: ['React', 'TypeScript', 'styled-components', 'Chart.js', 'REST API', 'Design System'],
    metrics: [
      { labelKey: 'cases.dashboard.metric1.label', valueKey: 'cases.dashboard.metric1.value' },
      { labelKey: 'cases.dashboard.metric2.label', valueKey: 'cases.dashboard.metric2.value' },
      { labelKey: 'cases.dashboard.metric3.label', valueKey: 'cases.dashboard.metric3.value' },
    ],
    accentColor: '#4ade80',
    icon: FiLayout,
  },
];

