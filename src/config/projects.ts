export interface ProjectPlatform {
  title: string;
  descriptionKey: string;
  images?: string[];
  tags: string[];
  roleKey?: string;
  featuresKey?: string;
}

export type ProjectCategory = 'company' | 'personal' | 'university';

export interface ProjectItem {
  title: string;
  descriptionKey: string;
  images?: string[];
  tags: string[];
  link?: string;
  hidden?: boolean;
  featured?: boolean;
  roleKey?: string;
  durationKey?: string;
  highlightKey?: string;
  platforms?: ProjectPlatform[];
  /** Ano de desenvolvimento */
  year: number;
  /** Mês de desenvolvimento (1-12), opcional */
  month?: number;
  /** Categoria do projeto */
  category: ProjectCategory;
}

/* ─────────────────────────────────────────────────────────
   PROJETOS DE EMPRESA
────────────────────────────────────────────────────────── */
export const COMPANY_PROJECTS: ProjectItem[] = [
  {
    title: 'Certeza que Tem',
    descriptionKey: 'project.cqt.desc',
    featured: true,
    year: 2025,
    month: 7,
    category: 'company',
    images: [
      '/projects/certeza-cliente/1.png',
      '/projects/certeza-cliente/2.png',
      '/projects/certeza-master/1.png',
      '/projects/certeza-seller/1.png',
    ],
    tags: ['Next.js', 'React', 'TypeScript', 'Styled-Components', 'Tailwind CSS', 'MUI', 'Chart.js', 'Firebase', 'Pagarme', 'J&T Express'],
    roleKey: 'project.cqt.role',
    durationKey: 'project.cqt.duration',
    highlightKey: 'project.cqt.highlight',
    platforms: [
      {
        title: 'Certeza que Tem — Web Cliente',
        descriptionKey: 'project.cqt.client.desc',
        images: [
          '/projects/certeza-cliente/1.png',
          '/projects/certeza-cliente/2.png',
          '/projects/certeza-cliente/3.png',
          '/projects/certeza-cliente/4.png',
        ],
        tags: ['Next.js 16', 'React 18', 'TypeScript', 'Styled-Components', 'React Query', 'Chart.js', 'Firebase', 'Pagarme', 'J&T Express', 'QRCode'],
        roleKey: 'project.cqt.client.role',
        featuresKey: 'project.cqt.client.features',
      },
      {
        title: 'Certeza que Tem — Web Master',
        descriptionKey: 'project.cqt.master.desc',
        images: [
          '/projects/certeza-master/1.png',
          '/projects/certeza-master/2.png',
          '/projects/certeza-master/3.png',
          '/projects/certeza-master/4.png',
          '/projects/certeza-master/5.png',
        ],
        tags: ['Next.js 15', 'React 19', 'TypeScript', 'Styled-Components', 'Tailwind CSS 4', 'React Query', 'Chart.js', 'Firebase'],
        roleKey: 'project.cqt.master.role',
        featuresKey: 'project.cqt.master.features',
      },
      {
        title: 'Certeza que Tem — Web Seller',
        descriptionKey: 'project.cqt.seller.desc',
        images: [
          '/projects/certeza-seller/1.png',
          '/projects/certeza-seller/2.png',
          '/projects/certeza-seller/3.png',
          '/projects/certeza-seller/4.png',
          '/projects/certeza-seller/5.png',
          '/projects/certeza-seller/6.png',
        ],
        tags: ['Next.js 15', 'React 19', 'TypeScript', 'Styled-Components', 'MUI 6', 'Chart.js', 'Swiper'],
        roleKey: 'project.cqt.seller.role',
        featuresKey: 'project.cqt.seller.features',
      },
    ],
  },
  {
    title: 'Quero Eventos',
    descriptionKey: 'project.queroeventos.desc',
    year: 2025,
    month: 6,
    category: 'company',
    tags: ['Next.js', 'React', 'TypeScript', 'Styled-Components', 'Tailwind CSS', 'MUI 7', 'Firebase', 'QRCode'],
    roleKey: 'project.queroeventos.role',
    durationKey: 'project.queroeventos.duration',
    highlightKey: 'project.queroeventos.highlight',
    platforms: [
      {
        title: 'Quero Eventos — Web (Usuário)',
        descriptionKey: 'project.queroeventos.web.desc',
        tags: ['Next.js 15', 'React 19', 'TypeScript', 'Styled-Components', 'Tailwind CSS 4', 'Firebase', 'QRCode'],
        roleKey: 'project.queroeventos.web.role',
        featuresKey: 'project.queroeventos.web.features',
      },
      {
        title: 'Quero Eventos — Master',
        descriptionKey: 'project.queroeventos.master.desc',
        tags: ['Next.js 16', 'React 18', 'TypeScript', 'Styled-Components', 'MUI 7', 'API Routes'],
        roleKey: 'project.queroeventos.master.role',
        featuresKey: 'project.queroeventos.master.features',
      },
    ],
  },
  {
    title: 'Med Confere — Master',
    descriptionKey: 'project.medconfere.desc',
    year: 2025,
    month: 5,
    category: 'company',
    tags: ['Next.js', 'React', 'TypeScript', 'Styled-Components', 'MUI 7', 'Recharts', 'pdfjs-dist', 'Canvas', 'Netlify'],
    roleKey: 'project.medconfere.role',
    durationKey: 'project.medconfere.duration',
    highlightKey: 'project.medconfere.highlight',
  },
  {
    title: 'Protecin — Master',
    descriptionKey: 'project.protecin.desc',
    year: 2025,
    month: 4,
    category: 'company',
    tags: ['Next.js', 'React', 'TypeScript', 'Styled-Components', 'QR Code', 'react-to-print', 'nuqs'],
    roleKey: 'project.protecin.role',
    durationKey: 'project.protecin.duration',
    highlightKey: 'project.protecin.highlight',
  },
  {
    title: 'Localize Mais — Master',
    descriptionKey: 'project.localizemais.desc',
    year: 2025,
    month: 2,
    category: 'company',
    tags: ['Next.js', 'React', 'TypeScript', 'Styled-Components', 'Chart.js', 'Lucide', 'Sharp', 'Netlify'],
    roleKey: 'project.localizemais.role',
    durationKey: 'project.localizemais.duration',
    highlightKey: 'project.localizemais.highlight',
  },
  {
    title: 'X-Mandu',
    descriptionKey: 'project.xmandu.desc',
    featured: true,
    year: 2025,
    month: 1,
    category: 'company',
    tags: ['Next.js', 'React', 'TypeScript', 'Styled-Components', 'MUI', 'Chart.js', 'Swiper', 'QRCode'],
    roleKey: 'project.xmandu.role',
    durationKey: 'project.xmandu.duration',
    highlightKey: 'project.xmandu.highlight',
    platforms: [
      {
        title: 'X-Mandu — Web Prestador',
        descriptionKey: 'project.xmandu.prestador.desc',
        tags: ['Next.js 15', 'React 18', 'TypeScript', 'Styled-Components', 'Chart.js', 'Lucide', 'QRCode'],
        roleKey: 'project.xmandu.prestador.role',
        featuresKey: 'project.xmandu.prestador.features',
      },
      {
        title: 'X-Mandu — Web Lojista',
        descriptionKey: 'project.xmandu.lojista.desc',
        tags: ['Next.js 15', 'React 19', 'TypeScript', 'Styled-Components', 'MUI 6', 'Chart.js', 'Swiper'],
        roleKey: 'project.xmandu.lojista.role',
        featuresKey: 'project.xmandu.lojista.features',
      },
      {
        title: 'X-Mandu — Web Master',
        descriptionKey: 'project.xmandu.master.desc',
        tags: ['Next.js 15', 'React 18', 'TypeScript', 'Styled-Components', 'Chart.js', 'react-to-print'],
        roleKey: 'project.xmandu.master.role',
        featuresKey: 'project.xmandu.master.features',
      },
    ],
  },
  {
    title: 'Pop Gov — Vereador',
    descriptionKey: 'project.popgov.desc',
    featured: true,
    year: 2024,
    month: 11,
    category: 'company',
    images: [
      '/projects/popgov/1.png',
      '/projects/popgov/2.png',
      '/projects/popgov/3.png',
      '/projects/popgov/4.png',
      '/projects/popgov/5.png',
      '/projects/popgov/6.png',
      '/projects/popgov/7.png',
    ],
    tags: ['Next.js', 'React', 'TypeScript', 'Styled-Components', 'Recharts', 'jsPDF', 'html2canvas', 'react-dropzone', 'Swiper'],
    roleKey: 'project.popgov.role',
    durationKey: 'project.popgov.duration',
    highlightKey: 'project.popgov.highlight',
  },
  {
    title: 'Edugest — Professor',
    descriptionKey: 'project.edugest.desc',
    year: 2024,
    month: 10,
    category: 'company',
    images: [
      '/projects/edugest/1.png',
      '/projects/edugest/2.png',
      '/projects/edugest/3.png',
      '/projects/edugest/4.png',
      '/projects/edugest/5.png',
    ],
    tags: ['Next.js', 'React', 'TypeScript', 'Styled-Components', 'Radix UI', 'Recharts', 'Chart.js', 'React Query'],
    roleKey: 'project.edugest.role',
    durationKey: 'project.edugest.duration',
    highlightKey: 'project.edugest.highlight',
  },
  {
    title: 'Impulsse — Master',
    descriptionKey: 'project.impulsse.desc',
    year: 2024,
    month: 12,
    category: 'company',
    tags: ['Next.js', 'React', 'TypeScript', 'Styled-Components', 'Tailwind CSS', 'Chart.js', 'Draft.js', 'Next Auth', 'Swiper'],
    roleKey: 'project.impulsse.role',
    durationKey: 'project.impulsse.duration',
    highlightKey: 'project.impulsse.highlight',
  },
  {
    title: 'GoTasks — Landing Page',
    descriptionKey: 'project.gotasks.desc',
    featured: true,
    year: 2024,
    month: 11,
    category: 'company',
    images: [
      '/projects/gotasks/1.png',
      '/projects/gotasks/2.png',
      '/projects/gotasks/3.png',
      '/projects/gotasks/4.png',
    ],
    tags: ['Next.js', 'React', 'TypeScript', 'Styled-Components', 'QRCode'],
    roleKey: 'project.gotasks.role',
    durationKey: 'project.gotasks.duration',
    highlightKey: 'project.gotasks.highlight',
  },
  {
    title: 'LawHub — Master',
    descriptionKey: 'project.lawhub.desc',
    year: 2025,
    month: 3,
    category: 'company',
    tags: ['Next.js', 'React', 'TypeScript', 'Styled-Components', 'Framer Motion', 'react-pdf'],
    roleKey: 'project.lawhub.role',
    durationKey: 'project.lawhub.duration',
    highlightKey: 'project.lawhub.highlight',
  },
  {
    title: 'GTI — Ponto de Coleta',
    descriptionKey: 'project.gti.desc',
    year: 2025,
    month: 1,
    category: 'company',
    tags: ['Next.js', 'React', 'TypeScript', 'Styled-Components', 'Framer Motion', 'React Query'],
    roleKey: 'project.gti.role',
    durationKey: 'project.gti.duration',
    highlightKey: 'project.gti.highlight',
  },
  {
    title: 'Planc — Web',
    descriptionKey: 'project.planc.desc',
    year: 2024,
    month: 10,
    category: 'company',
    tags: ['Next.js', 'React', 'TypeScript', 'Styled-Components', 'React Datepicker'],
    roleKey: 'project.planc.role',
    durationKey: 'project.planc.duration',
    highlightKey: 'project.planc.highlight',
  },
  {
    title: 'Meu Acesso — Landing Page',
    descriptionKey: 'project.meuacesso.desc',
    featured: true,
    year: 2024,
    month: 12,
    category: 'company',
    tags: ['Next.js', 'React', 'TypeScript', 'Styled-Components', 'Framer Motion', 'Credit Card UI'],
    roleKey: 'project.meuacesso.role',
    durationKey: 'project.meuacesso.duration',
    highlightKey: 'project.meuacesso.highlight',
  },
  {
    title: 'Yuse — Parceiros',
    descriptionKey: 'project.yuse.desc',
    year: 2024,
    month: 11,
    category: 'company',
    tags: ['Next.js', 'React', 'TypeScript', 'Styled-Components', 'Framer Motion'],
    roleKey: 'project.yuse.role',
    durationKey: 'project.yuse.duration',
    highlightKey: 'project.yuse.highlight',
  },
];

