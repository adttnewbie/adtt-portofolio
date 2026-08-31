import { useMemo, useState, useRef } from 'react';

type Cat = 'Project' | 'Prestasi';
type Item = {
  company: string;
  role: string;
  period: string;
  desc: string;
  tags: string[];
  cat: Cat;
  year: number;
};

// urutan original (tanpa sorting) — sesuai input user
const items: Item[] = [
  {
    company: 'Freelance — UMKM',
    role: 'Software Engineer',
    period: '2024 — Sekarang',
    desc: 'Engineer reliable software for local businesses — pragmatic architecture, type-safe stacks, and WCAG AA delivery.',
    tags: ['TypeScript', 'SvelteKit', 'PostgreSQL'],
    cat: 'Project',
    year: 2024,
  },
  {
    company: 'SMK — Project Sekolah',
    role: 'E-Commerce / Kantin Online',
    period: 'Agu 2026',
    desc: 'Sistem jual-beli kantin online sekolah: transaksi real-time, kelola stok & laporan harian untuk siswa & kantin.',
    tags: ['Laravel', 'React', 'Tailwind', 'MySQL'],
    cat: 'Project',
    year: 2026,
  },
  {
    company: 'PMR — Ekstrakurikuler',
    role: 'Website Ekstrakurikuler PMR',
    period: '2025',
    desc: 'Bangun dashboard admin CRUD + RBAC untuk manajemen anggota, kegiatan, inventaris & arsip dokumentasi PMR.',
    tags: ['Laravel', 'React', 'CRUD', 'RBAC'],
    cat: 'Project',
    year: 2025,
  },
  {
    company: 'Tingkat Kabupaten',
    role: 'Juara 3 — Cloud Computing',
    period: '2026',
    desc: 'Meraih Juara 3 lomba Cloud Computing — desain arsitektur scalable & optimasi biaya deployment.',
    tags: ['Cloud Computing', 'GCP', 'Docker'],
    cat: 'Prestasi',
    year: 2026,
  },
  {
    company: 'Tingkat Kabupaten',
    role: 'Juara 2 — Cloud Computing',
    period: '2025',
    desc: 'Meraih Juara 2 lomba Cloud Computing — implementasi & deployment layanan cloud yang reliable.',
    tags: ['Cloud Computing', 'AWS', 'Deployment'],
    cat: 'Prestasi',
    year: 2025,
  },
  {
    company: 'SMK Rekayasa Perangkat Lunak',
    role: 'Computer Science Student',
    period: '2022 — 2026',
    desc: 'Fokus design system, web architecture & product craft — eksplorasi full-stack modern.',
    tags: ['RPL', 'Web Architecture'],
    cat: 'Project',
    year: 2022,
  },
];

const cats: (Cat | 'Semua')[] = ['Semua', 'Project', 'Prestasi'];

