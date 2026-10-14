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
  background: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(18px) saturate(140%);
  -webkit-backdrop-filter: blur(18px) saturate(140%);
  border: 1px solid rgba(255, 255, 255, 0.65);
  border-radius: 28px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 340px;
  box-shadow:
    0 16px 40px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.8),
    inset 0 -1px 0 rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.4s ease, border-color 0.4s ease, transform 0.4s ease;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 28px;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.25) 0%,
      transparent 45%,
      rgba(255, 255, 255, 0.1) 100%
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
  font-size: clamp(1.8rem, 2.8vw, 2.6rem);
  text-transform: uppercase;
  font-weight: 850;
  color: #0f172a;
  letter-spacing: -0.02em;
  line-height: 1.2;
  word-wrap: break-word;
  overflow-wrap: break-word;

  ${({ theme }) => theme.media.sm} {
    font-size: 1.45rem;
    line-height: 1.22;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.65;
  font-weight: 450;
  color: #1e293b;

  ${({ theme }) => theme.media.sm} {
    font-size: 0.98rem;
    line-height: 1.55;
  }
`;

export const ActionBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  padding: 13px 26px;
  border-radius: 12px;
  border: none;
  background: #0f172a;
  color: #ffffff;
  font-size: 1.05rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.25);
  transition: all 0.25s ease;

  &:hover {
    background: #1e293b;
    box-shadow: 0 8px 24px rgba(15, 23, 42, 0.35);
    transform: translateY(-2px);
  }

  svg {
    transition: transform 0.25s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }

  ${({ theme }) => theme.media.sm} {
    width: 100%;
    justify-content: center;
    padding: 13px 20px;
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
    min-height: 240px;
  }

  ${({ theme }) => theme.media.sm} {
    display: none;
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
  background: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(18px) saturate(140%);
  -webkit-backdrop-filter: blur(18px) saturate(140%);
  border: 1px solid rgba(255, 255, 255, 0.65);
  border-radius: 24px;
  padding: 32px 28px 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  box-shadow:
    0 12px 32px rgba(0, 0, 0, 0.07),
    inset 0 1px 0 rgba(255, 255, 255, 0.8),
    inset 0 -1px 0 rgba(0, 0, 0, 0.03);
  transition: box-shadow 0.35s ease, border-color 0.35s ease, transform 0.35s ease;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 24px;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.22) 0%,
      transparent 45%,
      rgba(255, 255, 255, 0.08) 100%
    );
    pointer-events: none;
  }

  &:hover {
    box-shadow:
      0 20px 42px rgba(0, 0, 0, 0.12),
      inset 0 1px 0 rgba(255, 255, 255, 0.95);
    border-color: rgba(255, 255, 255, 0.85);
    transform: translateY(-4px);
  }

  ${({ theme }) => theme.media.md} {
    padding: 28px 24px 24px;
  }

  ${({ theme }) => theme.media.sm} {
    padding: 22px 18px 20px;
    border-radius: 20px;
    gap: 14px;
  }
`;

export const FeatureHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  ${({ theme }) => theme.media.sm} {
    gap: 12px;
  }
`;

export const FeatureIcon = styled.div<{ $color: string }>`
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0f172a;
  flex-shrink: 0;

  ${({ theme }) => theme.media.sm} {
    width: 42px;
    height: 42px;
    border-radius: 12px;
    svg {
      width: 22px;
      height: 22px;
    }
  }
`;

export const FeatureTitle = styled.h4`
  font-size: clamp(1.35rem, 1.8vw, 1.75rem);
  font-weight: 800;
  text-transform: uppercase;
  color: #0f172a;
  letter-spacing: -0.015em;
  line-height: 1.25;
  word-wrap: break-word;
  overflow-wrap: break-word;

  ${({ theme }) => theme.media.md} {
    font-size: 1.4rem;
  }

  ${({ theme }) => theme.media.sm} {
    font-size: 1.15rem;
    line-height: 1.25;
  }
`;

export const FeatureDesc = styled.p`
  font-size: 1.12rem;
  line-height: 1.6;
  font-weight: 450;
  color: #1e293b;
  flex: 1;

  ${({ theme }) => theme.media.sm} {
    font-size: 0.95rem;
    line-height: 1.55;
  }
`;

export const FeatureBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.9);
  background: #ffffff;
  color: #0f172a;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  margin-top: 6px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
  transition: all 0.25s cubic-bezier(0.25, 0.1, 0.25, 1);

  &:hover {
    background: #0f172a;
    color: #ffffff;
    border-color: #0f172a;
    box-shadow: 0 6px 18px rgba(15, 23, 42, 0.22);
    transform: translateY(-2px);
  }

  ${({ theme }) => theme.media.sm} {
    width: 100%;
    justify-content: center;
    padding: 12px 18px;
  }

  svg {
    transition: transform 0.25s ease;
  }

  &:hover svg {
    transform: translateX(3px);
  }
`;
