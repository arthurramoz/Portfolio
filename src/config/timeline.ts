import { IconType } from 'react-icons';
import {
  FiBookOpen,
  FiBriefcase,
  FiCode,
  FiGlobe,
  FiAward,
  FiLayers,
  FiMonitor,
} from 'react-icons/fi';

export type TimelineCategory = 'education' | 'work' | 'freelance' | 'milestone';

export interface TimelineEntry {
  id: string;
  category: TimelineCategory;
  icon?: IconType;
  year: number;
  month?: number;
  titleKey: string;
  subtitleKey: string;
  descriptionKey: string;
  tags?: string[];
}

export const TIMELINE_ENTRIES: TimelineEntry[] = [
  {
    id: 'freela-upwork',
    category: 'freelance',
    icon: FiGlobe,
    year: 2025,
    month: 1,
    titleKey: 'timeline.freela.title',
    subtitleKey: 'timeline.freela.subtitle',
    descriptionKey: 'timeline.freela.desc',
    tags: ['Upwork', 'React', 'Next.js', 'TypeScript'],
  },
  {
    id: 'saas-automotive',
    category: 'work',
    icon: FiLayers,
    year: 2024,
    month: 6,
    titleKey: 'timeline.saas.title',
    subtitleKey: 'timeline.saas.subtitle',
    descriptionKey: 'timeline.saas.desc',
    tags: ['SaaS', 'B2B', 'Node.js', 'Prisma', 'RBAC'],
  },
  {
    id: 'corporate-projects',
    category: 'work',
    icon: FiBriefcase,
    year: 2024,
    month: 1,
    titleKey: 'timeline.corporate.title',
    subtitleKey: 'timeline.corporate.subtitle',
    descriptionKey: 'timeline.corporate.desc',
    tags: ['React', 'Firebase', 'REST APIs', 'Dashboards'],
  },
  {
    id: 'first-portfolio',
    category: 'milestone',
    icon: FiMonitor,
    year: 2024,
    month: 10,
    titleKey: 'timeline.portfolio.title',
    subtitleKey: 'timeline.portfolio.subtitle',
    descriptionKey: 'timeline.portfolio.desc',
    tags: ['Next.js', 'Styled-Components', 'Framer Motion'],
  },
  {
    id: 'fatec-start',
    category: 'education',
    icon: FiBookOpen,
    year: 2023,
    month: 2,
    titleKey: 'timeline.fatec.title',
    subtitleKey: 'timeline.fatec.subtitle',
    descriptionKey: 'timeline.fatec.desc',
    tags: ['ADS', 'FATEC Mogi das Cruzes'],
  },
  {
    id: 'certifications',
    category: 'milestone',
    icon: FiAward,
    year: 2023,
    month: 6,
    titleKey: 'timeline.certs.title',
    subtitleKey: 'timeline.certs.subtitle',
    descriptionKey: 'timeline.certs.desc',
    tags: ['Cisco', 'AWS', 'Google Cloud', 'Udemy'],
  },
  {
    id: 'first-code',
    category: 'milestone',
    icon: FiCode,
    year: 2022,
    month: 1,
    titleKey: 'timeline.firstcode.title',
    subtitleKey: 'timeline.firstcode.subtitle',
    descriptionKey: 'timeline.firstcode.desc',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
];

export const CATEGORY_COLORS: Record<TimelineCategory, string> = {
  education: '#48cae4',
  work: '#7b68ee',
  freelance: '#fb6f92',
  milestone: '#f9c74f',
};
