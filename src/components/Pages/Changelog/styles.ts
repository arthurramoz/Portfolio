import styled from 'styled-components';

export const PageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  max-width: ${({ theme }) => theme.max};
  margin: 0 auto;
  padding: ${({ theme }) => theme.pagePadding.default};
  display: flex;
  gap: 80px;

  ${({ theme }) => theme.media.lg} {
    padding: ${({ theme }) => theme.pagePadding.lg};
    flex-direction: column;
    gap: 48px;
  }

  ${({ theme }) => theme.media.sm} {
    padding: ${({ theme }) => theme.pagePadding.sm};
  }
`;

export const SidebarColumn = styled.div`
  position: sticky;
  top: 140px;
  align-self: flex-start;
  min-width: 240px;

  ${({ theme }) => theme.media.lg} {
    position: static;
    min-width: unset;
  }
`;

export const PageTitle = styled.h1`
  font-size: 48px;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 16px;

  ${({ theme }) => theme.media.lg} {
    font-size: 36px;
  }

  ${({ theme }) => theme.media.sm} {
    font-size: 28px;
  }
`;

export const PageDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.subtitle};
  max-width: 220px;

  ${({ theme }) => theme.media.lg} {
    max-width: unset;
  }
`;

export const TimelineColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Entry = styled.div`
  position: relative;
  padding: 0 0 0 32px;
  border-left: 1px solid ${({ theme }) => theme.colors.btnSecondaryBorder};
  padding-bottom: 48px;

  &::before {
    content: '';
    position: absolute;
    left: -5px;
    top: 6px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.btnSecondaryBorder};
  }

  ${({ theme }) => theme.media.md} {
    padding-left: 24px;
    padding-bottom: 32px;
  }
`;

export const EntryActive = styled(Entry)`
  &::before {
    width: 11px;
    height: 11px;
    left: -6px;
    top: 5px;
    background: ${({ theme }) => theme.colors.primary1};
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primary1}20;
  }
`;

export const EntryDate = styled.span`
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.subtitle};
`;

export const EntryVersion = styled.h2`
  font-size: 28px;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.title};
  margin: 8px 0 4px;

  ${({ theme }) => theme.media.sm} {
    font-size: 22px;
  }
`;

export const EntryBadge = styled.span<{ $active?: boolean }>`
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 3px 10px;
  border-radius: 6px;
  margin-bottom: 16px;
  background: ${({ $active, theme }) =>
    $active ? `${theme.colors.primary1}20` : theme.colors.btnSecondaryBg};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.primary1 : theme.colors.subtitle};
`;

export const HighlightList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const HighlightItem = styled.li`
  font-size: 16px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};

  ${({ theme }) => theme.media.sm} {
    font-size: 14px;
  }
`;
