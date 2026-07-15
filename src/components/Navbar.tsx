import { motion } from "motion/react";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900/50"
    >
      <div className="font-display font-bold text-xl tracking-tight">
        赖彦霖 <span className="text-indigo-400">Lai.</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
        <a href="#skills" className="hover:text-white transition-colors">核心技能</a>
        <a href="#projects" className="hover:text-white transition-colors">精选项目</a>
        <a href="#experience" className="hover:text-white transition-colors">经历与教育</a>
      </div>
    </motion.nav>
  );
}
