import styled from 'styled-components';

export const PageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  max-width: ${({ theme }) => theme.max};
  margin: 0 auto;
  padding: 140px 40px 96px;

  @media (max-width: 900px) {
    padding: 120px 24px 64px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 64px;
`;

export const PageTitle = styled.h1`
  font-size: 48px;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.title};

  @media (max-width: 900px) {
    font-size: 36px;
  }
`;

export const PageSubtitle = styled.span`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary1};
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.div`
  background: ${({ theme }) => theme.colors.btnSecondaryBg};
  border: 1px solid ${({ theme }) => theme.colors.btnSecondaryBorder};
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px ${({ theme }) => theme.colors.btnPrimaryShadow};
  }
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
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.title};
  display: flex;
  align-items: center;
  gap: 8px;

  a {
    color: ${({ theme }) => theme.colors.subtitle};
    display: flex;
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary1};
    }
  }
`;

export const CardDescription = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
`;

export const TagsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

export const Tag = styled.span`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  padding: 4px 12px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.primary1}15;
  color: ${({ theme }) => theme.colors.primary1};
`;

export const EmptyState = styled.div`
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 24px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.subtitle};
  text-align: center;
  border: 2px dashed ${({ theme }) => theme.colors.btnSecondaryBorder};
  border-radius: 20px;
`;
