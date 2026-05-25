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
    padding-top: 8rem;
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
  }
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${({ theme }) => theme.media.lg} {
    align-items: center;
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
  }

  ${({ theme }) => theme.media.sm} {
    font-size: 32px;
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
  }
`;

const BaseButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 32px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  border: none;
  letter-spacing: -0.01em;
`;

export const PrimaryButton = styled(BaseButton)`
  background: ${({ theme }) => theme.colors.btnPrimaryBg};
  color: ${({ theme }) => theme.colors.btnPrimaryText};
  gap: 10px;
  box-shadow: 0 8px 24px ${({ theme }) => theme.colors.btnPrimaryShadow};

  &:hover {
    transform: translateY(-4px) scale(1.06);
    box-shadow: 0 16px 40px ${({ theme }) => theme.colors.btnPrimaryHoverShadow};
    background: ${({ theme }) => theme.colors.btnPrimaryHoverBg};
  }
`;

export const ArrowDownIcon = styled(FiArrowRight)`
  transition: transform 0.3s ease;
  ${PrimaryButton}:hover & {
    transform: rotate(90deg);
  }
`;

export const SecondaryButton = styled(BaseButton)`
  background: ${({ theme }) => theme.colors.btnSecondaryBg};
  color: ${({ theme }) => theme.colors.btnSecondaryText};
  border: 1px solid ${({ theme }) => theme.colors.btnSecondaryBorder};
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
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
