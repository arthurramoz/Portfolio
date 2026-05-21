import Link from 'next/link';
import { motion } from 'motion/react';
import styled, { keyframes } from 'styled-components';

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

  ${({ theme }) => theme.media.lg} {
    width: calc(100% - 2rem);
    padding: 10px 16px;
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
  flex-shrink: 0;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 4px;

  ${({ theme }) => theme.media.lg} {
    display: none;
  }
`;

export const HomeSectionsWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const HomeSectionLink = styled.p<NavLinkProps>`
  position: relative;
  padding: 16px 14px;
  border-radius: 9999px;
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
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

  ${({ theme }) => theme.media.lg} {
    display: none;
  }
`;

export const HamburgerButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.navbarBorder};
  background: transparent;
  color: ${({ theme }) => theme.colors.navbarLinkActive};
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.navbarLinkBgHover};
  }

  ${({ theme }) => theme.media.lg} {
    display: flex;
  }
`;

export const MobileOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(8, 8, 10, 0.45);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  z-index: 999;
`;

export const MobileDrawer = styled(motion.div)`
  position: fixed;
  top: 16px;
  bottom: 16px;
  left: 16px;
  right: 16px;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) =>
    theme.colors.dropdownBg === '#ffffff'
      ? 'rgba(255, 255, 255, 0.72)'
      : 'rgba(15, 15, 22, 0.65)'};
  backdrop-filter: blur(35px) saturate(210%);
  -webkit-backdrop-filter: blur(35px) saturate(210%);
  border: 1px solid ${({ theme }) => theme.colors.navbarBorder};
  border-radius: 28px;
  box-shadow: 
    0 24px 60px rgba(0, 0, 0, 0.25),
    inset 0 1px 1px rgba(255, 255, 255, 0.12);
  overflow: hidden;

  ${({ theme }) => theme.media.sm} {
    top: 12px;
    bottom: 12px;
    left: 12px;
    right: 12px;
    border-radius: 24px;
  }
`;

const driftGlow = keyframes`
  0% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(40px, -30px) scale(1.08);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.95);
  }
  100% {
    transform: translate(0, 0) scale(1);
  }
`;

export const AmbientGlow = styled.div<{ $color: string; $top: string; $left: string; $size: string }>`
  position: absolute;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  background: radial-gradient(circle, ${({ $color }) => $color}22 0%, transparent 70%);
  filter: blur(50px);
  pointer-events: none;
  z-index: 0;
  animation: ${driftGlow} 22s ease-in-out infinite;

  &:nth-child(2) {
    animation-duration: 30s;
    animation-delay: -8s;
  }
`;

export const MobileDrawerContent = styled.div`
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  padding: 24px 20px 40px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
`;

export const MobileDrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`;

export const MobileDrawerClose = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.navbarBorder};
  background: rgba(255, 255, 255, 0.06);
  color: ${({ theme }) => theme.colors.navbarLinkActive};
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: ${({ theme }) => theme.colors.primary1};
    transform: rotate(90deg) scale(1.05);
  }
`;

export const MobileNavLink = styled(motion.div)`
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.colors.navbarBorder}12;
`;

interface MobileNavLinkTextProps {
  $active?: boolean;
}

export const MobileNavLinkText = styled.span<MobileNavLinkTextProps>`
  font-size: clamp(1.6rem, 6vw, 2.1rem);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: -0.04em;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  width: 100%;
  cursor: pointer;
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);

  color: ${({ $active, theme }) => ($active ? theme.colors.primary1 : theme.colors.title)};

  background: ${({ $active, theme }) =>
    $active
      ? `linear-gradient(135deg, ${theme.colors.primary1} 0%, ${theme.colors.secondary1} 100%)`
      : 'none'};
  -webkit-background-clip: ${({ $active }) => ($active ? 'text' : 'none')};
  -webkit-text-fill-color: ${({ $active }) => ($active ? 'transparent' : 'initial')};

  &:hover {
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.primary1} 0%,
      ${({ theme }) => theme.colors.secondary1} 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const MobileNavLinkIndex = styled.span`
  font-size: 0.8rem;
  font-family: monospace;
  font-weight: 700;
  opacity: 0.4;
  color: ${({ theme }) => theme.colors.primary1};
  margin-right: 10px;
`;

