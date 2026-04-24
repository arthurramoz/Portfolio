import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin-top: 40px;

  ${({ theme }) => theme.media.sm} {
    gap: 4px;
    margin-top: 32px;
  }
`;

export const PageButton = styled.button<{ $active: boolean }>`
  min-width: 40px;
  height: 40px;
  padding: 0 12px;
  border-radius: 10px;
  border: 1px solid
    ${({ $active, theme }) =>
      $active ? theme.colors.primary1 : theme.colors.btnSecondaryBorder};
  background: ${({ $active, theme }) =>
    $active ? theme.colors.primary1 : 'transparent'};
  color: ${({ $active, theme }) =>
    $active ? '#fff' : theme.colors.text};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.primary1};
    color: ${({ $active, theme }) =>
      $active ? '#fff' : theme.colors.primary1};
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  ${({ theme }) => theme.media.sm} {
    min-width: 36px;
    height: 36px;
    font-size: 13px;
    padding: 0 8px;
  }
`;

export const NavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.btnSecondaryBorder};
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.primary1};
    color: ${({ theme }) => theme.colors.primary1};
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  ${({ theme }) => theme.media.sm} {
    width: 36px;
    height: 36px;
  }
`;

export const PageInfo = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.subtitle};
  margin: 0 8px;

  ${({ theme }) => theme.media.sm} {
    margin: 0 4px;
    font-size: 12px;
  }
`;
