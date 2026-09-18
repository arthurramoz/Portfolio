import Script from 'next/script';
import Providers from '@/components/Providers/Providers';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import HtmlLangUpdater from '@/components/HtmlLangUpdater';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.arthur-moreira-ramos.com.br'),
  title: 'Arthur Ramos | Frontend Developer — React, Next.js, TypeScript',
  description:
    'Portfolio of Arthur Ramos — Frontend Developer specializing in React, Next.js, and TypeScript. Explore case studies, projects, and professional experience in building performant, accessible web applications.',
  keywords: [
    'Frontend Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Portfolio',
    'Arthur Ramos',
    'Web Developer',
    'JavaScript',
    'styled-components',
    'UI Engineer',
  ],
  authors: [{ name: 'Arthur Ramos', url: 'https://www.arthur-moreira-ramos.com.br' }],
  creator: 'Arthur Ramos',
  icons: {
    icon: '/logo.png',
  },
  alternates: {
    canonical: 'https://www.arthur-moreira-ramos.com.br',
  },
  openGraph: {
    title: 'Arthur Ramos | Frontend Developer',
    description:
      'Explore my projects, case studies, and professional journey in frontend development. Specialized in React, Next.js, and TypeScript.',
    type: 'website',
    url: 'https://www.arthur-moreira-ramos.com.br',
    locale: 'en_US',
    alternateLocale: ['pt_BR', 'fr_FR', 'es_ES', 'ru_RU'],
    siteName: 'Arthur Ramos | Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arthur Ramos | Frontend Developer',
    description:
      'React, Next.js, TypeScript — Portfolio, Case Studies & Professional Experience',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Arthur Ramos',
  jobTitle: 'Frontend Developer',
  url: 'https://www.arthur-moreira-ramos.com.br',
  sameAs: [
    'https://github.com/arthurramoz',
    'https://www.arthur-moreira-ramos.com.br',
  ],
  knowsAbout: [
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'styled-components',
    'Frontend Development',
    'Web Accessibility',
    'UI/UX',
  ],
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="pt" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
        <HtmlLangUpdater />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;

