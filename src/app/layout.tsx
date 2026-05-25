import Script from 'next/script';
import Providers from '@/components/Providers/Providers';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
});

export const metadata: Metadata = {
  title: 'Arthur',
  description: "Arthur's Portfolio",
  icons: {
    icon: '/logo.png',
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="pt">
      <body className={`${plusJakarta.variable} ${plusJakarta.className}`}>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                
                // Retrieve saved consent from localStorage
                let savedConsent = 'denied';
                try {
                  const consent = localStorage.getItem('@Portfolio:cookie-consent');
                  if (consent === 'granted') {
                    savedConsent = 'granted';
                  }
                } catch (e) {}

                gtag('consent', 'default', {
                  'analytics_storage': savedConsent
                });

                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;

