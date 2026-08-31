import { useEffect, useRef, useState } from 'react';
import { site } from '../../data/site';
import { FaFacebook, FaGithub, FaLinkedinIn, FaTelegram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { FiLink, FiMail } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';
import { useTheme } from '../../hooks/useTheme';

const SIZE = 76;
const RADIUS = 188;

type Node = { icon: React.ReactNode; bg: string; color: string; border: string; label: string; shadow: string };

const nodes: Node[] = [
  { icon: <FaWhatsapp size={20} />, bg: 'var(--surface)', color: '#25D366', border: 'rgba(37,211,102,0.40)', label: 'whatsapp', shadow: 'rgba(37,211,102,0.22)' },
  { icon: <FaGithub size={20} />, bg: 'var(--surface)', color: '#181717', border: 'rgba(24,23,23,0.22)', label: 'github', shadow: 'rgba(24,23,23,0.14)' },
  { icon: <FaTiktok size={20} />, bg: 'var(--surface)', color: '#000000', border: 'rgba(0,0,0,0.18)', label: 'tiktok', shadow: 'rgba(0,0,0,0.12)' },
  { icon: <FaFacebook size={20} />, bg: 'var(--surface)', color: '#1877F2', border: 'rgba(24,119,242,0.35)', label: 'facebook', shadow: 'rgba(24,119,242,0.20)' },
  { icon: <FaTelegram size={18} />, bg: 'var(--surface)', color: '#26A5E4', border: 'rgba(38,165,228,0.35)', label: 'telegram', shadow: 'rgba(38,165,228,0.20)' },
  { icon: <FaLinkedinIn size={18} />, bg: 'var(--surface)', color: '#0A66C2', border: 'rgba(10,102,194,0.35)', label: 'linkedin', shadow: 'rgba(10,102,194,0.20)' },
  { icon: <BsInstagram size={20} />, bg: 'var(--surface)', color: '#E4405F', border: 'rgba(228,64,95,0.35)', label: 'instagram', shadow: 'rgba(228,64,95,0.20)' },
  { icon: <FiMail size={18} />, bg: 'var(--surface)', color: '#EA4335', border: 'rgba(234,67,53,0.35)', label: 'mail', shadow: 'rgba(234,67,53,0.20)' },
];

const _link = <FiLink size={18} />;

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const groupRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const email = site.links.email.replace('mailto:', '');
  const copy = () => {
    navigator.clipboard?.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  // adapt hitam di dark mode biar tetap kontras (native GitHub/TikTok putih di dark)
  const displayNodes = nodes.map((n) => {
    if (theme === 'dark' && (n.label === 'github' || n.label === 'tiktok')) {
      return { ...n, color: '#ffffff', border: 'rgba(255,255,255,0.22)', shadow: 'rgba(255,255,255,0.12)' };
    }
    return n;
  });

  // smooth hover pause: hanya saat hover item (orbit-node), bukan hover area orbit kosong
  useEffect(() => {
    const group = groupRef.current;
    if (!group) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let target = 1;
    let current = 1;
    let raf = 0;
    let ticking = false;
    let hoveredCount = 0;

    const allAnims = () =>
      [
        ...Array.from(group.querySelectorAll<HTMLElement>('.orbit-rotor')),
        ...Array.from(group.querySelectorAll<HTMLElement>('.orbit-node')),
      ].flatMap((el) => (el.getAnimations ? [...el.getAnimations()] : []));

    const tick = () => {
      ticking = true;
      current += (target - current) * 0.06;
      if (Math.abs(target - current) < 0.01) current = target;
      for (const a of allAnims()) {
        try {
          (a as any).playbackRate = current;
        } catch {}
      }
      if (Math.abs(target - current) > 0.001) {
        raf = requestAnimationFrame(tick);
      } else {
        ticking = false;
      }
    };
    const enter = () => {
      hoveredCount++;
      target = 0;
      if (!ticking) tick();
    };
    const leave = () => {
      hoveredCount = Math.max(0, hoveredCount - 1);
      if (hoveredCount === 0) {
        target = 1;
        if (!ticking) tick();
      }
    };

    const items = Array.from(group.querySelectorAll<HTMLElement>('.orbit-node'));
    for (const el of items) {
      el.addEventListener('mouseenter', enter);
      el.addEventListener('mouseleave', leave);
      el.addEventListener('focusin', enter as any);
      el.addEventListener('focusout', leave as any);
    }
    return () => {
      cancelAnimationFrame(raf);
      for (const el of items) {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
        el.removeEventListener('focusin', enter as any);
        el.removeEventListener('focusout', leave as any);
      }
    };
  }, []);

  return (
    <section id="contact" data-reveal className="py-10 md:py-14" style={{ scrollMarginTop: 80 }}>
      <div className="mx-auto flex w-full max-w-340 flex-col justify-center px-4 md:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-6 lg:gap-10">
          <div>
            <p className="font-mono text-xs tracking-[0.18em] uppercase" style={{ color: 'var(--fg-muted)' }}>
              — Contact
            </p>
            <h2
              className="mt-4 text-[2.55rem] leading-[0.9] tracking-[-0.04em] md:text-[3.6rem] lg:text-[4.4rem]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 400, color: 'var(--fg)' }}
            >
              <span className="block font-normal italic">Let&apos;s work</span>
              <span className="block font-normal italic">together</span>
            </h2>
            <p className="mt-5 max-w-105 text-sm leading-6" style={{ color: 'var(--fg-muted)' }}>
              Got an idea? I&apos;m available for freelance — brand, product, and engineering that feels expensive and
              ships fast. Response within 24h.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={site.links.email}
                className="inline-flex items-center gap-3 rounded-full px-2 py-2 pr-6 text-sm font-semibold transition"
                style={{ background: 'var(--fg)', color: 'var(--bg)' }}
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full text-sm" style={{ background: 'var(--bg)', color: 'var(--fg)' }}>
                  →
                </span>
                Get in touch
              </a>
              <button
                onClick={copy}
                className="inline-flex items-center rounded-full border px-5 py-3 text-sm font-medium transition"
                style={{ borderColor: 'var(--border)', background: 'var(--surface)', color: 'var(--fg)' }}
              >
                {copied ? 'Copied ✓' : email}
              </button>
            </div>
          </div>

          <div ref={groupRef} className="group relative mx-auto flex h-[420px] w-full max-w-[520px] items-center justify-center md:h-[500px] md:max-w-none">
            <div className="pointer-events-none absolute rounded-full border" style={{ width: RADIUS * 2, height: RADIUS * 2, borderColor: 'var(--border)', opacity: 0.9 }} />
            <div className="pointer-events-none absolute rounded-full border border-dashed" style={{ width: RADIUS * 2 + 46, height: RADIUS * 2 + 46, borderColor: 'var(--border)', opacity: 0.5 }} />
            <div className="pointer-events-none absolute rounded-full blur-3xl" style={{ width: 220, height: 220, background: 'radial-gradient(circle, rgba(88,85,246,0.14) 0%, transparent 70%)' }} aria-hidden />

            <div className="orbit-rotor absolute inset-0">
              {displayNodes.map((n, i) => {
                const angle = (i / displayNodes.length) * 360 - 90;
                const isSphere = n.icon === null;
                return (
                  <div
                    key={n.label}
                    className="absolute flex items-center justify-center"
                    style={{
                      width: SIZE,
                      height: SIZE,
                      left: '50%',
                      top: '50%',
                      marginLeft: -SIZE / 2,
                      marginTop: -SIZE / 2,
                      transform: `rotate(${angle}deg) translate(${RADIUS}px) rotate(${-angle}deg)`,
                    }}
                  >
                    <div
                      className="orbit-node flex h-full w-full items-center justify-center rounded-full"
                      style={{
                        width: SIZE,
                        height: SIZE,
                        minWidth: SIZE,
                        minHeight: SIZE,
                        background: n.bg,
                        color: n.color,
                        border: `1px solid ${n.border}`,
                        borderRadius: '50%',
                        aspectRatio: '1 / 1',
                        boxShadow: `0 8px 20px ${n.shadow}`,
                      }}
                      aria-label={n.label}
                    >
                      {isSphere ? <span className="block h-full w-full rounded-full" style={{ background: 'var(--surface)', borderRadius: '50%', border: '1px dashed var(--border)' }} /> : n.icon}
                    </div>
                  </div>
                );
              })}
            </div>
            <style>{`@keyframes orbitSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } } @keyframes orbitCounter { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } } .orbit-rotor { animation: orbitSpin 42s linear infinite; } .orbit-node { animation: orbitCounter 42s linear infinite; } @media (prefers-reduced-motion: reduce) { .orbit-rotor, .orbit-node { animation: none !important; } }`}</style>
            <span className="hidden">{_link}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
