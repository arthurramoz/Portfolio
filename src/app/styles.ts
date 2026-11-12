import { motion } from 'motion/react';
import styled from 'styled-components';
import { liteMedia } from '@/styles/lite';

export const Main = styled.main`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  /* Modo leve: brilho de fundo estatico, sem blur e sem animacao */
  ${liteMedia} {
    background:
      radial-gradient(
        90% 420px at 0% 0%,
        ${({ theme }) => theme.colors.primary2}2e 0%,
        transparent 70%
      ),
      radial-gradient(
        90% 420px at 100% 520px,
        ${({ theme }) => theme.colors.secondary2}1f 0%,
        transparent 70%
      );
  }
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
