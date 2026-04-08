'use client';

import { motion, AnimatePresence } from 'motion/react';
import { usePathname } from 'next/navigation';
import {
  Nav,
  NavbarContainer,
  NavCta,
  NavLink,
  NavLogo,
  NavLogoImg,
  NavLogoText,
} from './styles';

const NAV_LINKS = [
  { label: 'Início', link: '/home' },
  { label: 'Sobre mim', link: '/sobre-mim' },
  { label: 'Projetos', link: '/projetos' },
  { label: 'Cursos', link: '/cursos' },
];

const MotionNavbarContainer = motion.create(NavbarContainer);

const Navbar = () => {
  const pathname = usePathname();

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
        {NAV_LINKS.map(({ label, link }, i) => (
          <motion.div
            key={link}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.07, duration: 0.35, ease: 'easeOut' }}
          >
            <NavLink $selected={pathname.startsWith(link)}>
              {label}
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
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
      >
        <NavCta
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.15 }}
        >
          Contato
        </NavCta>
      </motion.div>
    </MotionNavbarContainer>
  );
};

export default Navbar;
