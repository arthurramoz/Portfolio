import { FiMessageCircle, FiCreditCard } from 'react-icons/fi';
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
    id: 'pagarme-gateway',
    titleKey: 'cases.pagarme.title',
    problemKey: 'cases.pagarme.problem',
    approachKey: 'cases.pagarme.approach',
    resultKey: 'cases.pagarme.result',
    tags: ['Node.js', 'Pagar.me v5', 'Factory Pattern', 'Split Payment', 'PIX', 'Webhooks', 'TypeScript'],
    metrics: [
      { labelKey: 'cases.pagarme.metric1.label', value: '~443' },
      { labelKey: 'cases.pagarme.metric2.label', value: '3' },
      { labelKey: 'cases.pagarme.metric3.label', value: '6+' },
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
      { labelKey: 'cases.chat.metric1.label', value: 'Front-End' },
      { labelKey: 'cases.chat.metric2.label', value: 'QA + Back' },
      { labelKey: 'cases.chat.metric3.label', value: 'Produção' },
    ],
    accentColor: '#fb6f92',
    icon: FiMessageCircle,
  },
];
