import styled from 'styled-components';
import { motion } from 'motion/react';

const ANCHOR = 34;
const PILL_HEIGHT = 36;
const PILL_HEIGHT_MOBILE = 32;
const DOT_SIZE = 12;
const SPINE_SIZE = 36;
const SPINE_SIZE_MOBILE = 32;
const MOBILE_COLUMN = 32;

export const FilterBar = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 64px;

  ${({ theme }) => theme.media.md} {
    justify-content: flex-start;
    margin-bottom: 40px;
  }
`;

export const FilterChip = styled.button<{ $active: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 36px;
  padding: 0 16px;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid
    ${({ $active, theme }) =>
      $active ? theme.colors.btnPrimaryBg : theme.colors.navbarBorder};
  background: ${({ $active, theme }) =>
    $active ? theme.colors.btnPrimaryBg : theme.colors.navbarBg};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.btnPrimaryText : theme.colors.navbarLinkInactive};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition:
    background 0.25s ease,
    color 0.25s ease,
    border-color 0.25s ease;

  &:hover {
    color: ${({ $active, theme }) =>
      $active ? theme.colors.btnPrimaryText : theme.colors.navbarLinkActive};
    border-color: ${({ $active, theme }) =>
      $active ? theme.colors.btnPrimaryBg : theme.colors.btnSecondaryBorder};
  }
`;

export const FilterDot = styled.span<{ $color: string }>`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
`;

export const TimelineWrapper = styled.div`
  position: relative;
  max-width: 1120px;
  margin: 0 auto;
`;

export const SpineTop = styled(motion.div)`
  position: relative;
  z-index: 3;
  width: ${SPINE_SIZE}px;
  height: ${SPINE_SIZE}px;
  margin: 0 auto 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.navbarBg};
  border: 1px solid ${({ theme }) => theme.colors.navbarBorder};
  color: ${({ theme }) => theme.colors.title};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  ${({ theme }) => theme.media.md} {
    width: ${SPINE_SIZE_MOBILE}px;
    height: ${SPINE_SIZE_MOBILE}px;
    margin: 0 0 28px;
  }
`;

const spineLine = `
  position: absolute;
  top: ${SPINE_SIZE}px;
  bottom: 0;
  left: calc(50% - 1px);
  width: 2px;
`;

export const SpineRail = styled.div`
  ${spineLine}
  z-index: 1;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.navbarBorder} 0%,
    ${({ theme }) => theme.colors.navbarBorder} 92%,
    transparent 100%
  );

  ${({ theme }) => theme.media.md} {
    top: ${SPINE_SIZE_MOBILE}px;
    left: ${MOBILE_COLUMN / 2 - 1}px;
  }
`;

export const SpineBeam = styled(motion.div)`
  ${spineLine}
  z-index: 2;
  transform-origin: top center;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.primary1} 0%,
    ${({ theme }) => theme.colors.primary2} 100%
  );
  mask-image: linear-gradient(to bottom, #000 0%, #000 92%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, #000 0%, #000 92%, transparent 100%);

  ${({ theme }) => theme.media.md} {
    top: ${SPINE_SIZE_MOBILE}px;
    left: ${MOBILE_COLUMN / 2 - 1}px;
  }
`;

export const TimelineRow = styled(motion.div)<{ $cardLeft: boolean }>`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 56px minmax(0, 1fr);
  grid-template-areas: ${({ $cardLeft }) =>
    $cardLeft ? '"card node date"' : '"date node card"'};
  column-gap: 32px;
  align-items: start;
  margin-bottom: 56px;

  &:last-child {
    margin-bottom: 0;
  }

  ${({ theme }) => theme.media.md} {
    grid-template-columns: ${MOBILE_COLUMN}px minmax(0, 1fr);
    grid-template-areas:
      'node date'
      '. card';
    column-gap: 16px;
    row-gap: 12px;
    margin-bottom: 40px;
  }
`;

export const DateCell = styled.div<{ $cardLeft: boolean }>`
  grid-area: date;
  justify-self: ${({ $cardLeft }) => ($cardLeft ? 'start' : 'end')};
  margin-top: ${ANCHOR - PILL_HEIGHT / 2}px;

  ${({ theme }) => theme.media.md} {
    justify-self: start;
    margin-top: 0;
  }
`;

