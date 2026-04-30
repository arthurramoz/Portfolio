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
    padding: 100px 16px 64px;
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
    gap: 40px;
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
    height: 340px;
  }

  ${({ theme }) => theme.media.sm} {
    height: 280px;
    border-radius: 18px;
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
