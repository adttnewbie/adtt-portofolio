import { useState } from 'react';
import { site } from '../../data/site';
import DepthText from '../ui/DepthText';
import { useTheme } from '../../hooks/useTheme';

export default function Hero() {
	const [x, setX] = useState(50);
	const [y, setY] = useState(50);
	const [hovering, setHovering] = useState(false);
	const { theme } = useTheme();

	const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
		const el = e.currentTarget;
		const r = el.getBoundingClientRect();
		setX(((e.clientX - r.left) / r.width) * 100);
		setY(((e.clientY - r.top) / r.height) * 100);
		setHovering(true);
	};

	return (
		<section id="home" className="relative overflow-hidden" style={{ scrollMarginTop: 80 }}>
			<div
				className="pointer-events-none absolute top-[48%] left-1/2 hidden -translate-x-1/2 -translate-y-1/2 select-none md:block"
				aria-hidden="true"
			>
				<p
					className="leading-none font-black tracking-[-0.06em] whitespace-nowrap"
					style={{ fontSize: 'clamp(7rem, 16vw, 14rem)', color: 'rgba(88, 85, 246, 0.06)' }}
				>
					DEVELOPER
				</p>
			</div>

			<div className="relative mx-auto max-w-[1360px] px-4 md:px-6">
				<div className="grid min-h-[620px] grid-cols-12 gap-6 py-8 md:min-h-[720px] md:gap-4 md:py-6">
					<div className="col-span-12 flex flex-col justify-between md:col-span-3">
						<div>
							<h1
								className="flex flex-col gap-0 overflow-visible text-[3.2rem] leading-[0.88] tracking-[-0.05em] md:text-[4.4rem] lg:text-[5.6rem]"
								style={{ color: 'var(--hero-heading)', overflow: 'visible' }}
							>
								<span
									className="font-normal italic leading-none tracking-[-0.02em]"
									style={{
										fontFamily: "Georgia, 'Times New Roman', Times, serif",
										fontWeight: 400,
										fontStyle: 'italic',
										color: 'var(--hero-heading)',
									}}
								>
									I&apos;M
								</span>
								<span className="inline-block max-w-full overflow-visible pr-6 md:pr-10">
									<DepthText
										text="ADITYA"
										layers={28}
										depth={2.2}
										faceColor={theme === 'light' ? '#0a0a0b' : '#fafafa'}
										depthColor="#5855F6"
										tilt={7}
										pointerTracking
										smoothing={0.14}
										perspective={900}
										autoOrbit
										orbitSpeed={0.28}
										fontSize="1em"
										fontWeight={900}
										shadow={false}
										className="leading-[0.88]"
									/>
								</span>
							</h1>

							<a
								href="#contact"
								className="mt-7 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-md transition hover:brightness-[0.96]"
								style={{ background: '#5855F6', boxShadow: '0 10px 24px rgba(88,85,246,0.32)' }}
							>
								Let&apos;s Discuss
								<span
									className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm leading-none"
									style={{ color: '#5855F6' }}
								>
									→
								</span>
							</a>
						</div>

						<p className="mt-10 max-w-[300px] text-[14px] leading-6 md:mt-auto" style={{ color: 'var(--hero-muted)' }}>
							Hello, I&apos;m {site.name}, a {site.role} passionate about creating meaningful digital experiences.
						</p>
					</div>

					<div className="relative col-span-12 flex items-end justify-center md:col-span-6">
						<div
							className="pointer-events-none absolute bottom-0 left-1/2 h-[74%] w-[92%] -translate-x-1/2 rounded-t-[28px] opacity-60"
							style={{
								background: 'radial-gradient(ellipse at center bottom, rgba(88,85,246,0.16) 0%, transparent 70%)',
							}}
							aria-hidden="true"
						/>

						<div
							className="hero-reveal group relative z-10 block w-[380px] cursor-crosshair md:w-[500px] lg:w-[580px]"
							style={
								{
									'--x': `${x}%`,
									'--y': `${y}%`,
									'--show': hovering ? '1' : '0',
								} as React.CSSProperties
							}
							onMouseMove={onMove}
							onMouseLeave={() => setHovering(false)}
						>
							<picture>
								<source srcSet="/adtt-600.webp 600w, /adtt.webp 900w" type="image/webp" />
								<img
									src="/adtt.png"
									alt={`Portrait of ${site.name}`}
									width={900}
									height={1273}
									className="hero-base h-auto w-full object-contain object-bottom"
									loading="eager"
									fetchPriority="high"
									decoding="async"
									draggable={false}
								/>
							</picture>
							<picture className="hero-overlay absolute inset-0" aria-hidden="true">
								<source srcSet="/adtt-600.webp 600w, /adtt.webp 900w" type="image/webp" />
								<img
									src="/adtt.png"
									alt=""
									width={900}
									height={1273}
									className="h-auto w-full object-contain object-bottom"
									loading="eager"
									decoding="async"
									draggable={false}
								/>
							</picture>
						</div>
					</div>

					<div className="col-span-12 flex flex-col justify-between md:col-span-3">
						<div className="text-left md:text-right">
							<p className="font-mono text-xs tracking-[0.14em] uppercase" style={{ color: 'var(--hero-heading)' }}>
								Follow Me
							</p>
							<div className="mt-3 flex gap-2.5 md:justify-end">
								{[
									{ l: 'GH', h: site.links.github },
									{ l: 'In', h: site.links.linkedin },
									{ l: 'X', h: site.links.github },
									{ l: 'Ig', h: site.links.linkedin },
								].map((s) => (
									<a
										key={s.l}
										href={s.h}
										target="_blank"
										rel="noreferrer"
										className="flex h-9 w-9 items-center justify-center rounded-full border text-[11px] font-semibold transition hover:scale-105"
										style={{ borderColor: 'var(--hero-social-border)', color: 'var(--hero-social-color)', background: 'var(--hero-social-bg)' }}
										aria-label={s.l}
									>
										{s.l}
									</a>
								))}
							</div>
							<p className="mt-5 max-w-[260px] text-[14px] leading-6 md:ml-auto" style={{ color: 'var(--hero-muted)' }}>
								I design intuitive interfaces and build user-centric products.
							</p>
						</div>

						<div className="mt-10 md:mt-auto md:text-right">
							<p
								className="text-[2.1rem] leading-[0.92] font-black tracking-[-0.04em] md:text-[2.6rem] lg:text-[3.1rem]"
								style={{ color: 'var(--hero-heading)' }}
							>
								SOFTWARE
								<br />
								ENGINEER
								<br />
								<span style={{ color: 'var(--hero-heading)' }}>CRAFT</span>
							</p>
						</div>
					</div>
				</div>
			</div>

			<style>{`
        .hero-base { filter: grayscale(100%) drop-shadow(0 24px 36px rgba(0,0,0,0.12)); }
        .hero-overlay {
          filter: drop-shadow(0 24px 36px rgba(0,0,0,0.12));
          mask-image: radial-gradient(circle 190px at var(--x) var(--y), black 0 110px, rgba(0,0,0,0.95) 125px, transparent 190px);
          -webkit-mask-image: radial-gradient(circle 190px at var(--x) var(--y), black 0 110px, rgba(0,0,0,0.95) 125px, transparent 190px);
          opacity: var(--show);
          transition: opacity 0.2s ease;
          will-change: mask-image;
          pointer-events: none;
        }
        @media (prefers-reduced-motion: reduce) { .hero-overlay { transition: none; } }
        [data-theme='dark'] section div[aria-hidden] p { color: rgba(129,140,248,0.09) !important; }
        [data-theme='light'] section div[aria-hidden] p { color: rgba(88, 85, 246, 0.06) !important; }
      `}</style>
		</section>
	);
}
