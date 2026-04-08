'use client';

import Navbar from '@/components/Navbar/Navbar';
import { BlobLeft, BlobRight, Main } from '@/app/styles';
import { PropsWithChildren } from 'react';

const PortfolioLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <Main>
        <BlobLeft
          animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <BlobRight
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.55, 0.3] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        {children}
      </Main>
    </>
  );
};

export default PortfolioLayout;
