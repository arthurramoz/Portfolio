import styled from 'styled-components';
import { motion } from 'motion/react';

export const PageHint = styled(motion.span)`
  font-size: 12px;
  font-weight: 400;
  font-style: italic;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.6;
  margin-top: 2px;
`;

export const SkillsPageWrapper = styled.div`
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

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;

  ${({ theme }) => theme.media.md} {
    gap: 40px;
  }
`;

export const RowLabel = styled.span`
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.colors.subtitle};
  padding-left: 4px;
  margin-bottom: 20px;
  display: block;

  ${({ theme }) => theme.media.md} {
    margin-bottom: 16px;
  }
`;

export const GlassGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-auto-flow: dense;
  gap: 14px;

  & > * {
    aspect-ratio: 1;
    min-height: 0;
  }

  ${({ theme }) => theme.media.lg} {
    grid-template-columns: repeat(6, 1fr);
    gap: 12px;
  }

  ${({ theme }) => theme.media.md} {
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }

  ${({ theme }) => theme.media.sm} {
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }
`;

interface CardWrapperProps {
  $colSpan: number;
  $rowSpan: number;
}

export const CardWrapper = styled.div<CardWrapperProps>`
  grid-column: span ${({ $colSpan }) => $colSpan};
  grid-row: span ${({ $rowSpan }) => $rowSpan};
`;

const isDark = (theme: any) => theme.colors.title === '#f0f0f2';

export const GlassCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
  overflow: hidden;

  background: ${({ theme }) =>
    isDark(theme)
      ? 'rgba(255, 255, 255, 0.04)'
      : 'rgba(255, 255, 255, 0.65)'};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  border: 1px solid
    ${({ theme }) =>
    isDark(theme)
      ? 'rgba(255, 255, 255, 0.08)'
      : 'rgba(255, 255, 255, 0.85)'};

  box-shadow: ${({ theme }) =>
    isDark(theme)
      ? `inset 0 1px 1px rgba(255, 255, 255, 0.06),
         0 4px 24px rgba(0, 0, 0, 0.12),
         0 1px 3px rgba(0, 0, 0, 0.08)`
      : `inset 0 1px 2px rgba(255, 255, 255, 0.5),
         0 4px 24px rgba(0, 0, 0, 0.04),
         0 1px 3px rgba(0, 0, 0, 0.03)`};

  transition:
    transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    box-shadow 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    transform: scale(1.05);
    box-shadow: ${({ theme }) =>
    isDark(theme)
      ? `inset 0 1px 1px rgba(255, 255, 255, 0.08),
           0 8px 32px rgba(0, 0, 0, 0.18),
           0 2px 6px rgba(0, 0, 0, 0.1)`
      : `inset 0 1px 2px rgba(255, 255, 255, 0.6),
           0 8px 32px rgba(0, 0, 0, 0.07),
           0 2px 6px rgba(0, 0, 0, 0.04)`};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 50%;
    border-radius: 24px 24px 0 0;
    background: linear-gradient(
      180deg,
      ${({ theme }) =>
    isDark(theme)
      ? 'rgba(255, 255, 255, 0.04)'
      : 'rgba(255, 255, 255, 0.35)'},
      transparent
    );
    pointer-events: none;
  }

  ${({ theme }) => theme.media.md} {
    border-radius: 20px;
    &::before {
      border-radius: 20px 20px 0 0;
    }
  }

  ${({ theme }) => theme.media.sm} {
    border-radius: 16px;
    &::before {
      border-radius: 16px 16px 0 0;
    }
  }
`;

export const SkillIconWrapper = styled.div<{ $size: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ $size }) => $size}px;
  transition: transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  z-index: 1;

  svg {
    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.08));
  }
`;

export const SkillTooltip = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  padding: 4px 12px;
  border-radius: 8px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.02em;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease, transform 0.25s ease;

  background: ${({ theme }) =>
    isDark(theme) ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.06)'};
  color: ${({ theme }) => theme.colors.subtitle};
  backdrop-filter: blur(8px);

  ${GlassCard}:hover & {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }

  ${({ theme }) => theme.media.sm} {
    font-size: 10px;
    bottom: 6px;
    padding: 3px 8px;
  }
`;

export const TabBar = styled.div``;
export const TabButton = styled.button<{ $active: boolean }>``;
export const CarouselSection = styled.div``;
export const StaggeredGrid = styled.div``;
export const CarouselRow = styled.div<{ $offset?: boolean }>``;
export const SkillCircle = styled.div``;
export const SkillIcon = styled.div``;
export const SkillHoverName = styled.div``;
export const SkillName = styled.span``;
