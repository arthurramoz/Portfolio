import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  width: 100%;
`;

export const SectionBg = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
`;

export const VersionWatermark = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 0;
  user-select: none;
`;

export const WatermarkVersion = styled.span`
  font-size: clamp(12rem, 28vw, 22rem);
  font-weight: 900;
  letter-spacing: -0.05em;
  line-height: 1;
  color: #000000;
`;

export const WatermarkLabel = styled.span`
  font-size: clamp(1.5rem, 4vw, 3rem);
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #000000;
  margin-top: -10px;
`;

export const SectionInner = styled.div`
  position: relative;
  z-index: 1;
  padding: 80px 32px;

  ${({ theme }) => theme.media.md} {
    padding: 60px 20px;
  }
`;

export const Card = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px) saturate(110%);
  -webkit-backdrop-filter: blur(10px) saturate(110%);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 28px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 340px;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    inset 0 -1px 0 rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.4s ease, border-color 0.4s ease, transform 0.4s ease;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 28px;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.12) 0%,
      transparent 40%,
      transparent 60%,
      rgba(255, 255, 255, 0.06) 100%
    );
    pointer-events: none;
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

export const Title = styled.h3`
  font-size: 3rem;  
  text-transform: uppercase;
  font-weight: 800;
  color: #111;
  word-wrap: break-word;
  overflow-wrap: break-word;

  ${({ theme }) => theme.media.md} {
    font-size: 2.4rem;
  }

  ${({ theme }) => theme.media.sm} {
    font-size: 1.8rem;
  }
`;

export const Description = styled.p`
  font-size: 1.4rem;
  line-height: 1.3;
  font-weight: 200;
  color: #222;

  ${({ theme }) => theme.media.sm} {
    font-size: 1.15rem;
  }
`;

export const ActionBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  padding: 12px 24px;
  border-radius: 12px;
  border: none;
  background: ${({ theme }) => theme.colors.primary1};
  color: #111;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary2};
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
  background: rgba(255, 255, 255, 0.04);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  padding: 32px;
  overflow: hidden;

  ${({ theme }) => theme.media.md} {
    border-left: none;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding: 28px 24px;
    min-height: 220px;
  }
`;



export const PreviewCard = styled.div<{ $delay: number; $accent: string }>`
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

  ${({ theme }) => theme.media.md} {
    width: 170px;
    padding: 12px;
    border-radius: 12px;

    &::before {
      top: 10px;
      bottom: 10px;
    }
  }

  ${({ theme }) => theme.media.sm} {
    width: 135px;
    padding: 8px 10px;
    border-radius: 10px;
  }
`;

export const PreviewHeader = styled.div<{ $accent: string }>`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
`;

export const PreviewIcon = styled.div<{ $accent: string }>`
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

  ${({ theme }) => theme.media.md} {
    width: 22px;
    height: 22px;
    border-radius: 6px;
  }
`;

export const PreviewLabel = styled.span`
  font-size: 0.78rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.title};

  ${({ theme }) => theme.media.md} {
    font-size: 0.68rem;
  }
`;

export const PreviewLine = styled.div<{ $w: string }>`
  height: 6px;
  width: ${({ $w }) => $w};
  border-radius: 3px;
  background: ${({ theme }) => theme.colors.title}15;
  margin-bottom: 6px;

  &:last-child {
    margin-bottom: 0;
  }

  ${({ theme }) => theme.media.md} {
    height: 4px;
    margin-bottom: 4px;
  }
`;

export const PreviewTags = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 10px;

  ${({ theme }) => theme.media.md} {
    gap: 3px;
    margin-top: 6px;
  }
`;

export const PreviewTag = styled.span<{ $accent: string }>`
  padding: 2px 8px;
  border-radius: 100px;
  font-size: 0.58rem;
  font-weight: 600;
  background: ${({ $accent }) => $accent}10;
  color: ${({ $accent }) => $accent};
  border: 1px solid ${({ $accent }) => $accent}20;

  ${({ theme }) => theme.media.md} {
    padding: 1px 5px;
    font-size: 0.5rem;
  }
`;

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 20px;

  ${({ theme }) => theme.media.md} {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const FeatureCard = styled.div<{ $accent: string }>`
  position: relative;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px) saturate(110%);
  -webkit-backdrop-filter: blur(10px) saturate(110%);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 24px;
  padding: 32px 28px 28px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  box-shadow:
    0 8px 24px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    inset 0 -1px 0 rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.4s ease, border-color 0.4s ease, transform 0.4s ease;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 24px;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 40%,
      transparent 60%,
      rgba(255, 255, 255, 0.05) 100%
    );
    pointer-events: none;
  }

  ${({ theme }) => theme.media.md} {
    padding: 28px 24px 24px;
  }
`;

export const FeatureHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  ${({ theme }) => theme.media.sm} {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

export const FeatureIcon = styled.div<{ $color: string }>`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #111;
`;

export const FeatureTitle = styled.h4`
  font-size: 2.7rem;
  font-weight: 800;
  text-transform: uppercase;
  color: #111;
  letter-spacing: -0.02em;
  line-height: 1.3;
  word-wrap: break-word;
  overflow-wrap: break-word;

  ${({ theme }) => theme.media.md} {
    font-size: 2.2rem;
  }

  ${({ theme }) => theme.media.sm} {
    font-size: 1.6rem;
  }
`;

export const FeatureDesc = styled.p`
  font-size: 1.3rem;
  line-height: 1.5;
  font-weight: 200;
  color: #222;

  ${({ theme }) => theme.media.sm} {
    font-size: 1.1rem;
  }
`;

export const FeatureBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  width: fit-content;
  padding: 12px 24px;
  border-radius: 10px;
  border: none;
  background: ${({ theme }) => theme.colors.primary1};
  color: #111;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  margin-top: 4px;
  transition: all 0.25s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary2};
    transform: translateX(4px);
  }

  svg {
    transition: transform 0.25s ease;
  }

  &:hover svg {
    transform: translateX(2px);
  }
`;
