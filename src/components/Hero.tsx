import { motion } from "motion/react";
import { ArrowDown, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 md:px-12 max-w-7xl mx-auto pt-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl"
      >
        <h2 className="text-indigo-400 font-mono text-sm md:text-base mb-4 tracking-wider uppercase">UI/UX 设计师 & 动效设计专家</h2>
        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-display font-bold tracking-tighter leading-tight mb-8">
          以镜头节奏，<br className="hidden md:block" />
          重塑<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">数字体验</span>。
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-12 font-light">
          我将严谨的工程思维（Auto Layout 与设计系统）与深厚的影视动画剪辑功底相结合。我不仅设计静态的屏幕，更运用<span className="text-white font-medium">镜头语言与节奏感</span>，为界面注入灵动的转场与微交互，让产品体验更具生命力。
        </p>
        
        <div className="flex items-center gap-6">
          <a href="#projects" className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2">
            查看作品
          </a>
          <a href="mailto:1305426186@qq.com" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 px-4 py-4">
            <Mail size={20} />
            <span>联系我</span>
          </a>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-6 md:left-12 flex items-center gap-4 text-zinc-500 font-mono text-sm"
      >
        <span className="animate-bounce"><ArrowDown size={16} /></span>
        向下滚动探索
      </motion.div>
    </section>
  );
}
