import styled, { keyframes } from 'styled-components';

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

export const TabBar = styled.div`
  display: flex;
  gap: 4px;
  padding: 5px;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid ${({ theme }) => theme.colors.btnSecondaryBorder};
  margin-bottom: 48px;
  width: fit-content;

  ${({ theme }) => theme.media.md} {
    margin-bottom: 32px;
  }
`;

interface TabButtonProps {
  $active: boolean;
}

export const TabButton = styled.button<TabButtonProps>`
  padding: 10px 28px;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  transition: all 0.25s ease;
  color: ${({ $active, theme }) =>
    $active ? '#fff' : theme.colors.navbarLinkInactive};
  background: ${({ $active, theme }) =>
    $active
      ? `linear-gradient(135deg, ${theme.colors.primary1}, ${theme.colors.secondary1})`
      : 'transparent'};
  box-shadow: ${({ $active }) =>
    $active ? '0 2px 12px rgba(0,0,0,0.12)' : 'none'};

  &:hover {
    color: ${({ $active, theme }) => (!$active ? theme.colors.title : '#fff')};
  }
`;

export const CarouselSection = styled.div`
  position: relative;
  overflow: hidden;
  padding: 20px 0;
`;

export const StaggeredGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  cursor: grab;
  user-select: none;
  overflow-x: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
  -ms-overflow-style: none;

  &:active {
    cursor: grabbing;
  }
`;

export const CarouselRow = styled.div<{ $offset?: boolean }>`
  display: flex;
  gap: 48px;
  padding-left: ${({ $offset }) => ($offset ? '140px' : '0')};
  margin-top: ${({ $offset }) => ($offset ? '-24px' : '0')};

  ${({ theme }) => theme.media.md} {
    gap: 28px;
    padding-left: ${({ $offset }) => ($offset ? '90px' : '0')};
    margin-top: ${({ $offset }) => ($offset ? '-16px' : '0')};
  }
`;

export const SkillCircle = styled.div`
  flex-shrink: 0;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.btnSecondaryBg};
  border: 1px solid ${({ theme }) => theme.colors.btnSecondaryBorder};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &:hover > div:last-child {
    opacity: 1;
  }

  ${({ theme }) => theme.media.md} {
    width: 180px;
    height: 180px;
  }
`;

export const SkillIcon = styled.div`
  font-size: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.title};
  transition: opacity 0.3s ease;

  ${({ theme }) => theme.media.md} {
    font-size: 72px;
  }
`;

export const SkillHoverName = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.btnSecondaryBg}ee;
  backdrop-filter: blur(6px);
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: 20px;

  span {
    font-size: 16px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.title};
    text-align: center;
    letter-spacing: -0.01em;
    line-height: 1.3;
  }

  ${({ theme }) => theme.media.md} {
    span {
      font-size: 13px;
    }
  }
`;

export const SkillName = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.subtitle};
  text-align: center;
  max-width: 140px;
  line-height: 1.2;

  ${({ theme }) => theme.media.md} {
    font-size: 10px;
    max-width: 100px;
  }
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;

  ${({ theme }) => theme.media.md} {
    gap: 32px;
  }
`;

export const RowLabel = styled.span`
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.colors.subtitle};
  padding-left: 4px;
`;
