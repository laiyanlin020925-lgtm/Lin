import { motion } from "motion/react";
import { PenTool, Layout, Video, Sparkles } from "lucide-react";

const skillCategories = [
  {
    icon: <Layout className="text-indigo-400" size={24} />,
    title: "UI/UX & 信息架构",
    description: "移动端/网页端界面设计、信息架构（IA）、用户旅程图规划、低/高保真原型制作。"
  },
  {
    icon: <PenTool className="text-cyan-400" size={24} />,
    title: "工程化设计思维",
    description: "Figma 深度使用（熟练运用 Auto Layout、组件系统与响应式布局），熟练运用 Sketch、Adobe XD 搭建可落地的设计规范。"
  },
  {
    icon: <Video className="text-purple-400" size={24} />,
    title: "动效与微交互 (核心优势)",
    description: "精通 After Effects。擅长将视频剪辑与动态视觉经验融入 UI 转场与微交互设计，用镜头节奏感指导界面交互，并输出精确的动效规范方案。"
  },
  {
    icon: <Sparkles className="text-emerald-400" size={24} />,
    title: "前沿 AI 辅助设计",
    description: "熟练运用 AI（Midjourney / Stable Diffusion）进行界面视觉包装、场景渲染及前期概念发散，具备成熟的 AI 辅助设计工作流。"
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 tracking-tight">核心竞争力</h2>
        <p className="text-zinc-400 text-lg max-w-2xl">将视频剪辑的镜头节奏降维打击，连接视觉美学与规范化的界面系统。</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800/50 hover:bg-zinc-900 transition-colors"
          >
            <div className="mb-6 p-4 bg-zinc-950 inline-block rounded-2xl border border-zinc-800">
              {skill.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
            <p className="text-zinc-400 leading-relaxed font-light">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
