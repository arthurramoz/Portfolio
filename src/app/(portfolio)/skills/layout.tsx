import type { Metadata } from 'next';

const title = 'Habilidades técnicas | Arthur Ramos';
const description = 'Conheça as tecnologias, ferramentas e habilidades de desenvolvimento de Arthur Ramos.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/skills' },
  openGraph: { title, description, url: '/skills', locale: 'pt_BR', type: 'website', images: ['/logo.png'] },
  twitter: { card: 'summary', title, description, images: ['/logo.png'] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
