import { motion } from "framer-motion";
import { Star, Github, ExternalLink } from "lucide-react";
import { Section } from "../components/Section";

export const Projects = () => {
  const projects = [
    {
      title: "Photo House El-Eraki",
      desc: "Photo House El Eraki, a photography e-commerce and inventory management system. No payment integration — purchases are handled offline.",
      tags: ["TypeScript", "React", "NestJS", "PostgreSQL", "Redis"],
      color: "from-blue-600/20 to-cyan-600/10",
      border: "border-blue-500/20",
      accent: "text-blue-400",
      emoji: "🛒",
      stars: 142,
    },
    {
      title: "OrbitChat",
      desc: "Real-time messaging platform supporting 10K+ concurrent users with end-to-end encryption and file sharing.",
      tags: ["React", "Node.js", "WebSockets", "MongoDB"],
      color: "from-indigo-600/20 to-blue-600/10",
      border: "border-indigo-500/20",
      accent: "text-indigo-400",
      emoji: "💬",
      stars: 98,
    },
    {
      title: "NebulaCMS",
      desc: "Headless CMS with GraphQL API, multi-tenant support, and a drag-and-drop page builder.",
      tags: ["Vue.js", "GraphQL", "FastAPI", "Docker"],
      color: "from-cyan-600/20 to-teal-600/10",
      border: "border-cyan-500/20",
      accent: "text-cyan-400",
      emoji: "📝",
      stars: 205,
    },
    {
      title: "StarMetrics",
      desc: "Analytics dashboard with real-time data pipelines, interactive visualizations, and automated reporting.",
      tags: ["React", "Python", "AWS", "Kafka"],
      color: "from-violet-600/20 to-indigo-600/10",
      border: "border-violet-500/20",
      accent: "text-violet-400",
      emoji: "📊",
      stars: 76,
    },
    {
      title: "GravityAuth",
      desc: "Zero-trust authentication system with OAuth2, RBAC, passkey support, and audit logging.",
      tags: ["Node.js", "Redis", "PostgreSQL", "JWT"],
      color: "from-blue-600/20 to-indigo-600/10",
      border: "border-blue-500/20",
      accent: "text-blue-400",
      emoji: "🔐",
      stars: 189,
    },
    {
      title: "PulsarAPI",
      desc: "High-performance REST & GraphQL API gateway with rate limiting, caching, and auto-documentation.",
      tags: ["Go", "Redis", "Docker", "K8s"],
      color: "from-teal-600/20 to-cyan-600/10",
      border: "border-teal-500/20",
      accent: "text-teal-400",
      emoji: "⚡",
      stars: 312,
    },
  ];

  return (
    <Section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-500/40" />
          <h2 className="font-mono text-blue-400 text-sm tracking-[0.4em] uppercase">
            // Projects
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-500/40" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map(
            ({ title, desc, tags, color, border, accent, emoji, stars }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`group p-6 rounded-2xl border ${border} bg-gradient-to-br ${color} backdrop-blur-sm relative overflow-hidden cursor-pointer`}
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 0%, rgba(59,130,246,0.08) 0%, transparent 70%)",
                  }}
                />

                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{emoji}</div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 text-yellow-400/70 text-xs font-mono">
                      <Star size={11} fill="currentColor" /> {stars}
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.15 }}
                        className="p-1.5 rounded-lg border border-slate-600/40 text-slate-400 hover:text-white hover:border-blue-400/50 transition-colors"
                      >
                        <Github size={14} />
                      </motion.a>
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.15 }}
                        className="p-1.5 rounded-lg border border-slate-600/40 text-slate-400 hover:text-white hover:border-blue-400/50 transition-colors"
                      >
                        <ExternalLink size={14} />
                      </motion.a>
                    </div>
                  </div>
                </div>

                <h3
                  className={`font-bold text-lg text-white mb-2 group-hover:${accent} transition-colors`}
                >
                  {title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-slate-800/60 text-slate-300 text-xs font-mono border border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </Section>
  );
};
