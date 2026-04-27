import styled from 'styled-components';

export const PageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  max-width: ${({ theme }) => theme.max};
  margin: 0 auto;
  padding: ${({ theme }) => theme.pagePadding.default};

  ${({ theme }) => theme.media.lg} {
    padding: ${({ theme }) => theme.pagePadding.lg};
  }

  ${({ theme }) => theme.media.sm} {
    padding: ${({ theme }) => theme.pagePadding.sm};
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 48px;

  ${({ theme }) => theme.media.md} {
    margin-bottom: 32px;
  }
`;

export const PageTitle = styled.h1`
  font-size: 48px;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.title};

  ${({ theme }) => theme.media.lg} {
    font-size: 36px;
  }

  ${({ theme }) => theme.media.sm} {
    font-size: 28px;
  }
`;

export const PageSubtitle = styled.span`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary1};
`;

export const FiltersSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 48px;

  ${({ theme }) => theme.media.md} {
    margin-bottom: 32px;
  }
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FilterLabel = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.colors.subtitle};
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: color 0.2s ease;

  svg {
    transition: transform 0.25s ease;
  }
`;

export const FiltersRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const FilterChip = styled.button<{ $active: boolean }>`
  padding: 8px 18px;
  border-radius: 100px;
  border: 1px solid
    ${({ $active, theme }) =>
      $active ? theme.colors.primary1 : theme.colors.btnSecondaryBorder};
  background: ${({ $active, theme }) =>
    $active ? theme.colors.primary1 + '18' : 'transparent'};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.primary1 : theme.colors.text};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary1};
    color: ${({ theme }) => theme.colors.primary1};
  }

  ${({ theme }) => theme.media.sm} {
    padding: 6px 14px;
    font-size: 13px;
  }
`;

export const CoursesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const CourseCard = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 24px 28px;
  background: ${({ theme }) => theme.colors.btnSecondaryBg};
  border: 1px solid ${({ theme }) => theme.colors.btnSecondaryBorder};
  border-radius: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px ${({ theme }) => theme.colors.btnPrimaryShadow};
  }

  ${({ theme }) => theme.media.md} {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    padding: 20px;
  }
`;

export const PlatformLogo = styled.img`
  width: 76px;
  height: 76px;
  border-radius: 12px;
  object-fit: contain;
  flex-shrink: 0;

  ${({ theme }) => theme.media.md} {
    width: 56px;
    height: 56px;
  }
`;

export const CourseInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const CourseTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.title};
  line-height: 1.4;
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

  ${({ theme }) => theme.media.sm} {
    font-size: 16px;
  }
`;

export const CourseMeta = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const PlatformBadge = styled.span`
  font-size: 13px;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.primary1}15;
  color: ${({ theme }) => theme.colors.primary1};
  white-space: nowrap;
`;

export const SkillsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
`;

export const SkillTag = styled.span`
  font-size: 12px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.btnSecondaryBorder};
  color: ${({ theme }) => theme.colors.text};
`;

export const CourseCount = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.subtitle};
  margin-bottom: 24px;
  display: block;
`;