/* ─────────────────────────────────────────────────────────
   PROJETOS PESSOAIS
────────────────────────────────────────────────────────── */
export const PERSONAL_PROJECTS: ProjectItem[] = [
  {
    title: 'ElevenLabs – UI/UX Recreated',
    descriptionKey: 'project.elevenlabs.desc',
    year: 2024,
    month: 9,
    category: 'personal',
    images: [
      '/projects/eleven-labs.jpg',
      '/projects/eleven-labs2.jpg',
      '/projects/eleven-labs3.jpg',
      '/projects/eleven-labs4.jpg',
      '/projects/eleven-labs6.jpg',
    ],
    tags: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'JSX', 'HTML', 'CSS', 'Styled-Components'],
    link: 'https://project-eleven-lab.vercel.app/conversational-ai/dashboard',
  },
  {
    title: 'Projeto Portfólio v1',
    descriptionKey: 'project.portfolio.desc',
    year: 2024,
    month: 3,
    category: 'personal',
    images: [
      '/projects/first-portfolio.png',
      '/projects/first-portfolio2.png',
      '/projects/first-portfolio3.png',
      '/projects/first-portfolio4.png',
    ],
    tags: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://arthurramoz.github.io/Portfolio-1/index.html',
  },
  {
    title: 'Paragrafeado React',
    descriptionKey: 'project.paragrafeado.desc',
    year: 2023,
    month: 8,
    category: 'personal',
    images: ['/projects/paragrafeado.png'],
    tags: ['React', 'JavaScript', 'JSX', 'HTML', 'CSS'],
    link: 'https://arthurramoz.github.io/paragrafeado-react/',
  },
];

