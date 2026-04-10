import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-30px); }
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
  font-size: 3.5rem;
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
  padding: 0.5rem 1.2rem;
  border-radius: 9999px;
  background: ${({ theme }) => theme.colors.bgPrimary1};
  border: 1px solid ${({ theme }) => theme.colors.primary2};
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary1};
`;

export const WipDot = styled.span`
  width: 10px;
  height: 10px;
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

export const TabBar = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.3rem;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.06);
`;

interface TabButtonProps {
  $active: boolean;
}

export const TabButton = styled.button<TabButtonProps>`
  padding: 0.5rem 1.4rem;
  border-radius: 9999px;
  font-size: 0.9rem;
  font-weight: 600;
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
    color: ${({ $active }) => (!$active ? '#555' : '#fff')};
    font-weight: 700;
  }
`;

export const TabContent = styled.div`
  width: 100%;
  max-width: 520px;
  overflow: hidden;
  min-height: 420px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const AboutCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`;

export const AboutPhoto = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid transparent;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(
        135deg,
        ${({ theme }) => theme.colors.primary1},
        ${({ theme }) => theme.colors.secondary1}
      )
      border-box;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const AboutName = styled.h2`
  font-size: 1.9rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary1},
    ${({ theme }) => theme.colors.secondary1}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const AboutBio = styled.p`
  font-size: 1rem;
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.title};
  opacity: 0.6;
  max-width: 400px;
  text-align: center;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 0.5rem;
`;

export const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.title};
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
  opacity: 0.6;
`;
