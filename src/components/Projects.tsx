import { motion } from "motion/react";
import { projects } from "../data";
import { Layers } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 tracking-tight">精选项目</h2>
        <p className="text-zinc-400 text-lg max-w-2xl">展示工程化思维与动效驱动的数字产品体验设计。</p>
      </div>

      <div className="space-y-32">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="group relative"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
              <div className="md:col-span-8">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-2xl md:text-3xl font-display font-bold group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                </div>
                <p className="text-zinc-400 text-lg leading-relaxed mb-6 font-light">{project.description}</p>
                <ul className="space-y-3 mb-8">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-300">
                      <span className="text-indigo-500 mt-1.5 opacity-80">•</span>
                      <span className="font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-4 flex flex-col items-start md:items-end">
                <div className="text-zinc-500 font-mono text-sm mb-2">{project.date}</div>
                <div className="text-zinc-300 font-medium mb-6">{project.role}</div>
                <div className="flex flex-wrap gap-2 md:justify-end">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
