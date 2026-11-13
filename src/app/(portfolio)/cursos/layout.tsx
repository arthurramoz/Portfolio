import type { Metadata } from 'next';

const title = 'Cursos e certificações | Arthur Ramos';
const description = 'Confira os cursos e certificações de Arthur Ramos em tecnologia e desenvolvimento.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/cursos' },
  openGraph: { title, description, url: '/cursos', locale: 'pt_BR', type: 'website', images: ['/logo.png'] },
  twitter: { card: 'summary', title, description, images: ['/logo.png'] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
