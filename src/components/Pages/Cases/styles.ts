import styled from 'styled-components';
import { motion } from 'motion/react';

export const CasesGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;

  ${({ theme }) => theme.media.md} {
    gap: 20px;
  }
`;

export const CaseCard = styled(motion.article)<{ $accentColor: string }>`
  position: relative;
  background: ${({ theme }) => theme.colors.cardBg};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid ${({ theme }) => theme.colors.navbarBorder};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 20px ${({ theme }) => theme.colors.navbarShadow};
  transition: box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    border-color: ${({ $accentColor }) => $accentColor}50;
    box-shadow: 0 12px 36px ${({ theme }) => theme.colors.navbarShadowHover},
      0 0 24px ${({ $accentColor }) => $accentColor}18;
    transform: translateY(-2px);
  }
`;

export const CaseHeader = styled.div`
  padding: 28px 32px 20px;
  cursor: pointer;
  user-select: none;

  ${({ theme }) => theme.media.md} {
    padding: 22px 20px 16px;
  }
`;

export const CaseHeaderTop = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 18px;

  ${({ theme }) => theme.media.sm} {
    gap: 14px;
  }
`;

export const CaseIconWrap = styled.div<{ $accentColor: string }>`
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: ${({ $accentColor }) => $accentColor}14;
  border: 1px solid ${({ $accentColor }) => $accentColor}30;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${({ $accentColor }) => $accentColor};
  box-shadow: 0 2px 12px ${({ $accentColor }) => $accentColor}15;
`;

export const CaseHeaderText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  min-width: 0;
`;

export const CaseDomainBadge = styled.span<{ $accentColor: string }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ $accentColor }) => $accentColor};
  background: ${({ $accentColor }) => $accentColor}10;
  border: 1px solid ${({ $accentColor }) => $accentColor}25;
  padding: 4px 10px;
  border-radius: 999px;
  width: fit-content;
`;

export const CaseTitle = styled.h3`
  font-size: 1.32rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.title};
  letter-spacing: -0.02em;
  line-height: 1.3;

  ${({ theme }) => theme.media.sm} {
    font-size: 1.15rem;
  }
`;

export const CaseSubtitle = styled.p`
  font-size: 0.92rem;
  line-height: 1.55;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.85;
  max-width: 820px;
  margin-top: 2px;
`;

export const CaseHeaderMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 18px;
  flex-wrap: wrap;
`;

export const CaseTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const CaseTag = styled.span<{ $accentColor: string }>`
  padding: 4px 10px;
  border-radius: 8px;
  font-size: 0.72rem;
  font-weight: 600;
  background: ${({ theme }) => theme.colors.dropdownBg};
  color: ${({ theme }) => theme.colors.navbarLinkInactive};
  border: 1px solid ${({ theme }) => theme.colors.navbarBorder};
  transition: border-color 0.2s ease, color 0.2s ease;

  &:hover {
    border-color: ${({ $accentColor }) => $accentColor}40;
    color: ${({ theme }) => theme.colors.title};
  }
`;

export const MetricRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  padding: 0 32px 20px;

  ${({ theme }) => theme.media.md} {
    padding: 0 20px 18px;
    gap: 10px;
  }

  ${({ theme }) => theme.media.sm} {
    grid-template-columns: 1fr;
  }
`;

export const MetricItem = styled.div<{ $accentColor: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
  padding: 12px 16px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.dropdownBg};
  border: 1px solid ${({ theme }) => theme.colors.navbarBorder};
  transition: border-color 0.2s ease, background-color 0.2s ease;

  &:hover {
    border-color: ${({ $accentColor }) => $accentColor}30;
    background: ${({ $accentColor }) => $accentColor}08;
  }
`;

export const MetricValue = styled.span<{ $accentColor: string }>`
  font-size: 1.15rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: ${({ $accentColor }) => $accentColor};
`;

export const MetricLabel = styled.span`
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.colors.navbarLinkInactive};
`;

export const ExpandButton = styled.button<{ $accentColor: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 14px 32px;
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.navbarBorder};
  background: ${({ $accentColor }) => $accentColor}06;
  color: ${({ $accentColor }) => $accentColor};
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
  letter-spacing: 0.02em;

  ${({ theme }) => theme.media.md} {
    padding: 14px 20px;
  }

  &:hover {
    background: ${({ $accentColor }) => $accentColor}12;
  }

  span {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  svg {
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
`;

export const CaseBody = styled(motion.div)`
  overflow: hidden;
`;

export const CaseBodyInner = styled.div`
  padding: 8px 32px 28px;

  ${({ theme }) => theme.media.md} {
    padding: 6px 20px 22px;
  }
`;

export const StoryTimeline = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  ${({ theme }) => theme.media.md} {
    grid-template-columns: 1fr;
    gap: 14px;
  }
`;

export const StoryStep = styled.div<{ $accentColor: string; $type?: string }>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 18px 20px;
  border-radius: 14px;
  background: ${({ theme }) => theme.colors.dropdownBg};
  border: 1px solid ${({ theme }) => theme.colors.navbarBorder};
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${({ $accentColor }) => $accentColor}40;
  }
`;

export const StepHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StepIconWrap = styled.div<{ $accentColor: string }>`
  width: 26px;
  height: 26px;
  border-radius: 8px;
  background: ${({ $accentColor }) => $accentColor}15;
  border: 1px solid ${({ $accentColor }) => $accentColor}30;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $accentColor }) => $accentColor};
  font-size: 0.8rem;
  flex-shrink: 0;
`;

export const StepLabel = styled.span<{ $accentColor: string }>`
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${({ $accentColor }) => $accentColor};
`;

export const StepText = styled.p`
  font-size: 0.86rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.88;
`;

export const StepNumber = styled.div<{ $accentColor: string }>``;
export const CaseHero = styled.div<{ $accentColor: string }>``;
export const CaseHeroText = styled.div``;
export const MetricStrip = styled.div``;
