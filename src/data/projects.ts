export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  links: { github?: string; live?: string };
  featured?: boolean;
  image?: string;
};

// Landscape 16:10 — cocok buat screenshot project (browser/dashboard)
// sat -100 biar nyambung mono indigo, tapi struktur landscape tetep kebaca
const IMG = {
  portfolio: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&h=750&fit=crop&sat=-100&auto=format',
  ecommerce: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&h=750&fit=crop&sat=-100&auto=format',
  design: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&h=750&fit=crop&sat=-100&auto=format',
  api: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&h=750&fit=crop&sat=-100&auto=format',
  mobile: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7dfb?q=80&w=1200&h=750&fit=crop&sat=-100&auto=format',
  dashboard: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&h=750&fit=crop&sat=-100&auto=format',
};

export const projects: Project[] = [
  {
    slug: 'portfolio',
    title: 'Portfolio — SvelteKit',
    description: 'Lighthouse 100, Svelte 5 runes, Tailwind v4.',
    tags: ['SvelteKit', 'TypeScript', 'Tailwind'],
    links: { github: 'https://github.com/adtt/portfolio', live: '#' },
    featured: true,
    image: IMG.portfolio,
  },
  {
    slug: 'lumina-ecommerce',
    title: 'Lumina E-Commerce',
    description: 'Headless storefront, 98 Lighthouse, ISR.',
    tags: ['Next.js', 'Stripe', 'Tailwind'],
    links: { github: 'https://github.com/adtt/lumina', live: '#' },
    image: IMG.ecommerce,
  },
  {
    slug: 'atlas-design-system',
    title: 'Atlas Design System',
    description: 'Token-driven UI kit, Figma + React.',
    tags: ['React', 'Design System', 'Figma'],
    links: { github: 'https://github.com/adtt/atlas', live: '#' },
    image: IMG.design,
  },
  {
    slug: 'nova-api',
    title: 'Nova API Platform',
    description: 'Go + Postgres, 40ms p95 globally.',
    tags: ['Go', 'PostgreSQL', 'REST API'],
    links: { github: 'https://github.com/adtt/nova' },
    image: IMG.api,
  },
  {
    slug: 'orbit-mobile',
    title: 'Orbit Finance App',
    description: 'React Native, offline-first sync.',
    tags: ['React Native', 'SQLite', 'Motion'],
    links: { live: '#' },
    image: IMG.mobile,
  },
  {
    slug: 'pulse-dashboard',
    title: 'Pulse Analytics',
    description: 'Realtime dashboard, streaming charts.',
    tags: ['Svelte', 'TypeScript', 'D3'],
    links: { github: 'https://github.com/adtt/pulse' },
    image: IMG.dashboard,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
