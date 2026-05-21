import styled from 'styled-components';
import { motion } from 'motion/react';

export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 24px;

  ${({ theme }) => theme.media.sm} {
    grid-template-columns: 1fr;
  }
`;

export const TestimonialCard = styled(motion.div)`
  position: relative;
  background: ${({ theme }) => theme.colors.dropdownBg};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.colors.navbarBorder};
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 4px 24px ${({ theme }) => theme.colors.navbarShadow};
  transition: box-shadow 0.35s ease, border-color 0.35s ease, transform 0.35s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary1}40;
    box-shadow: 0 8px 40px ${({ theme }) => theme.colors.navbarShadowHover};
    transform: translateY(-2px);
  }

  ${({ theme }) => theme.media.md} {
    padding: 24px 20px;
  }
`;

export const QuoteMark = styled.span`
  font-size: 4rem;
  font-weight: 800;
  line-height: 1;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary1}, ${({ theme }) => theme.colors.secondary1});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
  user-select: none;
`;

export const QuoteText = styled.p`
  font-size: 0.92rem;
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.navbarLinkInactive};
  font-style: italic;
  flex: 1;
  margin-bottom: 24px;
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  border-top: 1px solid ${({ theme }) => theme.colors.navbarBorder};
  padding-top: 16px;
`;

export const AuthorName = styled.span`
  font-size: 0.92rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.title};
`;

export const AuthorRole = styled.span`
  font-size: 0.78rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.navbarLinkInactive};
`;
