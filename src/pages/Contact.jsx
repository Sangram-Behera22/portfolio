import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Linkedin, Github, Send, Check } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);
    setSent(false);

    try {
      // Send notification email to you
      await emailjs.send(
        "service_0nuryh5",
        "template_d7p5tyi",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        {
          publicKey: "vtJOlWuvNOwv_Un5y",
        },
      );

      // Send thank-you email to the visitor
      await emailjs.send(
        "service_0nuryh5",
        "template_mmsg9rw",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        {
          publicKey: "vtJOlWuvNOwv_Un5y",
        },
      );

      setSent(true);

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Email error:", error);
      alert("Unable to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="no-scrollbar h-full w-full overflow-y-auto">
      <div className="mx-auto flex max-w-[1400px] flex-col justify-center gap-10 px-5 py-10 md:px-10 lg:flex-row lg:items-center lg:gap-16 lg:px-16 lg:py-10">
        {/* Left: intro + socials */}
        <div className="w-full md:w-1/2">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-violet"
          >
            // contact
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl"
          >
            Let's build something.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 max-w-sm text-[15px] leading-relaxed text-muted"
          >
            Have a project, opportunity or idea? Let's talk.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            <a
              href="mailto:mail.sbsangram@gmail.com"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet to-blue px-5 py-3 font-mono text-[13px] font-medium text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <Mail size={15} /> Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/sangram-behera22"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/40 px-5 py-3 font-mono text-[13px] text-ink transition-all hover:scale-[1.02] hover:border-violet/50 active:scale-[0.98]"
            >
              <Linkedin size={15} /> LinkedIn
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/40 px-5 py-3 font-mono text-[13px] text-ink transition-all hover:scale-[1.02] hover:border-violet/50 active:scale-[0.98]"
            >
              <Github size={15} /> GitHub
            </a>
          </motion.div>
        </div>

        {/* Right: minimal form */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="w-full md:w-[380px]"
        >
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card/50 p-8 text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/10">
                <Check size={18} className="text-emerald-400" />
              </div>
              <p className="font-display text-sm font-semibold text-ink">
                Message sent
              </p>
              <p className="font-mono text-[12px] text-muted">
                Thanks, {form.name.split(" ")[0]} — I'll get back to you soon.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-card/50 p-5"
            >
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[11px] uppercase tracking-wide text-faint">
                  Name
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="rounded-lg border border-border-soft bg-bg-soft px-3 py-2.5 text-[13px] text-ink outline-none transition-colors placeholder:text-faint focus:border-violet/60"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[11px] uppercase tracking-wide text-faint">
                  Email
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="rounded-lg border border-border-soft bg-bg-soft px-3 py-2.5 text-[13px] text-ink outline-none transition-colors placeholder:text-faint focus:border-violet/60"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[11px] uppercase tracking-wide text-faint">
                  Message
                </label>
                <textarea
                  required
                  rows={3}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Tell me a bit about it..."
                  className="resize-none rounded-lg border border-border-soft bg-bg-soft px-3 py-2.5 text-[13px] text-ink outline-none transition-colors placeholder:text-faint focus:border-violet/60"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="group mt-1 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet to-blue px-4 py-2.5 font-mono text-[13px] font-medium text-white transition-transform hover:scale-[1.01] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {sending ? (
                  <>
                    Sending...
                    <span className="h-3 w-3 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  </>
                ) : sent ? (
                  <>
                    Message Sent
                    <Check size={13} />
                  </>
                ) : (
                  <>
                    Send Message
                    <Send
                      size={13}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
