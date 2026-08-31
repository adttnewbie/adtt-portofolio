import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type Theme = 'dark' | 'light';
type Ctx = { theme: Theme; toggle: () => void; setTheme: (t: Theme) => void };

const ThemeContext = createContext<Ctx>({ theme: 'dark', toggle: () => {}, setTheme: () => {} });

export function ThemeProvider({ children }: { children: ReactNode }) {
	const [theme, setThemeState] = useState<Theme>('dark');

	useEffect(() => {
		try {
			const stored = localStorage.getItem('theme') as Theme | null;
			const initial: Theme = stored ?? 'dark';
			document.documentElement.setAttribute('data-theme', initial);
			setThemeState(initial);
		} catch {
			document.documentElement.setAttribute('data-theme', 'dark');
		}
	}, []);

	const setTheme = (value: Theme) => {
		document.documentElement.setAttribute('data-theme', value);
		localStorage.setItem('theme', value);
		setThemeState(value);
	};

	const toggle = () => {
		const current = (document.documentElement.getAttribute('data-theme') as Theme | null) ?? theme;
		const next: Theme = current === 'light' ? 'dark' : 'light';
		setTheme(next);
	};

	return <ThemeContext.Provider value={{ theme, toggle, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
	return useContext(ThemeContext);
}
