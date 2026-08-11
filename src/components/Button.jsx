import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-xl font-mono text-[13px] font-medium transition-all duration-300 ease-out focus-visible:outline-none px-5 py-3";

const variants = {
  primary:
    "bg-gradient-to-r from-violet to-blue text-white shadow-[0_0_0_1px_rgba(124,111,242,0.4)] hover:shadow-[0_0_24px_-4px_rgba(124,111,242,0.6)] hover:scale-[1.02] active:scale-[0.98]",
  ghost:
    "border border-border bg-card/40 text-ink hover:border-violet/50 hover:bg-card hover:scale-[1.02] active:scale-[0.98]",
};

export default function Button({
  children,
  variant = "primary",
  to,
  href,
  icon = true,
  className = "",
  ...props
}) {
  const content = (
    <>
      {children}
      {icon && (
        <ArrowRight
          size={15}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  );

  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer" {...props}>
        {content}
      </a>
    );
  }
  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
