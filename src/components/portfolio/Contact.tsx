"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Loader2,
  MapPin,
  MessageSquare,
  Mail,
  Phone,
  Copy,
  Check,
  Send,
  Clock,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";
import { Reveal, SectionHeading } from "./Reveal";
import {
  GITHUB_URL,
  LINKEDIN_URL,
  EMAIL_ADDRESS,
  PHONE_NUMBER,
  WHATSAPP_URL,
  LOCATION_STRING,
} from "./data";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "./icons";

type Status = "idle" | "sending" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+]?[\d\s()-]{7,20}$/;

interface Errors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  function validate(): boolean {
    const next: Errors = {};

    if (name.trim().length < 2) {
      next.name = "Please enter your full name.";
    }

    if (!EMAIL_RE.test(email.trim())) {
      next.email = "Please enter a valid email address.";
    }

    if (!PHONE_RE.test(phone.trim())) {
      next.phone = "Please enter a valid phone number (with country code).";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "sending") return;

    if (!validate()) {
      toast.error("Please fix the highlighted fields and try again.");
      return;
    }

    setStatus("sending");

    try {
      // Connect to our Next.js backend API (/api/contact)
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          message: message.trim(),
          honeypot: honeypot.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(
          data.error || "Unable to send your message. Please try again."
        );
      }

