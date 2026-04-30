import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
`;

export const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 96px 24px 96px;
  max-width: ${({ theme }) => theme.max};
  margin: 0 auto;

  ${({ theme }) => theme.media.md} {
    padding: 80px 16px 64px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 48px;

  ${({ theme }) => theme.media.md} {
    margin-bottom: 32px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 40px;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.title};

  ${({ theme }) => theme.media.lg} {
    font-size: 32px;
  }

  ${({ theme }) => theme.media.sm} {
    font-size: 28px;
  }
`;

export const SectionSubtitle = styled.span`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary1};
`;

export const GitHubCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 28px;
  background: ${({ theme }) => theme.colors.btnSecondaryBg};
  border: 1px solid ${({ theme }) => theme.colors.btnSecondaryBorder};
  padding: 48px 44px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${({ theme }) => theme.media.md} {
    padding: 32px 20px;
    border-radius: 20px;
    gap: 32px;
  }
`;

export const GitHubBgLogo = styled.div`
  position: absolute;
  top: -40px;
  right: -40px;
  width: 320px;
  height: 320px;
  pointer-events: none;
  opacity: 0.04;

  svg {
    width: 100%;
    height: 100%;
  }

  ${({ theme }) => theme.media.md} {
    width: 200px;
    height: 200px;
    top: -20px;
    right: -20px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const AvatarWrap = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  border: 2px solid ${({ theme }) => theme.colors.btnSecondaryBorder};

  ${({ theme }) => theme.media.md} {
    width: 38px;
    height: 38px;
  }
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const HeaderTitle = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.title};
  letter-spacing: -0.01em;
`;

export const HeaderUsername = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.subtitle};
  display: inline-flex;
  align-items: center;
  gap: 4px;
`;

export const ProfileLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 18px;
  border-radius: 9999px;
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.subtitle};
  border: 1px solid ${({ theme }) => theme.colors.btnSecondaryBorder};
  background: transparent;
  text-decoration: none;
  transition: all 0.25s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.title};
    border-color: ${({ theme }) => theme.colors.title};
  }
`;

export const StatsRow = styled.div`
  display: flex;
  gap: 20px;
  position: relative;
  z-index: 1;

  ${({ theme }) => theme.media.md} {
    gap: 12px;
  }

  ${({ theme }) => theme.media.sm} {
    flex-direction: column;
  }
`;

export const StatBox = styled.div`
  flex: 1;
  padding: 28px 24px;
  border-radius: 20px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary1}10,
    ${({ theme }) => theme.colors.secondary1}08
  );
  border: 1px solid ${({ theme }) => theme.colors.btnSecondaryBorder};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 6px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }

  ${({ theme }) => theme.media.md} {
    padding: 20px 16px;
    border-radius: 16px;
  }
`;

export const StatValue = styled.span`
  font-size: 48px;
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary1},
    ${({ theme }) => theme.colors.secondary1}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  ${({ theme }) => theme.media.md} {
    font-size: 36px;
  }
`;

export const StatLabel = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.subtitle};
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

export const GraphSection = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const GraphHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
`;

export const GraphLabel = styled.span`
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.subtitle};
`;

export const GraphCount = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.subtitle};
`;

export const GraphWrapper = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Grid = styled.div`
  display: flex;
  gap: 3px;
  min-width: fit-content;

  ${({ theme }) => theme.media.md} {
    gap: 2px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  ${({ theme }) => theme.media.md} {
    gap: 2px;
  }
`;

export const Cell = styled.div<{ $level: number }>`
  width: 12px;
  height: 12px;
  border-radius: 3px;
  background: ${({ $level, theme }) => {
    if ($level === 0) return theme.colors.btnSecondaryBorder;
    if ($level === 1) return '#9be9a8';
    if ($level === 2) return '#40c463';
    if ($level === 3) return '#30a14e';
    return '#216e39';
  }};
  transition: transform 0.15s ease;

  &:hover {
    transform: scale(1.5);
  }

  ${({ theme }) => theme.media.md} {
    width: 9px;
    height: 9px;
    border-radius: 2px;
  }
`;

export const Legend = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: flex-end;
`;

export const LegendText = styled.span`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.subtitle};
  margin: 0 4px;
`;

export const LoadingBar = styled.div`
  height: 100px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.btnSecondaryBorder};
  animation: ${pulse} 1.5s ease-in-out infinite;
`;
