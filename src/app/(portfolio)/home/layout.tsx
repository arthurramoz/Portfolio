import type { Metadata } from 'next';

const title = 'Desenvolvedor frontend | Arthur Ramos';
const description = 'Conheça Arthur Ramos, desenvolvedor frontend com experiência em React, Next.js e TypeScript.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/home' },
  openGraph: { title, description, url: '/home', locale: 'pt_BR', type: 'website', images: ['/logo.png'] },
  twitter: { card: 'summary', title, description, images: ['/logo.png'] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
