import Navbar from '@/components/Navbar/Navbar';
import Providers from '@/components/Providers/Providers';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';


const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Arthur's Portfolio",
  icons: {
    icon: '/logo.svg',
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="pt">
      <body
        className={`${plusJakarta.variable} ${plusJakarta.className}`}
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
