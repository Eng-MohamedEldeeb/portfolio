import { useState } from "react";

import { StarField } from "./components/StarField";
import { Navbar } from "./components/ui/NavBar";
import { About } from "./pages/About";
import { Footer } from "./pages/Footer";
import { Hero } from "./pages/Hero";
import { Projects } from "./pages/Projects";
import { Skills } from "./pages/Skills";
import { Contact } from "./pages/Contact";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className={`${darkMode ? "dark" : ""} min-h-screen bg-slate-950 text-white selection:bg-blue-500/30`}
    >
      {/* Scan line effect */}
      <div
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
        }}
      />

      <StarField />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
