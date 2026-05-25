import styled, { css } from 'styled-components';
import { motion } from 'motion/react';

export const CasesGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;

  ${({ theme }) => theme.media.md} {
    gap: 48px;
  }
`;

export const CaseCard = styled(motion.article)<{ $accentColor: string }>`
  position: relative;
  background: ${({ theme }) => theme.colors.dropdownBg};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.colors.navbarBorder};
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 4px 24px ${({ theme }) => theme.colors.navbarShadow};
  transition: box-shadow 0.35s ease, border-color 0.35s ease;

  &:hover {
    border-color: ${({ $accentColor }) => $accentColor}40;
    box-shadow: 0 12px 48px ${({ theme }) => theme.colors.navbarShadowHover};
  }
`;

export const CaseHero = styled.div<{ $accentColor: string }>`
  padding: 40px 40px 32px;
  display: flex;
  align-items: flex-start;
  gap: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.navbarBorder};

  ${({ theme }) => theme.media.md} {
    padding: 28px 24px 24px;
  }

  ${({ theme }) => theme.media.sm} {
    flex-direction: column;
    gap: 16px;
  }
`;

export const CaseIconWrap = styled.div<{ $accentColor: string }>`
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background: ${({ $accentColor }) => $accentColor}12;
  border: 1px solid ${({ $accentColor }) => $accentColor}25;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${({ $accentColor }) => $accentColor};
`;

export const CaseHeroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
`;

export const CaseTitle = styled.h3`
  font-size: 1.35rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.title};
  letter-spacing: -0.02em;
  line-height: 1.3;
`;

export const CaseSubtitle = styled.p`
  font-size: 0.85rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.navbarLinkInactive};
  max-width: 500px;
`;

export const CaseTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
`;

export const CaseTag = styled.span<{ $accentColor: string }>`
  padding: 3px 10px;
  border-radius: 100px;
  font-size: 0.68rem;
  font-weight: 600;
  background: ${({ $accentColor }) => $accentColor}0d;
  color: ${({ $accentColor }) => $accentColor};
  border: 1px solid ${({ $accentColor }) => $accentColor}20;
`;

export const CaseBody = styled.div`
  padding: 36px 40px 40px;

  ${({ theme }) => theme.media.md} {
    padding: 24px;
  }
`;

export const StoryTimeline = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  position: relative;

  ${({ theme }) => theme.media.md} {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

const stepConnector = css<{ $accentColor: string }>`
  &::after {
    content: '';
    position: absolute;
    top: 16px;
    right: -1px;
    width: 2px;
    height: calc(100% - 32px);
    background: ${({ $accentColor }) => $accentColor}20;
    border-radius: 2px;

    ${({ theme }) => theme.media.md} {
      top: auto;
      bottom: -1px;
      left: 24px;
      right: auto;
      width: calc(100% - 48px);
      height: 1px;
    }
  }
`;

export const StoryStep = styled(motion.div)<{ $accentColor: string; $isLast?: boolean }>`
  position: relative;
  padding: 0 28px;

  ${({ $isLast }) => !$isLast && stepConnector}

  ${({ theme }) => theme.media.md} {
    padding: 20px 0;
  }
`;

export const StepNumber = styled.div<{ $accentColor: string }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ $accentColor }) => $accentColor}15;
  border: 1.5px solid ${({ $accentColor }) => $accentColor}40;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 800;
  color: ${({ $accentColor }) => $accentColor};
  margin-bottom: 14px;
`;

export const StepLabel = styled.span<{ $accentColor: string }>`
  display: block;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${({ $accentColor }) => $accentColor};
  margin-bottom: 10px;
`;

export const StepText = styled.p`
  font-size: 0.85rem;
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.navbarLinkInactive};
`;

export const MetricStrip = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid ${({ theme }) => theme.colors.navbarBorder};

  ${({ theme }) => theme.media.sm} {
    grid-template-columns: 1fr;
  }
`;

export const MetricItem = styled.div<{ $accentColor: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 20px 16px;
  text-align: center;

  &:not(:last-child) {
    border-right: 1px solid ${({ theme }) => theme.colors.navbarBorder};

    ${({ theme }) => theme.media.sm} {
      border-right: none;
      border-bottom: 1px solid ${({ theme }) => theme.colors.navbarBorder};
    }
  }
`;

export const MetricValue = styled.span<{ $accentColor: string }>`
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${({ $accentColor }) => $accentColor};
`;

export const MetricLabel = styled.span`
  font-size: 0.68rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.navbarLinkInactive};
`;
