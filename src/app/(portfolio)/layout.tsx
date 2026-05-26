import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import PortfolioContent from '@/components/PortfolioContent';
import { PropsWithChildren } from 'react';

const PortfolioLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <PortfolioContent>{children}</PortfolioContent>
      <Footer />
    </>
  );
};

export default PortfolioLayout;
