import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Arthur Ramos | Portfolio Thumbnail',
  description: 'Portfolio showcase thumbnail — Arthur Ramos, Frontend Developer specializing in React, Next.js, and TypeScript.',
  robots: { index: false, follow: false },
};

export default function ThumbnailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
