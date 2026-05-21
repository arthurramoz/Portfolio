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
  gap: 8px;
  margin-bottom: 48px;

  ${({ theme }) => theme.media.md} {
    margin-bottom: 32px;
  }
`;

export const PageTag = styled(motion.span)`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary1};
`;

export const PageHeading = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.title};

  ${({ theme }) => theme.media.lg} {
    font-size: 2.5rem;
  }

  ${({ theme }) => theme.media.md} {
    font-size: 2rem;
  }
`;

export const PageDescription = styled(motion.p)`
  font-size: 1.4rem;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 200;
  max-width: 520px;

  ${({ theme }) => theme.media.lg} {
    font-size: 1.2rem;
  }

  ${({ theme }) => theme.media.md} {
    font-size: 1rem;
  }
`;
