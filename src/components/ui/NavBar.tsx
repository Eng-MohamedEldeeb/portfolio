import { AnimatePresence, motion } from "framer-motion";
import { Rocket, Sun, Moon, X, Menu } from "lucide-react";
import { useState, useEffect } from "react";

export const Navbar = ({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = ["About", "Skills", "Projects", "Contact"];

  const scrollTo = (id: string) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-blue-500/20 shadow-lg shadow-blue-500/5"
          : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => scrollTo("hero")}
        >
          <div className="relative w-8 h-8">
            <div
              className="absolute inset-0 rounded-full border border-blue-400/60 animate-spin"
              style={{ animationDuration: "8s" }}
            />
            <div
              className="absolute inset-1 rounded-full border border-cyan-400/40 animate-spin"
              style={{ animationDuration: "5s", animationDirection: "reverse" }}
            />
            <Rocket className="absolute inset-1.5 w-4 h-4 text-blue-400" />
          </div>
          <span className="font-bold text-white tracking-widest text-sm font-mono">
            DEV.SPACE
          </span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-slate-400 hover:text-blue-400 text-sm font-mono tracking-wider transition-colors duration-200 relative group"
            >
              <span className="text-blue-500/60 group-hover:text-blue-400 transition-colors">
                //
              </span>{" "}
              {link}
            </button>
          ))}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full border border-blue-500/30 text-slate-400 hover:text-blue-400 hover:border-blue-400/60 transition-all"
          >
            {darkMode ? <Sun size={15} /> : <Moon size={15} />}
          </motion.button>
        </div>

        <button
          className="md:hidden text-slate-400"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-blue-500/20 px-6 pb-4"
          >
            {links.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="block w-full text-left py-3 text-slate-400 hover:text-blue-400 font-mono text-sm border-b border-slate-800/50"
              >
                {link}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
