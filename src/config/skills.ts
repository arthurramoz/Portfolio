import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiPrisma,
  SiPostgresql,
  SiStyledcomponents,
  SiFirebase,
  SiFigma,
  SiGit,
  SiAmazonaws,
  SiHtml5,
  SiCss3,
  SiGithub,
  SiVercel,
  SiNpm,
  SiPostman,
  SiWebpack,
  SiTailwindcss,
  SiStrapi,
  SiMysql,
  SiNetlify,
} from 'react-icons/si';

export interface Skill {
  name: string;
  icon: React.ComponentType;
  color: string;
  level: 1 | 2 | 3 | 4 | 5;
}

export interface SkillRow {
  labelKey: string;
  skills: Skill[];
}

export const HARD_SKILLS_ROWS: SkillRow[] = [
  {
    labelKey: 'skills.frontend',
    skills: [
      { name: 'React.js', icon: SiReact, color: '#61DAFB', level: 4 },
      { name: 'Next.js', icon: SiNextdotjs, color: '', level: 4 },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', level: 4 },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 4 },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26', level: 4 },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6', level: 4 },
      { name: 'Styled-Comp.', icon: SiStyledcomponents, color: '#DB7093', level: 4 },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4', level: 2 },
      { name: 'Webpack', icon: SiWebpack, color: '#8DD6F9', level: 3 },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E', level: 3 },
    ],
  },
  {
    labelKey: 'skills.backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933', level: 4 },
      { name: 'Prisma', icon: SiPrisma, color: '', level: 3 },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', level: 3 },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1', level: 2 },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28', level: 3 },
      { name: 'Strapi', icon: SiStrapi, color: '#4945FF', level: 3 },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37', level: 4 },
    ],
  },
  {
    labelKey: 'skills.devops',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032', level: 4 },
      { name: 'GitHub', icon: SiGithub, color: '', level: 4 },
      { name: 'AWS', icon: SiAmazonaws, color: '#FF9900', level: 2 },
      { name: 'Vercel', icon: SiVercel, color: '', level: 4 },
      { name: 'Netlify', icon: SiNetlify, color: '#00C7B7', level: 2 },
      { name: 'NPM', icon: SiNpm, color: '#CB3837', level: 3 },
    ],
  },
];
