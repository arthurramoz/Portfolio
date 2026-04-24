import { Language } from '@/contexts/LanguageContext';

export interface VersionEntry {
  version: string;
  date: string;
  label: string;
  highlights: Record<Language, string[]>;
}

export const CURRENT_VERSION = 'v1.0';
export const CURRENT_LABEL = 'release';

export const VERSION_HISTORY: VersionEntry[] = [
  {
    version: 'v1.0',
    date: '24/04/2026',
    label: 'release',
    highlights: {
      pt: [
        'Responsividade global com breakpoints via theme.media (sm/md/lg/xl)',
        'Menu hamburguer mobile com drawer lateral animado',
        'Toggle dia/noite premium com sol, lua e estrelas',
        'Menu de idiomas colapsável no drawer mobile',
        'Suporte a Français (FR) e Русский (RU)',
        'Scroll bloqueado ao abrir drawer mobile',
        'GitHub Graph responsivo com cells reduzidos no mobile',
        'Hero, About, Experience, Gallery, Projects, Courses, Changelog e Footer adaptados',
      ],
      en: [
        'Global responsiveness with theme.media breakpoints (sm/md/lg/xl)',
        'Mobile hamburger menu with animated side drawer',
        'Premium day/night toggle with sun, moon and stars',
        'Collapsible language menu in mobile drawer',
        'French (FR) and Russian (RU) language support',
        'Scroll lock when mobile drawer is open',
        'Responsive GitHub Graph with reduced cells on mobile',
        'Hero, About, Experience, Gallery, Projects, Courses, Changelog and Footer adapted',
      ],
      fr: [
        'Responsivité globale avec breakpoints theme.media (sm/md/lg/xl)',
        'Menu hamburger mobile avec drawer latéral animé',
        'Toggle jour/nuit premium avec soleil, lune et étoiles',
        'Menu de langues repliable dans le drawer mobile',
        'Support du Français (FR) et du Russe (RU)',
        'Scroll bloqué à l\'ouverture du drawer mobile',
        'GitHub Graph responsive avec cellules réduites sur mobile',
        'Hero, About, Experience, Gallery, Projects, Courses, Changelog et Footer adaptés',
      ],
      ru: [
        'Глобальная адаптивность через theme.media breakpoints (sm/md/lg/xl)',
        'Мобильное гамбургер-меню с анимированным боковым drawer',
        'Премиум переключатель день/ночь с солнцем, луной и звёздами',
        'Сворачиваемое меню языков в мобильном drawer',
        'Поддержка Français (FR) и Русский (RU)',
        'Блокировка скролла при открытии мобильного drawer',
        'Адаптивный GitHub Graph с уменьшенными ячейками на мобильных',
        'Hero, About, Experience, Gallery, Projects, Courses, Changelog и Footer адаптированы',
      ],
    },
  },
  {
    version: 'v0.8',
    date: '24/04/2026',
    label: 'beta',
    highlights: {
      pt: [
        'Logo tipográfica AR com monograma gradiente na navbar',
        'Favicon SVG personalizado com identidade visual',
        'Dropdown de projetos premium com ícones, descrições e arrow',
        'Menu de definições redesenhado com glassmorphism e staggered animations',
        'Submenu lateral de idiomas com seleção direta (hover)',
        'Logo da página Under Development atualizada para SVG inline',
        'Suporte a seleção direta de idioma (preparado para multi-idiomas)',
      ],
      en: [
        'AR typographic logo with gradient monogram in navbar',
        'Custom SVG favicon with visual identity',
        'Premium projects dropdown with icons, descriptions and arrow',
        'Redesigned settings menu with glassmorphism and staggered animations',
        'Lateral language submenu with direct selection (hover)',
        'Under Development page logo updated to inline SVG',
        'Direct language selection support (prepared for multi-language)',
      ],
      fr: [
        'Logo typographique AR avec monogramme dégradé dans la navbar',
        'Favicon SVG personnalisé avec identité visuelle',
        'Menu déroulant projets premium avec icônes, descriptions et flèche',
        'Menu paramètres redessiné avec glassmorphisme et animations décalées',
        'Sous-menu latéral des langues avec sélection directe (survol)',
        'Logo de la page Under Development mise à jour en SVG inline',
        'Support de sélection directe de langue (préparé pour le multilingue)',
      ],
      ru: [
        'Типографский логотип AR с градиентной монограммой в навбаре',
        'Пользовательский SVG фавикон с фирменным стилем',
        'Премиум выпадающее меню проектов с иконками, описаниями и стрелкой',
        'Обновлённое меню настроек с glassmorphism и каскадными анимациями',
        'Боковое подменю языков с прямым выбором (при наведении)',
        'Логотип страницы Under Development обновлён до inline SVG',
        'Поддержка прямого выбора языка (подготовлено к мультиязычности)',
      ],
    },
  },
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
      fr: [
        'Page de formations avec 28 certifications',
        'Filtres repliables par organisation et compétences',
        'Logos de plateformes (Udemy, Alura, Cisco, AWS, etc.)',
        'Pagination réutilisable (10 par page)',
        'Carrousel d\'images des projets avec lecture automatique',
        'Données des projets et formations centralisées dans /config',
        'Traductions complètes (PT/EN) pour formations et dates',
      ],
      ru: [
        'Страница курсов с 28 сертификатами',
        'Сворачиваемые фильтры по организации и навыкам',
        'Логотипы платформ (Udemy, Alura, Cisco, AWS и др.)',
        'Переиспользуемая пагинация (10 на страницу)',
        'Карусель изображений проектов с автовоспроизведением',
        'Данные проектов и курсов централизованы в /config',
        'Полные переводы (PT/EN) для курсов и дат',
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
      fr: [
        'Pages de projets (personnels, entreprise, université)',
        'Page de changelog avec timeline éditoriale',
        'Menu déroulant projets dans la topbar et le footer',
        'Footer avec navigation repliable et historique des versions',
        'Stats du À propos refactorisés en tableau dynamique',
      ],
      ru: [
        'Страницы проектов (личные, компания, университет)',
        'Страница changelog с редакционной timeline',
        'Выпадающее меню проектов в topbar и footer',
        'Footer со сворачиваемой навигацией и историей версий',
        'Статистика About рефакторирована в динамический массив',
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
      fr: [
        'Footer complet avec navigation, réseaux sociaux et contact',
        'Galerie de photos personnelles avec grille responsive',
        'Menu paramètres avec clic et badge de version',
      ],
      ru: [
        'Полный footer с навигацией, соцсетями и контактами',
        'Галерея личных фотографий с адаптивной сеткой',
        'Меню настроек с кликом и бейджем версии',
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
      fr: [
        'Section À propos avec bio et cartes de statistiques',
        'Navbar avec suivi du scroll et animations',
        'Bouton Continuer avec défilement fluide',
      ],
      ru: [
        'Секция About с биографией и карточками статистики',
        'Navbar с отслеживанием скролла и анимациями',
        'Кнопка Продолжить с плавной прокруткой',
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
      fr: [
        'Mode sombre et clair avec persistance',
        'Menu paramètres (thème, langue)',
        'Couleurs adaptatives pour boutons et textes',
      ],
      ru: [
        'Тёмная и светлая тема с сохранением',
        'Меню настроек (тема, язык)',
        'Адаптивные цвета для кнопок и текстов',
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
      fr: [
        'i18n : support PT-BR et EN-US avec drapeaux',
        'Navbar et hero traduits dynamiquement',
      ],
      ru: [
        'i18n: поддержка PT-BR и EN-US с флагами',
        'Navbar и hero с динамическим переводом',
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
      fr: [
        'Section hero avec animations framer-motion',
        'Navbar glassmorphisme avec blobs animés',
        'Page Under Development avec compte à rebours',
        'Structure initiale Next.js + styled-components',
      ],
      ru: [
        'Секция hero с анимациями framer-motion',
        'Navbar glassmorphism с анимированными блобами',
        'Страница Under Development с обратным отсчётом',
        'Начальная структура Next.js + styled-components',
      ],
    },
  },
];
