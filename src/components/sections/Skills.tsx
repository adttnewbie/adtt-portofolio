import LogoLoop from '../ui/LogoLoop';
import { skillGroups } from '../../data/skills';
import {
	SiSvelte,
	SiTypescript,
	SiTailwindcss,
	SiVite,
	SiReact,
	SiVuedotjs,
	SiLaravel,
	SiNodedotjs,
	SiExpress,
	SiGo,
	SiDotnet,
	SiMysql,
	SiGit,
	SiVercel,
	SiFigma,
	SiFramer,
	SiVitest,
	SiPostman,
} from 'react-icons/si';

const iconMap: Record<string, { Icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>; color: string; href: string }> = {
	'Svelte': { Icon: SiSvelte, color: '#FF3E00', href: 'https://svelte.dev' },
	'TypeScript': { Icon: SiTypescript, color: '#3178C6', href: 'https://www.typescriptlang.org' },
	'Tailwind CSS': { Icon: SiTailwindcss, color: '#06B6D4', href: 'https://tailwindcss.com' },
	'Vite': { Icon: SiVite, color: '#646CFF', href: 'https://vitejs.dev' },
	'React': { Icon: SiReact, color: '#61DAFB', href: 'https://react.dev' },
	'Vue': { Icon: SiVuedotjs, color: '#4FC08D', href: 'https://vuejs.org' },
	'Laravel': { Icon: SiLaravel, color: '#FF2D20', href: 'https://laravel.com' },
	'Node.js': { Icon: SiNodedotjs, color: '#339933', href: 'https://nodejs.org' },
	'Express JS': { Icon: SiExpress, color: '#111111', href: 'https://expressjs.com' },
	'REST API': { Icon: SiPostman, color: '#FF6C37', href: 'https://www.postman.com' },
	'Golang': { Icon: SiGo, color: '#00ADD8', href: 'https://go.dev' },
	'ASP .NET': { Icon: SiDotnet, color: '#512BD4', href: 'https://dotnet.microsoft.com' },
	'MySQL': { Icon: SiMysql, color: '#4479A1', href: 'https://www.mysql.com' },
	'Git / CI': { Icon: SiGit, color: '#F05032', href: 'https://git-scm.com' },
	'Vercel': { Icon: SiVercel, color: '#111111', href: 'https://vercel.com' },
	'Testing': { Icon: SiVitest, color: '#6E9F18', href: 'https://vitest.dev' },
	'Design Systems': { Icon: SiFigma, color: '#F24E1E', href: 'https://figma.com' },
	'Parallax & Motion': { Icon: SiFramer, color: '#0055FF', href: 'https://www.framer.com/motion' },
};

function toLogos(skills: string[]) {
	return skills.map((label) => {
		const entry = iconMap[label];
		if (!entry) return { node: <span className="font-mono text-sm font-bold">{label.slice(0, 2)}</span>, title: label };
		const { Icon, color, href } = entry;
		return {
			node: (
				<span className="inline-flex items-center gap-3 bg-transparent md:gap-3.5">
					<span className="flex shrink-0 items-center justify-center bg-transparent" style={{ width: 56, height: 56 }}>
						<Icon size={44} style={{ color }} />
					</span>
					<span className="font-sans text-[1.1rem] font-black tracking-[-0.03em] md:text-[1.5rem]" style={{ color: 'var(--fg)' }}>
						{label}
					</span>
				</span>
			),
			title: label,
			href,
			ariaLabel: label,
		};
	});
}

export default function Skills() {
	const row1 = toLogos(skillGroups[0].skills);
	const row2 = toLogos(skillGroups[1].skills);
	const row3 = toLogos(skillGroups[2].skills);

	return (
		<section id="skills" data-reveal className="relative py-16 md:py-20" style={{ scrollMarginTop: 80 }}>
			<div
				className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
				style={{ background: 'radial-gradient(900px circle at 18% 18%, var(--color-indigo-100) 0%, transparent 62%), radial-gradient(700px circle at 88% 84%, var(--color-primary) 0%, transparent 55%)' }}
				aria-hidden="true"
			/>

			<div className="mx-auto max-w-340 px-4 md:px-6">
				<div className="flex flex-wrap items-end justify-between gap-4">
					<div>
						<p className="font-mono text-xs tracking-[0.14em] uppercase" style={{ color: 'var(--color-primary)' }}>
							Service
						</p>
						<h2 className="mt-2 text-[2rem] font-black tracking-[-0.03em] md:text-[2.6rem]" style={{ color: 'var(--fg)' }}>
							Craft, systems & delivery
						</h2>
						<p className="mt-3 max-w-xl text-sm leading-6" style={{ color: 'var(--fg-muted)' }}>
							Frontend craft with editorial precision — performance, accessibility, and motion that feels expensive.
						</p>
					</div>
					<p className="hidden font-mono text-xs tracking-[0.08em] md:block" style={{ color: 'var(--fg-muted)', opacity: 0.6 }}>
						LogoLoop • 3 rows opposite • real logos
					</p>
				</div>

				<div className="mt-10 flex flex-col gap-1">
					<div className="overflow-hidden rounded-2xl bg-transparent py-2">
						<LogoLoop
							logos={row1}
							speed={120}
							direction="left"
							logoHeight={56}
							gap={48}
							hoverSpeed={0}
							scaleOnHover
							ariaLabel="Frontend Craft logos"
						/>
					</div>
					<div className="overflow-hidden rounded-2xl bg-transparent py-2">
						<LogoLoop
							logos={row2}
							speed={120}
							direction="right"
							logoHeight={56}
							gap={48}
							hoverSpeed={0}
							scaleOnHover
							ariaLabel="Backend logos"
						/>
					</div>
					<div className="overflow-hidden rounded-2xl bg-transparent py-2">
						<LogoLoop
							logos={row3}
							speed={120}
							direction="left"
							logoHeight={56}
							gap={48}
							hoverSpeed={0}
							scaleOnHover
							ariaLabel="Tooling logos"
						/>
					</div>
				</div>

				<div className="mt-8 grid gap-4 md:grid-cols-3">
					{skillGroups.map((group, idx) => (
						<div
							key={group.label}
							className="relative overflow-hidden rounded-2xl border p-5"
							style={{
								borderColor: group.accent ? 'var(--color-primary)' : 'var(--border)',
								background: group.accent ? 'color-mix(in srgb, var(--color-primary) 6%, var(--card-bg))' : 'var(--card-bg)',
							}}
						>
							{group.accent && <div className="pointer-events-none absolute -top-8 -right-8 h-20 w-20 rounded-full opacity-[0.08] blur-xl" style={{ background: 'var(--color-primary)' }} />}
							<p className="flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase" style={{ color: group.accent ? 'var(--color-primary)' : 'var(--fg-muted)' }}>
								{group.accent && <span className="h-1.5 w-1.5 rounded-full" style={{ background: 'var(--color-primary)' }} />}
								0{idx + 1} — {group.label}
							</p>
							<p className="mt-2 text-sm font-semibold" style={{ color: 'var(--fg)' }}>
								{group.label}
							</p>
							<p className="mt-1 text-xs leading-5" style={{ color: 'var(--fg-muted)' }}>
								{group.accent && 'Accent stack — highlight craft. '}
								{group.skills.slice(0, 4).join(' • ')}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
