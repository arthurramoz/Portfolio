import styled from 'styled-components';
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

export const EntryCard = styled(motion.div)<{ $accentColor: string }>`
  position: relative;
  background: ${({ theme }) => theme.colors.dropdownBg};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.colors.navbarBorder};
  border-radius: 20px;
  padding: 28px 28px 24px;
  margin-bottom: 20px;
  box-shadow: 0 4px 24px ${({ theme }) => theme.colors.navbarShadow};
  transition: box-shadow 0.3s ease, border-color 0.3s ease;

  &:hover {
    border-color: ${({ $accentColor }) => $accentColor}50;
    box-shadow: 0 8px 40px ${({ theme }) => theme.colors.navbarShadowHover};
  }

  &::before {
    content: '';
    position: absolute;
    left: -43px;
    top: 32px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${({ $accentColor }) => $accentColor};
    box-shadow: 0 0 0 3px ${({ $accentColor }) => $accentColor}25;

    ${({ theme }) => theme.media.md} {
      left: -35px;
      width: 8px;
      height: 8px;
    }
  }

  ${({ theme }) => theme.media.md} {
    padding: 22px 20px 18px;
  }
`;

export const EntryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 10px;
`;

export const EntryIconWrap = styled.div<{ $accentColor: string }>`
  width: 40px;
  height: 40px;
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

export const EntryTitle = styled.span`
  font-size: 1.05rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -0.01em;
`;

export const EntrySubtitle = styled.span`
  font-size: 0.82rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.navbarLinkInactive};
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

export const EntryDescription = styled.p`
  font-size: 0.88rem;
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
