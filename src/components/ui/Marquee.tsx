const items = [
	'SvelteKit',
	'TypeScript',
	'Tailwind v4',
	'Svelte 5 Runes',
	'Indigo Mono',
	'Parallax',
	'Tilt + Spotlight',
	'Bento Grid',
	'Orbit',
	'Magnetic',
	'WCAG AA',
	'Vercel',
];
const doubled = [...items, ...items];

export default function Marquee() {
	return (
		<div
			className="relative overflow-hidden border-y py-3"
			style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
			aria-hidden="true"
		>
			<div
				className="flex w-max gap-8"
				style={{ animation: 'marquee 28s linear infinite' }}
				onMouseEnter={(e) => ((e.currentTarget.style.animationPlayState = 'paused') as unknown as void)}
				onMouseLeave={(e) => ((e.currentTarget.style.animationPlayState = 'running') as unknown as void)}
			>
				{doubled.map((item, idx) => (
					<span
						key={idx}
						className="flex items-center gap-8 font-mono text-xs tracking-[0.12em]"
						style={{ color: 'var(--fg-muted)' }}
					>
						<span className="h-1 w-1 rounded-full" style={{ background: 'var(--color-primary)' }}></span>
						{item}
					</span>
				))}
			</div>
		</div>
	);
}
