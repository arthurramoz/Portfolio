import styled, { keyframes } from 'styled-components';
import { motion } from 'motion/react';

export const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 999999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) =>
    theme.colors.dropdownBg === '#ffffff'
      ? 'rgba(255, 255, 255, 0.82)'
      : 'rgba(10, 10, 14, 0.82)'};
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.9;
  }
  50% {
    transform: scale(1.12);
    opacity: 1;
  }
`;

export const LoadingContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary1}20,
    ${({ theme }) => theme.colors.secondary1}20
  );
  color: ${({ theme }) => theme.colors.primary1};
  animation: ${pulse} 1.6s ease-in-out infinite;
`;

export const LoadingLabel = styled.span`
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.subtitle};
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid ${({ theme }) => theme.colors.primary1}30;
  border-top-color: ${({ theme }) => theme.colors.primary1};
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;
