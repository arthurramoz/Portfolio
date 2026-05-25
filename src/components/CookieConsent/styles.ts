import styled from 'styled-components';
import { motion } from 'motion/react';

export const ConsentBanner = styled(motion.div)`
  position: fixed;
  bottom: 24px;
  left: 24px;
  z-index: 99999;
  width: calc(100% - 48px);
  max-width: 500px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.btnSecondaryBorder};
  background: ${({ theme }) => theme.colors.navbarBg};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.25);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${({ theme }) => theme.media.sm} {
    bottom: 16px;
    left: 16px;
    width: calc(100% - 32px);
    padding: 18px;
    gap: 14px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Title = styled.h3`
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.title};
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Description = styled.p`
  font-size: 13px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text};
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 10px;
  width: 100%;

  ${({ theme }) => theme.media.sm} {
    flex-direction: column-reverse;
  }
`;

export const DeclineButton = styled.button`
  width: 140px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.btnSecondaryBorder};
  background: transparent;
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ${({ theme }) => theme.media.sm} {
    width: 100%;
  }
`;

export const AcceptButton = styled.button`
  width: 140px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background: ${({ theme }) => theme.colors.primary1};
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:active {
    transform: translateY(0);
  }

  ${({ theme }) => theme.media.sm} {
    width: 100%;
  }
`;

export const CookieIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary1};
`;
