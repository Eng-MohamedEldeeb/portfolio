import { Cpu, Github, Linkedin, Mail, Rocket, Star, Zap } from "lucide-react";
import { Section } from "../components/Section";
import { motion } from "framer-motion";

export const About = () => {
  const stats = [
    { label: "Years Experience", value: "5+", icon: <Star size={18} /> },
    { label: "Projects Launched", value: "40+", icon: <Rocket size={18} /> },
    { label: "Technologies", value: "20+", icon: <Cpu size={18} /> },
    { label: "Happy Clients", value: "30+", icon: <Zap size={18} /> },
  ];

  return (
    <Section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-500/40" />
          <h2 className="font-mono text-blue-400 text-sm tracking-[0.4em] uppercase">
            // About Me
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-500/40" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-snug">
              Building the Future, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                One Commit at a Time
              </span>
            </h3>
            <p className="text-slate-400 leading-relaxed mb-5">
              I'm a Full Stack Developer with a passion for exploring the vast
              universe of web technologies. From crafting pixel-perfect UIs to
              designing robust backend architectures, I thrive on solving
              complex problems with elegant solutions.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              When I'm not coding, I'm studying system design patterns,
              contributing to open source, or staring at the night sky wondering
              what the next breakthrough in tech will be.
            </p>

            <div className="flex gap-4">
              {[
                { icon: <Github size={18} />, href: "#", label: "GitHub" },
                { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
                { icon: <Mail size={18} />, href: "#", label: "Email" },
              ].map(({ icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-500/25 text-slate-400 hover:text-blue-400 hover:border-blue-400/50 transition-all text-sm font-mono"
                >
                  {icon} {label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map(({ label, value, icon }, i) => (
              <motion.div
                key={label}
                whileHover={{
                  scale: 1.03,
                  borderColor: "rgba(59,130,246,0.5)",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl border border-blue-500/15 bg-blue-950/10 backdrop-blur-sm relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-blue-400/70 mb-3">{icon}</div>
                <div className="text-3xl font-black text-white mb-1">
                  {value}
                </div>
                <div className="text-slate-500 text-xs font-mono tracking-wide">
                  {label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