      setStatus("success");
      toast.success("Message delivered successfully!", {
        description: "Thank you! Abdullah will get back to you within 24 hours.",
      });

      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setErrors({});
    } catch (err) {
      setStatus("error");
      toast.error(
        err instanceof Error
          ? err.message
          : "Network error. Please try again or reach out on WhatsApp/LinkedIn."
      );
    }
  }

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
      toast.success("Email address copied!");
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
      toast.success("Phone number copied!");
    }
  };

  const inputClass = (hasError: boolean) =>
    `w-full rounded-2xl border bg-black/40 px-4 py-3.5 text-sm text-neutral-100 placeholder:text-neutral-500 outline-none transition-all focus:bg-[#14060c] ${
      hasError
        ? "border-rose-500/80 focus:border-rose-400 focus:ring-2 focus:ring-rose-500/30"
        : "border-white/10 focus:border-rose-500/50 focus:ring-2 focus:ring-rose-500/20"
    }`;

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-[#070305] via-[#0b0408] to-[#070305]"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose-500/30 to-transparent"
        aria-hidden="true"
      />

      {/* Ambient Maroon Breather */}
      <div
        className="pointer-events-none absolute right-1/4 bottom-1/4 h-[550px] w-[550px] rounded-full bg-rose-950/20 blur-[150px] animate-breather-2"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8 relative z-10">
        <SectionHeading
          index="05"
          eyebrow="get in touch"
          title="Let's build your next mobile app"
          description="Have a freelance mobile project, an engineering role, or a partnership in mind? Send a message and let's bring it to life."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Direct channels & Quick Cards */}
          <div className="space-y-4 lg:col-span-5">
            {/* Quick Contact Card */}
            <Reveal>
              <div className="card-surface rounded-3xl p-6 sm:p-7 border border-rose-500/25 bg-gradient-to-br from-[#1b0812]/80 via-[#10050b]/90 to-[#070305]/95 shadow-[0_0_30px_-5px_rgba(225,29,72,0.2)]">
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-rose-500/30 bg-rose-950/40 text-rose-300">
                    <MessageSquare className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">
                      Direct Channels
                    </h3>
                    <p className="mt-0.5 text-xs text-neutral-400">
                      Reach Abdullah immediately via WhatsApp, Phone or Email.
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-3 font-mono text-xs">
                  {/* WhatsApp Direct */}
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-emerald-500/30 bg-emerald-950/20 px-4 py-3 text-emerald-300 hover:bg-emerald-950/40 hover:border-emerald-500/50 transition-all"
                  >
                    <span className="flex items-center gap-3">
                      <WhatsAppIcon className="h-4.5 w-4.5 text-emerald-400" />
                      <span>Chat on WhatsApp</span>
                    </span>
                    <ArrowRight className="h-4 w-4" />
                  </a>

                  {/* Email with copy */}
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-neutral-200">
                    <span className="flex items-center gap-3 truncate max-w-[210px] sm:max-w-none">
                      <Mail className="h-4 w-4 text-rose-400 shrink-0" />
                      <span className="truncate">{EMAIL_ADDRESS}</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(EMAIL_ADDRESS, "email")}
                      className="grid h-7 w-7 place-items-center rounded-lg bg-white/5 hover:bg-rose-950 text-neutral-300 hover:text-rose-300 transition-colors"
                      title="Copy email"
                    >
                      {copiedEmail ? (
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                    </button>
                  </div>

                  {/* Phone with copy */}
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-neutral-200">
                    <span className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-rose-400" />
                      <span>{PHONE_NUMBER}</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(PHONE_NUMBER, "phone")}
                      className="grid h-7 w-7 place-items-center rounded-lg bg-white/5 hover:bg-rose-950 text-neutral-300 hover:text-rose-300 transition-colors"
                      title="Copy phone"
                    >
                      {copiedPhone ? (
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Social Buttons */}
                <div className="mt-5 grid grid-cols-2 gap-2.5 pt-2 border-t border-white/10">
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] py-2.5 text-xs text-neutral-300 hover:text-white hover:border-rose-500/40 transition-colors"
                  >
                    <GithubIcon className="h-4 w-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] py-2.5 text-xs text-neutral-300 hover:text-white hover:border-rose-500/40 transition-colors"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Location & SLA Card */}
            <Reveal delay={0.1}>
              <div className="card-surface rounded-3xl p-6 border border-white/10 bg-gradient-to-br from-[#15070f]/70 to-[#090306]/80">
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-rose-300">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="font-display text-base font-bold text-white">
                      Lahore, Punjab, Pakistan
                    </h4>
                    <p className="mt-1 text-xs text-neutral-400 leading-relaxed text-justify">
                      Available worldwide for remote mobile engineering contracts, full-time positions, and consulting.
                    </p>
                    <div className="mt-3 flex items-center gap-2 font-mono text-[11px] text-rose-300">
                      <Clock className="h-3.5 w-3.5 text-rose-400" />
                      <span>Guaranteed response time under 24 hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form Column */}
          <Reveal delay={0.12} className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="card-surface rounded-3xl p-7 sm:p-9 border border-rose-500/30 bg-gradient-to-br from-[#1b0812]/90 via-[#10050b]/95 to-[#070305]/98 shadow-[0_0_50px_-10px_rgba(225,29,72,0.3)] backdrop-blur-2xl"
              aria-label="Contact form"
            >
              {/* Spam honeypot field hidden from real users */}
              <input
                type="text"
                name="honeypot"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block font-mono text-xs tracking-wider uppercase text-neutral-300"
                  >
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="e.g. John Doe"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (status !== "idle") setStatus("idle");
                    }}
                    aria-invalid={Boolean(errors.name)}
                    className={inputClass(Boolean(errors.name))}
                    required
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-rose-400 font-mono">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block font-mono text-xs tracking-wider uppercase text-neutral-300"
                  >
                    Email Address <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status !== "idle") setStatus("idle");
                    }}
                    aria-invalid={Boolean(errors.email)}
                    className={inputClass(Boolean(errors.email))}
                    required
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-rose-400 font-mono">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-phone"
                  className="mb-2 block font-mono text-xs tracking-wider uppercase text-neutral-300"
                >
                  Phone / WhatsApp Number <span className="text-rose-400">*</span>
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+92 3XX XXXXXXX or +1 XXX XXX XXXX"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (status !== "idle") setStatus("idle");
                  }}
                  aria-invalid={Boolean(errors.phone)}
                  className={inputClass(Boolean(errors.phone))}
                  required
                />
                {errors.phone && (
                  <p className="mt-1.5 text-xs text-rose-400 font-mono">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-message"
                  className="mb-2 block font-mono text-xs tracking-wider uppercase text-neutral-300"
                >
                  Project Details / Role Specification{" "}
                  <span className="text-neutral-500">(optional)</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder="Tell me about your mobile application requirements, timeline, budget, or job opportunity..."
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (status !== "idle") setStatus("idle");
                  }}
                  className={`${inputClass(false)} resize-none`}
                />
              </div>

              <div className="mt-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-shine-maroon inline-flex items-center justify-center gap-2.5 rounded-2xl px-7 py-4 text-xs sm:text-sm font-semibold text-white transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_0_25px_rgba(225,29,72,0.4)]"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : status === "success" ? (
                    <>
                      <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Send Message to Abdullah</span>
                    </>
                  )}
                </button>

                <p className="font-mono text-[11px] text-neutral-500">
                  Protected by Next.js server rate-limiter & Web3Forms
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
