import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

export const WipWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
  padding: 2rem;
`;

export const WipLogo = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  animation: ${float} 4s ease-in-out infinite;
`;

export const WipTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.title};
  letter-spacing: -0.03em;
  line-height: 1.1;
`;

export const WipSubtitle = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.title};
  opacity: 0.55;
  max-width: 420px;
`;

export const WipBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 1.1rem;
  border-radius: 9999px;
  background: ${({ theme }) => theme.colors.bgPrimary1};
  border: 1px solid ${({ theme }) => theme.colors.primary2};
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary1};
`;

export const WipDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary1};
  display: inline-block;
  animation: ${pulse} 1.8s ease-in-out infinite;
`;

export const WipDivider = styled.div`
  width: 48px;
  height: 3px;
  border-radius: 9999px;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.primary1},
    ${({ theme }) => theme.colors.secondary1}
  );
  opacity: 0.5;
`;
