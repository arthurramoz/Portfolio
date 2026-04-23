'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useRouter, usePathname } from 'next/navigation';
import { FiSettings, FiMoon, FiSun, FiGlobe, FiChevronDown } from 'react-icons/fi';
import { useAppTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { CURRENT_VERSION, CURRENT_LABEL } from '@/config/versions';
import {
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
  DropdownValue,
  DropdownVersion,
  FlagImg,
  Nav,
  NavbarContainer,
  NavCta,
  NavLink,
  NavLogo,
  NavLogoImg,
  NavLogoText,
  SettingsButton,
  SettingsWrapper,
  VersionBadge,
} from './styles';

const SCROLL_LINKS = [
  { key: 'nav.home' as const, id: 'home' },
  { key: 'nav.about' as const, id: 'sobre-mim' },
];

const PROJECT_CATEGORIES = [
  { key: 'projects.personal' as const, path: '/projetos/pessoais' },
  { key: 'projects.company' as const, path: '/projetos/empresa' },
  { key: 'projects.university' as const, path: '/projetos/faculdade' },
];

const MotionNavbarContainer = motion.create(NavbarContainer);

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { themeMode, toggleTheme } = useAppTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const settingsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const isHomePage = pathname === '/home';
  const isProjectsPage = pathname.startsWith('/projetos');

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const sections = SCROLL_LINKS.map(link => document.getElementById(link.id));
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
          <NavLogoImg src="/logo.svg" alt="logo" />
          <NavLogoText>Arthur's Portfolio</NavLogoText>
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
                <DropdownMenu
                  initial={{ opacity: 0, y: -8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.96 }}
                  transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {PROJECT_CATEGORIES.map(({ key, path }) => (
                    <DropdownItem
                      key={path}
                      onClick={() => handleProjectNav(path)}
                      style={{
                        fontWeight: pathname === path ? 600 : 500,
                        color: pathname === path ? undefined : undefined,
                      }}
                    >
                      <DropdownLabel>{t(key)}</DropdownLabel>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              )}
            </AnimatePresence>
          </SettingsWrapper>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.41, duration: 0.35, ease: 'easeOut' }}
        >
          <NavLink $selected={false}>
            {t('nav.courses')}
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
              <DropdownMenu
                initial={{ opacity: 0, y: -8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.96 }}
                transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <DropdownItem onClick={toggleTheme}>
                  {themeMode === 'light' ? (
                    <FiMoon size={16} />
                  ) : (
                    <FiSun size={16} />
                  )}
                  <DropdownLabel>{t('settings.theme')}</DropdownLabel>
                  <DropdownValue>
                    {themeMode === 'light'
                      ? t('settings.theme.light')
                      : t('settings.theme.dark')}
                  </DropdownValue>
                </DropdownItem>

                <DropdownItem onClick={toggleLanguage}>
                  <FiGlobe size={16} />
                  <DropdownLabel>{t('settings.language')}</DropdownLabel>
                  <FlagImg
                    src={
                      language === 'pt'
                        ? 'https://flagcdn.com/w40/br.png'
                        : 'https://flagcdn.com/w40/us.png'
                    }
                    alt={language === 'pt' ? 'Português' : 'English'}
                  />
                </DropdownItem>

                <DropdownDivider />

                <DropdownVersion>
                  <span>{CURRENT_VERSION}</span>
                  <VersionBadge>{CURRENT_LABEL}</VersionBadge>
                </DropdownVersion>
              </DropdownMenu>
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
      </motion.div>
    </MotionNavbarContainer>
  );
};

export default Navbar;
