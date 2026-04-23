import styled from 'styled-components';

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${({ theme }) => theme.max};
  width: 100%;
  margin: 0 auto;
`;