/* ─────────────────────────────────────────────────────────
   PROJETOS DA FACULDADE
────────────────────────────────────────────────────────── */
export const UNIVERSITY_PROJECTS: ProjectItem[] = [
  {
    title: 'Projeto Netflix CRUD',
    descriptionKey: 'project.netflix.desc',
    year: 2023,
    month: 6,
    category: 'university',
    images: ['/projects/netflix.jpg'],
    tags: ['JavaScript', 'JQuery', 'PHP', 'MySQL', 'HTML', 'CSS'],
  },
  {
    title: 'Super Calculadora em C',
    descriptionKey: 'project.calculadora.desc',
    year: 2023,
    month: 4,
    category: 'university',
    tags: ['C'],
  },
];

/* ─────────────────────────────────────────────────────────
   TODOS OS PROJETOS — ordenados do mais recente ao mais antigo
────────────────────────────────────────────────────────── */
export const ALL_PROJECTS: ProjectItem[] = [
  ...COMPANY_PROJECTS,
  ...PERSONAL_PROJECTS,
  ...UNIVERSITY_PROJECTS,
].sort((a, b) => {
  const dateA = a.year * 100 + (a.month ?? 0);
  const dateB = b.year * 100 + (b.month ?? 0);
  return dateB - dateA;
});
