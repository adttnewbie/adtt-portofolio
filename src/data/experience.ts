export type Experience = {
	company: string;
	role: string;
	period: string;
	desc: string;
	tags?: string[];
};

export const experiences: Experience[] = [
	{
		company: 'Freelance',
		role: 'Software Engineer',
		period: '2024 — Present',
		desc: 'Engineering end-to-end software for local clients — from architecture to accessible, maintainable delivery.',
		tags: ['TypeScript', 'SvelteKit', 'PostgreSQL']
	},
	{
		company: 'University',
		role: 'Computer Science Student',
		period: '2022 — 2026',
		desc: 'Relevant coursework and projects.'
	}
];
