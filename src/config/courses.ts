export interface CourseItem {
  title: string;
  platform: string;
  month: number;
  year: number;
  hours: number;
  skills?: string[];
}

export type CoursePlatform =
  | 'all'
  | 'Udemy'
  | 'Alura'
  | 'Cisco'
  | 'Microsoft'
  | 'Google Cloud'
  | 'SENAI'
  | 'AWS'
  | 'Workover Academy'
  | 'Centro Paula Souza';

export const PLATFORM_FILTERS: CoursePlatform[] = [
  'all',
  'Udemy',
  'Alura',
  'Cisco',
  'Microsoft',
  'Google Cloud',
  'SENAI',
  'AWS',
  'Workover Academy',
  'Centro Paula Souza',
];

export const COURSES: CourseItem[] = [
  {
    title: 'React do Zero a Maestria (c/ hooks, router, API, Projetos)',
    platform: 'Udemy',
    month: 12,
    year: 2025,
    hours: 32,
    skills: ['React.js', 'TypeScript'],
  },
  {
    title: 'Certificação COBIT 5 Foundation',
    platform: 'Workover Academy',
    month: 4,
    year: 2025,
    hours: 10,
    skills: ['COBIT', 'Governança de TI'],
  },
  {
    title: 'Java: criando a sua primeira aplicação',
    platform: 'Alura',
    month: 4,
    year: 2025,
    hours: 20,
    skills: ['Java'],
  },
  {
    title: 'Node.js: criando uma API Rest com Express e MongoDB',
    platform: 'Alura',
    month: 3,
    year: 2025,
    hours: 40,
    skills: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'HTTP: entendendo a web por baixo dos panos',
    platform: 'Alura',
    month: 3,
    year: 2025,
    hours: 40,
    skills: ['HTTP', 'Redes'],
  },
  {
    title: 'JavaScript: utilizando tipos, variáveis e funções',
    platform: 'Alura',
    month: 3,
    year: 2025,
    hours: 40,
    skills: ['JavaScript'],
  },
  {
    title: 'Python: aplicando a Orientação a Objetos',
    platform: 'Alura',
    month: 3,
    year: 2025,
    hours: 40,
    skills: ['Python', 'POO'],
  },
  {
    title:
      'Node.js: continue seu projeto full stack criando uma API com Express',
    platform: 'Alura',
    month: 2,
    year: 2025,
    hours: 40,
    skills: ['Node.js', 'JavaScript'],
  },
  {
    title: 'Aprenda Postman em 1 Hora',
    platform: 'Udemy',
    month: 10,
    year: 2024,
    hours: 1,
    skills: ['Postman', 'APIs'],
  },
  {
    title: 'PRO FIGMA | UI DESIGN com Figma do Zero ao especialista 2024',
    platform: 'Udemy',
    month: 10,
    year: 2024,
    hours: 20,
    skills: ['Figma', 'UI Design'],
  },
  {
    title: 'Endpoint Security',
    platform: 'Cisco',
    month: 9,
    year: 2024,
    hours: 60,
    skills: ['Segurança', 'Redes'],
  },
  {
    title: 'React: Comece seu projeto full stack',
    platform: 'Alura',
    month: 9,
    year: 2024,
    hours: 40,
    skills: ['React.js', 'JSX', 'Full Stack'],
  },
  {
    title: 'AWS Academy Graduate - AWS Academy Cloud Foundations',
    platform: 'AWS',
    month: 11,
    year: 2023,
    hours: 40,
    skills: ['AWS', 'Cloud'],
  },
  {
    title: '17ª Edição do Curso Escola de Inovadores',
    platform: 'Centro Paula Souza',
    month: 11,
    year: 2023,
    hours: 40,
    skills: ['Inovação', 'Empreendedorismo'],
  },
  {
    title: 'It Essentials',
    platform: 'Cisco',
    month: 12,
    year: 2023,
    hours: 2,
    skills: ['Hardware', 'Redes'],
  },
  {
    title:
      'Microsoft Azure Fundamentals: Describe Azure management and governance',
    platform: 'Microsoft',
    month: 9,
    year: 2023,
    hours: 2,
    skills: ['Azure', 'Cloud'],
  },
  {
    title: 'Perform Foundational Data, ML, and AI Tasks in Google Cloud',
    platform: 'Google Cloud',
    month: 4,
    year: 2023,
    hours: 2,
    skills: ['ML', 'AI', 'Google Cloud'],
  },
  {
    title: 'Google Cloud Computing Foundations: Infrastructure in Google Cloud',
    platform: 'Google Cloud',
    month: 4,
    year: 2023,
    hours: 2,
    skills: ['Infraestrutura', 'Google Cloud'],
  },
  {
    title: 'Google Cloud Computing Foundations: Cloud Computing Fundamentals',
    platform: 'Google Cloud',
    month: 3,
    year: 2023,
    hours: 2,
    skills: ['Cloud', 'Google Cloud'],
  },
  {
    title: 'Create and Manage Cloud Resources',
    platform: 'Google Cloud',
    month: 3,
    year: 2023,
    hours: 2,
    skills: ['Cloud', 'Google Cloud'],
  },
  {
    title:
      'Google Cloud Computing Foundations: Data, ML, and AI in Google Cloud',
    platform: 'Google Cloud',
    month: 3,
    year: 2023,
    hours: 2,
    skills: ['ML', 'AI', 'Data'],
  },
  {
    title: 'SENAI - Google Cloud Foundations',
    platform: 'SENAI',
    month: 3,
    year: 2023,
    hours: 40,
    skills: ['Google Cloud', 'Cloud'],
  },
  {
    title: 'Microsoft Azure Fundamentals: Describe cloud concepts',
    platform: 'Microsoft',
    month: 1,
    year: 2023,
    hours: 2,
    skills: ['Azure', 'Cloud'],
  },
  {
    title:
      'Microsoft Azure AI Fundamentals: Get started with artificial intelligence',
    platform: 'Microsoft',
    month: 2,
    year: 2023,
    hours: 8,
    skills: ['Azure', 'AI'],
  },
  {
    title:
      'Microsoft Azure Fundamentals: Describe Azure architecture and services',
    platform: 'Microsoft',
    month: 2,
    year: 2023,
    hours: 8,
    skills: ['Azure', 'Arquitetura'],
  },
  {
    title: 'SENAI - Microsoft Certified: Azure AI Fundamentals',
    platform: 'SENAI',
    month: 2,
    year: 2023,
    hours: 40,
    skills: ['Azure', 'AI'],
  },
  {
    title: 'SENAI - Microsoft Certified: Azure Data Fundamentals',
    platform: 'SENAI',
    month: 1,
    year: 2023,
    hours: 40,
    skills: ['Azure', 'Data'],
  },
  {
    title: 'SENAI - Google Cloud Foundations',
    platform: 'SENAI',
    month: 3,
    year: 2023,
    hours: 40,
    skills: ['Google Cloud', 'Cloud'],
  },
];
