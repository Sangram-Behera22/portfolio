import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Linkedin, Github, Send, Check, Clock3, Sparkles, Server } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);
    setSent(false);

    try {
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
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email error:", error);
      alert("Unable to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="no-scrollbar h-full w-full overflow-y-auto bg-gradient-to-b from-bg via-bg to-bg/95">
     
      <div className="mx-auto w-full max-w-[1400px] px-5 py-8 sm:py-10 md:px-10 lg:px-16">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)] lg:gap-12 xl:gap-16">
          {/* Left column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.24em] text-violet sm:text-xs">
               
                // Contact
              </span>

              <h1 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-4xl lg:text-[46px]">
                Let&apos;s build something{" "}
                <span className="bg-gradient-to-r from-violet to-blue bg-clip-text text-transparent">
                  meaningful.
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-[15px]">
                Have a project, opportunity, or idea? Tell me what you&apos;re
                working on and let&apos;s figure out the best way to build it.
              </p>

              <p className="mt-3 max-w-2xl text-[13px] leading-6 text-muted/75 sm:text-sm">
                I work across full-stack development, backend systems, scalable
                APIs, cloud infrastructure, and performance-focused
                applications.
              </p>

              {/* Expertise */}
              <div className="mt-6 flex max-w-2xl flex-wrap gap-2">
                {[
                  ["Full-Stack Development", "violet"],
                  ["Backend & APIs", "blue"],
                  ["System Architecture", "cyan"],
                  ["Cloud Infrastructure", "emerald-400"],
                ].map(([label, tone]) => (
                  <span
                    key={label}
                    className={`rounded-full border border-border/60 bg-card/30 px-3 py-1.5 font-mono text-[10px] text-${tone} sm:text-[11px]`}
                  >
                    {label}
                  </span>
                ))}
              </div>

              {/* Social actions */}
              <div className="mt-7 flex flex-wrap gap-2.5">
                <a
                  href="mailto:mail.sbsangram@gmail.com"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet to-blue px-4 py-2.5 font-mono text-[12px] font-medium text-white shadow-lg shadow-violet/10 transition-all hover:-translate-y-0.5 hover:shadow-violet/20 active:translate-y-0 sm:px-5 sm:py-3 sm:text-[13px]"
                >
                  <Mail size={15} />
                  Email Me
                </a>

                <a
                  href="https://www.linkedin.com/in/sangram-behera22"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/30 px-4 py-2.5 font-mono text-[12px] text-ink transition-all hover:-translate-y-0.5 hover:border-violet/50 hover:bg-card/60 active:translate-y-0 sm:px-5 sm:py-3 sm:text-[13px]"
                >
                  <Linkedin size={15} />
                  LinkedIn
                </a>

                {/* <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/30 px-4 py-2.5 font-mono text-[12px] text-ink transition-all hover:-translate-y-0.5 hover:border-violet/50 hover:bg-card/60 active:translate-y-0 sm:px-5 sm:py-3 sm:text-[13px]"
                >
                  <Github size={15} />
                  GitHub
                </a> */}
              </div>
            </motion.div>

            {/* Contact highlights */}
            <div className="mt-8 grid grid-cols-3 gap-2.5 sm:gap-3 lg:mt-10">
              {[
                {
                  icon: Clock3,
                  title: "Response",
                  text: "Within 24 hours",
                  iconClass: "text-emerald-400",
                  bgClass: "bg-emerald-400/10",
                },
                {
                  icon: Sparkles,
                  title: "Availability",
                  text: "Open to opportunities",
                  iconClass: "text-blue",
                  bgClass: "bg-blue/10",
                },
                {
                  icon: Server,
                  title: "Focus",
                  text: "APIs & backend",
                  iconClass: "text-violet",
                  bgClass: "bg-violet/10",
                },
              ].map(({ icon: Icon, title, text, iconClass, bgClass }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 + index * 0.06 }}
                  className="group min-w-0 rounded-2xl border border-border/40 bg-card/20 p-3 transition-colors hover:border-border/70 hover:bg-card/35 sm:p-4"
                >
                  <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${bgClass}`}>
                    <Icon size={16} className={iconClass} />
                  </div>
                  <p className="mt-3 break-words font-mono text-[8px] uppercase tracking-[0.12em] text-faint sm:mt-4 sm:text-[9px] sm:tracking-[0.16em]">
                    {title}
                  </p>
                  <p className="mt-1 break-words text-[10px] font-medium leading-4 text-ink sm:text-[13px]">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-8"
          >
            {sent ? (
              <div className="flex min-h-[430px] flex-col items-center justify-center rounded-3xl border border-border/50 bg-gradient-to-br from-card/70 to-card/20 p-8 text-center shadow-2xl shadow-black/10">
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-400/10"
                >
                  <Check size={28} className="text-emerald-400" />
                </motion.div>

                <p className="mt-6 font-display text-xl font-semibold text-ink">
                  Message sent!
                </p>

                <p className="mt-2 max-w-xs text-sm leading-6 text-muted">
                  Thanks, {form.name.split(" ")[0] || "there"} — I&apos;ll get
                  back to you soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl border border-border/50 bg-gradient-to-br from-card/70 to-card/20 p-5 shadow-2xl shadow-black/10 sm:p-7"
              >
                <div className="mb-7">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-violet">
                    Send a message
                  </p>
                  <h2 className="mt-2 font-display text-xl font-semibold text-ink sm:text-2xl">
                    Start a conversation.
                  </h2>
                  <p className="mt-2 text-xs leading-5 text-muted">
                    Share a few details and I&apos;ll get back to you.
                  </p>
                </div>

                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block font-mono text-[10px] uppercase tracking-[0.14em] text-faint"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="h-12 w-full rounded-xl border border-border-soft bg-bg-soft/50 px-4 text-sm text-ink outline-none transition-all placeholder:text-faint focus:border-violet/60 focus:bg-bg-soft/80 focus:ring-4 focus:ring-violet/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block font-mono text-[10px] uppercase tracking-[0.14em] text-faint"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className="h-12 w-full rounded-xl border border-border-soft bg-bg-soft/50 px-4 text-sm text-ink outline-none transition-all placeholder:text-faint focus:border-violet/60 focus:bg-bg-soft/80 focus:ring-4 focus:ring-violet/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-2 block font-mono text-[10px] uppercase tracking-[0.14em] text-faint"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about your project, role, or idea..."
                      className="w-full resize-none rounded-xl border border-border-soft bg-bg-soft/50 px-4 py-3 text-sm leading-6 text-ink outline-none transition-all placeholder:text-faint focus:border-violet/60 focus:bg-bg-soft/80 focus:ring-4 focus:ring-violet/10"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet to-blue font-mono text-[12px] font-medium text-white shadow-lg shadow-violet/10 transition-all hover:-translate-y-0.5 hover:shadow-violet/20 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 sm:text-[13px]"
                  >
                    {sending ? (
                      <>
                        Sending...
                        <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send
                          size={14}
                          className="transition-transform group-hover:translate-x-0.5"
                        />
                      </>
                    )}
                  </button>
                </div>

                <p className="mt-5 text-center font-mono text-[9px] leading-4 text-faint">
                  Your message will be sent securely via EmailJS.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
