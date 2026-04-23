export interface ProjectItem {
  title: string;
  descriptionKey: string;
  images?: string[];
  tags: string[];
  link?: string;
}

export const PERSONAL_PROJECTS: ProjectItem[] = [
  {
    title: 'ElevenLabs – UI/UX Recreated',
    descriptionKey: 'project.elevenlabs.desc',
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
    images: ['/projects/paragrafeado.png'],
    tags: ['React', 'JavaScript', 'JSX', 'HTML', 'CSS'],
    link: 'https://arthurramoz.github.io/paragrafeado-react/',
  },
];

export const COMPANY_PROJECTS: ProjectItem[] = [];

export const UNIVERSITY_PROJECTS: ProjectItem[] = [
  {
    title: 'Projeto Netflix CRUD',
    descriptionKey: 'project.netflix.desc',
    images: ['/projects/netflix.jpg'],
    tags: ['JavaScript', 'JQuery', 'PHP', 'MySQL', 'HTML', 'CSS'],
  },
  {
    title: 'Super Calculadora em C',
    descriptionKey: 'project.calculadora.desc',
    tags: ['C'],
  },
];
