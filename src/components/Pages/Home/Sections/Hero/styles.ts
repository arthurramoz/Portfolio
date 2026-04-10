import { motion } from 'framer-motion';
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

export const Greeting = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary1};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const Name = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.title};
  line-height: 1.1;
  margin: 4px 0 8px;
`;

export const Role = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.secondary1};
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.75;
  color: #666;
  max-width: 440px;
`;

export const Actions = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 8px;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const BaseButton = styled.button`
  padding: 14px 32px;
  border-radius: 50px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
  border: none;
`;

export const PrimaryButton = styled(BaseButton)`
  background: ${({ theme }) => theme.colors.primary1};
  color: #fff;
  box-shadow: 0 4px 20px ${({ theme }) => theme.colors.bgPrimary1};

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 28px ${({ theme }) => theme.colors.primary1}60;
  }
`;

export const SecondaryButton = styled(BaseButton)`
  background: transparent;
  color: ${({ theme }) => theme.colors.title};
  border: 2px solid ${({ theme }) => theme.colors.primary2};

  &:hover {
    background: ${({ theme }) => theme.colors.bgPrimary2};
    transform: translateY(-3px);
  }
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
