'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useRouter, usePathname } from 'next/navigation';
import {
  FiSettings,
  FiMoon,
  FiSun,
  FiGlobe,
  FiChevronDown,
  FiUser,
  FiBriefcase,
  FiBookOpen,
  FiMenu,
  FiX,
  FiHome,
  FiInfo,
  FiLayers,
  FiAward,
  FiSliders,
  FiMapPin,
  FiMessageSquare,
  FiFileText,
  FiMail,
} from 'react-icons/fi';
import { useAppTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { CURRENT_VERSION, CURRENT_LABEL } from '@/config/versions';
import {
  DropdownDivider,
  DropdownLabel,
  DropdownValue,
  DropdownVersion,
  FlagImg,
  HamburgerButton,
  LanguageItemWrapper,
  LanguageOption,
  LanguageSubmenu,
  MobileDrawer,
  MobileDrawerClose,
  MobileDrawerDivider,
  MobileDrawerHeader,
  MobileDrawerContent,
  MobileOverlay,
  Nav,
  NavbarContainer,
  NavCta,
  NavLink,
  NavLogo,
  NavLogoMark,
  HomeSectionsWrapper,
  HomeSectionLink,
  ProjectsDropdown,
  ProjectsDropdownArrow,
  ProjectsDropdownItem,
  ProjectsDropdownIcon,
  ProjectsDropdownText,
  ProjectsDropdownName,
  ProjectsDropdownDesc,
  SettingsButton,
  SettingsDropdown,
  SettingsDropdownArrow,
  SettingsItem,
  SettingsItemIcon,
  SettingsWrapper,
  ThemeToggleLabel,
  ThemeToggleRow,
  VersionBadge,
  PortfolioSubmenu,
  PortfolioItemWrapper,
  AmbientGlow,
  MobileNavLink,
  MobileNavLinkText,
  MobileSubmenuContainer,
  MobileSubmenuLink,
  MobileControlCenter,
  MobileControlRow,
  MobileControlCard,
  MobileControlCardLabel,
  MobileLanguageGrid,
  MobileLanguageModalOverlay,
  MobileLanguageModal,
  MobileLanguageModalTitle,
  MobileVersionWrapper,
} from './styles';
import Switch from '@/components/Switch';

const HOME_MAIN = { key: 'nav.home' as const, id: 'home' };

const HOME_SECTIONS = [
  { key: 'whatsnew.badge' as const, id: 'novidade' },
  { key: 'who.title' as const, id: 'sobre-mim' },
  { key: 'about.title' as const, id: 'sobre' },
  { key: 'exp.title' as const, id: 'experiencia' },
  { key: 'github.viewProfile' as const, id: 'github' },
];

const PROJECT_CATEGORIES = [
  { key: 'projects.personal' as const, path: '/projetos/pessoais', icon: FiUser, descKey: 'projects.personal.desc' as const },
  { key: 'projects.company' as const, path: '/projetos/empresa', icon: FiBriefcase, descKey: 'projects.company.desc' as const },
  { key: 'projects.university' as const, path: '/projetos/faculdade', icon: FiBookOpen, descKey: 'projects.university.desc' as const },
];

const LANGUAGES = [
  { code: 'pt' as const, label: 'Português', flag: 'https://flagcdn.com/w40/br.png' },
  { code: 'en' as const, label: 'English', flag: 'https://flagcdn.com/w40/us.png' },
  { code: 'es' as const, label: 'Español', flag: 'https://flagcdn.com/w40/es.png' },
  { code: 'fr' as const, label: 'Français', flag: 'https://flagcdn.com/w40/fr.png' },
  { code: 'ru' as const, label: 'Русский', flag: 'https://flagcdn.com/w40/ru.png' },
];

const MotionNavbarContainer = motion.create(NavbarContainer);

const mobileContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.08,
    },
  },
} as const;

const mobileItemVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring' as const, stiffness: 300, damping: 24 },
  },
} as const;

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { themeMode, toggleTheme } = useAppTheme();
  const { language, setLanguage: setLang, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileLangOpen, setIsMobileLangOpen] = useState(false);
  const [isMobileHomeOpen, setIsMobileHomeOpen] = useState(false);
  const [isMobileProjectsSubOpen, setIsMobileProjectsSubOpen] = useState(false);
  const [isMobileAboutSubOpen, setIsMobileAboutSubOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isHomeSectionsOpen, setIsHomeSectionsOpen] = useState(false);
  const homeSectionsTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const settingsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);

  const isHomePage = pathname === '/home';
  const isPortfolioPage = pathname.startsWith('/projetos') || pathname === '/cursos';
  const isAboutMePage = pathname === '/skills' || pathname === '/jornada' || pathname === '/depoimentos';

  const allHomeSections = [HOME_MAIN, ...HOME_SECTIONS];

  useEffect(() => {
    if (!isHomePage) return;

    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const sections = allHomeSections.map(link =>
          document.getElementById(link.id),
        );
        const scrollPosition = window.scrollY + window.innerHeight / 3;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(allHomeSections[i].id);
            break;
          }
        }
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const handleHomeSectionsEnter = () => {
    if (homeSectionsTimeout.current) {
      clearTimeout(homeSectionsTimeout.current);
      homeSectionsTimeout.current = null;
    }
    setIsHomeSectionsOpen(true);
  };

  const handleHomeSectionsLeave = () => {
    homeSectionsTimeout.current = setTimeout(() => {
      setIsHomeSectionsOpen(false);
    }, 200);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        settingsRef.current &&
        !settingsRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
      if (
        projectsRef.current &&
        !projectsRef.current.contains(event.target as Node)
      ) {
        setIsProjectsOpen(false);
      }
      if (
        aboutMeRef.current &&
        !aboutMeRef.current.contains(event.target as Node)
      ) {
        setIsAboutMeOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleScrollNav = (id: string) => {
    if (!isHomePage) {
      router.push('/home');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(id);
      }
    }
  };

  const handleProjectNav = (path: string) => {
    router.push(path);
    setIsProjectsOpen(false);
  };

  return (
    <>
      <MotionNavbarContainer
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.4, ease: 'easeOut' }}
        >
          <NavLogo onClick={() => handleScrollNav('home')}>
            <NavLogoMark>
              <img src="/logo.png" alt="A" width={30} height={30} style={{ objectFit: 'contain' }} />
            </NavLogoMark>
          </NavLogo>
        </motion.div>

        <Nav>
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.35, ease: 'easeOut' }}
          >
            <HomeSectionsWrapper
              onMouseEnter={handleHomeSectionsEnter}
              onMouseLeave={handleHomeSectionsLeave}
            >
              <NavLink
                $selected={isHomePage && activeSection === 'home'}
                onClick={() => handleScrollNav('home')}
              >
                {t(HOME_MAIN.key)}
                {isHomePage && activeSection === 'home' && (
                  <motion.span
                    layoutId="navbar-indicator"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '9999px',
                      background: 'rgba(26, 26, 26, 0.06)',
                      zIndex: -1,
                    }}
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </NavLink>

              <AnimatePresence>
                {isHomeSectionsOpen && (
                  <div
                    style={{
                      position: 'absolute',
                      left: '100%',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      zIndex: 10,
                    }}
                  >
                    <motion.div
                      key="home-sections-panel"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      {HOME_SECTIONS.map(({ key, id }, i) => (
                        <motion.div
                          key={id}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.25,
                            delay: i * 0.05,
                            ease: [0.25, 0.1, 0.25, 1],
                          }}
                        >
                          <HomeSectionLink
                            $selected={isHomePage && activeSection === id}
                            onClick={() => handleScrollNav(id)}
                          >
                            {t(key as Parameters<typeof t>[0])}
                          </HomeSectionLink>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </HomeSectionsWrapper>
          </motion.div>

          <motion.div
            animate={{
              opacity: isHomeSectionsOpen ? 0 : 1,
              pointerEvents: isHomeSectionsOpen ? 'none' as const : 'auto' as const,
            }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
          >
            <SettingsWrapper ref={projectsRef}>
              <NavLink
                $selected={isPortfolioPage}
                onClick={() => setIsProjectsOpen(prev => !prev)}
                style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                {t('nav.portfolio' as Parameters<typeof t>[0])}
                <FiChevronDown size={14} />
                {isPortfolioPage && (
                  <motion.span
                    layoutId="navbar-indicator"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '9999px',
                      background: 'rgba(26, 26, 26, 0.06)',
                      zIndex: -1,
                    }}
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </NavLink>

              <AnimatePresence>
                {isProjectsOpen && (
                  <ProjectsDropdown
                    initial={{ opacity: 0, y: 6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <ProjectsDropdownArrow />

                    <motion.div
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0, duration: 0.2, ease: 'easeOut' }}
                    >
                      <PortfolioItemWrapper>
                        <ProjectsDropdownItem
                          $active={pathname.startsWith('/projetos')}
                          as="div"
                          style={{ cursor: 'pointer' }}
                        >
                          <ProjectsDropdownIcon $active={pathname.startsWith('/projetos')}>
                            <FiBriefcase size={18} />
                          </ProjectsDropdownIcon>
                          <ProjectsDropdownText>
                            <ProjectsDropdownName>{t('nav.projects')}</ProjectsDropdownName>
                          </ProjectsDropdownText>
                          <FiChevronDown
                            size={12}
                            style={{ transform: 'rotate(-90deg)', opacity: 0.5, marginLeft: 'auto' }}
                          />
                        </ProjectsDropdownItem>

                        <PortfolioSubmenu>
                          {PROJECT_CATEGORIES.map(({ key, path, icon: Icon, descKey }) => (
                            <ProjectsDropdownItem
                              key={path}
                              $active={pathname === path}
                              onClick={() => handleProjectNav(path)}
                            >
                              <ProjectsDropdownIcon $active={pathname === path}>
                                <Icon size={18} />
                              </ProjectsDropdownIcon>
                              <ProjectsDropdownText>
                                <ProjectsDropdownName>{t(key)}</ProjectsDropdownName>
                                <ProjectsDropdownDesc>{t(descKey)}</ProjectsDropdownDesc>
                              </ProjectsDropdownText>
                            </ProjectsDropdownItem>
                          ))}
                        </PortfolioSubmenu>
                      </PortfolioItemWrapper>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04, duration: 0.2, ease: 'easeOut' }}
                    >
                      <ProjectsDropdownItem
                        $active={pathname === '/cursos'}
                        onClick={() => {
                          router.push('/cursos');
                          setIsProjectsOpen(false);
                        }}
                      >
                        <ProjectsDropdownIcon $active={pathname === '/cursos'}>
                          <FiAward size={18} />
                        </ProjectsDropdownIcon>
                        <ProjectsDropdownText>
                          <ProjectsDropdownName>{t('nav.courses')}</ProjectsDropdownName>
                        </ProjectsDropdownText>
                      </ProjectsDropdownItem>
                    </motion.div>
                  </ProjectsDropdown>
                )}
              </AnimatePresence>
            </SettingsWrapper>

            <SettingsWrapper ref={aboutMeRef}>
              <NavLink
                $selected={isAboutMePage}
                onClick={() => setIsAboutMeOpen(prev => !prev)}
                style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                {t('nav.aboutme' as Parameters<typeof t>[0])}
                <FiChevronDown size={14} />
                {isAboutMePage && (
                  <motion.span
                    layoutId="navbar-indicator"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '9999px',
                      background: 'rgba(26, 26, 26, 0.06)',
                      zIndex: -1,
                    }}
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </NavLink>

              <AnimatePresence>
                {isAboutMeOpen && (
                  <ProjectsDropdown
                    initial={{ opacity: 0, y: 6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <ProjectsDropdownArrow />

                    <motion.div
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0, duration: 0.2, ease: 'easeOut' }}
                    >
                      <ProjectsDropdownItem
                        $active={pathname === '/skills'}
                        onClick={() => {
                          router.push('/skills');
                          setIsAboutMeOpen(false);
                        }}
                      >
                        <ProjectsDropdownIcon $active={pathname === '/skills'}>
                          <FiLayers size={18} />
                        </ProjectsDropdownIcon>
                        <ProjectsDropdownText>
                          <ProjectsDropdownName>{t('nav.skills' as Parameters<typeof t>[0])}</ProjectsDropdownName>
                        </ProjectsDropdownText>
                      </ProjectsDropdownItem>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04, duration: 0.2, ease: 'easeOut' }}
                    >
                      <ProjectsDropdownItem
                        $active={pathname === '/jornada'}
                        onClick={() => {
                          router.push('/jornada');
                          setIsAboutMeOpen(false);
                        }}
                      >
                        <ProjectsDropdownIcon $active={pathname === '/jornada'}>
                          <FiMapPin size={18} />
                        </ProjectsDropdownIcon>
                        <ProjectsDropdownText>
                          <ProjectsDropdownName>{t('nav.timeline' as Parameters<typeof t>[0])}</ProjectsDropdownName>
                        </ProjectsDropdownText>
                      </ProjectsDropdownItem>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08, duration: 0.2, ease: 'easeOut' }}
                    >
                      <ProjectsDropdownItem
                        $active={pathname === '/depoimentos'}
                        onClick={() => {
                          router.push('/depoimentos');
                          setIsAboutMeOpen(false);
                        }}
                      >
                        <ProjectsDropdownIcon $active={pathname === '/depoimentos'}>
                          <FiMessageSquare size={18} />
                        </ProjectsDropdownIcon>
                        <ProjectsDropdownText>
                          <ProjectsDropdownName>{t('nav.testimonials' as Parameters<typeof t>[0])}</ProjectsDropdownName>
                        </ProjectsDropdownText>
                      </ProjectsDropdownItem>
                    </motion.div>
                  </ProjectsDropdown>
                )}
              </AnimatePresence>
            </SettingsWrapper>

            <NavLink
              $selected={pathname === '/cases'}
              onClick={() => router.push('/cases')}
            >
              {t('nav.cases' as Parameters<typeof t>[0])}
              {pathname === '/cases' && (
                <motion.span
                  layoutId="navbar-indicator"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '9999px',
                    background: 'rgba(26, 26, 26, 0.06)',
                    zIndex: -1,
                  }}
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </NavLink>
          </motion.div>
        </Nav>

        <motion.div
          style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
        >
          <FlagImg
            src={LANGUAGES.find(l => l.code === language)?.flag ?? ''}
            alt={language}
            style={{ width: 18, height: 14, borderRadius: 2, objectFit: 'cover', opacity: 0.85 }}
          />
          <SettingsWrapper ref={settingsRef}>
            <SettingsButton onClick={() => setIsMenuOpen(prev => !prev)}>
              <FiSettings size={18} />
            </SettingsButton>

            <AnimatePresence>
              {isMenuOpen && (
                <SettingsDropdown
                  initial={{ opacity: 0, y: 6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.97 }}
                  transition={{ duration: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <SettingsDropdownArrow />

                  <motion.div
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0, duration: 0.2, ease: 'easeOut' }}
                  >
                    <SettingsItem onClick={toggleTheme}>
                      <SettingsItemIcon>
                        {themeMode === 'light' ? (
                          <FiMoon size={16} />
                        ) : (
                          <FiSun size={16} />
                        )}
                      </SettingsItemIcon>
                      <DropdownLabel>{t('settings.theme')}</DropdownLabel>
                      <DropdownValue>
                        {themeMode === 'light'
                          ? t('settings.theme.light.short' as any)
                          : t('settings.theme.dark.short' as any)}
                      </DropdownValue>
                    </SettingsItem>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04, duration: 0.2, ease: 'easeOut' }}
                  >
                    <LanguageItemWrapper>
                      <SettingsItem as="div">
                        <SettingsItemIcon>
                          <FiGlobe size={16} />
                        </SettingsItemIcon>
                        <DropdownLabel>{t('settings.language')}</DropdownLabel>
                        <FiChevronDown
                          size={12}
                          style={{ transform: 'rotate(-90deg)', opacity: 0.5 }}
                        />
                      </SettingsItem>

                      <LanguageSubmenu>
                        {LANGUAGES.map(lang => (
                          <LanguageOption
                            key={lang.code}
                            $active={language === lang.code}
                            onClick={() => {
                              setLang(lang.code);
                              setIsMenuOpen(false);
                            }}
                          >
                            <FlagImg src={lang.flag} alt={lang.label} />
                            <span>{lang.label}</span>
                          </LanguageOption>
                        ))}
                      </LanguageSubmenu>
                    </LanguageItemWrapper>
                  </motion.div>

                  <DropdownDivider />

                  <motion.div
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08, duration: 0.2, ease: 'easeOut' }}
                  >
                    <SettingsItem
                      onClick={() => {
                        router.push('/configuracoes');
                        setIsMenuOpen(false);
                      }}
                    >
                      <SettingsItemIcon>
                        <FiSliders size={16} />
                      </SettingsItemIcon>
                      <DropdownLabel>{t('nav.settings')}</DropdownLabel>
                    </SettingsItem>
                  </motion.div>

                  <DropdownDivider />

                  <motion.div
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.12, duration: 0.2, ease: 'easeOut' }}
                  >
                    <DropdownVersion>
                      <span>{CURRENT_VERSION}</span>
                      <VersionBadge>{CURRENT_LABEL}</VersionBadge>
                    </DropdownVersion>
                  </motion.div>
                </SettingsDropdown>
              )}
            </AnimatePresence>
          </SettingsWrapper>

          <NavCta
            onClick={() => router.push('/contato')}
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
          >
            {t('nav.cta')}
          </NavCta>

          <HamburgerButton onClick={() => setIsMobileOpen(true)}>
            <FiMenu size={20} />
          </HamburgerButton>
        </motion.div>
      </MotionNavbarContainer>

      <AnimatePresence>
        {isMobileOpen && (
          <>
            <MobileOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMobileOpen(false)}
            />
            <MobileDrawer
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            >
              <AmbientGlow $color="#48cae4" $top="-15%" $left="-25%" $size="350px" />
              <AmbientGlow $color="#fb6f92" $top="45%" $left="45%" $size="400px" />

              <MobileDrawerContent>
                <MobileDrawerHeader>
                  <NavLogoMark>
                    <img src="/logo.png" alt="A" width={30} height={30} style={{ objectFit: 'contain' }} />
                  </NavLogoMark>
                  <MobileDrawerClose onClick={() => setIsMobileOpen(false)}>
                    <FiX size={20} />
                  </MobileDrawerClose>
                </MobileDrawerHeader>

                <motion.div
                  variants={mobileContainerVariants}
                  initial="hidden"
                  animate="visible"
                  style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
                >
                  <motion.div variants={mobileItemVariants}>
                    <MobileNavLink>
                      <MobileNavLinkText
                        $active={isHomePage}
                        onClick={() => setIsMobileHomeOpen(prev => !prev)}
                      >
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                          {t('nav.home')}
                        </span>
                        <FiChevronDown
                          size={20}
                          style={{
                            transform: isMobileHomeOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s ease',
                            opacity: 0.6,
                          }}
                        />
                      </MobileNavLinkText>
                    </MobileNavLink>

                    <AnimatePresence>
                      {isMobileHomeOpen && (
                        <MobileSubmenuContainer
                          initial={{ height: 0, opacity: 0, overflow: 'hidden' }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {allHomeSections.map(link => (
                            <MobileSubmenuLink
                              key={link.id}
                              $active={isHomePage && activeSection === link.id}
                              onClick={() => {
                                handleScrollNav(link.id);
                                setIsMobileOpen(false);
                              }}
                            >
                              {link.id === 'home' ? <FiHome size={16} /> : <FiInfo size={16} />}
                              {t(link.key as Parameters<typeof t>[0])}
                            </MobileSubmenuLink>
                          ))}
                        </MobileSubmenuContainer>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  <motion.div variants={mobileItemVariants}>
                    <MobileNavLink>
                      <MobileNavLinkText
                        $active={isPortfolioPage}
                        onClick={() => setIsMobileProjectsSubOpen(prev => !prev)}
                      >
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                          {t('nav.portfolio')}
                        </span>
                        <FiChevronDown
                          size={20}
                          style={{
                            transform: isMobileProjectsSubOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s ease',
                            opacity: 0.6,
                          }}
                        />
                      </MobileNavLinkText>
                    </MobileNavLink>

                    <AnimatePresence>
                      {isMobileProjectsSubOpen && (
                        <MobileSubmenuContainer
                          initial={{ height: 0, opacity: 0, overflow: 'hidden' }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {PROJECT_CATEGORIES.map(cat => (
                            <MobileSubmenuLink
                              key={cat.path}
                              $active={pathname === cat.path}
                              onClick={() => {
                                router.push(cat.path);
                                setIsMobileOpen(false);
                              }}
                            >
                              <cat.icon size={16} />
                              {t(cat.key)}
                            </MobileSubmenuLink>
                          ))}
                          <MobileSubmenuLink
                            $active={pathname === '/cursos'}
                            onClick={() => {
                              router.push('/cursos');
                              setIsMobileOpen(false);
                            }}
                          >
                            <FiAward size={16} />
                            {t('nav.courses')}
                          </MobileSubmenuLink>
                        </MobileSubmenuContainer>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  <motion.div variants={mobileItemVariants}>
                    <MobileNavLink>
                      <MobileNavLinkText
                        $active={isAboutMePage}
                        onClick={() => setIsMobileAboutSubOpen(prev => !prev)}
                      >
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                          {t('nav.aboutme')}
                        </span>
                        <FiChevronDown
                          size={20}
                          style={{
                            transform: isMobileAboutSubOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s ease',
                            opacity: 0.6,
                          }}
                        />
                      </MobileNavLinkText>
                    </MobileNavLink>

                    <AnimatePresence>
                      {isMobileAboutSubOpen && (
                        <MobileSubmenuContainer
                          initial={{ height: 0, opacity: 0, overflow: 'hidden' }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <MobileSubmenuLink
                            $active={pathname === '/skills'}
                            onClick={() => {
                              router.push('/skills');
                              setIsMobileOpen(false);
                            }}
                          >
                            <FiLayers size={16} />
                            {t('nav.skills' as Parameters<typeof t>[0])}
                          </MobileSubmenuLink>
                          <MobileSubmenuLink
                            $active={pathname === '/jornada'}
                            onClick={() => {
                              router.push('/jornada');
                              setIsMobileOpen(false);
                            }}
                          >
                            <FiMapPin size={16} />
                            {t('nav.timeline' as Parameters<typeof t>[0])}
                          </MobileSubmenuLink>
                          <MobileSubmenuLink
                            $active={pathname === '/depoimentos'}
                            onClick={() => {
                              router.push('/depoimentos');
                              setIsMobileOpen(false);
                            }}
                          >
                            <FiMessageSquare size={16} />
                            {t('nav.testimonials' as Parameters<typeof t>[0])}
                          </MobileSubmenuLink>
                        </MobileSubmenuContainer>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  <motion.div variants={mobileItemVariants}>
                    <MobileNavLink>
                      <MobileNavLinkText
                        $active={pathname === '/cases'}
                        onClick={() => {
                          router.push('/cases');
                          setIsMobileOpen(false);
                        }}
                      >
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                          {t('nav.cases' as Parameters<typeof t>[0])}
                        </span>
                      </MobileNavLinkText>
                    </MobileNavLink>
                  </motion.div>

                  <motion.div variants={mobileItemVariants}>
                    <MobileNavLink>
                      <MobileNavLinkText
                        $active={pathname === '/contato'}
                        onClick={() => {
                          router.push('/contato');
                          setIsMobileOpen(false);
                        }}
                      >
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                          {t('contact.tag' as Parameters<typeof t>[0])}
                        </span>
                      </MobileNavLinkText>
                    </MobileNavLink>
                  </motion.div>
                </motion.div>

                <MobileDrawerDivider />

                <MobileControlCenter>
                  <MobileControlRow>
                    <ThemeToggleRow onClick={toggleTheme}>
                      <ThemeToggleLabel>
                        {themeMode === 'light' ? <FiSun size={18} /> : <FiMoon size={18} />}
                      </ThemeToggleLabel>
                      <Switch active={themeMode === 'dark'} />
                    </ThemeToggleRow>

                    <MobileControlCard
                      $interactive
                      onClick={() => setIsMobileLangOpen(true)}
                      style={{ justifyContent: 'center' }}
                    >
                      <MobileControlCardLabel style={{ gap: 0 }}>
                        <FiGlobe size={18} />
                      </MobileControlCardLabel>
                    </MobileControlCard>

                    <MobileControlCard
                      $interactive
                      onClick={() => {
                        router.push('/configuracoes');
                        setIsMobileOpen(false);
                      }}
                      style={{ justifyContent: 'center' }}
                    >
                      <MobileControlCardLabel style={{ gap: 0 }}>
                        <FiSliders size={18} />
                      </MobileControlCardLabel>
                    </MobileControlCard>
                  </MobileControlRow>
                </MobileControlCenter>

                <AnimatePresence>
                  {isMobileLangOpen && (
                    <>
                      <MobileLanguageModalOverlay
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setIsMobileLangOpen(false)}
                      />
                      <MobileLanguageModal
                        initial={{ opacity: 0, scale: 0.9, x: '-50%', y: '-50%' }}
                        animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
                        exit={{ opacity: 0, scale: 0.9, x: '-50%', y: '-50%' }}
                        transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                      >
                        <MobileLanguageModalTitle>{t('settings.language')}</MobileLanguageModalTitle>
                        {LANGUAGES.map(lang => (
                          <MobileSubmenuLink
                            key={lang.code}
                            $active={language === lang.code}
                            onClick={() => {
                              setLang(lang.code);
                              setIsMobileLangOpen(false);
                            }}
                          >
                            <FlagImg src={lang.flag} alt={lang.label} />
                            {lang.label}
                          </MobileSubmenuLink>
                        ))}
                      </MobileLanguageModal>
                    </>
                  )}
                </AnimatePresence>
              </MobileDrawerContent>

              <MobileVersionWrapper>
                <span>{CURRENT_VERSION}</span>
                <VersionBadge>{CURRENT_LABEL}</VersionBadge>
              </MobileVersionWrapper>
            </MobileDrawer>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
