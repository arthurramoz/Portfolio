import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 128px 24px 96px;
  max-width: ${({ theme }) => theme.max};
  margin: 0 auto;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 64px;
`;

export const SectionTitle = styled.h2`
  font-size: 40px;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.title};

  @media (max-width: 900px) {
    font-size: 32px;
  }
`;

export const SectionSubtitle = styled.span`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary1};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border: 1px solid ${({ theme }) => theme.colors.btnSecondaryBorder};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const ImageCell = styled.div`
  position: relative;
  aspect-ratio: 10 / 9;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.btnSecondaryBorder};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1);
  }
`;
