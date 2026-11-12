import styled, { keyframes } from 'styled-components';
import type { ProjectType } from '@/config/projects';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const riseIn = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

const TYPE_COLORS: Record<ProjectType, string> = {
  ecommerce: '#fb6f92',
  dashboard: '#48cae4',
  landing: '#10b981',
  saas: '#8b5cf6',
  other: '#f59e0b',
};

/* ---------- Cabeçalho ---------- */

export const StatsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
  padding: 20px 0;
  margin-bottom: 28px;
  border-top: 1px solid ${({ theme }) => theme.colors.btnSecondaryBorder};
  border-bottom: 1px solid ${({ theme }) => theme.colors.btnSecondaryBorder};

  ${({ theme }) => theme.media.sm} {
    gap: 16px;
    padding: 16px 0;
    margin-bottom: 20px;
  }
`;

export const Stats = styled.dl`
  display: flex;
  gap: 40px;
  margin: 0;

  ${({ theme }) => theme.media.sm} {
    gap: 0;
    width: 100%;
    justify-content: space-between;
  }
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 2px;

  dd {
    margin: 0;
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: -0.03em;
    line-height: 1;
    color: ${({ theme }) => theme.colors.title};
  }

  dt {
    font-size: 0.82rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.subtitle};
  }

  ${({ theme }) => theme.media.sm} {
    dd {
      font-size: 1.6rem;
    }
    dt {
      font-size: 0.75rem;
    }
  }
`;

export const HireButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 22px;
  border-radius: 999px;
  border: none;
  font-size: 0.92rem;
  font-weight: 700;
  background: ${({ theme }) => theme.colors.btnPrimaryBg};
  color: ${({ theme }) => theme.colors.btnPrimaryText};
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.btnPrimaryHoverBg};
    transform: translateY(-1px);
  }

  ${({ theme }) => theme.media.sm} {
    width: 100%;
  }
`;

/* ---------- Filtros ---------- */

export const FilterBar = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 32px;

  ${({ theme }) => theme.media.md} {
    flex-wrap: nowrap;
    overflow-x: auto;
    margin: 0 -16px 24px;
    padding: 0 16px 4px;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const FilterButton = styled.button<{ $active: boolean }>`
  flex-shrink: 0;
  padding: 9px 16px;
  border-radius: 999px;
  font-size: 0.86rem;
  font-weight: 600;
  white-space: nowrap;
  border: 1px solid
    ${({ theme, $active }) =>
      $active ? theme.colors.title : theme.colors.btnSecondaryBorder};
  background: ${({ theme, $active }) =>
    $active ? theme.colors.title : 'transparent'};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.btnPrimaryText : theme.colors.subtitle};
  transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.title};
    color: ${({ theme, $active }) =>
      $active ? theme.colors.btnPrimaryText : theme.colors.title};
  }

  span {
    margin-left: 6px;
    opacity: 0.6;
    font-weight: 500;
  }
`;

/* ---------- Seções e grid ---------- */

export const SectionLabel = styled.h2`
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accentText};
  margin: 0 0 16px;
`;

export const Section = styled.section`
  margin-bottom: 56px;

  ${({ theme }) => theme.media.md} {
    margin-bottom: 40px;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;

  ${({ theme }) => theme.media.lg} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
  }

  @media (max-width: 640px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 16px;
  }
`;

/* ---------- Card ---------- */

export const Card = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.btnSecondaryBg};
  border: 1px solid ${({ theme }) => theme.colors.btnSecondaryBorder};
  cursor: pointer;
  animation: ${riseIn} 0.4s ease both;
  transition: transform 0.25s ease, border-color 0.25s ease,
    box-shadow 0.25s ease;

  @media (hover: hover) {
    &:hover {
      transform: translateY(-4px);
      border-color: ${({ theme }) => theme.colors.primary1}70;
      box-shadow: 0 16px 40px ${({ theme }) => theme.colors.btnPrimaryShadow};
    }

    &:hover img {
      transform: scale(1.03);
    }
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accentText};
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition: none;
  }
`;

export const CardMedia = styled.div<{ $type: ProjectType; $empty?: boolean }>`
  position: relative;
  aspect-ratio: 4 / 3;

  @media (max-width: 640px) {
    aspect-ratio: ${({ $empty }) => ($empty ? '16 / 7' : '4 / 3')};
  }

  overflow: hidden;
  background: linear-gradient(
    135deg,
    ${({ $type }) => TYPE_COLORS[$type]}33 0%,
    ${({ theme }) => theme.colors.bgPrimary2} 100%
  );

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top left;
    transition: transform 0.4s ease;
  }
