import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Circle, Sun, Moon } from "lucide-react";

const LINKS = [
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/architecture", label: "Architecture" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar({ isDark, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="relative z-50 shrink-0 border-b border-border/80 bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:h-[72px] md:px-10">
        <NavLink
          to="/"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight text-ink"
          aria-label="Sangram Behera — Home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-border bg-card font-mono text-[13px] text-violet transition-colors group-hover:border-violet/50">
            SB
          </span>
          <span className="hidden sm:block">Sangram Behera</span>
        </NavLink>

        <nav className="hidden items-center gap-1 font-mono text-[13px] md:flex">
          {LINKS.map((link) => {
            const active = pathname === link.to;
            return (
              <NavLink
                key={link.to}
                to={link.to}
                className="relative px-4 py-2 text-muted transition-colors hover:text-ink"
              >
                <span className={active ? "text-ink" : ""}>{link.label}</span>
                {active && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-x-2 -bottom-[1px] h-[2px] rounded-full bg-gradient-to-r from-violet to-blue"
                    transition={{ type: "spring", stiffness: 500, damping: 40 }}
                  />
                )}
              </NavLink>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-border bg-card-soft text-ink transition-colors hover:border-violet/50 hover:text-violet md:flex"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <div className="hidden items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 font-mono text-[11px] text-muted md:flex">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <Circle className="relative h-1.5 w-1.5 fill-emerald-400 text-emerald-400" />
            </span>
            Open to opportunities
          </div>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute inset-x-0 top-full border-b border-border bg-bg/98 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-2 p-3">
              {LINKS.map((link) => {
                const active = pathname === link.to;
                return (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={`rounded-xl px-4 py-3 font-mono text-sm ${
                      active ? "bg-card text-ink" : "text-muted"
                    }`}
                  >
                    {link.label}
                  </NavLink>
                );
              })}

              <button
                type="button"
                onClick={onToggleTheme}
                className="mt-2 flex items-center justify-between rounded-xl border border-border bg-card-soft px-4 py-3 font-mono text-xs text-muted"
              >
                <span>{isDark ? "Light mode" : "Dark mode"}</span>
                {isDark ? <Sun size={15} /> : <Moon size={15} />}
              </button>

              <div className="mt-2 flex items-center gap-2 rounded-lg border border-border px-4 py-3 font-mono text-[11px] text-muted">
                <Circle className="h-1.5 w-1.5 fill-emerald-400 text-emerald-400" />
                Open to opportunities
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