export const MobileSubmenuContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 10px;
  margin-top: 4px;
  margin-bottom: 12px;
  background: rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
`;

export const MobileSubmenuLink = styled.button<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 10px 14px;
  background: ${({ $active }) => ($active ? 'rgba(255, 255, 255, 0.06)' : 'transparent')};
  border: none;
  color: ${({ $active, theme }) =>
    $active ? theme.colors.primary1 : theme.colors.navbarLinkInactive};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  text-align: left;
  border-radius: 10px;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    color: ${({ theme }) => theme.colors.navbarLinkActive};
  }
`;

export const MobileControlCenter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: ${({ theme }) =>
    theme.colors.dropdownBg === '#ffffff'
      ? 'rgba(0, 0, 0, 0.03)'
      : 'rgba(255, 255, 255, 0.02)'};
  border: 1px solid ${({ theme }) => theme.colors.navbarBorder};
  border-radius: 24px;
  padding: 14px;
  margin-top: 6px;
  box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.05);
`;

export const MobileControlRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

export const MobileControlCard = styled.div<{ $interactive?: boolean }>`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid ${({ theme }) => theme.colors.navbarBorder}30;
  border-radius: 16px;
  padding: 12px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: ${({ $interactive }) => ($interactive ? 'pointer' : 'default')};
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: ${({ theme }) => theme.colors.primary1}50;
    transform: translateY(-2px);
  }
`;

export const MobileControlCardLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.navbarLinkInactive};
`;

export const MobileLanguageGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  margin-top: 4px;
  padding: 4px;
`;

export const MobileDrawerDivider = styled.div`
  height: 1px;
  margin: 2px 0;
  background: ${({ theme }) => theme.colors.navbarBorder}15;
`;

export const ThemeToggleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid ${({ theme }) => theme.colors.navbarBorder}30;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: ${({ theme }) => theme.colors.secondary1}50;
    transform: translateY(-2px);
  }
`;

export const ThemeToggleLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.95rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.navbarLinkInactive};
`;

export const SettingsWrapper = styled.div`
  position: relative;

  ${({ theme }) => theme.media.lg} {
    display: none;
  }
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

export const PortfolioSubmenu = styled.div`
  position: absolute;
  left: calc(100% + 8px);
  top: 0;
  min-width: 240px;
  padding: 6px;
  border-radius: 14px;
  background: ${({ theme }) => theme.colors.dropdownBg};
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid ${({ theme }) => theme.colors.navbarBorder};
  box-shadow:
    0 8px 32px ${({ theme }) => theme.colors.navbarShadow},
    0 0 0 1px ${({ theme }) => theme.colors.navbarBorder};
  opacity: 0;
  visibility: hidden;
  transform: translateX(6px);
  transition: all 0.2s ease;
  z-index: 110;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -12px;
    width: 12px;
    height: 100%;
  }

  &::after {
    content: '';
    position: absolute;
    top: 14px;
    left: -5px;
    transform: rotate(45deg);
    width: 10px;
    height: 10px;
    background: ${({ theme }) => theme.colors.dropdownBg};
    border-left: 1px solid ${({ theme }) => theme.colors.navbarBorder};
    border-bottom: 1px solid ${({ theme }) => theme.colors.navbarBorder};
    border-radius: 2px;
  }
`;

export const PortfolioItemWrapper = styled.div`
  position: relative;

  &:hover ${PortfolioSubmenu} {
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
  }
`;

export const MobileVersionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  font-size: 11px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.navbarLinkInactive};
  opacity: 0.85;
  border-top: 1px solid ${({ theme }) => theme.colors.navbarBorder}15;
  z-index: 2;
  margin-top: auto;
`;
