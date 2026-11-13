import type { Metadata } from 'next';

const title = 'Projetos | Arthur Ramos';
const description = 'Explore projetos pessoais, acadêmicos e profissionais desenvolvidos por Arthur Ramos.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/projetos' },
  openGraph: { title, description, url: '/projetos', locale: 'pt_BR', type: 'website', images: ['/logo.png'] },
  twitter: { card: 'summary', title, description, images: ['/logo.png'] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
