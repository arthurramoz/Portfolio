'use client';

import Navbar from '@/components/Navbar/Navbar';
import { Main } from '@/app/styles';
import { PropsWithChildren } from 'react';

const PortfolioLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <Main>{children}</Main>
    </>
  );
};

export default PortfolioLayout;
