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
  MobileDrawerLink,
  MobileDrawerContent,
  MobileLanguageHeader,
  MobileLanguageList,
  MobileOverlay,
  Nav,
  NavbarContainer,
  NavCta,
  NavLink,
  NavLogo,
  NavLogoMark,
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
  ThemeSwitch,
  ThemeSwitchKnob,
  ThemeSwitchStar,
  ThemeToggleLabel,
  ThemeToggleRow,
  VersionBadge,
} from './styles';

const SCROLL_LINKS = [
  { key: 'nav.home' as const, id: 'home' },
  { key: 'nav.about' as const, id: 'sobre-mim' },
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

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { themeMode, toggleTheme } = useAppTheme();
  const { language, setLanguage: setLang, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileLangOpen, setIsMobileLangOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const settingsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const isHomePage = pathname === '/home';
  const isProjectsPage = pathname.startsWith('/projetos');

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const sections = SCROLL_LINKS.map(link =>
        document.getElementById(link.id),
      );
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(SCROLL_LINKS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

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
            <svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="logo-grad"
                  x1="0"
                  y1="0"
                  x2="38"
                  y2="38"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#48cae4" />
                  <stop offset="100%" stopColor="#fb6f92" />
                </linearGradient>
              </defs>
              <text
                x="50%"
                y="50%"
                dominantBaseline="central"
                textAnchor="middle"
                fontFamily="'Inter', 'Segoe UI', sans-serif"
                fontSize="18"
                fontWeight="800"
                letterSpacing="-0.5"
                fill="url(#logo-grad)"
              >
                AR
              </text>
            </svg>
          </NavLogoMark>
        </NavLogo>
      </motion.div>

      <Nav>
        {SCROLL_LINKS.map(({ key, id }, i) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2 + i * 0.07,
              duration: 0.35,
              ease: 'easeOut',
            }}
          >
            <NavLink
              $selected={isHomePage && activeSection === id}
              onClick={() => handleScrollNav(id)}
            >
              {t(key)}
              {isHomePage && activeSection === id && (
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
        ))}

        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.34, duration: 0.35, ease: 'easeOut' }}
        >
          <SettingsWrapper ref={projectsRef}>
            <NavLink
              $selected={isProjectsPage}
              onClick={() => setIsProjectsOpen(prev => !prev)}
              style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              {t('nav.projects')}
              <FiChevronDown size={14} />
              {isProjectsPage && (
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
                  {PROJECT_CATEGORIES.map(({ key, path, icon: Icon, descKey }, i) => (
                    <motion.div
                      key={path}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.2, ease: 'easeOut' }}
                    >
                      <ProjectsDropdownItem
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
                    </motion.div>
                  ))}
                </ProjectsDropdown>
              )}
            </AnimatePresence>
          </SettingsWrapper>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.41, duration: 0.35, ease: 'easeOut' }}
        >
          <NavLink
            $selected={pathname === '/cursos'}
            onClick={() => router.push('/cursos')}
          >
            {t('nav.courses')}
            {pathname === '/cursos' && (
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

        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.46, duration: 0.35, ease: 'easeOut' }}
        >
          <NavLink
            $selected={pathname === '/jornada'}
            onClick={() => router.push('/jornada')}
          >
            {t('nav.timeline' as Parameters<typeof t>[0])}
            {pathname === '/jornada' && (
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
            transition={{ duration: 0.2 }}
            onClick={() => setIsMobileOpen(false)}
          />
          <MobileDrawer
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <MobileDrawerContent>
            <MobileDrawerHeader>
              <NavLogoMark>
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="mob-grad"
                      x1="0"
                      y1="0"
                      x2="38"
                      y2="38"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#48cae4" />
                      <stop offset="100%" stopColor="#fb6f92" />
                    </linearGradient>
                  </defs>
                  <text
                    x="50%"
                    y="50%"
                    dominantBaseline="central"
                    textAnchor="middle"
                    fontFamily="'Inter', 'Segoe UI', sans-serif"
                    fontSize="18"
                    fontWeight="800"
                    letterSpacing="-0.5"
                    fill="url(#mob-grad)"
                  >
                    AR
                  </text>
                </svg>
              </NavLogoMark>
              <MobileDrawerClose onClick={() => setIsMobileOpen(false)}>
                <FiX size={18} />
              </MobileDrawerClose>
            </MobileDrawerHeader>

            {SCROLL_LINKS.map(link => (
              <MobileDrawerLink
                key={link.id}
                $active={isHomePage && activeSection === link.id}
                onClick={() => {
                  handleScrollNav(link.id);
                  setIsMobileOpen(false);
                }}
              >
                {link.id === 'home' ? <FiHome size={18} /> : <FiInfo size={18} />}
                {t(link.key)}
              </MobileDrawerLink>
            ))}

            <MobileDrawerDivider />

            {PROJECT_CATEGORIES.map(cat => (
              <MobileDrawerLink
                key={cat.path}
                $active={pathname === cat.path}
                onClick={() => {
                  router.push(cat.path);
                  setIsMobileOpen(false);
                }}
              >
                <cat.icon size={18} />
                {t(cat.key)}
              </MobileDrawerLink>
            ))}

            <MobileDrawerLink
              $active={pathname === '/cursos'}
              onClick={() => {
                router.push('/cursos');
                setIsMobileOpen(false);
              }}
            >
              <FiAward size={18} />
              {t('nav.courses')}
            </MobileDrawerLink>

            <MobileDrawerLink
              $active={pathname === '/jornada'}
              onClick={() => {
                router.push('/jornada');
                setIsMobileOpen(false);
              }}
            >
              <FiMapPin size={18} />
              {t('nav.timeline' as Parameters<typeof t>[0])}
            </MobileDrawerLink>

            <MobileDrawerDivider />

            <ThemeToggleRow onClick={toggleTheme}>
              <ThemeToggleLabel>
                {themeMode === 'light' ? <FiSun size={18} /> : <FiMoon size={18} />}
                {t('settings.theme')}
              </ThemeToggleLabel>
              <ThemeSwitch $active={themeMode === 'dark'}>
                <ThemeSwitchStar $active={themeMode === 'dark'} />
                <ThemeSwitchKnob $active={themeMode === 'dark'}>
                  {themeMode === 'dark' ? (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="#c9d6df" stroke="#a0b0c0" strokeWidth="1" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="5" fill="#fff" />
                      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  )}
                </ThemeSwitchKnob>
              </ThemeSwitch>
            </ThemeToggleRow>

            <MobileLanguageHeader onClick={() => setIsMobileLangOpen(prev => !prev)}>
              <FiGlobe size={18} />
              {t('settings.language')}
              <FiChevronDown
                size={14}
                style={{
                  transform: isMobileLangOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </MobileLanguageHeader>

            <AnimatePresence>
              {isMobileLangOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0, overflow: 'hidden' }}
                  animate={{ height: 'auto', opacity: 1, transitionEnd: { overflow: 'visible' } }}
                  exit={{ height: 0, opacity: 0, overflow: 'hidden' }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                >
                  <MobileLanguageList>
                    {LANGUAGES.map(lang => (
                      <MobileDrawerLink
                        key={lang.code}
                        $active={language === lang.code}
                        onClick={() => {
                          setLang(lang.code);
                          setIsMobileOpen(false);
                        }}
                      >
                        <FlagImg src={lang.flag} alt={lang.label} />
                        {lang.label}
                      </MobileDrawerLink>
                    ))}
                  </MobileLanguageList>
                </motion.div>
              )}
            </AnimatePresence>

            <MobileDrawerDivider />

            <MobileDrawerLink
              $active={pathname === '/configuracoes'}
              onClick={() => {
                router.push('/configuracoes');
                setIsMobileOpen(false);
              }}
            >
              <FiSliders size={18} />
              {t('nav.settings')}
            </MobileDrawerLink>

            <MobileDrawerDivider />

            <DropdownVersion>
              <span>{CURRENT_VERSION}</span>
              <VersionBadge>{CURRENT_LABEL}</VersionBadge>
            </DropdownVersion>
            </MobileDrawerContent>
          </MobileDrawer>
        </>
      )}
    </AnimatePresence>
    </>
  );
};

export default Navbar;
