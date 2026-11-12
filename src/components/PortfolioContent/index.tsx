'use client';

import { PropsWithChildren } from 'react';
import { BlobCenter, BlobLeft, BlobRight, Main } from '@/app/styles';
import { useAccessibility } from '@/contexts/AccessibilityContext';
import { useLiteMode } from '@/hooks/useLiteMode';

/**
 * Fundo do portfólio. No desktop, três blobs animados; no celular e com
 * "reduzir animações" ligado, o fundo é um gradiente estático em CSS
 * (definido em Main), sem blur nem animação rodando.
 */
const PortfolioContent = ({ children }: PropsWithChildren) => {
  const lite = useLiteMode();
  const { reduceAnimations } = useAccessibility();
  const showBlobs = !lite && !reduceAnimations;

  return (
    <Main>
      {showBlobs && (
        <>
          <BlobLeft
            animate={{
              scale: [1, 1.1, 0.95, 1.08, 1],
              opacity: [0.4, 0.6, 0.35, 0.55, 0.4],
              x: [0, 600, 1200, 600, 0],
              y: [0, 200, -100, 300, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />

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
        </>
      )}

      {children}
    </Main>
  );
};

export default PortfolioContent;
