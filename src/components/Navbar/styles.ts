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

export const NavLogoMark = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: linear-gradient(135deg, #48cae420 0%, #fb6f9220 100%);
  border: 1px solid #48cae430;
  flex-shrink: 0;
  transition: border-color 0.25s ease, background 0.25s ease;

  ${NavLogo}:hover & {
    background: linear-gradient(135deg, #48cae435 0%, #fb6f9235 100%);
    border-color: #48cae450;
  }
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

export const ProjectsDropdown = styled(motion.div)`
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  margin-left: -130px;
  min-width: 260px;
  padding: 6px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.dropdownBg};
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid ${({ theme }) => theme.colors.navbarBorder};
  box-shadow:
    0 12px 40px ${({ theme }) => theme.colors.navbarShadow},
    0 0 0 1px ${({ theme }) => theme.colors.navbarBorder};
  z-index: 100;
`;

export const ProjectsDropdownArrow = styled.div`
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 12px;
  height: 12px;
  background: ${({ theme }) => theme.colors.dropdownBg};
  border-top: 1px solid ${({ theme }) => theme.colors.navbarBorder};
  border-left: 1px solid ${({ theme }) => theme.colors.navbarBorder};
  border-radius: 2px;
`;

interface ProjectItemProps {
  $active: boolean;
}

export const ProjectsDropdownItem = styled.button<ProjectItemProps>`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 12px 14px;
  border-radius: 12px;
  border: none;
  background: ${({ $active, theme }) =>
    $active ? `${theme.colors.primary1}10` : 'transparent'};
  border-left: 2px solid ${({ $active, theme }) =>
    $active ? theme.colors.primary1 : 'transparent'};
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;

  &:hover {
    background: ${({ theme }) => theme.colors.navbarLinkBgHover};
  }
`;

export const ProjectsDropdownIcon = styled.div<ProjectItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  flex-shrink: 0;
  background: ${({ $active, theme }) =>
    $active
      ? `linear-gradient(135deg, ${theme.colors.primary1}25, ${theme.colors.secondary1}25)`
      : `${theme.colors.navbarLinkBgHover}`};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.primary1 : theme.colors.navbarLinkInactive};
  transition: all 0.2s ease;

  ${ProjectsDropdownItem}:hover & {
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.primary1}20,
      ${({ theme }) => theme.colors.secondary1}20
    );
    color: ${({ theme }) => theme.colors.primary1};
  }
`;

export const ProjectsDropdownText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const ProjectsDropdownName = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.navbarLinkActive};
  line-height: 1.3;
`;

export const ProjectsDropdownDesc = styled.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.navbarLinkInactive};
  line-height: 1.3;
`;

export const SettingsDropdown = styled(motion.div)`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 220px;
  padding: 6px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.dropdownBg};
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid ${({ theme }) => theme.colors.navbarBorder};
  box-shadow:
    0 12px 40px ${({ theme }) => theme.colors.navbarShadow},
    0 0 0 1px ${({ theme }) => theme.colors.navbarBorder};
  z-index: 100;
`;

export const SettingsDropdownArrow = styled.div`
  position: absolute;
  top: -6px;
  right: 14px;
  transform: rotate(45deg);
  width: 12px;
  height: 12px;
  background: ${({ theme }) => theme.colors.dropdownBg};
  border-top: 1px solid ${({ theme }) => theme.colors.navbarBorder};
  border-left: 1px solid ${({ theme }) => theme.colors.navbarBorder};
  border-radius: 2px;
`;

export const SettingsItem = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 12px 14px;
  border-radius: 12px;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.navbarLinkActive};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;

  &:hover {
    background: ${({ theme }) => theme.colors.navbarLinkBgHover};
  }
`;

export const SettingsItemIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  flex-shrink: 0;
  background: ${({ theme }) => theme.colors.navbarLinkBgHover};
  color: ${({ theme }) => theme.colors.navbarLinkInactive};
  transition: all 0.2s ease;

  ${SettingsItem}:hover & {
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.primary1}20,
      ${({ theme }) => theme.colors.secondary1}20
    );
    color: ${({ theme }) => theme.colors.primary1};
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

export const DropdownDivider = styled.div`
  height: 1px;
  margin: 6px 8px;
  background: ${({ theme }) => theme.colors.navbarBorder};
`;

export const DropdownVersion = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.navbarLinkInactive};
`;

export const VersionBadge = styled.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 3px 8px;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.primary1}20;
  color: ${({ theme }) => theme.colors.primary1};
`;

export const LanguageSubmenu = styled.div`
  position: absolute;
  right: calc(100% + 8px);
  top: 0;
  min-width: 160px;
  padding: 6px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.dropdownBg};
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid ${({ theme }) => theme.colors.navbarBorder};
  box-shadow:
    0 8px 32px ${({ theme }) => theme.colors.navbarShadow},
    0 0 0 1px ${({ theme }) => theme.colors.navbarBorder};
  opacity: 0;
  visibility: hidden;
  transform: translateX(8px);
  transition: all 0.2s ease;
  z-index: 110;

  &::after {
    content: '';
    position: absolute;
    top: 12px;
    right: -6px;
    transform: rotate(45deg);
    width: 10px;
    height: 10px;
    background: ${({ theme }) => theme.colors.dropdownBg};
    border-right: 1px solid ${({ theme }) => theme.colors.navbarBorder};
    border-top: 1px solid ${({ theme }) => theme.colors.navbarBorder};
    border-radius: 2px;
  }
`;

export const LanguageItemWrapper = styled.div`
  position: relative;

  &:hover ${LanguageSubmenu} {
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
  }
`;

interface LanguageOptionProps {
  $active: boolean;
}

export const LanguageOption = styled.button<LanguageOptionProps>`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 10px 12px;
  border-radius: 10px;
  border: none;
  background: ${({ $active, theme }) =>
    $active ? `${theme.colors.primary1}12` : 'transparent'};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.primary1 : theme.colors.navbarLinkActive};
  font-size: 13px;
  font-weight: ${({ $active }) => ($active ? 600 : 500)};
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;

  &:hover {
    background: ${({ theme }) => theme.colors.navbarLinkBgHover};
  }
`;
