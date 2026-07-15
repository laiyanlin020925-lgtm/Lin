import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ExperienceSection } from './components/Experience';

export default function App() {
  return (
    <main className="bg-zinc-950 min-h-screen text-zinc-50 selection:bg-indigo-500/30">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <ExperienceSection />
      
      <footer className="py-12 mt-12 text-center text-zinc-600 text-sm font-mono border-t border-zinc-900/50">
        <p className="mb-2">© {new Date().getFullYear()} 赖彦霖. 以镜头语言与节奏感驱动设计。</p>
        <p className="text-xs text-zinc-700">📍 现居：广东东莞</p>
      </footer>
    </main>
  );
}
