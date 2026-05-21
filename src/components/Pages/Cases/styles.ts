import styled from 'styled-components';
import { motion } from 'motion/react';

export const CaseCard = styled(motion.div)<{ $accentColor: string }>`
  position: relative;
  background: ${({ theme }) => theme.colors.dropdownBg};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.colors.navbarBorder};
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 4px 24px ${({ theme }) => theme.colors.navbarShadow};
  transition: box-shadow 0.35s ease, border-color 0.35s ease, transform 0.35s ease;
  overflow: hidden;

  &::before {
    content: '';
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
  }

  &:hover {
    border-color: ${({ $accentColor }) => $accentColor}50;
    box-shadow: 0 8px 40px ${({ theme }) => theme.colors.navbarShadowHover};
    transform: translateY(-2px);
  }

  ${({ theme }) => theme.media.md} {
    padding: 24px 20px;
  }
`;

export const CaseHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;

  ${({ theme }) => theme.media.sm} {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

export const CaseIconWrap = styled.div<{ $accentColor: string }>`
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: ${({ $accentColor }) => $accentColor}15;
  border: 1px solid ${({ $accentColor }) => $accentColor}30;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${({ $accentColor }) => $accentColor};
`;

export const CaseTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.title};
  letter-spacing: -0.02em;
  flex: 1;
`;

export const CaseSection = styled.div`
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 24px;
  }
`;

export const SectionLabel = styled.span<{ $accentColor: string }>`
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${({ $accentColor }) => $accentColor};
  margin-bottom: 8px;
`;

export const SectionText = styled.p`
  font-size: 0.88rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.navbarLinkInactive};
`;

export const MetricGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 20px;

  ${({ theme }) => theme.media.sm} {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`;

export const MetricCard = styled.div<{ $accentColor: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 16px 12px;
  border-radius: 14px;
  background: ${({ $accentColor }) => $accentColor}08;
  border: 1px solid ${({ $accentColor }) => $accentColor}18;

  ${({ theme }) => theme.media.sm} {
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    padding: 12px 16px;
  }
`;

export const MetricValue = styled.span<{ $accentColor: string }>`
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${({ $accentColor }) => $accentColor};

  ${({ theme }) => theme.media.sm} {
    font-size: 1.1rem;
  }
`;

export const MetricLabel = styled.span`
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.navbarLinkInactive};
  text-align: center;
`;

export const CaseTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const CaseTag = styled.span<{ $accentColor: string }>`
  padding: 4px 12px;
  border-radius: 100px;
  font-size: 0.72rem;
  font-weight: 600;
  background: ${({ $accentColor }) => $accentColor}10;
  color: ${({ $accentColor }) => $accentColor};
  border: 1px solid ${({ $accentColor }) => $accentColor}25;
`;

export const CasesGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
