import styled from 'styled-components';
import { motion } from 'motion/react';

export const DirectRedirectCard = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 28px 32px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.navbarBorder};
  background: ${({ theme }) => theme.colors.dropdownBg};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 32px ${({ theme }) => theme.colors.navbarShadow};
  cursor: pointer;
  text-align: left;
  gap: 16px;
  transition: box-shadow 0.25s ease, border-color 0.25s ease, transform 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary1}40;
    box-shadow: 0 8px 48px ${({ theme }) => theme.colors.navbarShadowHover};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  ${({ theme }) => theme.media.md} {
    padding: 22px 20px;
  }
`;

export const LangCollapsibleCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.dropdownBg};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.colors.navbarBorder};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 32px ${({ theme }) => theme.colors.navbarShadow};
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 48px ${({ theme }) => theme.colors.navbarShadowHover};
  }
`;

export const LangCardHeader = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 28px 32px;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  gap: 16px;

  ${({ theme }) => theme.media.md} {
    padding: 22px 20px;
  }
`;

export const LangChevron = styled.div<{ $open: boolean }>`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.navbarLinkInactive};
  flex-shrink: 0;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), color 0.2s ease;
  transform: rotate(${({ $open }) => ($open ? '180deg' : '0deg')});
`;

export const LangExpandArea = styled(motion.div)`
  overflow: hidden;
`;

export const LangExpandInner = styled.div`
  padding: 0 32px 28px;
  border-top: 1px solid ${({ theme }) => theme.colors.navbarBorder};
  padding-top: 24px;

  ${({ theme }) => theme.media.md} {
    padding: 20px 20px 24px;
  }
`;

export const SettingsPageWrapper = styled.div`
  min-height: 100vh;
  padding: ${({ theme }) => theme.pagePadding.default};
  width: 100%;
  max-width: ${({ theme }) => theme.max};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${({ theme }) => theme.media.lg} {
    padding: ${({ theme }) => theme.pagePadding.lg};
    gap: 20px;
  }

  ${({ theme }) => theme.media.sm} {
    padding: ${({ theme }) => theme.pagePadding.sm};
    gap: 16px;
  }
`;

export const SectionCard = styled(motion.section)`
  background: ${({ theme }) => theme.colors.dropdownBg};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.colors.navbarBorder};
  border-radius: 20px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-shadow: 0 4px 32px ${({ theme }) => theme.colors.navbarShadow};
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 48px ${({ theme }) => theme.colors.navbarShadowHover};
  }

  ${({ theme }) => theme.media.md} {
    padding: 24px 20px;
    gap: 20px;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const SectionIconWrap = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary1}20,
    ${({ theme }) => theme.colors.secondary1}20
  );
  border: 1px solid ${({ theme }) => theme.colors.primary1}30;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary1};
  flex-shrink: 0;
`;

export const SectionTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -0.01em;
`;

export const SectionDivider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colors.navbarBorder};
`;


export const AboutPreview = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;

  ${({ theme }) => theme.media.sm} {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

export const AboutPhotoWrap = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  border: 2.5px solid ${({ theme }) => theme.colors.primary1}40;
  box-shadow: 0 6px 24px ${({ theme }) => theme.colors.navbarShadow};
`;

export const AboutInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
`;

export const AboutRole = styled.span`
  font-size: 0.78rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary1};
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const AboutName = styled.span`
  font-size: 1.3rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -0.02em;
`;

export const AboutBio = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.navbarLinkInactive};
  line-height: 1.6;
  margin-top: 2px;
  max-width: 480px;
`;


export const ThemeRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

export const ThemeLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const ThemeName = styled.span`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

