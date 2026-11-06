"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { Code2, MapPin, Smartphone, Target } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { GITHUB_URL, LINKEDIN_URL } from "./data";
import { GithubIcon, LinkedinIcon } from "./icons";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.21, 0.65, 0.35, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref} className="font-display text-4xl font-bold text-gradient sm:text-5xl">
      {value}
      {suffix}
    </span>
  );
}

const STATS = [
  { value: 10, suffix: "+", label: "Public repositories on GitHub" },
  { value: 7, suffix: "", label: "Technologies in daily use" },
  { value: 4, suffix: "", label: "App domains shipped, from fintech to food" },
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="01"
          eyebrow="about"
          title="A developer obsessed with mobile craft"
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <Reveal>
              <p className="text-lg leading-relaxed text-neutral-300">
                I am a Mobile Application Developer specializing in Flutter
                development with Dart, backed by strong native foundations in
                Java and Kotlin for the Android platform. I build complete,
                production-grade applications end to end: crafting
                animation-rich, glassmorphic interfaces, wiring them to
                real-time Firebase backends and REST APIs, and shipping them
                with the polish users expect from modern apps.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 leading-relaxed text-neutral-400">
                My work spans multiple domains: a cross-border fintech payout
                platform (PaidiX), a 4-portal e-commerce super-app (Groclyra),
                an on-device machine learning music app that reads your mood
                with TensorFlow Lite (MoodMuse), and a real-time cloud-synced
                notes vault (glassynote). I work comfortably with SQL for data
                layers, React Native when a JavaScript stack fits better, and
                Git for disciplined collaboration.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-6 leading-relaxed text-neutral-400">
                Based in Lahore, Pakistan, I am currently open to freelance
                projects and full-time opportunities where I can own features
                from architecture to release.
              </p>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="mt-9 grid gap-3 sm:grid-cols-3">
                {[
                  { icon: Smartphone, label: "Mobile First", sub: "Android & iOS" },
                  { icon: Code2, label: "Clean Code", sub: "Scalable architecture" },
                  { icon: Target, label: "Shipped Products", sub: "Real users, real impact" },
                ].map(({ icon: Icon, label, sub }) => (
                  <div
                    key={label}
                    className="card-surface card-surface-hover rounded-xl p-4"
                  >
                    <Icon className="h-5 w-5 text-neutral-300" aria-hidden="true" />
                    <p className="mt-3 text-sm font-semibold text-neutral-100">{label}</p>
                    <p className="mt-0.5 text-xs text-neutral-500">{sub}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm text-neutral-200 transition-colors hover:border-white/40 hover:text-white"
                >
                  <GithubIcon className="h-4 w-4" />
                  github.com/AbdullahAzeem12
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm text-neutral-200 transition-colors hover:border-white/40 hover:text-white"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  Connect on LinkedIn
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-2">
            <div className="card-surface card-surface-hover rounded-2xl p-7">
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-neutral-500">
                Quick facts
              </p>
              <dl className="mt-5 space-y-4 text-sm">
                <div className="flex items-start justify-between gap-4 border-b border-white/5 pb-4">
                  <dt className="flex items-center gap-2 text-neutral-500">
                    <MapPin className="h-4 w-4" aria-hidden="true" /> Location
                  </dt>
                  <dd className="text-right text-neutral-200">
                    Johar Town, Lahore, Pakistan
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-4 border-b border-white/5 pb-4">
                  <dt className="text-neutral-500">Role</dt>
                  <dd className="text-right text-neutral-200">
                    Mobile Application Developer
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-4 border-b border-white/5 pb-4">
                  <dt className="text-neutral-500">Focus</dt>
                  <dd className="text-right text-neutral-200">
                    Flutter, Android, ML on device
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-neutral-500">Status</dt>
                  <dd className="text-right text-neutral-200">Open to work</dd>
                </div>
              </dl>
            </div>

            <div className="mt-5 grid gap-4">
              {STATS.map((stat, i) => (
                <Reveal key={stat.label} delay={0.08 * i}>
                  <div className="card-surface card-surface-hover rounded-2xl p-6">
                    <Counter to={stat.value} suffix={stat.suffix} />
                    <p className="mt-2 text-sm leading-snug text-neutral-500">
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
  );
}
