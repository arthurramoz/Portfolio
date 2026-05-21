export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quoteKey: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'manager',
    name: 'Equipe Mestres da Web',
    role: 'Tech Lead',
    company: 'Mestres da Web',
    quoteKey: 'testimonials.manager.quote',
  },
  {
    id: 'client-us',
    name: 'US Client',
    role: 'Project Owner',
    company: 'Upwork',
    quoteKey: 'testimonials.client.quote',
  },
  {
    id: 'colleague',
    name: 'Colega de Equipe',
    role: 'Developer',
    company: 'Mestres da Web',
    quoteKey: 'testimonials.colleague.quote',
  },
];
