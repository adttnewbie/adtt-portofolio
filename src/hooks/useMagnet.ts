import { useEffect, useRef } from 'react';

export function useMagnet<T extends HTMLElement>() {
	const ref = useRef<T>(null);
	useEffect(() => {
		const node = ref.current;
		if (!node) return;
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		const onMove = (e: MouseEvent) => {
			const rect = node.getBoundingClientRect();
			const x = e.clientX - rect.left - rect.width / 2;
			const y = e.clientY - rect.top - rect.height / 2;
			node.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
		};
		const onLeave = () => {
			node.style.transform = 'translate(0, 0)';
			node.style.transition = 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)';
		};
		const onEnter = () => {
			node.style.transition = 'transform 0.15s ease-out';
		};

		node.addEventListener('mousemove', onMove);
		node.addEventListener('mouseleave', onLeave);
		node.addEventListener('mouseenter', onEnter);
		return () => {
			node.removeEventListener('mousemove', onMove);
			node.removeEventListener('mouseleave', onLeave);
			node.removeEventListener('mouseenter', onEnter);
		};
	}, []);
	return ref;
}
