import type { Metadata } from 'next';

const title = 'Contato | Arthur Ramos';
const description = 'Entre em contato com Arthur Ramos para conversar sobre projetos e oportunidades.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/contato' },
  openGraph: { title, description, url: '/contato', locale: 'pt_BR', type: 'website', images: ['/logo.png'] },
  twitter: { card: 'summary', title, description, images: ['/logo.png'] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
