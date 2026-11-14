import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
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

export const Availability = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 20px 0 0;
  font-size: 0.875rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text};

  ${({ theme }) => theme.media.lg} {
    justify-content: center;
  }
`;

export const StatusDot = styled.span`
  flex: 0 0 7px;
  height: 7px;
  border-radius: 50%;
  background: #22c55e;
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
    padding: 8.5rem clamp(20px, 6vw, 32px) 3rem;
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
    align-items: center;
    width: 100%;
    gap: 8px 16px;
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
    width: auto;
    padding: 10px 2px;
    min-height: 44px;
    background: transparent;
    border: 0;
    border-radius: 0;
    backdrop-filter: none;
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
    width: auto;
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
    width: auto;
    padding: 10px 2px;
    min-height: 44px;
    background: transparent;
    border: 0;
    border-radius: 0;
    backdrop-filter: none;
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

export const ProfileDetails = styled.details`
  margin-top: 24px;
  color: ${({ theme }) => theme.colors.subtitle};

  summary {
    width: fit-content;
    padding-block: 12px;
    font-size: 0.875rem;
    cursor: pointer;
  }

  ${({ theme }) => theme.media.lg} {
    summary { margin-inline: auto; }
  }
`;

export const Facts = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 24px;
  list-style: none;
  margin: 28px 0 0;
  padding: 20px 0 0;
  max-width: 560px;
  border-top: 1px solid ${({ theme }) => theme.colors.btnSecondaryBorder};

  ${({ theme }) => theme.media.lg} {
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  }

  ${({ theme }) => theme.media.sm} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px 16px;
    margin-top: 20px;
    padding-top: 16px;
    text-align: left;
  }
`;

export const Fact = styled.li`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.subtitle};

  strong {
    font-size: 16px;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.title};
  }

  svg {
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.accentText};
  }

  ${({ theme }) => theme.media.sm} {
    font-size: 13px;
  }
`;
