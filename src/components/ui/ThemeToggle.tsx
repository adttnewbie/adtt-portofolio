import { useTheme } from '../../hooks/useTheme';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function ThemeToggle() {
	const { theme, toggle } = useTheme();
	return (
		<button
			onClick={toggle}
			aria-label={`Toggle theme, current ${theme}`}
			className="inline-flex h-9 w-9 items-center justify-center rounded-full border text-sm transition-colors hover:opacity-90"
			style={{
				borderColor: 'var(--border)',
				background: 'var(--surface)',
				color: 'var(--fg)',
			}}
			title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
		>
			<span aria-hidden="true" className="inline-flex">
				{theme === 'dark' ? <FiMoon size={16} strokeWidth={2} /> : <FiSun size={16} strokeWidth={2} />}
			</span>
		</button>
	);
}
