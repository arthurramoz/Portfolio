import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const LegendRow = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 56px;

  ${({ theme }) => theme.media.md} {
    gap: 14px;
    margin-bottom: 36px;
  }
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.82rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.navbarLinkInactive};
  text-transform: capitalize;
`;

export const LegendDot = styled.div<{ $color: string }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  box-shadow: 0 0 0 3px ${({ $color }) => $color}20;
`;

export const TimelineTrack = styled.div`
  position: relative;
  padding-left: 56px;

  &::before {
    content: '';
    position: absolute;
    left: 22px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(
      to bottom,
      ${({ theme }) => theme.colors.navbarBorder},
      ${({ theme }) => theme.colors.navbarBorder}80,
      transparent
    );
  }

  ${({ theme }) => theme.media.md} {
    padding-left: 44px;

    &::before {
      left: 16px;
    }
  }
`;

export const YearMarker = styled(motion.div)`
  position: relative;
  margin-bottom: 24px;
  margin-top: 48px;

  &:first-child {
    margin-top: 0;
  }
`;

export const YearLabel = styled.span`
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.title};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -42px;
    top: 50%;
    transform: translateY(-50%);
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.title};
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.dropdownBg};

    ${({ theme }) => theme.media.md} {
      left: -34px;
      width: 12px;
      height: 12px;
    }
  }
`;

const highlightGlow = css<{ $accentColor: string }>`
  border-color: ${({ $accentColor }) => $accentColor}40;
  box-shadow:
    0 4px 32px ${({ $accentColor }) => $accentColor}18,
    0 0 0 1px ${({ $accentColor }) => $accentColor}12;

  &:hover {
    border-color: ${({ $accentColor }) => $accentColor}70;
    box-shadow:
      0 8px 48px ${({ $accentColor }) => $accentColor}28,
      0 0 0 1px ${({ $accentColor }) => $accentColor}20;
  }
`;

export const EntryCard = styled(motion.div) <{
  $accentColor: string;
  $highlight?: boolean;
}>`
  position: relative;
  background: ${({ theme }) => theme.colors.dropdownBg};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.colors.navbarBorder};
  border-radius: 20px;
  padding: ${({ $highlight }) => ($highlight ? '32px 32px 28px' : '22px 24px 18px')};
  margin-bottom: 20px;
  box-shadow: 0 4px 24px ${({ theme }) => theme.colors.navbarShadow};
  transition: box-shadow 0.35s ease, border-color 0.35s ease, transform 0.35s ease;

  &:hover {
    border-color: ${({ $accentColor }) => $accentColor}50;
    box-shadow: 0 8px 40px ${({ theme }) => theme.colors.navbarShadowHover};
    transform: translateY(-2px);
  }

  &::before {
    content: '';
    position: absolute;
    left: -43px;
    top: 32px;
    width: ${({ $highlight }) => ($highlight ? '12px' : '8px')};
    height: ${({ $highlight }) => ($highlight ? '12px' : '8px')};
    border-radius: 50%;
    background: ${({ $accentColor }) => $accentColor};
    box-shadow: 0 0 0 ${({ $highlight }) => ($highlight ? '4px' : '3px')}
      ${({ $accentColor }) => $accentColor}25;

    ${({ theme }) => theme.media.md} {
      left: -35px;
      width: ${({ $highlight }) => ($highlight ? '10px' : '7px')};
      height: ${({ $highlight }) => ($highlight ? '10px' : '7px')};
    }
  }

  ${({ $highlight }) => $highlight && highlightGlow}

  ${({ theme }) => theme.media.md} {
    padding: ${({ $highlight }) =>
    $highlight ? '24px 20px 20px' : '18px 18px 14px'};
  }
`;

export const HighlightBar = styled.div<{ $accentColor: string }>`
  position: absolute;
  left: 0;
  top: 16px;
  bottom: 16px;
  width: 3px;
  border-radius: 0 4px 4px 0;
  background: linear-gradient(
    to bottom,
    ${({ $accentColor }) => $accentColor},
    ${({ $accentColor }) => $accentColor}60
  );
`;

export const EntryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 10px;
`;

export const EntryIconWrap = styled.div<{
  $accentColor: string;
  $highlight?: boolean;
}>`
  width: ${({ $highlight }) => ($highlight ? '44px' : '36px')};
  height: ${({ $highlight }) => ($highlight ? '44px' : '36px')};
  border-radius: 12px;
  background: ${({ $accentColor }) => $accentColor}15;
  border: 1px solid ${({ $accentColor }) => $accentColor}30;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${({ $accentColor }) => $accentColor};
`;

export const EntryTitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
`;

export const EntryTitle = styled.span<{ $highlight?: boolean }>`
  font-size: ${({ $highlight }) => ($highlight ? '1.1rem' : '0.92rem')};
  font-weight: ${({ $highlight }) => ($highlight ? '800' : '600')};
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -0.01em;
`;

export const EntryDate = styled.span`
  font-size: 0.72rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.navbarLinkInactive};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  flex-shrink: 0;
  margin-left: auto;

  ${({ theme }) => theme.media.sm} {
    display: none;
  }
`;

export const EntryDescription = styled.p<{ $highlight?: boolean }>`
  font-size: ${({ $highlight }) => ($highlight ? '0.88rem' : '0.82rem')};
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.navbarLinkInactive};
  margin-bottom: 14px;
`;

export const EntryTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const EntryTag = styled.span<{ $accentColor: string }>`
  padding: 4px 12px;
  border-radius: 100px;
  font-size: 0.72rem;
  font-weight: 600;
  background: ${({ $accentColor }) => $accentColor}10;
  color: ${({ $accentColor }) => $accentColor};
  border: 1px solid ${({ $accentColor }) => $accentColor}25;
`;
