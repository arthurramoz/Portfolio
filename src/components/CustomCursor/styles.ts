import styled from 'styled-components';

export const Dot = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.title};
  pointer-events: none;
  z-index: 999999;
  transition: width 0.25s ease, height 0.25s ease, opacity 0.25s ease;
  will-change: transform;
`;

export const Ring = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1.5px solid ${({ theme }) => theme.colors.title};
  pointer-events: none;
  z-index: 999998;
  opacity: 0.5;
  transition: width 0.3s ease, height 0.3s ease, opacity 0.3s ease, border-color 0.3s ease;
  will-change: transform;
`;
