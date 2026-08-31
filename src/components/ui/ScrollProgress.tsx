import { useEffect, useState } from 'react';

export default function ScrollProgress() {
	const [progress, setProgress] = useState(0);
	useEffect(() => {
		const onScroll = () => {
			const max = document.documentElement.scrollHeight - window.innerHeight;
			setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
		};
		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener('scroll', onScroll);
	}, []);
	return (
		<div className="pointer-events-none fixed top-0 left-0 z-[60] h-px w-full" style={{ background: 'var(--border)' }}>
			<div
				className="h-full transition-[width] duration-150"
				style={{ background: 'var(--color-primary)', width: `${progress}%` }}
			/>
		</div>
	);
}
