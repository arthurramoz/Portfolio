import type { Metadata } from 'next';

const title = 'Trajetória profissional | Arthur Ramos';
const description = 'Acompanhe a trajetória de Arthur Ramos na tecnologia e no desenvolvimento frontend.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/jornada' },
  openGraph: { title, description, url: '/jornada', locale: 'pt_BR', type: 'website', images: ['/logo.png'] },
  twitter: { card: 'summary', title, description, images: ['/logo.png'] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
