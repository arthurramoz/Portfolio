import { motion } from 'motion/react';
import styled from 'styled-components';

export const Main = styled.main`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const BlobLeft = styled(motion.div)`
  position: absolute;
  top: -160px;
  left: -220px;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    ${({ theme }) => theme.colors.primary2}50 0%,
    transparent 70%
  );
  filter: blur(40px);
  pointer-events: none;
  z-index: 0;
  will-change: transform;
`;

export const BlobRight = styled(motion.div)`
  position: absolute;
  bottom: -140px;
  right: -180px;
  width: 560px;
  height: 560px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    ${({ theme }) => theme.colors.secondary2}40 0%,
    transparent 70%
  );
  filter: blur(40px);
  pointer-events: none;
  z-index: 0;
  will-change: transform;
`;
