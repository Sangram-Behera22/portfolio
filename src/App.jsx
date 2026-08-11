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
import Architecture from "./pages/Architecture.jsx";
import Contact from "./pages/Contact.jsx";

const ROUTE_LABELS = {
  "/": "home",
  "/about": "about",
  "/skills": "skills",
  "/experience": "experience",
  "/projects": "projects",
  "/architecture": "architecture",
  "/contact": "contact",
};

export default function App() {
  const location = useLocation();
  const label = ROUTE_LABELS[location.pathname] ?? "404";

  return (
    <div className="flex h-[100dvh] w-full flex-col bg-bg text-ink overflow-x-hidden">
      <Navbar />

      <main className="relative flex-1 overflow-y-auto overflow-x-hidden">
        <AnimatePresence initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/skills" element={<PageTransition><Skills /></PageTransition>} />
            <Route path="/experience" element={<PageTransition><Experience /></PageTransition>} />
            <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
            <Route path="/architecture" element={<PageTransition><Architecture /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </main>

      <footer className="hidden md:flex h-10 shrink-0 items-center justify-between border-t border-border bg-bg-soft px-10 font-mono text-[11px] text-faint">
        <span>© 2026 Sangram Behera</span>
        <span className="text-muted">~/{label}</span>
        <div className="flex items-center gap-4">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="transition-colors hover:text-ink" aria-label="GitHub">
            <Github size={13} />
          </a>
          <a href="https://www.linkedin.com/in/sangram-behera22" target="_blank" rel="noreferrer" className="transition-colors hover:text-ink" aria-label="LinkedIn">
            <Linkedin size={13} />
          </a>
          <a href="mailto:mail.sbsangram@gmail.com" className="transition-colors hover:text-ink" aria-label="Email">
            <Mail size={13} />
          </a>
        </div>
      </footer>
    </div>
  );
}