`;

export const CardPlaceholder = styled.div<{ $type: ProjectType }>`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: ${({ $type }) => TYPE_COLORS[$type]};

  strong {
    font-size: clamp(1.8rem, 4vw, 2.6rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    color: ${({ theme }) => theme.colors.title};
    text-align: center;
    padding: 0 16px;
  }
`;

export const TypeBadge = styled.span<{ $type: ProjectType }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text};

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${({ $type }) => TYPE_COLORS[$type]};
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 18px 20px 20px;
  flex: 1;

  ${({ theme }) => theme.media.sm} {
    padding: 16px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
`;

export const Logo = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 9px;
  flex-shrink: 0;
  object-fit: cover;
  background: #14172a;
`;

export const CardTitle = styled.h3`
  flex: 1;
  min-width: 0;
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.title};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardYear = styled.span`
  flex-shrink: 0;
  font-size: 0.82rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  font-variant-numeric: tabular-nums;
`;

export const CardRole = styled.p`
  font-size: 0.82rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accentText};
`;

export const CardDescription = styled.p<{ $lines?: number }>`
  font-size: 0.92rem;
  line-height: 1.55;
  color: ${({ theme }) => theme.colors.subtitle};
  display: -webkit-box;
  -webkit-line-clamp: ${({ $lines }) => $lines ?? 2};
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Facts = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px 16px;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.82rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.title};
    min-width: 0;
  }

  svg {
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.accentText};
  }
`;

export const TagsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

/* No celular as tecnologias ficam so no detalhe do projeto */
export const CardTags = styled(TagsRow)`
  @media (max-width: 640px) {
    display: none;
  }
`;

export const Tag = styled.span`
  font-size: 0.74rem;
  font-weight: 600;
  padding: 4px 9px;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.navbarLinkBgActive};
  color: ${({ theme }) => theme.colors.subtitle};
  white-space: nowrap;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: auto;
  padding-top: 8px;
`;

export const DetailsLink = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.88rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.title};

  svg {
    transition: transform 0.2s ease;
  }

  ${Card}:hover & svg {
    transform: translateX(3px);
  }
`;

export const LiveLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 12px;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accentText};
  border: 1px solid ${({ theme }) => theme.colors.primary1}55;
  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary1}1f;
  }
`;

export const EmptyState = styled.div`
  padding: 64px 24px;
  text-align: center;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.subtitle};
  border: 1px dashed ${({ theme }) => theme.colors.btnSecondaryBorder};
  border-radius: 20px;
`;

/* ---------- Modal ---------- */

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(0, 0, 0, 0.72);
  animation: ${fadeIn} 0.2s ease;

  @media (max-width: 640px) {
    padding: 0;
    align-items: stretch;
  }
`;

export const ModalContent = styled.div`
  width: 100%;
  max-width: 920px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.footerBg};
  color: #f0f0f2;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.5);
  animation: ${riseIn} 0.3s ease;

  @media (max-width: 640px) {
    max-height: none;
    height: 100%;
    border-radius: 0;
    border: none;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 18px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  flex-shrink: 0;

  ${({ theme }) => theme.media.sm} {
    padding: 14px 16px;
  }
`;

export const ModalTitle = styled.h2`
  flex: 1;
  min-width: 0;
  font-size: 1.3rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ theme }) => theme.media.sm} {
    font-size: 1.1rem;
  }
`;

export const ModalCloseButton = styled.button`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: transparent;
  color: #fff;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px;
  overflow-y: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;

  /* Itens de uma coluna flex com scroll nao podem encolher (a galeria sumia) */
  & > * {
    flex-shrink: 0;
  }

  ${({ theme }) => theme.media.sm} {
    padding: 16px 16px 32px;
    gap: 16px;
  }
`;

export const ModalRole = styled.p`
  font-size: 0.9rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary1};
`;

export const ModalDescription = styled.p`
  font-size: 1rem;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.78);
`;

export const ModalFacts = styled(Facts)`
  li {
    color: #fff;
    font-size: 0.9rem;
  }

  svg {
    color: ${({ theme }) => theme.colors.primary1};
  }
`;

export const ModalTags = styled(TagsRow)`
  ${Tag} {
    background: rgba(255, 255, 255, 0.08);
    color: rgba(255, 255, 255, 0.85);
  }
`;

export const ModalSubheading = styled.h3`
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: -8px;
`;

export const ModalLive = styled.a`
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 20px;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 700;
  background: ${({ theme }) => theme.colors.primary1};
  color: #0a0a0b;

  ${({ theme }) => theme.media.sm} {
    align-self: stretch;
    justify-content: center;
  }
`;

export const PlatformSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`;

export const PlatformTitle = styled.h4`
  font-size: 1.05rem;
  font-weight: 700;
  color: #fff;
`;

export const PlatformText = styled.p`
  font-size: 0.92rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
`;