function TimelineCard({ e, idx }: { e: Item; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (ev: React.MouseEvent<HTMLDivElement>) => {
    const r = ev.currentTarget.getBoundingClientRect();
    const px = (ev.clientX - r.left) / r.width - 0.5;
    const py = (ev.clientY - r.top) / r.height - 0.5;
    if (ref.current) ref.current.style.transform = `perspective(900px) rotateY(${px * 4}deg) rotateX(${-py * 4}deg)`;
    ev.currentTarget.style.setProperty('--mx', `${ev.clientX - r.left}px`);
    ev.currentTarget.style.setProperty('--my', `${ev.clientY - r.top}px`);
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = 'perspective(900px) rotateY(0) rotateX(0)';
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group relative overflow-hidden rounded-[20px] border p-[1px] transition-[transform,box-shadow] duration-300 will-change-transform"
      style={{
        background: 'var(--card-bg)',
        borderColor: 'var(--border)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
      }}
    >
      {/* spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(560px circle at var(--mx,50%) var(--my,30%), rgba(88,85,246,0.14), transparent 62%)',
        }}
        aria-hidden
      />
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #5855F6 45%, transparent)' }} aria-hidden />
      <div className="relative rounded-[19px] p-5 md:p-6" style={{ background: 'var(--card-bg)' }}>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <span
            className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[10px] tracking-[0.08em] uppercase"
            style={{
              borderColor: e.cat === 'Prestasi' ? 'rgba(88,85,246,0.22)' : 'var(--border)',
              background: e.cat === 'Prestasi' ? 'rgba(88,85,246,0.08)' : 'var(--surface)',
              color: e.cat === 'Prestasi' ? '#5855F6' : 'var(--fg-muted)',
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: e.cat === 'Prestasi' ? '#5855F6' : 'var(--fg-muted)' }} />
            {e.cat}
          </span>
          <span className="font-mono text-[11px] tracking-[0.12em]" style={{ color: 'var(--fg-muted)', opacity: 0.5 }}>
            #{String(idx + 1).padStart(2, '0')} — {e.year}
          </span>
        </div>

        <p className="mt-4 font-mono text-xs tracking-[0.06em]" style={{ color: 'var(--fg-muted)' }}>
          {e.period}
        </p>
        <h3 className="mt-1 text-[17px] font-bold leading-tight tracking-[-0.02em] md:text-[18px]" style={{ color: 'var(--fg)' }}>
          {e.role}
        </h3>
        <p className="text-sm font-semibold" style={{ color: '#5855F6' }}>
          {e.company}
        </p>
        <p className="mt-2.5 max-w-[60ch] text-sm leading-6" style={{ color: 'var(--fg-muted)' }}>
          {e.desc}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {e.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border px-2.5 py-1 font-mono text-[11px] transition group-hover:border-[rgba(88,85,246,0.18)]"
              style={{ borderColor: 'var(--border)', background: 'var(--surface)', color: 'var(--fg-muted)' }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const [filter, setFilter] = useState<(typeof cats)[number]>('Semua');
  // tanpa sorting — keep original order
  const filtered = useMemo(() => (filter === 'Semua' ? items : items.filter((i) => i.cat === filter)), [filter]);

  return (
    <section id="experience" data-reveal className="relative overflow-hidden py-16 md:py-20" style={{ scrollMarginTop: 80 }}>
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05]"
        style={{ background: 'radial-gradient(800px circle at 12% 18%, var(--color-primary) 0%, transparent 62%)' }}
        aria-hidden
      />
      <div className="pointer-events-none absolute top-[6%] left-1/2 hidden -translate-x-1/2 select-none md:block" aria-hidden>
        <p className="leading-none font-black tracking-[-0.06em] whitespace-nowrap" style={{ fontSize: 'clamp(6rem, 13vw, 12rem)', color: 'rgba(88,85,246,0.04)' }}>
          EXPERIENCE
        </p>
      </div>

      <div className="relative mx-auto max-w-[1360px] px-4 md:px-6">
        {/* header */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs tracking-[0.14em] uppercase" style={{ color: 'var(--color-primary)' }}>
              Journey
            </p>
            <h2 className="mt-2 text-[2rem] font-black tracking-[-0.03em] md:text-[2.5rem]" style={{ color: 'var(--fg)' }}>
              Experience
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6" style={{ color: 'var(--fg-muted)' }}>
              Timeline editorial — perjalanan project & prestasi. Filter kategori tanpa mengubah urutan asli.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 md:items-end">
            <div className="flex rounded-full border p-1" style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}>
              {cats.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className="rounded-full px-4 py-1.5 font-mono text-xs font-semibold tracking-[0.04em] transition"
                  style={filter === c ? { background: '#5855F6', color: 'white', boxShadow: '0 6px 18px rgba(88,85,246,0.28)' } : { color: 'var(--fg-muted)', background: 'transparent' }}
                >
                  {c}
                </button>
              ))}
            </div>
            <span className="font-mono text-[11px] tracking-[0.08em]" style={{ color: 'var(--fg-muted)', opacity: 0.6 }}>
              {filtered.length} item • tanpa sorting
            </span>
          </div>
        </div>

        {/* timeline */}
        <div className="relative mt-10 md:mt-12">
          {/* vertical line */}
          <div className="absolute top-0 bottom-0 left-[11px] hidden w-px md:left-[14px] md:block" style={{ background: 'linear-gradient(to bottom, rgba(88,85,246,0.35), var(--border) 18%, var(--border) 100%)' }} aria-hidden />
          {/* indigo top glow */}
          <div className="pointer-events-none absolute top-0 left-[7px] hidden h-24 w-2 rounded-full md:left-[10px] md:block" style={{ background: 'linear-gradient(to bottom, rgba(88,85,246,0.5), transparent)' }} aria-hidden />

          <ol className="relative space-y-6 md:space-y-7">
            {filtered.map((e, i) => (
              <li key={`${e.role}-${e.period}-${i}`} className="relative ms-0 md:ms-12">
                {/* dot + ping */}
                <span
                  className="absolute -start-1.5 top-6 hidden h-3 w-3 rounded-full md:top-7 md:block"
                  style={{ left: '-44px', background: '#5855F6', boxShadow: '0 0 0 6px rgba(88,85,246,0.12)' }}
                  aria-hidden
                />
                <span
                  className="absolute hidden h-3 w-3 animate-ping rounded-full opacity-20 md:block"
                  style={{ left: '-44px', top: '28px', background: '#5855F6' }}
                  aria-hidden
                />
                {/* mobile dot */}
                <span className="absolute top-6 left-0 h-2.5 w-2.5 rounded-full md:hidden" style={{ background: '#5855F6' }} aria-hidden />

                {/* card wrapper with left indent on mobile for line */}
                <div className="ms-6 md:ms-0">
                  <TimelineCard e={e} idx={i} />
                </div>
              </li>
            ))}
          </ol>

          {/* bottom fade */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-16 md:block" style={{ background: 'linear-gradient(to top, var(--bg), transparent)' }} aria-hidden />
        </div>

        <div className="mt-8 flex items-center gap-3">
          <span className="h-px w-8" style={{ background: '#5855F6' }} aria-hidden />
          <p className="font-mono text-[10px] tracking-[0.08em] uppercase" style={{ color: 'var(--fg-muted)', opacity: 0.5 }}>
            hover kartu untuk tilt + spotlight • filter di atas tidak mengubah urutan
          </p>
        </div>
      </div>
    </section>
  );
}
