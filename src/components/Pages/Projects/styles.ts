import styled, { keyframes } from 'styled-components';

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  ${({ theme }) => theme.media.md} {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;

  h2 {
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.title};
    white-space: nowrap;
  }

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.btnSecondaryBorder},
      transparent
    );
  }

  svg {
    color: ${({ theme }) => theme.colors.primary1};
    flex-shrink: 0;
  }
`;

export const SectionSpacer = styled.div`
  margin-top: 48px;
`;

export const ProjectCard = styled.div<{ $clickable?: boolean }>`
  background: ${({ theme }) => theme.colors.btnSecondaryBg};
  border: 1px solid ${({ theme }) => theme.colors.btnSecondaryBorder};
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: ${({ $clickable }) => ($clickable ? 'pointer' : 'default')};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px ${({ theme }) => theme.colors.btnPrimaryShadow};
  }
`;

export const CardImage = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  background: ${({ theme }) => theme.colors.btnSecondaryBorder};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CardContent = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  ${({ theme }) => theme.media.sm} {
    padding: 16px;
  }
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.title};
  display: flex;
  align-items: center;
  gap: 8px;

  a {
    color: ${({ theme }) => theme.colors.subtitle};
    display: flex;
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary1};
    }
  }
`;

export const CardDescription = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
`;

export const TagsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

export const Tag = styled.span`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  padding: 4px 12px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.primary1}15;
  color: ${({ theme }) => theme.colors.primary1};
`;

export const EmptyState = styled.div`
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 24px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.subtitle};
  text-align: center;
  border: 2px dashed ${({ theme }) => theme.colors.btnSecondaryBorder};
  border-radius: 20px;

  ${({ theme }) => theme.media.md} {
    padding: 48px 16px;
    font-size: 16px;
  }
`;

/* ─── Info Pills ─── */
export const InfoPillsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 2px;
`;

export const InfoPill = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.btnSecondaryBg};
  border: 1px solid ${({ theme }) => theme.colors.btnSecondaryBorder};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1;

  svg {
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.primary1};
  }

  strong {
    color: ${({ theme }) => theme.colors.title};
    font-weight: 600;
  }
`;

export const PlatformBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 10px;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.secondary1}18;
  color: ${({ theme }) => theme.colors.secondary1};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.03em;
  margin-left: auto;
`;

/* ─── Modal ─── */
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(40px) scale(0.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 24px;
  animation: ${fadeIn} 0.25s ease;

  ${({ theme }) => theme.media.sm} {
    padding: 12px;
  }
`;

export const ModalContent = styled.div`
  background: ${({ theme }) => theme.colors.dropdownBg};
  border: 1px solid ${({ theme }) => theme.colors.btnSecondaryBorder};
  border-radius: 24px;
  width: 100%;
  max-width: 900px;
  max-height: 85vh;
  overflow-y: auto;
  animation: ${slideUp} 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.3);

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.btnSecondaryBorder};
    border-radius: 3px;
  }

  ${({ theme }) => theme.media.sm} {
    max-height: 90vh;
    border-radius: 16px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 32px 32px 0;
  gap: 16px;

  ${({ theme }) => theme.media.sm} {
    padding: 20px 20px 0;
  }
`;

export const ModalTitle = styled.h2`
  font-size: 28px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.title};
  line-height: 1.2;

  ${({ theme }) => theme.media.sm} {
    font-size: 22px;
  }
`;

export const ModalCloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.btnSecondaryBorder};
  background: ${({ theme }) => theme.colors.btnSecondaryBg};
  color: ${({ theme }) => theme.colors.subtitle};
  cursor: pointer;
  flex-shrink: 0;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.title};
    border-color: ${({ theme }) => theme.colors.primary1};
  }
`;

export const ModalBody = styled.div`
  padding: 24px 32px 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${({ theme }) => theme.media.sm} {
    padding: 16px 20px 24px;
    gap: 20px;
  }
`;

export const ModalDescription = styled.p`
  font-size: 15px;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.text};
`;

export const ModalDivider = styled.hr`
  border: none;
  height: 1px;
  background: ${({ theme }) => theme.colors.btnSecondaryBorder};
  margin: 4px 0;
`;

export const PlatformSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.btnSecondaryBg};
  border: 1px solid ${({ theme }) => theme.colors.btnSecondaryBorder};
`;

export const PlatformTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.title};
  display: flex;
  align-items: center;
  gap: 8px;

  ${({ theme }) => theme.media.sm} {
    font-size: 16px;
  }
`;

export const PlatformDescription = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
`;

export const PlatformFeatures = styled.p`
  font-size: 13px;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.subtitle};
  font-style: italic;
`;

export const PlatformRoleBadge = styled.span`
  font-size: 12px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.primary1}15;
  color: ${({ theme }) => theme.colors.primary1};
  align-self: flex-start;
`;

export const PlatformCarouselWrapper = styled.div`
  border-radius: 12px;
  overflow: hidden;
`;
