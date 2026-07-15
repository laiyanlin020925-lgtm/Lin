import { motion } from "motion/react";
import { experiences, education } from "../data";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-900/50 mt-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 tracking-tight">工作经历 &<br/>教育背景</h2>
        </div>
        
        <div className="md:col-span-8 space-y-20">
          {/* Work */}
          <div>
            <h3 className="text-lg font-mono text-indigo-400 mb-8 uppercase tracking-widest">工作经历</h3>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 border-l border-zinc-800/80"
                >
                  <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[6.5px] top-2 shadow-[0_0_12px_rgba(99,102,241,0.6)]" />
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h4 className="text-xl font-bold text-white tracking-tight">{exp.role}</h4>
                    <span className="text-zinc-500 font-mono text-sm mt-1 md:mt-0">{exp.date}</span>
                  </div>
                  <div className="text-zinc-400 font-medium mb-5">{exp.company}</div>
                  <p className="text-zinc-300 leading-relaxed mb-6 font-light">{exp.description}</p>
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-zinc-400 text-sm flex items-start gap-3">
                        <span className="text-zinc-700 mt-0.5">▹</span>
                        <span className="font-light">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div>
            <h3 className="text-lg font-mono text-emerald-400 mb-8 uppercase tracking-widest">教育背景</h3>
            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div 
                  key={edu.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 border-l border-zinc-800/80"
                >
                  <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[6.5px] top-2 shadow-[0_0_12px_rgba(52,211,153,0.6)]" />
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h4 className="text-xl font-bold text-white tracking-tight">{edu.school}</h4>
                    <span className="text-zinc-500 font-mono text-sm mt-1 md:mt-0">{edu.date}</span>
                  </div>
                  <div className="text-zinc-400 font-medium mb-4">{edu.degree} · {edu.major}</div>
                  <p className="text-zinc-300 leading-relaxed mb-6 font-light">{edu.description}</p>
                  <ul className="space-y-3">
                    {edu.highlights.map((highlight, i) => (
                      <li key={i} className="text-zinc-400 text-sm flex items-start gap-3">
                        <span className="text-zinc-700 mt-0.5">▹</span>
                        <span className="font-light">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
