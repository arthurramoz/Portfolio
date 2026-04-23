'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';

export type Language = 'pt' | 'en';

const dictionaries = {
  pt: {
    'hero.greeting': 'Olá, eu sou',
    'hero.role': 'Software Engineer & Full Stack',
    'hero.description':
      'Construindo experiências digitais modernas, fluidas e focadas na excelência de produto, do design elegante à arquitetura robusta.',
    'hero.btn.primary': 'Prosseguir',
    'hero.btn.secondary': 'Entrar em Contato',
    'about.title': 'Sobre mim',
    'about.subtitle': 'Engenheiro de Software & Full Stack',
    'about.p1':
      'Desenvolvedor de Software com forte especialização no Front-End (React.js, Next.js, TypeScript) e experiência sólida na arquitetura Back-End (Node.js, Prisma) para a construção de produtos SaaS completos.',
    'about.p2':
      'Tenho experiência em transformar designs do Figma em aplicações web rápidas e escaláveis, unindo código limpo com regras de negócios complexas. Atualmente curso Análise e Desenvolvimento de Sistemas na FATEC.',
    'about.p3':
      'Já atuei em mais de 15 projetos corporativos e trabalhos como freelancer internacional. Faço a ponte entre o design UI/UX e boas soluções técnicas, trabalhando em colaboração direta com Product Owners e QAs em equipes Ágeis, liderando o desenvolvimento técnico de plataformas de ponta a ponta.',
    'about.stats.projects': 'Projetos B2B & B2C',
    'about.stats.years': 'Anos de Exp',
    'gallery.title': 'Galeria',
    'gallery.subtitle': 'Momentos & Bastidores',
    'nav.home': 'Início',
    'nav.about': 'Sobre mim',
    'nav.projects': 'Projetos',
    'nav.courses': 'Cursos',
    'nav.cta': 'Contato',
    'settings.theme': 'Tema',
    'settings.theme.light': 'Claro',
    'settings.theme.dark': 'Escuro',
    'settings.language': 'Idioma',
    'footer.navigation': 'Navegação',
    'footer.contact': 'Contato',
    'footer.copyright': 'Todos os direitos reservados.',
    'footer.changelog.viewAll': 'Ver todas as versões →',
    'footer.bio': 'Software Engineer & Full Stack — construindo produtos digitais modernos, do design à arquitetura. Focado em React, Next.js e TypeScript.',
    'footer.versions': 'Versões',
    'projects.personal': 'Pessoais',
    'projects.company': 'Empresa',
    'projects.university': 'Faculdade',
    'projects.title.personal': 'Projetos Pessoais',
    'projects.title.company': 'Projetos de Empresa',
    'projects.title.university': 'Projetos da Faculdade',
    'projects.subtitle.personal': 'Projetos & Experimentos',
    'projects.subtitle.company': 'Trabalhos Profissionais',
    'projects.subtitle.university': 'Trabalhos Acadêmicos',
    'projects.empty': 'Nenhum projeto adicionado ainda. Em breve!',
    'project.elevenlabs.desc': 'Projeto pessoal onde recriei a interface da ElevenLabs utilizando Next.js, React, TypeScript e Styled-Components. Foco em replicar o design, animações e experiência visual completa da plataforma.',
    'project.portfolio.desc': 'Primeiro portfólio pessoal, desenvolvido em 1 mês com responsividade e várias animações. Site com 3 páginas mostrando perfil, projetos, cursos e certificações — basicamente um currículo interativo e mais abrangente.',
    'project.paragrafeado.desc': 'Projeto de navegação em React focado em componentização e roteamento. Interface limpa para exploração de conteúdo com navegação fluida entre páginas.',
    'project.netflix.desc': 'Releitura da Netflix com integração a banco de dados MySQL. Implementação de operações CRUD completas, conexão via PHP e diversas funcionalidades de gerenciamento de conteúdo. Projeto associado à Fatec Mogi das Cruzes.',
    'project.calculadora.desc': 'Calculadora avançada desenvolvida em linguagem C com mais de 2.500 linhas de código. Projeto colaborativo realizado na Fatec Mogi das Cruzes, cobrindo desde operações básicas até funções matemáticas complexas.',
    'exp.title': 'Experiência',
    'exp.subtitle': 'Stacks & Vivência Profissional',
    'exp.p1': 'Arquitetei e desenvolvi (Front e Back) plataformas SaaS B2B Multi-tenant voltadas para o setor automotivo, conectando concessionárias, lojistas e prestadores de serviço. Implementei lógicas complexas de RBAC, gestão de garagens, leilões, planos de assinatura e integração de pagamentos com Pagar.me.',
    'exp.p2': 'Construí dashboards Admin e B2B complexos para e-commerce, redes sociais e ferramentas internas. Criei sistemas de chat em tempo real com Firebase e WebSockets, além de entregar projetos front-end como freelancer internacional via Upwork para clientes nos EUA.',
    'exp.stats.corporate': 'Projetos Corporativos',
    'exp.stats.fullstack': 'Projeto Corporativo (FullStack)',
    'exp.stats.commits': 'Commits',
    'exp.stats.certifications': 'Certificações',
    'exp.stacks.label': 'Stacks Principais',
    'courses.title': 'Cursos',
    'courses.subtitle': 'Certificações & Aprendizado',
    'courses.count.single': 'curso encontrado',
    'courses.count.plural': 'cursos encontrados',
    'courses.filter.all': 'Todos',
    'courses.filter.organization': 'Organização',
    'courses.filter.skills': 'Competências',
    'courses.hours': 'horas',
    'month.1': 'Janeiro',
    'month.2': 'Fevereiro',
    'month.3': 'Março',
    'month.4': 'Abril',
    'month.5': 'Maio',
    'month.6': 'Junho',
    'month.7': 'Julho',
    'month.8': 'Agosto',
    'month.9': 'Setembro',
    'month.10': 'Outubro',
    'month.11': 'Novembro',
    'month.12': 'Dezembro',
    'date.preposition': ' de ',
  },
  en: {
    'hero.greeting': 'Hi, I am',
    'hero.role': 'Software Engineer & Full Stack',
    'hero.description':
      'Building modern, fluid digital experiences focused on product excellence, from elegant design to robust architecture.',
    'hero.btn.primary': 'Continue',
    'hero.btn.secondary': 'Get in Touch',
    'about.title': 'About me',
    'about.subtitle': 'Software Engineer & Full Stack',
    'about.p1':
      'Software Developer with strong specialization in Front-End (React.js, Next.js, TypeScript) and solid experience in Back-End architecture (Node.js, Prisma) for building complete SaaS products.',
    'about.p2':
      'I have experience transforming Figma designs into fast and scalable web applications, uniting clean code with complex business rules. Currently pursuing a degree in Systems Analysis and Development at FATEC.',
    'about.p3':
      'I have worked on more than 15 corporate projects and as an international freelancer. I bridge the gap between UI/UX design and technical solutions, working closely with Product Owners and QAs in Agile teams, leading end-to-end technical development.',
    'about.stats.projects': 'B2B & B2C Projects',
    'about.stats.years': 'Years Exp',
    'gallery.title': 'Gallery',
    'gallery.subtitle': 'Moments & Behind the Scenes',
    'nav.home': 'Home',
    'nav.about': 'About me',
    'nav.projects': 'Projects',
    'nav.courses': 'Courses',
    'nav.cta': 'Contact',
    'settings.theme': 'Theme',
    'settings.theme.light': 'Light',
    'settings.theme.dark': 'Dark',
    'settings.language': 'Language',
    'footer.navigation': 'Navigation',
    'footer.contact': 'Contact',
    'footer.copyright': 'All rights reserved.',
    'footer.changelog.viewAll': 'View all versions →',
    'footer.bio': 'Software Engineer & Full Stack — building modern digital products, from design to architecture. Focused on React, Next.js and TypeScript.',
    'footer.versions': 'Versions',
    'projects.personal': 'Personal',
    'projects.company': 'Company',
    'projects.university': 'University',
    'projects.title.personal': 'Personal Projects',
    'projects.title.company': 'Company Projects',
    'projects.title.university': 'University Projects',
    'projects.subtitle.personal': 'Projects & Experiments',
    'projects.subtitle.company': 'Professional Work',
    'projects.subtitle.university': 'Academic Work',
    'projects.empty': 'No projects added yet. Coming soon!',
    'project.elevenlabs.desc': 'Personal project where I recreated the ElevenLabs interface using Next.js, React, TypeScript and Styled-Components. Focused on replicating the design, animations and overall visual experience of the platform.',
    'project.portfolio.desc': 'First personal portfolio, built in 1 month with responsiveness and multiple animations. A 3-page site showcasing profile, projects, courses and certifications — essentially an interactive and comprehensive résumé.',
    'project.paragrafeado.desc': 'React navigation project focused on componentization and routing. Clean interface for content exploration with fluid page navigation.',
    'project.netflix.desc': 'Netflix redesign with MySQL database integration. Full CRUD operations, PHP connection and various content management features. Project associated with Fatec Mogi das Cruzes.',
    'project.calculadora.desc': 'Advanced calculator built in C with over 2,500 lines of code. Collaborative project at Fatec Mogi das Cruzes, covering basic operations to complex mathematical functions.',
    'exp.title': 'Experience',
    'exp.subtitle': 'Stacks & Professional Background',
    'exp.p1': 'I architected and developed (Front and Back) B2B Multi-tenant SaaS platforms for the automotive sector, connecting dealerships, retailers and service providers. I implemented complex RBAC logic, garage management, auctions, subscription plans and payment integration with Pagar.me.',
    'exp.p2': 'I built complex Admin and B2B dashboards for e-commerce, social networks and internal tools. I created real-time chat systems using Firebase and WebSockets, and delivered front-end projects as an international freelancer via Upwork for US-based clients.',
    'exp.stats.corporate': 'Corporate Projects',
    'exp.stats.fullstack': 'Corporate Project (FullStack)',
    'exp.stats.commits': 'Commits',
    'exp.stats.certifications': 'Certifications',
    'exp.stacks.label': 'Main Stacks',
    'courses.title': 'Courses',
    'courses.subtitle': 'Certifications & Learning',
    'courses.count.single': 'course found',
    'courses.count.plural': 'courses found',
    'courses.filter.all': 'All',
    'courses.filter.organization': 'Organization',
    'courses.filter.skills': 'Skills',
    'courses.hours': 'hours',
    'month.1': 'January',
    'month.2': 'February',
    'month.3': 'March',
    'month.4': 'April',
    'month.5': 'May',
    'month.6': 'June',
    'month.7': 'July',
    'month.8': 'August',
    'month.9': 'September',
    'month.10': 'October',
    'month.11': 'November',
    'month.12': 'December',
    'date.preposition': ' ',
  },
} as const;

type DictionaryKeys = keyof typeof dictionaries.pt;

const getTranslation = (lang: Language, key: DictionaryKeys) => {
  return dictionaries[lang][key] || key;
};

interface LanguageContextData {
  language: Language;
  toggleLanguage: () => void;
  t: (key: DictionaryKeys) => string;
}

const LanguageContext = createContext<LanguageContextData>({
  language: 'pt',
  toggleLanguage: () => {},
  t: (key: DictionaryKeys) => getTranslation('pt', key),
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('@Portfolio:lang') as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    } else {
      const browserLang = navigator.language.startsWith('en') ? 'en' : 'pt';
      setLanguage(browserLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'pt' ? 'en' : 'pt';
    setLanguage(newLang);
    localStorage.setItem('@Portfolio:lang', newLang);
  };

  const t = (key: DictionaryKeys) => getTranslation(language, key);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
