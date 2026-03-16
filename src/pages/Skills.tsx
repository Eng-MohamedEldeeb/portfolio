import { Cloud, Database, Globe, Server } from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "../components/Section";

export const Skills = () => {
  const categories = [
    {
      title: "Frontend",
      icon: <Globe size={20} />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React / Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Vue.js", level: 78 },
      ],
    },
    {
      title: "Backend",
      icon: <Server size={20} />,
      color: "from-indigo-500 to-blue-500",
      skills: [
        { name: "Node.js / Express", level: 92 },
        { name: "Python / FastAPI", level: 85 },
        { name: "GraphQL", level: 80 },
        { name: "REST APIs", level: 95 },
      ],
    },
    {
      title: "Database",
      icon: <Database size={20} />,
      color: "from-cyan-500 to-teal-500",
      skills: [
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 85 },
        { name: "Redis", level: 78 },
        { name: "Prisma ORM", level: 82 },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: <Cloud size={20} />,
      color: "from-violet-500 to-indigo-500",
      skills: [
        { name: "Docker / K8s", level: 80 },
        { name: "AWS / GCP", level: 75 },
        { name: "CI/CD GitHub Actions", level: 85 },
        { name: "Linux / Bash", level: 82 },
      ],
    },
  ];

  return (
    <Section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-500/40" />
          <h2 className="font-mono text-blue-400 text-sm tracking-[0.4em] uppercase">
            // Skills
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-500/40" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map(({ title, icon, color, skills }, ci) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: ci * 0.15 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-blue-500/15 bg-slate-950/50 backdrop-blur-sm group hover:border-blue-500/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`p-2 rounded-lg bg-gradient-to-br ${color} bg-opacity-20 text-white`}
                >
                  {icon}
                </div>
                <h3 className="font-bold text-white tracking-wide">{title}</h3>
              </div>
              <div className="space-y-4">
                {skills.map(({ name, level }, si) => (
                  <div key={name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-slate-300 text-sm font-mono">
                        {name}
                      </span>
                      <span className="text-blue-400/70 text-xs font-mono">
                        {level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${level}%` }}
                        transition={{
                          duration: 1.2,
                          delay: ci * 0.1 + si * 0.1,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        className={`h-full rounded-full bg-gradient-to-r ${color} relative`}
                      >
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white/80 shadow-lg shadow-blue-500/50" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
