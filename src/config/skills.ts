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
}

export interface SkillRow {
  labelKey: string;
  skills: Skill[];
}

export const HARD_SKILLS_ROWS: SkillRow[] = [
  {
    labelKey: 'skills.frontend',
    skills: [
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
      { name: 'Styled-Comp.', icon: SiStyledcomponents, color: '#DB7093' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Webpack', icon: SiWebpack, color: '#8DD6F9' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
    ],
  },
  {
    labelKey: 'skills.backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Prisma', icon: SiPrisma, color: '' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
      { name: 'Strapi', icon: SiStrapi, color: '#4945FF' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    ],
  },
  {
    labelKey: 'skills.devops',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '' },
      { name: 'AWS', icon: SiAmazonaws, color: '#FF9900' },
      { name: 'Vercel', icon: SiVercel, color: '' },
      { name: 'Netlify', icon: SiNetlify, color: '#00C7B7' },
      { name: 'NPM', icon: SiNpm, color: '#CB3837' },
    ],
  },
];
