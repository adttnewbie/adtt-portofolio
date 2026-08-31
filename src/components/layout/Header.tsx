import { useEffect, useState } from 'react';
import ThemeToggle from '../ui/ThemeToggle';
import PillNav from '../ui/PillNav';
import { useTheme } from '../../hooks/useTheme';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Me' },
  { href: '#skills', label: 'Service' },
  { href: '#projects', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
];

// pakai logo dari public/logo.png — display 1:1 via PillNav container
const logoDataUri = '/logo.png';

export default function Header() {
  const { theme } = useTheme();
  const [activeHref, setActiveHref] = useState(() => (typeof window !== 'undefined' ? window.location.hash || '#home' : '#home'));

  useEffect(() => {
    const onHash = () => setActiveHref(window.location.hash || '#home');
    window.addEventListener('hashchange', onHash);
    // also track scroll to update active based on visible section
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.filter(e => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveHref(`#${visible.target.id}`);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] }
    );
    links.forEach(l => {
      const el = document.querySelector(l.href);
      if (el) observer.observe(el);
    });
    return () => {
      window.removeEventListener('hashchange', onHash);
      observer.disconnect();
    };
  }, []);

  const isLight = theme === 'light';
  const baseColor = '#5855F6';
  const pillColor = isLight ? '#ffffff' : '#141416';
  const pillTextColor = isLight ? '#111111' : '#fafafa';
  const hoveredPillTextColor = '#ffffff';

  return (
    <header
      className="sticky top-0 z-50 bg-transparent"
      style={{
        background: 'transparent',
        borderColor: 'transparent',
      }}
    >
      <nav className="relative mx-auto flex max-w-[1360px] items-center gap-3 px-4 py-3 md:px-6">
        <PillNav
          logo={logoDataUri}
          logoAlt="AD"
          items={links}
          activeHref={activeHref}
          ease="power2.easeOut"
          baseColor={baseColor}
          pillColor={pillColor}
          pillTextColor={pillTextColor}
          hoveredPillTextColor={hoveredPillTextColor}
          initialLoadAnimation
          className="flex-1 min-w-0"
        />

        <div className="hidden items-center gap-3 md:flex absolute right-6 top-1/2 -translate-y-1/2 z-10">
          <ThemeToggle />
          <a
            href="#contact"
            className="rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-[0.96]"
            style={{ background: 'var(--color-primary)', boxShadow: '0 6px 16px rgba(88,85,246,0.28)' }}
          >
            Get in touch
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden shrink-0">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
