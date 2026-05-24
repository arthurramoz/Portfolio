import { FiMessageCircle, FiCreditCard } from 'react-icons/fi';
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
];

