"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, FolderGit2 } from "lucide-react";
import { GITHUB_URL, LINKEDIN_URL, MARQUEE_ITEMS, TYPING_ROLES } from "./data";
import { GithubIcon, LinkedinIcon } from "./icons";

function useTypingEffect(words: string[], typeSpeed = 65, deleteSpeed = 32, pause = 1700) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      timeout = setTimeout(() => {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      }, 300);
    } else {
      timeout = setTimeout(
        () => {
          setText((t) =>
            deleting ? word.slice(0, t.length - 1) : word.slice(0, t.length + 1)
          );
        },
        deleting ? deleteSpeed : typeSpeed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.21, 0.65, 0.35, 1] as const },
  },
};

export function Hero() {
  const typed = useTypingEffect(TYPING_ROLES);

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col overflow-hidden bg-grid"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-32 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-white/[0.05] blur-[140px] animate-float-slow" />
        <div className="absolute bottom-0 left-[8%] h-72 w-72 rounded-full bg-white/[0.04] blur-[110px] animate-float-slow" style={{ animationDelay: "-6s" }} />
        <div className="absolute inset-0 bg-noise" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#060606] to-transparent" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 pt-32 pb-20 sm:px-8"
      >
        <motion.div variants={item}>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.04] px-4 py-1.5 font-mono text-xs tracking-wider text-neutral-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-neutral-200 animate-pulse-ring" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-neutral-100" />
            </span>
            Available for freelance and full-time roles
          </span>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-8 font-mono text-sm tracking-[0.25em] text-neutral-500"
        >
          HI, MY NAME IS
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display mt-4 text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl"
        >
          <span className="text-gradient">Abdullah Azeem</span>
        </motion.h1>

        <motion.p
          variants={item}
          aria-label={TYPING_ROLES.join(", ")}
          className="font-display mt-4 flex min-h-[2.4em] flex-wrap items-center text-2xl font-semibold text-neutral-300 sm:text-4xl lg:text-5xl"
        >
          <span>{typed}</span>
          <span
            className="ml-1 inline-block h-[0.95em] w-[3px] bg-neutral-300 animate-caret"
            aria-hidden="true"
          />
        </motion.p>

        <motion.p
          variants={item}
          className="mt-7 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg"
        >
          I design and build high-performance mobile applications with Flutter,
          Java and Kotlin, backed by Firebase and REST APIs. I turn complex
          ideas into smooth, production-ready apps that people love to use.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="btn-shine group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-[1.03] active:scale-95"
          >
            <FolderGit2 className="h-4 w-4" />
            View My Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-neutral-200 transition-colors hover:border-white/45 hover:text-white"
          >
            Get In Touch
          </a>
          <div className="ml-1 flex items-center gap-2.5">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile of Abdullah Azeem"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/[0.04] text-neutral-300 transition-all hover:scale-110 hover:border-white/40 hover:text-white"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile of Abdullah Azeem"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/[0.04] text-neutral-300 transition-all hover:scale-110 hover:border-white/40 hover:text-white"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </motion.div>

      <div className="relative border-t border-white/5 py-5">
        <div className="marquee-mask overflow-hidden">
          <div className="flex w-max animate-marquee gap-10">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="flex items-center gap-10 whitespace-nowrap font-mono text-sm tracking-[0.2em] text-neutral-600"
              >
                {tech.toUpperCase()}
                <span className="h-1 w-1 rounded-full bg-neutral-700" aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <span className="grid h-11 w-7 place-items-start justify-center rounded-full border border-white/15 pt-2">
          <ArrowDown className="h-3 w-3 text-neutral-400 animate-scroll-hint" />
        </span>
      </motion.a>
    </section>
  );
}
