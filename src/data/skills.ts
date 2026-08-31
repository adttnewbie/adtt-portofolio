export type SkillGroup = {
	label: string;
	accent?: boolean;
	skills: string[];
};

export const skillGroups: SkillGroup[] = [
	{
		label: 'Frontend Craft',
		accent: true,
		skills: ['Svelte', 'TypeScript', 'Tailwind CSS', 'Vite', 'React', 'Vue', 'Laravel']
	},
	{
		label: 'Backend & Systems',
		skills: ['Node.js', 'Express JS', 'REST API', 'Golang', 'ASP .NET', 'MySQL']
	},
	{
		label: 'Tooling & Delivery',
		skills: ['Git / CI', 'Vercel', 'Testing', 'Design Systems', 'Parallax & Motion']
	}
];
