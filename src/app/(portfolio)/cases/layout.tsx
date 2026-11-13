import type { Metadata } from 'next';

const title = 'Estudos de caso | Arthur Ramos';
const description = 'Explore desafios, soluções e resultados de projetos de desenvolvimento frontend.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/cases' },
  openGraph: { title, description, url: '/cases', locale: 'pt_BR', type: 'website', images: ['/logo.png'] },
  twitter: { card: 'summary', title, description, images: ['/logo.png'] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