export const NodeCell = styled.div`
  grid-area: node;
  justify-self: center;
  margin-top: ${ANCHOR - DOT_SIZE / 2}px;
  position: relative;
  z-index: 3;

  ${({ theme }) => theme.media.md} {
    margin-top: ${PILL_HEIGHT_MOBILE / 2 - DOT_SIZE / 2}px;
  }
`;

export const CardCell = styled.div<{ $cardLeft: boolean }>`
  grid-area: card;
  justify-self: ${({ $cardLeft }) => ($cardLeft ? 'end' : 'start')};
  width: 100%;
  max-width: 500px;

  ${({ theme }) => theme.media.md} {
    justify-self: stretch;
    max-width: none;
  }
`;

export const DatePill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: ${PILL_HEIGHT}px;
  padding: 0 18px;
  border-radius: 9999px;
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  white-space: nowrap;
  background: ${({ theme }) => theme.colors.btnPrimaryBg};
  color: ${({ theme }) => theme.colors.btnPrimaryText};

  ${({ theme }) => theme.media.md} {
    height: ${PILL_HEIGHT_MOBILE}px;
    padding: 0 14px;
    font-size: 0.8rem;
  }
`;

export const PillDot = styled.span<{ $color: string }>`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
`;

export const NodeDot = styled.span<{ $color: string }>`
  display: block;
  width: ${DOT_SIZE}px;
  height: ${DOT_SIZE}px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  box-shadow: 0 0 0 4px ${({ $color }) => $color}26;
`;

export const Card = styled.article<{ $color: string; $company?: 'mestres' | 'codotech' }>`
  position: relative;
  padding: 24px 26px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.navbarBg};
  border: 1px solid
    ${({ $company, theme }) =>
      $company === 'codotech'
        ? 'rgba(255, 107, 0, 0.30)'
        : $company === 'mestres'
          ? 'rgba(33, 255, 181, 0.30)'
          : theme.colors.navbarBorder};
  box-shadow:
    0 4px 20px ${({ theme }) => theme.colors.navbarShadow},
    ${({ $company }) =>
      $company === 'codotech'
        ? '0 0 24px rgba(255, 107, 0, 0.08)'
        : $company === 'mestres'
          ? '0 0 24px rgba(33, 255, 181, 0.08)'
          : 'none'};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition:
    transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: ${({ $company, $color }) =>
      $company === 'codotech'
        ? 'rgba(255, 107, 0, 0.65)'
        : $company === 'mestres'
          ? 'rgba(33, 255, 181, 0.65)'
          : `${$color}4d`};
    box-shadow:
      0 12px 34px ${({ theme }) => theme.colors.navbarShadowHover},
      ${({ $company }) =>
        $company === 'codotech'
          ? '0 0 32px rgba(255, 107, 0, 0.22)'
          : $company === 'mestres'
            ? '0 0 32px rgba(33, 255, 181, 0.22)'
            : 'none'};
  }

  ${({ theme }) => theme.media.md} {
    padding: 20px;
  }
`;

export const CategoryTag = styled.span<{ $color: string }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 22px;
  margin-bottom: 12px;
  font-size: 0.74rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${({ $color }) => $color};
`;

export const CardTitle = styled.h3`
  font-size: 1.12rem;
  font-weight: 700;
  line-height: 1.35;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 10px;

  ${({ theme }) => theme.media.md} {
    font-size: 1.02rem;
  }
`;

export const CompanyAccent = styled.span<{ $company?: 'mestres' | 'codotech' }>`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-weight: 800;
  vertical-align: middle;
  color: ${({ $company, theme }) =>
    $company === 'codotech'
      ? '#FF6B00'
      : $company === 'mestres'
        ? theme.colors.title === '#f0f0f2'
          ? '#21FFB5'
          : '#0AB580'
        : theme.colors.accentText};
  transition: color 0.2s ease;
`;

export const CompanyTitleLogo = styled.img<{ $company: 'mestres' | 'codotech' }>`
  height: ${({ $company }) => ($company === 'codotech' ? '18px' : '16px')};
  width: auto;
  object-fit: contain;
  vertical-align: middle;
  display: inline-block;
`;

export const CardDescription = styled.p`
  font-size: 0.92rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.text};

  ${({ theme }) => theme.media.md} {
    font-size: 0.88rem;
    line-height: 1.62;
  }
`;
