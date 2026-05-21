import styled, { keyframes } from 'styled-components';
import { motion } from 'motion/react';

/* ── Animations ── */

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`;



/* ── Page ── */

export const ContactPage = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  max-width: ${({ theme }) => theme.max};
  margin: 0 auto;
  padding: ${({ theme }) => theme.pagePadding.default};
  overflow: hidden;

  ${({ theme }) => theme.media.lg} {
    padding: ${({ theme }) => theme.pagePadding.lg};
  }

  ${({ theme }) => theme.media.sm} {
    padding: ${({ theme }) => theme.pagePadding.sm};
  }
`;

/* ── Watermark ── */

export const ContactWatermark = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: clamp(6rem, 18vw, 16rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1;
  color: ${({ theme }) => theme.colors.title};
  opacity: 0.03;
  pointer-events: none;
  user-select: none;
  white-space: nowrap;
  z-index: 0;
`;



/* ── Grid ── */

export const ContactGrid = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: start;

  ${({ theme }) => theme.media.md} {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

/* ── Left Side: Info ── */

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;



export const ContactTitle = styled(motion.h1)`
  font-size: clamp(2.2rem, 5vw, 3.4rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.title};
`;

export const ContactSubtitle = styled(motion.p)`
  font-size: 1.05rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.text};
  max-width: 420px;
`;

/* ── Info Cards ── */

export const InfoCardsWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 8px;
`;

export const InfoCard = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
  border-radius: 16px;
  text-decoration: none;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.navbarBg};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid ${({ theme }) => theme.colors.navbarBorder};
  box-shadow: 0 2px 12px ${({ theme }) => theme.colors.navbarShadow};
  transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);

  &:hover {
    background: ${({ theme }) => theme.colors.navbarBgHover};
    border-color: ${({ theme }) => theme.colors.primary1}40;
    box-shadow:
      0 4px 20px ${({ theme }) => theme.colors.navbarShadowHover},
      0 0 0 1px ${({ theme }) => theme.colors.primary1}15;
    transform: translateX(4px);
  }
`;

export const InfoCardIcon = styled.div<{ $color: string }>`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: ${({ $color }) => $color}15;
  border: 1px solid ${({ $color }) => $color}25;
  color: ${({ $color }) => $color};
  transition: all 0.3s ease;

  ${InfoCard}:hover & {
    background: ${({ $color }) => $color}25;
    animation: ${float} 2s ease-in-out infinite;
  }
`;

export const InfoCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
`;

export const InfoCardLabel = styled.span`
  font-size: 0.82rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.title};
`;

export const InfoCardValue = styled.span`
  font-size: 0.78rem;
  color: ${({ theme }) => theme.colors.text};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const InfoCardArrow = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.navbarLinkBgHover};
  color: ${({ theme }) => theme.colors.text};
  flex-shrink: 0;
  transition: all 0.3s ease;

  ${InfoCard}:hover & {
    background: ${({ theme }) => theme.colors.primary1};
    color: #111;
    transform: rotate(-45deg);
  }
`;

/* ── Right Side: Form ── */

export const ContactFormWrapper = styled(motion.div)`
  position: relative;
  background: ${({ theme }) => theme.colors.navbarBg};
  backdrop-filter: blur(20px) saturate(110%);
  -webkit-backdrop-filter: blur(20px) saturate(110%);
  border: 1px solid ${({ theme }) => theme.colors.navbarBorder};
  border-radius: 24px;
  padding: 40px;
  box-shadow:
    0 8px 32px ${({ theme }) => theme.colors.navbarShadow},
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 24px;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.04) 0%,
      transparent 40%,
      transparent 60%,
      rgba(255, 255, 255, 0.02) 100%
    );
    pointer-events: none;
  }

  ${({ theme }) => theme.media.sm} {
    padding: 28px 24px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  z-index: 1;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 16px 20px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.navbarBorder};
  background: ${({ theme }) => theme.colors.dropdownBg};
  color: ${({ theme }) => theme.colors.title};
  font-size: 0.92rem;
  font-family: inherit;
  outline: none;
  transition: all 0.3s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.6;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary1};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary1}18;
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  min-height: 160px;
  padding: 16px 20px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.navbarBorder};
  background: ${({ theme }) => theme.colors.dropdownBg};
  color: ${({ theme }) => theme.colors.title};
  font-size: 0.92rem;
  font-family: inherit;
  outline: none;
  resize: vertical;
  transition: all 0.3s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.6;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary1};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary1}18;
  }
`;

export const FormButton = styled(motion.button)`
  width: 100%;
  padding: 16px 32px;
  border-radius: 14px;
  border: none;
  font-size: 1rem;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  color: #111;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary1},
    ${({ theme }) => theme.colors.primary2}
  );
  background-size: 200% 200%;
  animation: ${shimmer} 3s ease-in-out infinite;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px ${({ theme }) => theme.colors.primary1}30;

  &:hover {
    box-shadow: 0 6px 24px ${({ theme }) => theme.colors.primary1}50;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

/* ── Success Message ── */

export const SuccessMessage = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 48px 32px;
  text-align: center;
  min-height: 320px;
`;

export const SuccessIcon = styled(motion.div)`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary1}18;
  border: 2px solid ${({ theme }) => theme.colors.primary1}40;
  color: ${({ theme }) => theme.colors.primary1};
`;

export const SuccessText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.title};
  max-width: 320px;
  font-weight: 500;
`;
