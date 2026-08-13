import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Circle } from "lucide-react";

const LINKS = [
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/architecture", label: "Architecture" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="relative z-50 shrink-0 border-b border-border/80">
      <div className="glass absolute inset-0 -z-10" />
      <div className="mx-auto flex h-16 md:h-[72px] items-center justify-between px-5 md:px-10">
        <NavLink
          to="/"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight text-ink"
          aria-label="Sangram Behera — Home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-card font-mono text-[13px] text-violet transition-colors group-hover:border-violet/50">
            SB
          </span>
          <span className="hidden sm:block">Sangram Behera</span>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 font-mono text-[13px]">
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

        <div className="hidden md:flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 font-mono text-[11px] text-muted">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <Circle className="relative h-1.5 w-1.5 fill-emerald-400 text-emerald-400" />
          </span>
          Open to opportunities
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-border text-ink"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute inset-x-0 top-full border-b border-border bg-bg/98 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col p-3">
              {LINKS.map((link) => {
                const active = pathname === link.to;
                return (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={`rounded-lg px-4 py-3 font-mono text-sm ${
                      active ? "bg-card text-ink" : "text-muted"
                    }`}
                  >
                    {link.label}
                  </NavLink>
                );
              })}
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
