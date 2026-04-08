import styled from 'styled-components';

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: ${({ theme }) => theme.max};
  width: 100%;
`;