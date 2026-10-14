import styled from 'styled-components';
import { motion } from 'motion/react';

export const Backdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.68);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  z-index: 100000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;

  ${({ theme }) => theme.media.sm} {
    padding: 0;
    align-items: flex-end;
  }
`;

export const ModalContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 480px;
  background: ${({ theme }) => theme.colors.dropdownBg};
  backdrop-filter: blur(32px) saturate(190%);
  -webkit-backdrop-filter: blur(32px) saturate(190%);
  border: 1px solid ${({ theme }) => theme.colors.navbarBorder};
  border-radius: 28px;
  padding: 32px 28px 28px;
  box-shadow:
    0 24px 64px rgba(0, 0, 0, 0.4),
    0 0 0 1px ${({ theme }) => theme.colors.navbarGlassHighlight};
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: ${({ theme }) => theme.colors.title};
  overflow: hidden;

  ${({ theme }) => theme.media.sm} {
    max-width: 100%;
    border-radius: 28px 28px 0 0;
    padding: 16px 20px 32px;
    max-height: 90vh;
    overflow-y: auto;
    border-bottom: none;
    box-shadow: 0 -12px 48px rgba(0, 0, 0, 0.45);
  }
`;

export const MobileDragHandle = styled.div`
  display: none;
  width: 44px;
  height: 5px;
  border-radius: 9999px;
  background: ${({ theme }) => theme.colors.subtitle}40;
  margin: 0 auto 8px;

  ${({ theme }) => theme.media.sm} {
    display: block;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const HeaderTitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const HeaderIconWrap = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.primary1}18;
  border: 1px solid ${({ theme }) => theme.colors.primary1}35;
  color: ${({ theme }) => theme.colors.primary1};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const ModalTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 750;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.title};
  margin: 0;
`;

export const ModalSubtitle = styled.p`
  font-size: 0.88rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.subtitle};
  margin: 0;
`;

export const CloseButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.btnSecondaryBorder};
  background: ${({ theme }) => theme.colors.btnSecondaryBg};
  color: ${({ theme }) => theme.colors.subtitle};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:hover {
    background: ${({ theme }) => theme.colors.btnPrimaryBg};
    color: ${({ theme }) => theme.colors.btnPrimaryText};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const OptionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const OptionCard = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 18px;
  border-radius: 18px;
  text-decoration: none;
  background: ${({ theme }) => theme.colors.navbarBg};
  border: 1px solid ${({ theme }) => theme.colors.navbarBorder};
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 2px 10px ${({ theme }) => theme.colors.navbarShadow};
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.colors.primary1};
    box-shadow:
      0 10px 24px ${({ theme }) => theme.colors.navbarShadowHover},
      0 0 20px ${({ theme }) => theme.colors.primary1}22;
  }

  &:active {
    transform: translateY(0);
  }

  ${({ theme }) => theme.media.sm} {
    padding: 14px 16px;
  }
`;

export const OptionFlag = styled.img`
  width: 34px;
  height: 24px;
  object-fit: cover;
  border-radius: 4px;
  flex-shrink: 0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
`;

export const OptionDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex: 1;
  min-width: 0;
`;

export const OptionTitle = styled.span`
  font-size: 0.98rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.title};
  line-height: 1.25;
`;

export const OptionMeta = styled.span`
  font-size: 0.78rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.subtitle};
  line-height: 1.2;
`;

export const DownloadPill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 9999px;
  background: ${({ theme }) => theme.colors.primary1}18;
  border: 1px solid ${({ theme }) => theme.colors.primary1}35;
  color: ${({ theme }) => theme.colors.primary1};
  font-size: 0.8rem;
  font-weight: 700;
  flex-shrink: 0;
  transition: all 0.2s ease;

  ${OptionCard}:hover & {
    background: ${({ theme }) => theme.colors.primary1};
    color: #000000;
    transform: scale(1.04);
  }

  ${({ theme }) => theme.media.sm} {
    padding: 6px 10px;
    span {
      display: none;
    }
  }
`;

export const ModalFooterNote = styled.p`
  font-size: 0.76rem;
  color: ${({ theme }) => theme.colors.subtitle};
  opacity: 0.75;
  text-align: center;
  margin: 0;
  line-height: 1.4;
`;
