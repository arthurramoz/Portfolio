import styled, { css } from 'styled-components';
import { motion } from 'motion/react';

/* ─── Page Grid ─── */
export const CasesGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${({ theme }) => theme.media.md} {
    gap: 20px;
  }
`;

/* ─── Card Shell ─── */
export const CaseCard = styled(motion.article)<{ $accentColor: string }>`
  position: relative;
  background: ${({ theme }) => theme.colors.dropdownBg};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.colors.navbarBorder};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 2px 16px ${({ theme }) => theme.colors.navbarShadow};
  transition: box-shadow 0.35s ease, border-color 0.35s ease;

  &:hover {
    border-color: ${({ $accentColor }) => $accentColor}30;
    box-shadow: 0 8px 32px ${({ theme }) => theme.colors.navbarShadowHover};
  }
`;

/* ─── Compact Header (always visible) ─── */
export const CaseHeader = styled.div`
  padding: 28px 32px;
  cursor: pointer;
  user-select: none;

  ${({ theme }) => theme.media.md} {
    padding: 24px 20px;
  }
`;

export const CaseHeaderTop = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

export const CaseIconWrap = styled.div<{ $accentColor: string }>`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: ${({ $accentColor }) => $accentColor}10;
  border: 1px solid ${({ $accentColor }) => $accentColor}20;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${({ $accentColor }) => $accentColor};
`;

export const CaseHeaderText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  min-width: 0;
`;

export const CaseTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.title};
  letter-spacing: -0.02em;
  line-height: 1.3;
`;

export const CaseSubtitle = styled.p`
  font-size: 0.82rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.navbarLinkInactive};
  max-width: 600px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CaseHeaderMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 16px;
  flex-wrap: wrap;
`;

export const CaseTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const CaseTag = styled.span<{ $accentColor: string }>`
  padding: 3px 10px;
  border-radius: 100px;
  font-size: 0.68rem;
  font-weight: 600;
  background: ${({ $accentColor }) => $accentColor}0a;
  color: ${({ $accentColor }) => $accentColor};
  border: 1px solid ${({ $accentColor }) => $accentColor}18;
`;

/* ─── Metrics Row (always visible) ─── */
export const MetricRow = styled.div`
  display: flex;
  gap: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.navbarBorder};

  ${({ theme }) => theme.media.sm} {
    flex-direction: column;
  }
`;

export const MetricItem = styled.div<{ $accentColor: string }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 16px 12px;
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
  font-size: 1.15rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${({ $accentColor }) => $accentColor};
`;

export const MetricLabel = styled.span`
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.navbarLinkInactive};
`;

/* ─── Expand/Collapse Button ─── */
export const ExpandButton = styled.button<{ $accentColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 14px;
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.navbarBorder};
  background: ${({ $accentColor }) => $accentColor}06;
  color: ${({ $accentColor }) => $accentColor};
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
  letter-spacing: 0.02em;

  &:hover {
    background: ${({ $accentColor }) => $accentColor}12;
  }

  svg {
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
`;

/* ─── Expanded Body (problem → approach → result) ─── */
export const CaseBody = styled(motion.div)`
  overflow: hidden;
`;

export const CaseBodyInner = styled.div`
  padding: 0 32px 32px;

  ${({ theme }) => theme.media.md} {
    padding: 0 20px 24px;
  }
`;

export const StoryTimeline = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  ${({ theme }) => theme.media.md} {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const StoryStep = styled.div<{ $accentColor: string }>`
  position: relative;
`;

export const StepNumber = styled.div<{ $accentColor: string }>`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${({ $accentColor }) => $accentColor}12;
  border: 1.5px solid ${({ $accentColor }) => $accentColor}30;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 800;
  color: ${({ $accentColor }) => $accentColor};
  margin-bottom: 10px;
`;

export const StepLabel = styled.span<{ $accentColor: string }>`
  display: block;
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${({ $accentColor }) => $accentColor};
  margin-bottom: 8px;
`;

export const StepText = styled.p`
  font-size: 0.82rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.navbarLinkInactive};
`;

/* ─── Legacy exports (kept for compatibility) ─── */
export const CaseHero = styled.div<{ $accentColor: string }>``;
export const CaseHeroText = styled.div``;
export const MetricStrip = styled.div``;