export const ThemeDesc = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.navbarLinkInactive};
`;

export const ThemeToggleBtn = styled.button<{ $active: boolean }>`
  width: 64px;
  height: 32px;
  border-radius: 16px;
  border: none;
  cursor: pointer;
  flex-shrink: 0;
  position: relative;
  background: ${({ $active }) =>
    $active
      ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
      : 'linear-gradient(135deg, #87CEEB 0%, #48cae4 100%)'};
  transition: background 0.4s ease;
  box-shadow: ${({ $active }) =>
    $active
      ? 'inset 0 1px 4px rgba(0,0,0,0.4)'
      : 'inset 0 1px 4px rgba(0,0,0,0.1)'};

  &::after {
    content: '';
    position: absolute;
    top: 4px;
    left: ${({ $active }) => ($active ? '36px' : '4px')};
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: ${({ $active }) =>
      $active
        ? 'linear-gradient(135deg, #c9d6df 0%, #e8e8e8 100%)'
        : 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)'};
    transition: left 0.35s cubic-bezier(0.68, -0.15, 0.27, 1.15);
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  }
`;


export const LanguageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  ${({ theme }) => theme.media.sm} {
    grid-template-columns: 1fr;
  }
`;

export const LanguageCard = styled.button<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 14px;
  border: 1.5px solid
    ${({ $active, theme }) =>
      $active ? theme.colors.primary1 : theme.colors.navbarBorder};
  background: ${({ $active, theme }) =>
    $active ? `${theme.colors.primary1}12` : 'transparent'};
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;

  &:hover {
    background: ${({ theme }) => theme.colors.navbarLinkBgHover};
    border-color: ${({ theme }) => theme.colors.primary1}60;
  }
`;

export const LangFlag = styled.img`
  width: 28px;
  height: 19px;
  object-fit: cover;
  border-radius: 4px;
  flex-shrink: 0;
`;

export const LangInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

export const LangName = styled.span<{ $active: boolean }>`
  font-size: 0.9rem;
  font-weight: ${({ $active }) => ($active ? 700 : 600)};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.primary1 : theme.colors.text};
`;

export const LangNative = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.navbarLinkInactive};
`;

export const ActiveDot = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary1};
  margin-left: auto;
  flex-shrink: 0;
`;


export const VersionList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const VersionItem = styled.div<{ $current?: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.navbarBorder};

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

export const VersionDot = styled.div<{ $current?: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 5px;
  background: ${({ $current, theme }) =>
    $current ? theme.colors.primary1 : theme.colors.navbarBorder};
  box-shadow: ${({ $current, theme }) =>
    $current ? `0 0 0 3px ${theme.colors.primary1}25` : 'none'};
`;

export const VersionMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
`;

export const VersionTag = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

export const VersionNumber = styled.span`
  font-size: 0.9rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
`;

export const VersionBadge = styled.span`
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 2px 7px;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.primary1}20;
  color: ${({ theme }) => theme.colors.primary1};
`;

export const VersionDate = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.navbarLinkInactive};
`;

export const VersionHighlights = styled.ul`
  margin: 6px 0 0;
  padding-left: 14px;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const VersionHighlight = styled.li`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.navbarLinkInactive};
  line-height: 1.5;
`;


export const RedirectCard = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 18px 20px;
  border-radius: 16px;
  border: 1.5px solid ${({ theme }) => theme.colors.navbarBorder};
  background: transparent;
  cursor: pointer;
  transition: all 0.25s ease;
  text-align: left;
  gap: 16px;

  &:hover {
    background: ${({ theme }) => theme.colors.navbarLinkBgHover};
    border-color: ${({ theme }) => theme.colors.primary1}50;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px ${({ theme }) => theme.colors.navbarShadow};
  }

  &:active {
    transform: translateY(0);
  }
`;

export const RedirectLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const RedirectIconWrap = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: linear-gradient(135deg, #48cae420 0%, #fb6f9220 100%);
  border: 1px solid #48cae430;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: #48cae4;
`;

export const RedirectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const RedirectTitle = styled.span`
  font-size: 0.95rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

export const RedirectDesc = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.navbarLinkInactive};
`;

export const RedirectArrow = styled.div`
  color: ${({ theme }) => theme.colors.navbarLinkInactive};
  display: flex;
  align-items: center;
  transition: transform 0.2s ease, color 0.2s ease;
  flex-shrink: 0;

  ${RedirectCard}:hover & {
    transform: translateX(4px);
    color: ${({ theme }) => theme.colors.primary1};
  }
`;
