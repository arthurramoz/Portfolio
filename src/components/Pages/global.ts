import styled from 'styled-components';
import { motion } from 'motion/react';

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${({ theme }) => theme.max};
  width: 100%;
  margin: 0 auto;
`;

export const PageWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  max-width: ${({ theme }) => theme.max};
  margin: 0 auto;
  padding: ${({ theme }) => theme.pagePadding.default};

  ${({ theme }) => theme.media.lg} {
    padding: ${({ theme }) => theme.pagePadding.lg};
  }

  ${({ theme }) => theme.media.sm} {
    padding: ${({ theme }) => theme.pagePadding.sm};
  }
`;

export const PageTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 48px;

  ${({ theme }) => theme.media.md} {
    gap: 10px;
    margin-bottom: 32px;
  }
`;

export const PageTag = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accentText};

  &::before {
    content: '';
    width: 22px;
    height: 2px;
    border-radius: 2px;
    background: ${({ theme }) => theme.colors.primary1};
  }
`;

export const PageHeading = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: -0.03em;
  line-height: 1.08;
  color: ${({ theme }) => theme.colors.title};

  ${({ theme }) => theme.media.lg} {
    font-size: 2.5rem;
  }

  ${({ theme }) => theme.media.md} {
    font-size: 2rem;
  }
`;

export const PageDescription = styled(motion.p)`
  font-size: 1.15rem;
  line-height: 1.55;
  color: ${({ theme }) => theme.colors.subtitle};
  font-weight: 400;
  max-width: 560px;

  ${({ theme }) => theme.media.lg} {
    font-size: 1.05rem;
  }

  ${({ theme }) => theme.media.md} {
    font-size: 1rem;
  }
`;
