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

const BlobBase = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  pointer-events: none;
  z-index: 0;
  will-change: transform, opacity;
`;

export const BlobLeft = styled(BlobBase)`
  top: -160px;
  left: -220px;
  width: 600px;
  height: 600px;
  background: radial-gradient(
    circle,
    ${({ theme }) => theme.colors.primary2}50 0%,
    transparent 70%
  );
`;

export const BlobRight = styled(BlobBase)`
  bottom: -140px;
  right: -180px;
  width: 560px;
  height: 560px;
  background: radial-gradient(
    circle,
    ${({ theme }) => theme.colors.secondary2}40 0%,
    transparent 70%
  );
`;

export const BlobCenter = styled(BlobBase)`
  top: 30%;
  left: 50%;
  width: 500px;
  height: 500px;
  background: radial-gradient(
    circle,
    ${({ theme }) => theme.colors.primary1}18 0%,
    transparent 70%
  );
`;

/* --- Blobs menores --- */
export const BlobSmall1 = styled(BlobBase)`
  top: 40%;
  left: 20%;
  width: 900px;
  height: 900px;
  background: radial-gradient(
    circle,
    ${({ theme }) => theme.colors.secondary1}35 0%,
    transparent 70%
  );
`;

export const BlobSmall2 = styled(BlobBase)`
  top: 10%;
  right: 30%;
  width: 900px;
  height: 900px;
  background: radial-gradient(
    circle,
    ${({ theme }) => theme.colors.primary1}30 0%,
    transparent 70%
  );
`;

export const BlobSmall3 = styled(BlobBase)`
  bottom: 15%;
  left: 40%;
  width: 900px;
  height: 900px;
  background: radial-gradient(
    circle,
    ${({ theme }) => theme.colors.secondary2}30 0%,
    transparent 70%
  );
`;

