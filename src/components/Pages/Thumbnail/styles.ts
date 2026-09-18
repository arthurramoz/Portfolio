'use client';

import styled, { keyframes } from 'styled-components';
import { motion } from 'motion/react';

const float1 = keyframes`
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(12px, -18px) rotate(2deg); }
  50% { transform: translate(-8px, -30px) rotate(-1deg); }
  75% { transform: translate(16px, -12px) rotate(1.5deg); }
`;

const float2 = keyframes`
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(-16px, -14px) rotate(-2deg); }
  50% { transform: translate(10px, -24px) rotate(1deg); }
  75% { transform: translate(-12px, -8px) rotate(-1.5deg); }
`;

const float3 = keyframes`
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(8px, -22px) rotate(1.5deg); }
  50% { transform: translate(-14px, -16px) rotate(-2deg); }
  75% { transform: translate(10px, -28px) rotate(0.5deg); }
`;

const pulseGlow = keyframes`
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
`;

const orbFloat = keyframes`
  0%, 100% { transform: translate(0, 0); }
  33% { transform: translate(30px, -20px); }
  66% { transform: translate(-20px, 15px); }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const gridPulse = keyframes`
  0%, 100% { opacity: 0.03; }
  50% { opacity: 0.08; }
`;

export const ThumbnailContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0a0a0f;
`;

export const GridBackground = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(72, 202, 228, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(72, 202, 228, 0.04) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: ${gridPulse} 6s ease-in-out infinite;
  z-index: 0;
`;

export const OrbPrimary = styled.div`
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(72, 202, 228, 0.15) 0%,
    rgba(72, 202, 228, 0.05) 40%,
    transparent 70%
  );
  filter: blur(80px);
  top: -100px;
  left: -100px;
  animation: ${orbFloat} 12s ease-in-out infinite;
  z-index: 0;
`;

export const OrbSecondary = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(251, 111, 146, 0.12) 0%,
    rgba(251, 111, 146, 0.04) 40%,
    transparent 70%
  );
  filter: blur(80px);
  bottom: -80px;
  right: -80px;
  animation: ${orbFloat} 10s ease-in-out infinite reverse;
  z-index: 0;
`;

export const OrbAccent = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(144, 224, 239, 0.08) 0%,
    transparent 60%
  );
  filter: blur(60px);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${pulseGlow} 8s ease-in-out infinite;
  z-index: 0;
`;

export const CenterContent = styled(motion.div)`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const LogoWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoGlow = styled.div`
  position: absolute;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(72, 202, 228, 0.25) 0%,
    rgba(251, 111, 146, 0.15) 50%,
    transparent 70%
  );
  filter: blur(40px);
  animation: ${pulseGlow} 4s ease-in-out infinite;
`;

export const LogoSvg = styled.div`
  position: relative;
  z-index: 2;
  width: 140px;
  height: 140px;
  filter: drop-shadow(0 0 30px rgba(72, 202, 228, 0.4))
          drop-shadow(0 0 60px rgba(251, 111, 146, 0.2));

  img {
    width: 140px;
    height: 140px;
    object-fit: contain;
  }
`;

export const TitleArea = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const MainTitle = styled.h1`
  font-size: 2.2rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: #f0f0f2;
  text-align: center;
  line-height: 1.1;

  span {
    background: linear-gradient(135deg, #48cae4, #90e0ef, #fb6f92);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${shimmer} 4s linear infinite;
  }
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.45);
  letter-spacing: 0.15em;
  text-transform: uppercase;
`;

export const TagsRow = styled(motion.div)`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 500px;
`;

export const Tag = styled(motion.span)`
  padding: 6px 16px;
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
`;

const floatAnimations = [float1, float2, float3];

export const FloatingCard = styled.div<{
  $top?: string;
  $left?: string;
  $right?: string;
  $bottom?: string;
  $rotation?: number;
  $delay?: number;
  $floatIndex?: number;
  $scale?: number;
}>`
  position: absolute;
  z-index: 5;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(2px);
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  ${({ $top }) => $top && `top: ${$top};`}
  ${({ $left }) => $left && `left: ${$left};`}
  ${({ $right }) => $right && `right: ${$right};`}
  ${({ $bottom }) => $bottom && `bottom: ${$bottom};`}
  ${({ $rotation }) => $rotation && `transform: rotate(${$rotation}deg);`}
  ${({ $scale }) => $scale && `transform: scale(${$scale});`}

  animation: ${({ $floatIndex }) =>
      floatAnimations[($floatIndex || 0) % 3]}
    ${({ $delay }) => 8 + ($delay || 0)}s ease-in-out infinite;
  animation-delay: ${({ $delay }) => ($delay || 0) * 0.6}s;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(72, 202, 228, 0.06) 0%,
      transparent 50%,
      rgba(251, 111, 146, 0.04) 100%
    );
    pointer-events: none;
  }
`;

export const Vignette = styled.div`
  position: absolute;
  inset: 0;
  z-index: 8;
  pointer-events: none;
  background: radial-gradient(
    ellipse 70% 70% at 50% 50%,
    transparent 30%,
    rgba(10, 10, 15, 0.7) 70%,
    rgba(10, 10, 15, 0.95) 100%
  );
`;

export const BottomFade = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 200px;
  background: linear-gradient(to top, #0a0a0f, transparent);
  z-index: 7;
  pointer-events: none;
`;

export const TopFade = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 200px;
  background: linear-gradient(to bottom, #0a0a0f, transparent);
  z-index: 7;
  pointer-events: none;
`;

export const GlowLine = styled(motion.div)`
  width: 80px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #48cae4, #fb6f92, transparent);
  border-radius: 2px;
  opacity: 0.6;
`;
