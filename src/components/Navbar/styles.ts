import Link from 'next/link';
import { motion } from 'motion/react';
import styled from 'styled-components';

export const NavbarContainer = styled.header`
  position: fixed;
  top: 24px;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 1000;

  width: calc(100% - 4rem);
  max-width: ${({ theme }) => theme.max};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 12px 20px;
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
  gap: 8px;
  cursor: pointer;
`;

export const NavLogoImg = styled.img`
  height: 40px;
  width: 40px;
  object-fit: contain;
`;

export const NavLogoText = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.navbarLogoText};
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 4px;
`;

interface NavLinkProps {
  $selected?: boolean;
}

export const NavLink = styled.p<NavLinkProps>`
  position: relative;
  padding: 16px 18px;
  border-radius: 9999px;
  font-size: 18px;
  font-weight: 600;
  color: ${({ $selected, theme }) =>
    $selected
      ? theme.colors.navbarLinkActive
      : theme.colors.navbarLinkInactive};
  transition: color 0.2s ease;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.navbarLinkActive};
  }
`;

export const NavCta = styled(motion.button)`
  padding: 11px 22px;
  border-radius: 9999px;
  font-size: 19px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.navbarCtaText};
  background: ${({ theme }) => theme.colors.navbarCtaBg};
  border: none;
  cursor: pointer;
  white-space: nowrap;
  box-shadow: 0 2px 12px ${({ theme }) => theme.colors.navbarShadow};
`;

export const SettingsWrapper = styled.div`
  position: relative;
`;

export const SettingsButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.navbarBorder};
  background: transparent;
  color: ${({ theme }) => theme.colors.navbarLinkInactive};
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.navbarLinkActive};
    background: ${({ theme }) => theme.colors.navbarLinkBgHover};
  }
`;

export const DropdownMenu = styled(motion.div)`
  position: absolute;
  top: calc(100% + 12px);
  right: 0;
  min-width: 200px;
  padding: 8px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.navbarBg};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.colors.navbarBorder};
  box-shadow: 0 8px 32px ${({ theme }) => theme.colors.navbarShadow};
`;

export const DropdownItem = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 12px 14px;
  border-radius: 10px;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.navbarLinkActive};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.navbarLinkBgHover};
  }
`;

export const DropdownLabel = styled.span`
  flex: 1;
  text-align: left;
`;

export const DropdownValue = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.navbarLinkInactive};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const FlagImg = styled.img`
  width: 24px;
  height: 16px;
  object-fit: cover;
  border-radius: 3px;
`;
