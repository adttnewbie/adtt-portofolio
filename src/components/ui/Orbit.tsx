const orbitSkills = ['Svelte', 'TypeScript', 'Tailwind', 'Node.js', 'Postgres', 'Vite', 'MySQL', 'React', 'Vue', 'Golang'];

export default function Orbit() {
	return (
		<div
			className="group relative mx-auto flex h-80 w-full max-w-130 items-center justify-center"
			aria-hidden="true"
		>
			<div
				className="absolute h-60 w-60 rounded-full opacity-[0.10] blur-3xl"
				style={{ background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)' }}
			/>
			<div
				className="absolute h-45 w-45 rounded-full border"
				style={{ borderColor: 'var(--color-indigo-200)' }}
			/>
			<div
				className="absolute h-70 w-70 rounded-full border border-dashed"
				style={{ borderColor: 'var(--color-indigo-200)' }}
			/>
			<div
				className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full font-mono text-xs font-bold text-white"
				style={{ background: 'var(--color-primary)', boxShadow: '0 8px 24px var(--color-indigo-glow)' }}
			>
				AN
			</div>
			{orbitSkills.map((skill, i) => {
				const radius = i % 2 === 0 ? 92 : 138;
				const duration = 18 + i * 1.4;
				const delay = i * -2.2;
				return (
					<div
						key={skill}
						className="absolute flex items-center justify-center rounded-full border px-3 py-1.5 font-mono text-[10px] tracking-[0.06em] group-hover:[animation-play-state:paused]"
						style={
							{
								background: 'var(--card-bg)',
								borderColor: 'var(--border)',
								color: 'var(--fg-muted)',
								'--radius': `${radius}px`,
								animation: `orbit ${duration}s linear ${delay}s infinite`,
							} as React.CSSProperties
						}
					>
						{skill}
					</div>
				);
			})}
			<style>{`@media (prefers-reduced-motion: reduce) { div[style*='animation: orbit'] { animation: none !important; } }`}</style>
		</div>
	);
}
