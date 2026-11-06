"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import {
  Code2,
  MapPin,
  Smartphone,
  Target,
  Mail,
  Phone,
  Copy,
  Check,
  Award,
  Sparkles,
  Download,
} from "lucide-react";
import Image from "next/image";
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
import { CvModal } from "./CvModal";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span
      ref={ref}
      className="font-display text-4xl font-extrabold text-gradient-silver-rose sm:text-5xl"
    >
      {value}
      {suffix}
    </span>
  );
}

const STATS = [
  { value: 4, suffix: "+", label: "Complete Flutter & Native Apps Shipped" },
  { value: 10, suffix: "+", label: "Public repositories on GitHub" },
  { value: 96, suffix: "%", label: "Flutter & Dart proficiency rating" },
  { value: 100, suffix: "%", label: "Mobile-first architectural focus" },
];

export function About() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
      toast.success("Email copied to clipboard!");
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
      toast.success("Phone number copied to clipboard!");
    }
  };

  return (
    <>
      <section id="about" className="relative scroll-mt-20 py-24 sm:py-32 overflow-hidden">
        {/* Ambient Maroon Breather */}
        <div
          className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-rose-950/20 blur-[140px] animate-breather-1"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-6xl px-5 sm:px-8 relative z-10">
          <SectionHeading
            index="01"
            eyebrow="about the engineer"
            title="Dedicated to building intelligent, scalable mobile solutions"
          />

          <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left 7 Cols: Narrative & Highlights */}
            <div className="lg:col-span-7">
              <Reveal>
                <p className="text-lg leading-relaxed text-neutral-200 text-justify">
                  I am a passionate <span className="text-white font-semibold">Mobile Application Developer</span> with
                  solid expertise in <span className="text-rose-400 font-medium">Flutter (Dart)</span> and native{" "}
                  <span className="text-rose-400 font-medium">Android (Java & XML)</span>. Currently completing my BS in
                  Computer Science at Superior University, Lahore, I specialize in combining responsive, glassmorphic
                  mobile interfaces with secure real-time backend architectures and on-device machine learning models.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-5 leading-relaxed text-neutral-300 text-justify">
                  Through my professional internships at <span className="text-white font-medium">Mktecknotrons</span> (PIA, Lahore)
                  and <span className="text-white font-medium">Innoviast</span> (Johar Town, Lahore), I have built and shipped
                  at least four complete Flutter applications, integrated real-time RESTful APIs (such as UK National Rail transit data for
                  SwiftTrack and Spotify media APIs), engineered cross-border payout workflows with flat fees and 1-LINK bank transfers (PaidiX),
                  and integrated on-device facial emotion classifiers using <span className="text-white font-medium">TensorFlow Lite and Google ML Kit</span>.
                </p>
              </Reveal>

              <Reveal delay={0.18}>
                <p className="mt-5 leading-relaxed text-neutral-300 text-justify">
                  Whether architecting a 4-portal super-app (Groclyra), designing liquid glass shaders for note-taking vaults (glassynote),
                  or optimizing Android lifecycles for low latency, my objective is simple: build resilient, beautiful mobile software that delivers
                  real commercial impact.
                </p>
              </Reveal>

              {/* Pillars */}
              <Reveal delay={0.24}>
                <div className="mt-8 grid gap-3.5 sm:grid-cols-3">
                  {[
                    {
                      icon: Smartphone,
                      label: "Cross-Platform",
                      sub: "Flutter & React Native for iOS/Android",
                    },
                    {
                      icon: Code2,
                      label: "Native Android",
                      sub: "Java, XML, Jetpack & Coroutines",
                    },
                    {
                      icon: Target,
                      label: "Edge AI / ML",
                      sub: "TFLite, ML Kit & Vision models",
                    },
                  ].map(({ icon: Icon, label, sub }) => (
                    <div
                      key={label}
                      className="card-surface card-surface-hover rounded-2xl p-4.5 border border-white/10 hover:border-rose-500/40"
                    >
                      <Icon className="h-5 w-5 text-rose-400" aria-hidden="true" />
                      <p className="mt-3 text-sm font-bold text-white">{label}</p>
                      <p className="mt-1 text-xs text-neutral-400">{sub}</p>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Direct Connect Buttons */}
              <Reveal delay={0.3}>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs text-neutral-200 transition-all hover:border-rose-500/40 hover:text-white"
                  >
                    <GithubIcon className="h-4 w-4" />
                    github.com/AbdullahAzeem12
                  </a>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs text-neutral-200 transition-all hover:border-rose-500/40 hover:text-white"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                    LinkedIn Profile
                  </a>
                  <button
                    type="button"
                    onClick={() => setCvModalOpen(true)}
                    className="btn-shine-maroon inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold text-white"
                  >
                    <Download className="h-3.5 w-3.5" />
                    View & Download CV
                  </button>
                </div>
              </Reveal>
            </div>

            {/* Right 5 Cols: Profile Portrait Card & Quick Facts */}
            <div className="lg:col-span-5 space-y-6">
              {/* Profile Card with User Photo */}
              <Reveal delay={0.15}>
                <div className="group relative overflow-hidden rounded-3xl border border-rose-500/30 bg-gradient-to-br from-[#1d0914]/90 via-[#10060b]/95 to-[#070305]/98 p-6 shadow-[0_0_40px_-10px_rgba(225,29,72,0.35)] backdrop-blur-2xl">
                  <div className="flex items-center gap-4">
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border-2 border-rose-500/60 shadow-[0_0_25px_rgba(225,29,72,0.4)]">
                      <Image
                        src="/abdullah-azeem.jpg"
                        alt="Abdullah Azeem Mobile Developer"
                        width={80}
                        height={80}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-display text-xl font-bold text-white">
                          Abdullah Azeem
                        </h3>
                      </div>
                      <p className="font-mono text-xs text-rose-300 font-medium">
                        Mobile Application Developer
                      </p>
                      <p className="text-xs text-neutral-400 mt-1">
                        Lahore, Punjab, Pakistan
                      </p>
                    </div>
                  </div>

                  {/* Contact Quick Details with Copy Buttons */}
                  <div className="mt-5 space-y-2.5 border-t border-white/10 pt-4 text-xs font-mono">
                    <div className="flex items-center justify-between rounded-xl bg-black/40 p-2.5 border border-white/5">
                      <span className="flex items-center gap-2 text-neutral-400">
                        <Mail className="h-3.5 w-3.5 text-rose-400" />
                        <span className="truncate max-w-[190px] sm:max-w-none">
                          {EMAIL_ADDRESS}
                        </span>
                      </span>
                      <button
                        type="button"
                        onClick={() => copyToClipboard(EMAIL_ADDRESS, "email")}
                        className="grid h-7 w-7 place-items-center rounded-lg bg-white/5 hover:bg-rose-950 hover:text-rose-300 text-neutral-300 transition-colors"
                        title="Copy email"
                      >
                        {copiedEmail ? (
                          <Check className="h-3.5 w-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="h-3.5 w-3.5" />
                        )}
                      </button>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-black/40 p-2.5 border border-white/5">
                      <span className="flex items-center gap-2 text-neutral-400">
                        <Phone className="h-3.5 w-3.5 text-rose-400" />
                        <span>{PHONE_NUMBER}</span>
                      </span>
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => copyToClipboard(PHONE_NUMBER, "phone")}
                          className="grid h-7 w-7 place-items-center rounded-lg bg-white/5 hover:bg-rose-950 hover:text-rose-300 text-neutral-300 transition-colors"
                          title="Copy phone"
                        >
                          {copiedPhone ? (
                            <Check className="h-3.5 w-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="h-3.5 w-3.5" />
                          )}
                        </button>
                        <a
                          href={WHATSAPP_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="grid h-7 w-7 place-items-center rounded-lg bg-emerald-950/60 hover:bg-emerald-900 text-emerald-300 transition-colors"
                          title="Chat on WhatsApp"
                        >
                          <WhatsAppIcon className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3.5">
                {STATS.map((stat, i) => (
                  <Reveal key={stat.label} delay={0.08 * i}>
                    <div className="card-surface card-surface-hover rounded-2xl p-5 border border-white/10 hover:border-rose-500/35">
                      <Counter to={stat.value} suffix={stat.suffix} />
                      <p className="mt-2 text-xs leading-snug text-neutral-400">
                        {stat.label}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CV Modal */}
      <CvModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </>
  );
}
