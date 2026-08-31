import { useEffect, useRef } from 'react';

export function useTilt<T extends HTMLElement>() {
	const ref = useRef<T>(null);

	useEffect(() => {
		const node = ref.current;
		if (!node) return;
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		let rect: DOMRect | null = null;

		const onMove = (e: MouseEvent) => {
			rect = rect ?? node.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;
			const cx = rect.width / 2;
			const cy = rect.height / 2;
			const rotateX = ((y - cy) / cy) * -5;
			const rotateY = ((x - cx) / cx) * 6;
			node.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
			node.style.setProperty('--x', `${x}px`);
			node.style.setProperty('--y', `${y}px`);
		};

		const onLeave = () => {
			node.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
			rect = null;
		};

		node.addEventListener('mousemove', onMove);
		node.addEventListener('mouseleave', onLeave);
		const onResize = () => (rect = null);
		window.addEventListener('resize', onResize);

		return () => {
			node.removeEventListener('mousemove', onMove);
			node.removeEventListener('mouseleave', onLeave);
			window.removeEventListener('resize', onResize);
		};
	}, []);

	return ref;
}
