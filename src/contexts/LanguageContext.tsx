'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';

export type Language = 'pt' | 'en' | 'fr' | 'ru';

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
    'projects.personal.desc': 'Projetos & Experimentos',
    'projects.company.desc': 'Trabalho Profissional',
    'projects.university.desc': 'Trabalho Acadêmico',
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
    'changelog.title': 'Versões',
    'changelog.description': 'Histórico completo de atualizações e melhorias do portfolio.',
    'changelog.current': 'atual',
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
    'projects.personal.desc': 'Projects & Experiments',
    'projects.company.desc': 'Professional Work',
    'projects.university.desc': 'Academic Work',
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
    'changelog.title': 'Versions',
    'changelog.description': 'Complete update and improvement history of the portfolio.',
    'changelog.current': 'current',
  },
  fr: {
    'hero.greeting': 'Bonjour, je suis',
    'hero.role': 'Software Engineer & Full Stack',
    'hero.description':
      'Création d\'expériences numériques modernes, fluides et axées sur l\'excellence produit, du design élégant à l\'architecture robuste.',
    'hero.btn.primary': 'Continuer',
    'hero.btn.secondary': 'Me Contacter',
    'about.title': 'À propos',
    'about.subtitle': 'Ingénieur Logiciel & Full Stack',
    'about.p1':
      'Développeur logiciel avec une forte spécialisation en Front-End (React.js, Next.js, TypeScript) et une expérience solide en architecture Back-End (Node.js, Prisma) pour la construction de produits SaaS complets.',
    'about.p2':
      'J\'ai de l\'expérience dans la transformation de designs Figma en applications web rapides et évolutives, alliant code propre et règles métier complexes. Actuellement en formation en Analyse et Développement de Systèmes à la FATEC.',
    'about.p3':
      'J\'ai travaillé sur plus de 15 projets d\'entreprise et en tant que freelance international. Je fais le pont entre le design UI/UX et les solutions techniques, en collaboration directe avec les Product Owners et QAs dans des équipes Agiles, pilotant le développement technique de bout en bout.',
    'about.stats.projects': 'Projets B2B & B2C',
    'about.stats.years': 'Ans d\'Exp',
    'gallery.title': 'Galerie',
    'gallery.subtitle': 'Moments & Coulisses',
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.projects': 'Projets',
    'nav.courses': 'Formations',
    'nav.cta': 'Contact',
    'settings.theme': 'Thème',
    'settings.theme.light': 'Clair',
    'settings.theme.dark': 'Sombre',
    'settings.language': 'Langue',
    'footer.navigation': 'Navigation',
    'footer.contact': 'Contact',
    'footer.copyright': 'Tous droits réservés.',
    'footer.changelog.viewAll': 'Voir toutes les versions →',
    'footer.bio': 'Software Engineer & Full Stack — création de produits numériques modernes, du design à l\'architecture. Spécialisé en React, Next.js et TypeScript.',
    'footer.versions': 'Versions',
    'projects.personal': 'Personnels',
    'projects.company': 'Entreprise',
    'projects.university': 'Université',
    'projects.personal.desc': 'Projets & Expériences',
    'projects.company.desc': 'Travail Professionnel',
    'projects.university.desc': 'Travail Académique',
    'projects.title.personal': 'Projets Personnels',
    'projects.title.company': 'Projets d\'Entreprise',
    'projects.title.university': 'Projets Universitaires',
    'projects.subtitle.personal': 'Projets & Expériences',
    'projects.subtitle.company': 'Travail Professionnel',
    'projects.subtitle.university': 'Travail Académique',
    'projects.empty': 'Aucun projet ajouté pour le moment. Bientôt disponible !',
    'project.elevenlabs.desc': 'Projet personnel où j\'ai recréé l\'interface ElevenLabs avec Next.js, React, TypeScript et Styled-Components. Axé sur la reproduction du design, des animations et de l\'expérience visuelle de la plateforme.',
    'project.portfolio.desc': 'Premier portfolio personnel, développé en 1 mois avec responsivité et animations multiples. Un site de 3 pages présentant profil, projets, formations et certifications — un CV interactif et complet.',
    'project.paragrafeado.desc': 'Projet de navigation React axé sur la composantisation et le routage. Interface épurée pour l\'exploration de contenu avec navigation fluide entre les pages.',
    'project.netflix.desc': 'Refonte de Netflix avec intégration MySQL. Opérations CRUD complètes, connexion PHP et fonctionnalités de gestion de contenu. Projet associé à Fatec Mogi das Cruzes.',
    'project.calculadora.desc': 'Calculatrice avancée développée en C avec plus de 2 500 lignes de code. Projet collaboratif à Fatec Mogi das Cruzes, couvrant des opérations basiques aux fonctions mathématiques complexes.',
    'exp.title': 'Expérience',
    'exp.subtitle': 'Stacks & Parcours Professionnel',
    'exp.p1': 'J\'ai conçu et développé (Front et Back) des plateformes SaaS B2B Multi-tenant pour le secteur automobile, connectant concessionnaires, détaillants et prestataires. J\'ai implémenté des logiques RBAC complexes, gestion de garages, enchères, abonnements et intégration de paiements avec Pagar.me.',
    'exp.p2': 'J\'ai construit des dashboards Admin et B2B complexes pour l\'e-commerce, les réseaux sociaux et les outils internes. J\'ai créé des systèmes de chat en temps réel avec Firebase et WebSockets, et livré des projets front-end en tant que freelance international via Upwork pour des clients américains.',
    'exp.stats.corporate': 'Projets Entreprise',
    'exp.stats.fullstack': 'Projet Entreprise (FullStack)',
    'exp.stats.commits': 'Commits',
    'exp.stats.certifications': 'Certifications',
    'exp.stacks.label': 'Stacks Principales',
    'courses.title': 'Formations',
    'courses.subtitle': 'Certifications & Apprentissage',
    'courses.count.single': 'formation trouvée',
    'courses.count.plural': 'formations trouvées',
    'courses.filter.all': 'Tous',
    'courses.filter.organization': 'Organisation',
    'courses.filter.skills': 'Compétences',
    'courses.hours': 'heures',
    'month.1': 'Janvier',
    'month.2': 'Février',
    'month.3': 'Mars',
    'month.4': 'Avril',
    'month.5': 'Mai',
    'month.6': 'Juin',
    'month.7': 'Juillet',
    'month.8': 'Août',
    'month.9': 'Septembre',
    'month.10': 'Octobre',
    'month.11': 'Novembre',
    'month.12': 'Décembre',
    'date.preposition': ' ',
    'changelog.title': 'Versions',
    'changelog.description': 'Historique complet des mises à jour et améliorations du portfolio.',
    'changelog.current': 'actuel',
  },
  ru: {
    'hero.greeting': 'Привет, я',
    'hero.role': 'Software Engineer & Full Stack',
    'hero.description':
      'Создание современных, плавных цифровых решений с фокусом на качество продукта — от элегантного дизайна до надёжной архитектуры.',
    'hero.btn.primary': 'Продолжить',
    'hero.btn.secondary': 'Связаться',
    'about.title': 'Обо мне',
    'about.subtitle': 'Инженер-программист & Full Stack',
    'about.p1':
      'Разработчик ПО с сильной специализацией во Front-End (React.js, Next.js, TypeScript) и солидным опытом в архитектуре Back-End (Node.js, Prisma) для создания полноценных SaaS-продуктов.',
    'about.p2':
      'Имею опыт преобразования дизайнов Figma в быстрые и масштабируемые веб-приложения, сочетая чистый код со сложной бизнес-логикой. В настоящее время учусь на факультете анализа и разработки систем в FATEC.',
    'about.p3':
      'Работал над более чем 15 корпоративными проектами и в качестве международного фрилансера. Объединяю UI/UX дизайн и технические решения, тесно сотрудничая с Product Owner-ами и QA в Agile-командах, руководя сквозной технической разработкой.',
    'about.stats.projects': 'B2B и B2C Проекты',
    'about.stats.years': 'Лет Опыта',
    'gallery.title': 'Галерея',
    'gallery.subtitle': 'Моменты и Закулисье',
    'nav.home': 'Главная',
    'nav.about': 'Обо мне',
    'nav.projects': 'Проекты',
    'nav.courses': 'Курсы',
    'nav.cta': 'Контакт',
    'settings.theme': 'Тема',
    'settings.theme.light': 'Светлая',
    'settings.theme.dark': 'Тёмная',
    'settings.language': 'Язык',
    'footer.navigation': 'Навигация',
    'footer.contact': 'Контакт',
    'footer.copyright': 'Все права защищены.',
    'footer.changelog.viewAll': 'Все версии →',
    'footer.bio': 'Software Engineer & Full Stack — создание современных цифровых продуктов, от дизайна до архитектуры. Специализация: React, Next.js и TypeScript.',
    'footer.versions': 'Версии',
    'projects.personal': 'Личные',
    'projects.company': 'Компания',
    'projects.university': 'Университет',
    'projects.personal.desc': 'Проекты и Эксперименты',
    'projects.company.desc': 'Профессиональная Работа',
    'projects.university.desc': 'Учебная Работа',
    'projects.title.personal': 'Личные Проекты',
    'projects.title.company': 'Проекты Компании',
    'projects.title.university': 'Университетские Проекты',
    'projects.subtitle.personal': 'Проекты и Эксперименты',
    'projects.subtitle.company': 'Профессиональная Работа',
    'projects.subtitle.university': 'Учебная Работа',
    'projects.empty': 'Проекты ещё не добавлены. Скоро будут!',
    'project.elevenlabs.desc': 'Личный проект, в котором я воссоздал интерфейс ElevenLabs с использованием Next.js, React, TypeScript и Styled-Components. Фокус на воспроизведении дизайна, анимаций и визуального опыта платформы.',
    'project.portfolio.desc': 'Первое личное портфолио, созданное за 1 месяц с адаптивностью и множеством анимаций. Сайт из 3 страниц с профилем, проектами, курсами и сертификатами — интерактивное и подробное резюме.',
    'project.paragrafeado.desc': 'React-проект навигации с фокусом на компонентизацию и маршрутизацию. Чистый интерфейс для просмотра контента с плавной навигацией между страницами.',
    'project.netflix.desc': 'Редизайн Netflix с интеграцией базы данных MySQL. Полные CRUD-операции, подключение через PHP и различные функции управления контентом. Проект при Fatec Mogi das Cruzes.',
    'project.calculadora.desc': 'Продвинутый калькулятор на языке C, более 2 500 строк кода. Совместный проект в Fatec Mogi das Cruzes, от базовых операций до сложных математических функций.',
    'exp.title': 'Опыт',
    'exp.subtitle': 'Стек и Профессиональный Путь',
    'exp.p1': 'Спроектировал и разработал (Front и Back) мульти-тенантные B2B SaaS-платформы для автомобильного сектора, связывающие дилеров, розничных продавцов и сервис-провайдеров. Реализовал сложную логику RBAC, управление гаражами, аукционы, подписки и интеграцию платежей с Pagar.me.',
    'exp.p2': 'Создавал сложные Admin и B2B дашборды для e-commerce, социальных сетей и внутренних инструментов. Разработал системы чата в реальном времени с Firebase и WebSockets, выполнял front-end проекты как международный фрилансер через Upwork для клиентов из США.',
    'exp.stats.corporate': 'Корпоративные Проекты',
    'exp.stats.fullstack': 'Корпоративный Проект (FullStack)',
    'exp.stats.commits': 'Коммиты',
    'exp.stats.certifications': 'Сертификаты',
    'exp.stacks.label': 'Основные Стеки',
    'courses.title': 'Курсы',
    'courses.subtitle': 'Сертификаты и Обучение',
    'courses.count.single': 'курс найден',
    'courses.count.plural': 'курсов найдено',
    'courses.filter.all': 'Все',
    'courses.filter.organization': 'Организация',
    'courses.filter.skills': 'Навыки',
    'courses.hours': 'часов',
    'month.1': 'Январь',
    'month.2': 'Февраль',
    'month.3': 'Март',
    'month.4': 'Апрель',
    'month.5': 'Май',
    'month.6': 'Июнь',
    'month.7': 'Июль',
    'month.8': 'Август',
    'month.9': 'Сентябрь',
    'month.10': 'Октябрь',
    'month.11': 'Ноябрь',
    'month.12': 'Декабрь',
    'date.preposition': ' ',
    'changelog.title': 'Версии',
    'changelog.description': 'Полная история обновлений и улучшений портфолио.',
    'changelog.current': 'текущая',
  },
} as const;

type DictionaryKeys = keyof typeof dictionaries.pt;

const getTranslation = (lang: Language, key: DictionaryKeys) => {
  return dictionaries[lang][key] || key;
};

interface LanguageContextData {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: DictionaryKeys) => string;
}

const LanguageContext = createContext<LanguageContextData>({
  language: 'pt',
  toggleLanguage: () => {},
  setLanguage: () => {},
  t: (key: DictionaryKeys) => getTranslation('pt', key),
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('@Portfolio:lang') as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    } else {
      const nav = navigator.language;
      if (nav.startsWith('fr')) setLanguage('fr');
      else if (nav.startsWith('ru')) setLanguage('ru');
      else if (nav.startsWith('en')) setLanguage('en');
      else setLanguage('pt');
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'pt' ? 'en' : 'pt';
    setLanguage(newLang);
    localStorage.setItem('@Portfolio:lang', newLang);
  };

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('@Portfolio:lang', lang);
  };

  const t = (key: DictionaryKeys) => getTranslation(language, key);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
