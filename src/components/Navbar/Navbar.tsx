'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { usePathname } from 'next/navigation';
import { FiSettings, FiMoon, FiSun, FiGlobe } from 'react-icons/fi';
import { useAppTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
  DropdownValue,
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
} from './styles';

const NAV_LINKS = [
  { key: 'nav.home' as const, link: '/home' },
  { key: 'nav.about' as const, link: '/sobre-mim' },
  { key: 'nav.projects' as const, link: '/projetos' },
  { key: 'nav.courses' as const, link: '/cursos' },
];

const MotionNavbarContainer = motion.create(NavbarContainer);

const Navbar = () => {
  const pathname = usePathname();
  const { themeMode, toggleTheme } = useAppTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <NavLogo>
          <NavLogoImg src="/logo.svg" alt="logo" />
          <NavLogoText>Arthur's Portfolio</NavLogoText>
        </NavLogo>
      </motion.div>

      <Nav>
        {NAV_LINKS.map(({ key, link }, i) => (
          <motion.div
            key={link}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.07, duration: 0.35, ease: 'easeOut' }}
          >
            <NavLink $selected={pathname.startsWith(link)}>
              {t(key)}
              <AnimatePresence>
                {pathname.startsWith(link) && (
                  <motion.span
                    layoutId="navbar-indicator"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '9999px',
                      background: 'rgba(26, 26, 26, 0.06)',
                      zIndex: -1,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  />
                )}
              </AnimatePresence>
            </NavLink>
          </motion.div>
        ))}
      </Nav>

      <motion.div
        style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
      >
        <SettingsWrapper
          onMouseEnter={() => setIsMenuOpen(true)}
          onMouseLeave={() => setIsMenuOpen(false)}
        >
          <SettingsButton>
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
                  {themeMode === 'light' ? <FiMoon size={16} /> : <FiSun size={16} />}
                  <DropdownLabel>{t('settings.theme')}</DropdownLabel>
                  <DropdownValue>
                    {themeMode === 'light' ? t('settings.theme.light') : t('settings.theme.dark')}
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
