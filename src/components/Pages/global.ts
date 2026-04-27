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
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.title};
`;

export const PageDescription = styled(motion.p)`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.navbarLinkInactive};
  font-weight: 400;
  max-width: 520px;
`;
