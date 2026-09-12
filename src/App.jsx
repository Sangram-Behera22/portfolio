import { useEffect, useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";

import Navbar from "./components/Navbar.jsx";
import PageTransition from "./components/PageTransition.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Skills from "./pages/Skills.jsx";
import Experience from "./pages/Experience.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";

const ROUTE_LABELS = {
  "/": "home",
  "/about": "about",
  "/skills": "skills",
  "/experience": "experience",
  "/projects": "projects",
  "/contact": "contact",
};

export default function App() {
  const location = useLocation();
  const label = ROUTE_LABELS[location.pathname] ?? "404";
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div className="flex h-[100dvh] w-full flex-col overflow-x-hidden bg-bg text-ink transition-colors duration-300">
      <Navbar isDark={isDark} onToggleTheme={() => setIsDark((prev) => !prev)} />

      <main className="relative min-h-0 flex-1 overflow-y-auto overflow-x-hidden">
        <AnimatePresence initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/skills" element={<PageTransition><Skills /></PageTransition>} />
            <Route path="/experience" element={<PageTransition><Experience /></PageTransition>} />
            <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </main>

      <footer className="shrink-0 border-t border-border bg-bg-soft">
        <div className="mx-auto flex min-h-10 w-full max-w-[1400px] items-center justify-between gap-2 px-5 py-3 text-center font-mono text-[10px] text-faint md:h-10 md:flex-row md:justify-between md:px-10 md:py-0 md:text-left md:text-[11px]">
          <span>© 2026 Sangram Behera</span>
          <span className="text-muted">~/{label}</span>
          <div className="flex items-center gap-4">
            {/* <a href="https://github.com/" target="_blank" rel="noreferrer" className="transition-colors hover:text-ink" aria-label="GitHub">
              <Github size={13} />
            </a> */}
            <a href="https://www.linkedin.com/in/sangram-behera22" target="_blank" rel="noreferrer" className="transition-colors hover:text-ink" aria-label="LinkedIn">
              <Linkedin size={13} />
            </a>
            <a href="mailto:mail.sbsangram@gmail.com" className="transition-colors hover:text-ink" aria-label="Email">
              <Mail size={13} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
