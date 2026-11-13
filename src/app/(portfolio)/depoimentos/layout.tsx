import type { Metadata } from 'next';

const title = 'Depoimentos | Arthur Ramos';
const description = 'Leia depoimentos sobre o trabalho de Arthur Ramos e sua colaboração em projetos.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/depoimentos' },
  openGraph: { title, description, url: '/depoimentos', locale: 'pt_BR', type: 'website', images: ['/logo.png'] },
  twitter: { card: 'summary', title, description, images: ['/logo.png'] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
