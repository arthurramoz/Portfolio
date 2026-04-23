export interface VersionEntry {
  version: string;
  date: string;
  label: string;
  highlights: string[];
}

export const CURRENT_VERSION = 'v0.7';
export const CURRENT_LABEL = 'beta';

export const VERSION_HISTORY: VersionEntry[] = [
  {
    version: 'v0.7',
    date: '23/04/2026',
    label: 'beta',
    highlights: [
      'Página de cursos com 28 certificações',
      'Filtros collapsíveis por organização e competências',
      'Logos de plataformas (Udemy, Alura, Cisco, AWS, etc.)',
      'Paginação reutilizável (10 por página)',
      'Carrossel de imagens nos projetos com auto-play',
      'Dados de projetos e cursos centralizados em /config',
      'Traduções completas (PT/EN) para cursos e datas',
    ],
  },
  {
    version: 'v0.6',
    date: '23/04/2026',
    label: 'beta',
    highlights: [
      'Páginas de projetos (pessoais, empresa, faculdade)',
      'Página de changelog com timeline editorial',
      'Dropdown de projetos na topbar e footer',
      'Footer com navegação colapsável e histórico de versões',
      'Stats do About refatorados para array dinâmico',
    ],
  },
  {
    version: 'v0.5',
    date: '21/04/2026',
    label: 'beta',
    highlights: [
      'Footer completo com navegação, redes sociais e contato',
      'Galeria de fotos pessoais com grid responsivo',
      'Menu de definições com clique e badge de versão',
    ],
  },
  {
    version: 'v0.4',
    date: '18/04/2026',
    label: 'beta',
    highlights: [
      'Seção About com bio e cards de estatísticas',
      'Navbar com scroll tracking e animações',
      'Botão Prosseguir com scroll suave',
    ],
  },
  {
    version: 'v0.3',
    date: '14/04/2026',
    label: 'alpha',
    highlights: [
      'Dark mode e light mode com persistência',
      'Menu de definições (tema, idioma)',
      'Cores adaptáveis para botões e textos',
    ],
  },
  {
    version: 'v0.2',
    date: '10/04/2026',
    label: 'alpha',
    highlights: [
      'i18n: suporte PT-BR e EN-US com bandeiras',
      'Navbar e hero traduzidos dinamicamente',
    ],
  },
  {
    version: 'v0.1',
    date: '08/04/2026',
    label: 'alpha',
    highlights: [
      'Hero section com animações framer-motion',
      'Navbar glassmorphism com blobs animados',
      'Página Under Development com countdown',
      'Estrutura inicial Next.js + styled-components',
    ],
  },
];
