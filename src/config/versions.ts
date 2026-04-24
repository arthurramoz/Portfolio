import { Language } from '@/contexts/LanguageContext';

export interface VersionEntry {
  version: string;
  date: string;
  label: string;
  highlights: Record<Language, string[]>;
}

export const CURRENT_VERSION = 'v0.7';
export const CURRENT_LABEL = 'beta';

export const VERSION_HISTORY: VersionEntry[] = [
  {
    version: 'v0.7',
    date: '23/04/2026',
    label: 'beta',
    highlights: {
      pt: [
        'Página de cursos com 28 certificações',
        'Filtros collapsíveis por organização e competências',
        'Logos de plataformas (Udemy, Alura, Cisco, AWS, etc.)',
        'Paginação reutilizável (10 por página)',
        'Carrossel de imagens nos projetos com auto-play',
        'Dados de projetos e cursos centralizados em /config',
        'Traduções completas (PT/EN) para cursos e datas',
      ],
      en: [
        'Courses page with 28 certifications',
        'Collapsible filters by organization and skills',
        'Platform logos (Udemy, Alura, Cisco, AWS, etc.)',
        'Reusable pagination (10 per page)',
        'Project image carousel with auto-play',
        'Projects and courses data centralized in /config',
        'Full translations (PT/EN) for courses and dates',
      ],
    },
  },
  {
    version: 'v0.6',
    date: '23/04/2026',
    label: 'beta',
    highlights: {
      pt: [
        'Páginas de projetos (pessoais, empresa, faculdade)',
        'Página de changelog com timeline editorial',
        'Dropdown de projetos na topbar e footer',
        'Footer com navegação colapsável e histórico de versões',
        'Stats do About refatorados para array dinâmico',
      ],
      en: [
        'Project pages (personal, company, university)',
        'Changelog page with editorial timeline',
        'Projects dropdown in topbar and footer',
        'Footer with collapsible navigation and version history',
        'About stats refactored to dynamic array',
      ],
    },
  },
  {
    version: 'v0.5',
    date: '21/04/2026',
    label: 'beta',
    highlights: {
      pt: [
        'Footer completo com navegação, redes sociais e contato',
        'Galeria de fotos pessoais com grid responsivo',
        'Menu de definições com clique e badge de versão',
      ],
      en: [
        'Full footer with navigation, social media and contact',
        'Personal photo gallery with responsive grid',
        'Settings menu with click and version badge',
      ],
    },
  },
  {
    version: 'v0.4',
    date: '18/04/2026',
    label: 'beta',
    highlights: {
      pt: [
        'Seção About com bio e cards de estatísticas',
        'Navbar com scroll tracking e animações',
        'Botão Prosseguir com scroll suave',
      ],
      en: [
        'About section with bio and stats cards',
        'Navbar with scroll tracking and animations',
        'Continue button with smooth scroll',
      ],
    },
  },
  {
    version: 'v0.3',
    date: '14/04/2026',
    label: 'alpha',
    highlights: {
      pt: [
        'Dark mode e light mode com persistência',
        'Menu de definições (tema, idioma)',
        'Cores adaptáveis para botões e textos',
      ],
      en: [
        'Dark mode and light mode with persistence',
        'Settings menu (theme, language)',
        'Adaptive colors for buttons and text',
      ],
    },
  },
  {
    version: 'v0.2',
    date: '10/04/2026',
    label: 'alpha',
    highlights: {
      pt: [
        'i18n: suporte PT-BR e EN-US com bandeiras',
        'Navbar e hero traduzidos dinamicamente',
      ],
      en: [
        'i18n: PT-BR and EN-US support with flags',
        'Navbar and hero dynamically translated',
      ],
    },
  },
  {
    version: 'v0.1',
    date: '08/04/2026',
    label: 'alpha',
    highlights: {
      pt: [
        'Hero section com animações framer-motion',
        'Navbar glassmorphism com blobs animados',
        'Página Under Development com countdown',
        'Estrutura inicial Next.js + styled-components',
      ],
      en: [
        'Hero section with framer-motion animations',
        'Glassmorphism navbar with animated blobs',
        'Under Development page with countdown',
        'Initial Next.js + styled-components setup',
      ],
    },
  },
];
