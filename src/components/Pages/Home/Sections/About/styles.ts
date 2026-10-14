import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  padding: 128px 24px 96px;
  max-width: ${({ theme }) => theme.max};
  margin: 0 auto;
  overflow-x: hidden;

  ${({ theme }) => theme.media.md} {
    padding: 80px 16px 64px;
    min-height: auto;
  }

  ${({ theme }) => theme.media.sm} {
    padding: 60px 16px 40px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 64px;

  ${({ theme }) => theme.media.md} {
    margin-bottom: 40px;
  }

  ${({ theme }) => theme.media.sm} {
    margin-bottom: 24px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 40px;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.title};

  ${({ theme }) => theme.media.lg} {
    font-size: 32px;
  }

  ${({ theme }) => theme.media.sm} {
    font-size: 28px;
  }
`;

export const SectionSubtitle = styled.span`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary1};
`;

export const PhotoBioWrapper = styled.div`
  display: flex;
  gap: 64px;
  align-items: flex-start;

  ${({ theme }) => theme.media.lg} {
    flex-direction: column;
    gap: 36px;
  }
`;

export const PhotoWrap = styled.div`
  flex-shrink: 0;
  width: 320px;
  height: 400px;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.navbarBorder};
  box-shadow: 0 24px 64px ${({ theme }) => theme.colors.navbarShadow},
    0 0 0 1px ${({ theme }) => theme.colors.navbarBorder};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      transparent 60%,
      ${({ theme }) => theme.colors.navbarShadow} 100%
    );
    pointer-events: none;
  }

  ${({ theme }) => theme.media.lg} {
    width: 100%;
    max-width: 360px;
    height: 340px;
    margin: 0 auto;
  }

  ${({ theme }) => theme.media.sm} {
    max-width: 300px;
    height: 300px;
    border-radius: 20px;
  }
`;

export const BioColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 22px;
  min-width: 0;
`;

export const BioParagraph = styled.p`
  font-size: 17px;
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;

  ${({ theme }) => theme.media.md} {
    font-size: 15px;
  }
`;

export const LocationCard = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 12px;

  ${({ theme }) => theme.media.sm} {
    gap: 14px;
    padding: 14px 18px;
    border-radius: 16px;
    background: ${({ theme }) => theme.colors.navbarBg};
    border: 1px solid ${({ theme }) => theme.colors.navbarBorder};
  }
`;

export const LocationPin = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary1},
    ${({ theme }) => theme.colors.primary2}
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  flex-shrink: 0;

  box-shadow: 0 4px 20px ${({ theme }) => theme.colors.primary1}40;

  ${({ theme }) => theme.media.sm} {
    width: 44px;
    height: 44px;
    svg {
      width: 22px;
      height: 22px;
    }
  }
`;

export const LocationInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

export const LocationCountry = styled.span`
  font-size: 1.15rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.title};
  letter-spacing: -0.02em;
  line-height: 1.3;
`;

export const LocationState = styled.span`
  font-size: 0.82rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.navbarLinkInactive};
`;

export const LocationCity = styled.span`
  font-size: 0.72rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.navbarLinkInactive};
  opacity: 0.7;
`;
