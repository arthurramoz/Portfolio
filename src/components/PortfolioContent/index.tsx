'use client';

import { BlobLeft, BlobRight, BlobCenter, BlobSmall1, BlobSmall2, BlobSmall3, Main } from '@/app/styles';
import { PropsWithChildren } from 'react';


const PortfolioContent = ({ children }: PropsWithChildren) => {
  return (
    <Main>

      {/* Left blob — começa no canto esquerdo e varre o site todo */}
      <BlobLeft
        animate={{
          scale: [1, 1.1, 0.95, 1.08, 1],
          opacity: [0.4, 0.6, 0.35, 0.55, 0.4],
          x: [0, 600, 1200, 600, 0],
          y: [0, 200, -100, 300, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Right blob — começa no canto direito e varre o site todo */}
      <BlobRight
        animate={{
          scale: [1, 1.12, 0.9, 1.1, 1],
          opacity: [0.3, 0.55, 0.3, 0.5, 0.3],
          x: [0, -700, -1300, -500, 0],
          y: [0, -200, 150, -300, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
      />

      {/* Center blob — passa pelo meio do site */}
      <BlobCenter
        animate={{
          scale: [0.85, 1.1, 0.8, 1.05, 0.85],
          opacity: [0.12, 0.28, 0.1, 0.22, 0.12],
          x: [-200, 400, -400, 300, -200],
          y: [0, 300, -200, 400, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 6,
        }}
      />

      {/* Blob pequeno 1 — rosa, região central-esquerda */}
      <BlobSmall1
        animate={{
          scale: [0.9, 1.15, 0.85, 1.1, 0.9],
          opacity: [0.25, 0.45, 0.2, 0.4, 0.25],
          x: [0, 300, -150, 500, 0],
          y: [0, -150, 200, -100, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
      />

      {/* Blob pequeno 2 — ciano, topo direito */}
      <BlobSmall2
        animate={{
          scale: [0.9, 1.2, 0.8, 1.15, 0.9],
          opacity: [0.2, 0.4, 0.15, 0.38, 0.2],
          x: [0, -250, 100, -400, 0],
          y: [0, 200, -100, 300, 0],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 9,
        }}
      />

      {/* Blob pequeno 3 — rosa claro, base central */}
      <BlobSmall3
        animate={{
          scale: [0.85, 1.1, 0.9, 1.05, 0.85],
          opacity: [0.2, 0.38, 0.18, 0.35, 0.2],
          x: [0, 200, -300, 150, 0],
          y: [0, -250, 100, -200, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 12,
        }}
      />

      {children}
    </Main>
  );
};

export default PortfolioContent;
