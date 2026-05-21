import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  padding: 0 32px 80px;

  ${({ theme }) => theme.media.md} {
    padding: 0 20px 60px;
  }
`;

export const Card = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.dropdownBg};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.colors.navbarBorder};
  border-radius: 24px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 340px;
  box-shadow: 0 4px 32px ${({ theme }) => theme.colors.navbarShadow};
  transition: box-shadow 0.35s ease, border-color 0.35s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary1}30;
    box-shadow: 0 12px 48px ${({ theme }) => theme.colors.navbarShadowHover};
  }

  ${({ theme }) => theme.media.md} {
    grid-template-columns: 1fr;
    min-height: auto;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 48px 44px;

  ${({ theme }) => theme.media.md} {
    padding: 32px 28px;
  }
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  width: fit-content;
  padding: 5px 14px;
  border-radius: 100px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary1}20, ${({ theme }) => theme.colors.secondary1}20);
  color: ${({ theme }) => theme.colors.primary1};
  border: 1px solid ${({ theme }) => theme.colors.primary1}30;
`;

export const BadgeDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary1};
  animation: pulse-dot 2s ease-in-out infinite;

  @keyframes pulse-dot {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.8); }
  }
`;

export const Title = styled.h3`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 800;
  color: ${({ theme }) => theme.colors.title};
  letter-spacing: -0.03em;
  line-height: 1.2;
`;

export const Description = styled.p`
  font-size: 0.92rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.navbarLinkInactive};
  max-width: 420px;
`;

export const ExploreBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  padding: 10px 22px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.primary1}40;
  background: ${({ theme }) => theme.colors.primary1}10;
  color: ${({ theme }) => theme.colors.primary1};
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary1}20;
    border-color: ${({ theme }) => theme.colors.primary1}70;
    transform: translateX(4px);
  }

  svg {
    transition: transform 0.25s ease;
  }

  &:hover svg {
    transform: translateX(3px);
  }
`;

export const CardVisual = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary1}08 0%,
    ${({ theme }) => theme.colors.secondary1}08 100%
  );
  border-left: 1px solid ${({ theme }) => theme.colors.navbarBorder};
  padding: 32px;
  overflow: hidden;

  ${({ theme }) => theme.media.md} {
    border-left: none;
    border-top: 1px solid ${({ theme }) => theme.colors.navbarBorder};
    padding: 28px 24px;
    min-height: 200px;
  }
`;

export const MockCard = styled.div<{ $delay: number; $accent: string }>`
  position: absolute;
  width: 220px;
  background: ${({ theme }) => theme.colors.dropdownBg};
  border: 1px solid ${({ theme }) => theme.colors.navbarBorder};
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 8px 32px ${({ theme }) => theme.colors.navbarShadow};

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 14px;
    bottom: 14px;
    width: 3px;
    border-radius: 0 4px 4px 0;
    background: ${({ $accent }) => $accent};
  }
`;

export const MockTitle = styled.div<{ $accent: string }>`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
`;

export const MockIcon = styled.div<{ $accent: string }>`
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: ${({ $accent }) => $accent}18;
  border: 1px solid ${({ $accent }) => $accent}30;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $accent }) => $accent};
  flex-shrink: 0;
`;

export const MockTitleText = styled.span`
  font-size: 0.78rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.title};
`;

export const MockLine = styled.div<{ $w: string }>`
  height: 6px;
  width: ${({ $w }) => $w};
  border-radius: 3px;
  background: ${({ theme }) => theme.colors.navbarBorder};
  margin-bottom: 6px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const MockTags = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 10px;
`;

export const MockTag = styled.span<{ $accent: string }>`
  padding: 2px 8px;
  border-radius: 100px;
  font-size: 0.58rem;
  font-weight: 600;
  background: ${({ $accent }) => $accent}10;
  color: ${({ $accent }) => $accent};
  border: 1px solid ${({ $accent }) => $accent}20;
`;

export const VersionTag = styled.span`
  font-size: 0.68rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.navbarLinkInactive};
  margin-top: 4px;
  opacity: 0.7;
`;
