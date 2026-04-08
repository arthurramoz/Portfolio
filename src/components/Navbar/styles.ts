import Link from 'next/link';
import { motion } from 'motion/react';
import styled from 'styled-components';

export const NavbarContainer = styled.header`
  position: fixed;
  top: 1.5rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 1000;

  width: calc(100% - 4rem);
  max-width: ${({ theme }) => theme.max};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.75rem 1.25rem;
  border-radius: 9999px;

  background: ${({ theme }) => theme.colors.navbarBg};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid ${({ theme }) => theme.colors.navbarBorder};
  box-shadow: 0 4px 32px ${({ theme }) => theme.colors.navbarShadow};

  transition: background 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.navbarBgHover};
    box-shadow: 0 8px 40px ${({ theme }) => theme.colors.navbarShadowHover};
  }
`;

export const NavLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

export const NavLogoImg = styled.img`
  height: 40px;
  width: 40px;
  object-fit: contain;
`;

export const NavLogoText = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.navbarLogoText};
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

interface NavLinkProps {
  $selected?: boolean;
}

export const NavLink = styled.p<NavLinkProps>`
  position: relative;
  padding: 1rem 1.1rem;
  border-radius: 9999px;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ $selected, theme }) =>
    $selected
      ? theme.colors.navbarLinkActive
      : theme.colors.navbarLinkInactive};
  background: ${({ $selected, theme }) =>
    $selected ? theme.colors.navbarLinkBgActive : 'transparent'};
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.navbarLinkActive};
    background: ${({ theme }) => theme.colors.navbarLinkBgHover};
  }
`;

export const NavCta = styled(motion.button)`
  padding: 0.7rem 1.4rem;
  border-radius: 9999px;
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.navbarCtaText};
  background: ${({ theme }) => theme.colors.navbarCtaBg};
  border: none;
  cursor: pointer;
  white-space: nowrap;
  box-shadow: 0 2px 12px ${({ theme }) => theme.colors.navbarShadow};
`;

