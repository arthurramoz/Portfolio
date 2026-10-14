import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'motion/react';
import styled, { keyframes } from 'styled-components';

const fadeInUp30 = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInUp20 = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulseDot = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.6);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 7px rgba(34, 197, 94, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`;

export const StatusBadge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  border-radius: 9999px;
  background: ${({ theme }) => theme.colors.navbarBg};
  border: 1px solid ${({ theme }) => theme.colors.navbarBorder};
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: 0 2px 14px ${({ theme }) => theme.colors.navbarShadow};
  width: fit-content;
  max-width: 100%;
  box-sizing: border-box;
  cursor: default;

  span {
    font-size: 13px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.title};
    letter-spacing: -0.01em;
    line-height: 1.35;
  }

  @media (max-width: 600px) {
    padding: 7px 12px;
    gap: 8px;
    text-align: left;
    span {
      font-size: 11.5px;
    }
  }
`;

export const StatusDot = styled.span`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: #22c55e;
  display: inline-block;
  flex-shrink: 0;
  animation: ${pulseDot} 2s infinite cubic-bezier(0.4, 0, 0.6, 1);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const Section = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  padding: 6rem 24px 0;
  max-width: ${({ theme }) => theme.max};
  background: transparent;

  ${({ theme }) => theme.media.lg} {
    padding-top: 7rem;
    min-height: auto;
    padding-bottom: 2rem;
  }

  ${({ theme }) => theme.media.sm} {
    padding: 5.5rem 16px 2rem;
    min-height: auto;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
  padding-left: 40px;

  ${({ theme }) => theme.media.lg} {
    flex-direction: column;
    text-align: center;
    padding-left: 0;
    gap: 28px;
  }

  ${({ theme }) => theme.media.sm} {
    gap: 20px;
  }
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${({ theme }) => theme.media.lg} {
    align-items: center;
    gap: 20px;
  }

  ${({ theme }) => theme.media.sm} {
    gap: 16px;
    width: 100%;
  }
`;

export const Greeting = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary1};
  
  animation: ${fadeInUp30} 0.7s cubic-bezier(0.25, 0.1, 0.25, 1) both;
  animation-delay: 0.1s;
`;

export const Name = styled.h1`
  font-size: 56px;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.title};
  line-height: 1.05;
  margin: 8px 0 12px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.title} 0%,
    ${({ theme }) => theme.colors.textGradientEnd} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: ${fadeInUp20} 0.7s cubic-bezier(0.25, 0.1, 0.25, 1) both;
  animation-delay: 0.2s;

  ${({ theme }) => theme.media.lg} {
    font-size: 40px;
    margin: 6px 0 10px;
  }

  ${({ theme }) => theme.media.sm} {
    font-size: clamp(28px, 8vw, 36px);
    line-height: 1.15;
    margin: 4px 0 8px;
  }
`;

export const InfoBlock = styled.div`
  animation: ${fadeInUp20} 0.7s cubic-bezier(0.25, 0.1, 0.25, 1) both;
  animation-delay: 0.3s;
`;

export const Role = styled.h2`
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.subtitle};

  ${({ theme }) => theme.media.lg} {
    font-size: 20px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
  max-width: 500px;
  font-weight: 400;

  ${({ theme }) => theme.media.lg} {
    font-size: 16px;
    max-width: 560px;
  }

  ${({ theme }) => theme.media.sm} {
    font-size: 15px;
    line-height: 1.55;
    max-width: 100%;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 12px;

  ${({ theme }) => theme.media.lg} {
    justify-content: center;
  }

  ${({ theme }) => theme.media.sm} {
    flex-direction: column;
    width: 100%;
    gap: 10px;
    margin-top: 16px;
  }
`;

const BaseLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  border-radius: 50px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  border: none;
  letter-spacing: -0.01em;
  transition: transform 0.25s cubic-bezier(0.25, 0.1, 0.25, 1),
              background 0.25s ease,
              border-color 0.25s ease,
              box-shadow 0.25s ease,
              color 0.25s ease;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary1};
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none !important;
    transform: none !important;
  }
`;

export const PrimaryButton = styled(BaseLink)`
  background: ${({ theme }) => theme.colors.btnPrimaryBg};
  color: ${({ theme }) => theme.colors.btnPrimaryText};
  gap: 10px;
  box-shadow: 0 8px 24px ${({ theme }) => theme.colors.btnPrimaryShadow};

  ${({ theme }) => theme.media.sm} {
    width: 100%;
    padding: 13px 20px;
  }

  &:hover {
    transform: translateY(-3px) scale(1.03);
    box-shadow: 0 16px 40px ${({ theme }) => theme.colors.btnPrimaryHoverShadow};
    background: ${({ theme }) => theme.colors.btnPrimaryHoverBg};
    color: ${({ theme }) => theme.colors.btnPrimaryText};
  }
`;

export const ArrowDownIcon = styled(FiArrowRight)`
  transition: transform 0.25s ease;
  ${PrimaryButton}:hover & {
    transform: translateX(4px);
  }
`;

export const SecondaryButton = styled(BaseLink)`
  background: ${({ theme }) => theme.colors.btnSecondaryBg};
  color: ${({ theme }) => theme.colors.btnSecondaryText};
  border: 1px solid ${({ theme }) => theme.colors.btnSecondaryBorder};
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);

  ${({ theme }) => theme.media.sm} {
    width: 100%;
    padding: 13px 20px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.navbarBgHover};
    border-color: ${({ theme }) => theme.colors.primary1}60;
    transform: translateY(-2px);
    color: ${({ theme }) => theme.colors.title};
  }
`;

export const ResumeWrapper = styled.div`
  position: relative;
  display: inline-flex;

  ${({ theme }) => theme.media.sm} {
    width: 100%;
  }
`;

export const ResumeButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 22px;
  border-radius: 50px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.25s ease,
              background 0.25s ease,
              border-color 0.25s ease,
              color 0.25s ease;
  letter-spacing: -0.01em;
  background: transparent;
  color: ${({ theme }) => theme.colors.primary1};
  border: 1px solid ${({ theme }) => theme.colors.primary1}40;

  ${({ theme }) => theme.media.sm} {
    width: 100%;
    padding: 13px 20px;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary1};
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none !important;
    transform: none !important;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.primary1}12;
    border-color: ${({ theme }) => theme.colors.primary1};
    transform: translateY(-2px);
  }

  svg {
    transition: transform 0.25s ease;
  }
`;
export const IllustrationBlock = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.media.lg} {
    max-width: 320px;
  }
`;
