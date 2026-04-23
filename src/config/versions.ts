export interface VersionEntry {
  version: string;
  date: string;
  label: string;
  highlights: string[];
}

export const CURRENT_VERSION = 'v0.5';
export const CURRENT_LABEL = 'beta';

export const VERSION_HISTORY: VersionEntry[] = [
  {
    version: 'v0.5',
    date: '23/04/2026',
    label: 'beta',
    highlights: [
      'Página de projetos (pessoais, empresa, faculdade)',
      'Footer completo com navegação, redes sociais e changelog',
      'Galeria de fotos pessoais',
      'Menu de definições com clique e badge de versão',
    ],
  },
  {
    version: 'v0.4',
    date: '23/04/2026',
    label: 'beta',
    highlights: [
      'Seção About com bio e cards de estatísticas',
      'Navbar com scroll tracking e dropdown de projetos',
      'Botão Prosseguir com scroll suave',
    ],
  },
  {
    version: 'v0.3',
    date: '23/04/2026',
    label: 'alpha',
    highlights: [
      'Dark mode e light mode com persistência',
      'Menu de definições (tema, idioma)',
      'Cores adaptáveis para botões e textos',
    ],
  },
  {
    version: 'v0.2',
    date: '23/04/2026',
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
