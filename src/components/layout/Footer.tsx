export default function Footer() {
	return (
		<footer className="border-t py-8 text-center text-sm" style={{ borderColor: 'var(--border)', color: 'var(--fg-muted)' }}>
			<div className="mx-auto max-w-[1360px] px-4 md:px-6">
				<p>© {new Date().getFullYear()} Aditya Nurdiansyah. Crafted with SvelteKit, Tailwind & parallax — luxury-grade.</p>
			</div>
		</footer>
	);
}
