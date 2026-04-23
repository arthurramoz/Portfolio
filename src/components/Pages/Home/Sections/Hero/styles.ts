import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import styled from 'styled-components';

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
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
  padding-left: 40px;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
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

  @media (max-width: 900px) {
    font-size: 40px;
  }
`;

export const Role = styled.h2`
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.subtitle};

  @media (max-width: 900px) {
    font-size: 20px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
  max-width: 500px;
  font-weight: 400;

  @media (max-width: 900px) {
    font-size: 16px;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 12px;

  @media (max-width: 900px) {
    justify-content: center;
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
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
`;

export const IllustrationBlock = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    max-width: 320px;
  }
`;
