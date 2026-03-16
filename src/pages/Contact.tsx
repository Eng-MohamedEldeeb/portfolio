import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { useState } from "react";
import { Section } from "../components/Section";

export const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <Section id="contact" className="py-32 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-500/40" />
          <h2 className="font-mono text-blue-400 text-sm tracking-[0.4em] uppercase">
            // Contact
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-500/40" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-white mb-3">
            Ready to Launch?{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Let's Talk.
            </span>
          </h3>
          <p className="text-slate-400">
            Have a project in mind or want to collaborate? Transmit your message
            below.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-5 p-8 rounded-2xl border border-blue-500/15 bg-slate-950/50 backdrop-blur-sm"
        >
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { label: "Name", placeholder: "John Cosmos", type: "text" },
              { label: "Email", placeholder: "john@cosmos.dev", type: "email" },
            ].map(({ label, placeholder, type }) => (
              <div key={label}>
                <label className="block font-mono text-xs text-blue-400/70 mb-2 tracking-wider uppercase">
                  {label}
                </label>
                <input
                  type={type}
                  placeholder={placeholder}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/50 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all text-sm font-mono"
                />
              </div>
            ))}
          </div>

          <div>
            <label className="block font-mono text-xs text-blue-400/70 mb-2 tracking-wider uppercase">
              Subject
            </label>
            <input
              type="text"
              placeholder="New mission proposal..."
              required
              className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/50 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all text-sm font-mono"
            />
          </div>

          <div>
            <label className="block font-mono text-xs text-blue-400/70 mb-2 tracking-wider uppercase">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Describe your mission..."
              required
              className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/50 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all text-sm font-mono resize-none"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 30px rgba(59,130,246,0.4)",
            }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
          >
            {sent ? (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex items-center gap-2"
              >
                ✅ Message Transmitted!
              </motion.span>
            ) : (
              <>
                <Rocket size={16} /> Transmit Message
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </Section>
  );
};
