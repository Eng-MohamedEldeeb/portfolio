import { AnimatePresence, motion } from "framer-motion";
import { Rocket, Mail, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export const Hero = () => {
  const titles = [
    "Full Stack Developer",
    "Space Explorer",
    "Code Architect",
    "System Builder",
  ];
  const [titleIdx, setTitleIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setTitleIdx((i) => (i + 1) % titles.length),
      3000,
    );
    return () => clearInterval(t);
  }, [titleIdx, titles.length]);

  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16"
    >
      {/* Orbit rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[320, 480, 640].map((size, i) => (
          <motion.div
            key={size}
            className="absolute rounded-full border border-blue-500/10"
            style={{ width: size, height: size }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 20 + i * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-400/60" />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative mb-8"
      >
        <div className="w-36 h-36 rounded-full border-2 border-blue-500/40 p-1 relative">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-600/30 via-indigo-600/20 to-cyan-600/30 flex items-center justify-center text-5xl border border-blue-400/20">
            <img src="/pic.jpg" alt="" />
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-3 rounded-full border border-dashed border-blue-500/25"
          />
        </div>
        <div className="absolute -bottom-1 -right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-slate-950 flex items-center justify-center">
          <div className="w-2 h-2 bg-green-300 rounded-full animate-ping" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <p className="font-mono text-blue-400/70 text-sm tracking-[0.3em] mb-3 uppercase">
          &gt; Initializing profile...
        </p>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight leading-none">
          John{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600">
            Cosmos
          </span>
        </h1>

        <div className="h-12 flex items-center justify-center mb-6">
          <AnimatePresence mode="wait">
            <motion.p
              key={titleIdx}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
              transition={{ duration: 0.5 }}
              className="font-mono text-xl text-cyan-400/90 tracking-widest"
            >
              &lt; {titles[titleIdx]} /&gt;
            </motion.p>
          </AnimatePresence>
        </div>

        <p className="text-slate-400 max-w-lg mx-auto text-base leading-relaxed mb-10">
          Crafting digital universes from frontend galaxies to backend nebulae.
          I build systems that are as vast as space and as precise as a
          satellite orbit.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <motion.a
            href="#projects"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(59,130,246,0.5)",
            }}
            whileTap={{ scale: 0.97 }}
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="cursor-pointer px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold tracking-wide text-sm flex items-center gap-2 shadow-lg shadow-blue-500/25"
          >
            <Rocket size={16} /> Explore My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="cursor-pointer px-8 py-3.5 rounded-full border border-blue-500/40 text-blue-400 font-semibold tracking-wide text-sm hover:bg-blue-500/10 transition-colors flex items-center gap-2"
          >
            <Mail size={16} /> Contact Me
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-10 text-blue-400/40 cursor-pointer"
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
};
