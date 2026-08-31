import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
// Experience hidden for now — not enough items yet
// import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';

export default function App() {
	return (
		<>
			<a
				href="#main"
				className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-100 focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
			>
				Skip to content
			</a>
			<Header />
			<main id="main">
				<Hero />
				<About />
				<Skills />
				<Projects />
				{/* <Experience /> — hidden until more experience */}
				<Contact />
			</main>
			<Footer />
		</>
	);
}
