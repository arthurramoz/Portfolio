import { IconType } from 'react-icons';
import {
  FiBookOpen,
  FiBriefcase,
  FiCode,
  FiGlobe,
  FiServer,
  FiTrendingUp,
  FiCheckCircle,
} from 'react-icons/fi';

export type TimelineCategory = 'work' | 'milestone' | 'education';

export interface TimelineEntry {
  id: string;
  category: TimelineCategory;
  icon?: IconType;
  year: number;
  month?: number;
  titleKey: string;
  descriptionKey: string;
  highlight?: boolean;
}

export const TIMELINE_ENTRIES: TimelineEntry[] = [
  {
    id: '2026-codotech',
    category: 'work',
    icon: FiBriefcase,
    year: 2026,
    month: 4,
    titleKey: 'timeline.2026.codotech',
    descriptionKey: 'timeline.2026.codotech.desc',
    highlight: true,
  },
  {
    id: '2026-mestres-exit',
    category: 'milestone',
    icon: FiCheckCircle,
    year: 2026,
    month: 4,
    titleKey: 'timeline.2026.mestres.exit',
    descriptionKey: 'timeline.2026.mestres.exit.desc',
    highlight: true,
  },
  {
    id: '2026-mestres-fullstack',
    category: 'work',
    icon: FiServer,
    year: 2026,
    month: 2,
    titleKey: 'timeline.2026.mestres.fullstack',
    descriptionKey: 'timeline.2026.mestres.fullstack.desc',
    highlight: true,
  },
  {
    id: '2025-hired-junior',
    category: 'work',
    icon: FiTrendingUp,
    year: 2025,
    month: 10,
    titleKey: 'timeline.2025.hired',
    descriptionKey: 'timeline.2025.hired.desc',
    highlight: true,
  },
  {
    id: '2024-mestres-intern',
    category: 'work',
    icon: FiBriefcase,
    year: 2024,
    month: 10,
    titleKey: 'timeline.2024.intern',
    descriptionKey: 'timeline.2024.intern.desc',
    highlight: true,
  },
  {
    id: '2024-english',
    category: 'education',
    icon: FiGlobe,
    year: 2024,
    titleKey: 'timeline.2024.english',
    descriptionKey: 'timeline.2024.english.desc',
  },
  {
    id: '2023-fatec',
    category: 'education',
    icon: FiBookOpen,
    year: 2023,
    titleKey: 'timeline.2023.fatec',
    descriptionKey: 'timeline.2023.fatec.desc',
    highlight: true,
  },
  {
    id: '2022-first-code',
    category: 'milestone',
    icon: FiCode,
    year: 2022,
    titleKey: 'timeline.2022.code',
    descriptionKey: 'timeline.2022.code.desc',
  },
];

export const CATEGORY_COLORS: Record<TimelineCategory, string> = {
  work: '#48cae4',
  milestone: '#64dfdf',
  education: '#90e0ef',
};
