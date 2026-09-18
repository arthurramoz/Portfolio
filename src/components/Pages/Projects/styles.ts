import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(40px) scale(0.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

const pulseGlow = keyframes`
  0%, 100% { box-shadow: 0 0 20px ${() => 'rgba(99,102,241,0.15)'}; }
  50% { box-shadow: 0 0 40px ${() => 'rgba(99,102,241,0.35)'}; }
`;

export const ImpactBanner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 28px 36px;
  border-radius: 24px;
  margin-bottom: 48px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary1}18 0%,
    ${({ theme }) => theme.colors.secondary1}10 50%,
    ${({ theme }) => theme.colors.primary1}08 100%
  );
  border: 1px solid ${({ theme }) => theme.colors.primary1}30;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${({ theme }) => theme.colors.primary1}08 50%,
      transparent 100%
    );
    background-size: 200% 100%;
    animation: ${shimmer} 4s linear infinite;
    pointer-events: none;
  }

  ${({ theme }) => theme.media.md} {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 24px;
    gap: 20px;
  }
`;

export const ImpactMetrics = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;

  ${({ theme }) => theme.media.md} {
    gap: 20px;
  }
`;

export const ImpactMetric = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const ImpactNumber = styled.span`
  font-size: 32px;
  font-weight: 900;
  line-height: 1;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary1},
    ${({ theme }) => theme.colors.secondary1}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  ${({ theme }) => theme.media.md} {
    font-size: 26px;
  }
`;

export const ImpactLabel = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.subtitle};
  font-weight: 500;
  white-space: nowrap;
`;

export const ImpactDivider = styled.div`
  width: 1px;
  height: 40px;
  background: ${({ theme }) => theme.colors.btnSecondaryBorder};
  flex-shrink: 0;

  ${({ theme }) => theme.media.md} {
    display: none;
  }
`;

export const ImpactCta = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.primary1};
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px ${({ theme }) => theme.colors.primary1}40;
    opacity: 0.92;
  }

  &:active {
    transform: translateY(0);
  }
`;

export const FilterBar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

export const FilterButton = styled.button<{ $active: boolean }>`
  padding: 8px 18px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid ${({ theme, $active }) =>
    $active ? theme.colors.primary1 : theme.colors.btnSecondaryBorder};
  background: ${({ theme, $active }) =>
    $active ? `${theme.colors.primary1}18` : theme.colors.btnSecondaryBg};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.primary1 : theme.colors.subtitle};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary1};
    color: ${({ theme }) => theme.colors.primary1};
    background: ${({ theme }) => theme.colors.primary1}10;
  }
`;

export const TimelineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
`;

export const YearSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const YearHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const YearLabel = styled.div`
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary1};
  background: ${({ theme }) => theme.colors.primary1}15;
  padding: 6px 16px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.primary1}30;
  white-space: nowrap;
`;

export const YearLine = styled.div`
  flex: 1;
  height: 1px;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.btnSecondaryBorder},
    transparent
  );
`;

export const YearCount = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.subtitle};
  white-space: nowrap;
`;

export const ProjectsGrid = styled.div`
  columns: 2;
  column-gap: 24px;

  > * {
    break-inside: avoid;
    margin-bottom: 24px;
  }

  ${({ theme }) => theme.media.md} {
    columns: 1;
    column-gap: 0;

    > * {
      margin-bottom: 20px;
    }
  }
`;

export const ProjectCard = styled.div<{ $clickable?: boolean; $featured?: boolean }>`
  background: ${({ theme }) => theme.colors.btnSecondaryBg};
  border: 1px solid ${({ theme, $featured }) =>
    $featured ? `${theme.colors.primary1}40` : theme.colors.btnSecondaryBorder};
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  cursor: ${({ $clickable }) => ($clickable ? 'pointer' : 'default')};
  position: relative;

  ${({ $featured, theme }) =>
    $featured &&
    `
    box-shadow: 0 0 0 1px ${theme.colors.primary1}20, 0 4px 24px ${theme.colors.primary1}10;
  `}

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px ${({ theme }) => theme.colors.btnPrimaryShadow};
    border-color: ${({ theme }) => theme.colors.primary1}50;
  }
`;

export const FeaturedBadge = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  border-radius: 8px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary1},
    ${({ theme }) => theme.colors.secondary1}
  );
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  box-shadow: 0 4px 12px ${({ theme }) => theme.colors.primary1}40;
`;

export const TypeBadge = styled.span<{ $type: 'ecommerce' | 'dashboard' | 'landing' | 'saas' | 'other' }>`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 10px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.03em;

  ${({ $type, theme }) => {
    switch ($type) {
      case 'ecommerce':
        return `
          background: ${theme.colors.secondary1}18;
          color: ${theme.colors.secondary1};
        `;
      case 'dashboard':
        return `
          background: ${theme.colors.primary1}18;
          color: ${theme.colors.primary1};
        `;
      case 'landing':
        return `
          background: #10b98118;
          color: #10b981;
        `;
      case 'saas':
        return `
          background: #8b5cf618;
          color: #8b5cf6;
        `;
      case 'other':
        return `
          background: #f59e0b18;
          color: #f59e0b;
        `;
      default:
        return '';
    }
  }}
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
  padding: 20px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  ${({ theme }) => theme.media.sm} {
    padding: 16px;
  }
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.title};
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;

  a {
    color: ${({ theme }) => theme.colors.subtitle};
    display: flex;
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary1};
    }
  }
`;

export const CardMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

export const CardDescription = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
`;

export const TagsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
`;

export const Tag = styled.span`
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
  padding: 3px 10px;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.primary1}15;
  color: ${({ theme }) => theme.colors.primary1};
`;

export const EmptyState = styled.div`
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
  padding: 5px 12px;
  border-radius: 8px;
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

export const TabBar = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px;
  border-radius: 14px;
  background: ${({ theme }) => theme.colors.btnSecondaryBg};
  border: 1px solid ${({ theme }) => theme.colors.btnSecondaryBorder};
  margin-bottom: 32px;
  width: fit-content;
`;

export const TabButton = styled.button<{ $active: boolean }>`
  position: relative;
  padding: 10px 28px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  border: none;
  background: ${({ $active, theme }) =>
    $active ? theme.colors.primary1 : 'transparent'};
  color: ${({ $active, theme }) =>
    $active ? '#fff' : theme.colors.subtitle};
  transition: all 0.25s cubic-bezier(0.25, 0.1, 0.25, 1);
  white-space: nowrap;

  &:hover {
    color: ${({ $active, theme }) =>
      $active ? '#fff' : theme.colors.title};
    background: ${({ $active, theme }) =>
      $active ? theme.colors.primary1 : `${theme.colors.primary1}10`};
  }

  ${({ theme }) => theme.media.sm} {
    padding: 8px 20px;
    font-size: 13px;
  }
`;

export const AppsEmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 100px 24px;
  text-align: center;
  border: 2px dashed ${({ theme }) => theme.colors.btnSecondaryBorder};
  border-radius: 24px;
  background: ${({ theme }) => theme.colors.primary1}05;

  svg {
    color: ${({ theme }) => theme.colors.primary1};
    opacity: 0.4;
  }

  span {
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.subtitle};
    max-width: 320px;
    line-height: 1.5;
  }

  ${({ theme }) => theme.media.md} {
    padding: 64px 16px;

    span {
      font-size: 16px;
    }
  }
`;
