"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { GITHUB_URL, LINKEDIN_URL, NAV_LINKS } from "./data";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.21, 0.65, 0.35, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-[#060606]/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a
          href="#top"
          className="group flex items-center gap-3"
          aria-label="Abdullah Azeem, back to top"
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/15 bg-white/5 font-display text-sm font-bold text-white transition-colors group-hover:border-white/40">
            AA
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-wide text-neutral-200 sm:block">
            Abdullah Azeem
            <span className="block font-mono text-[10px] font-normal tracking-[0.22em] text-neutral-500">
              FLUTTER DEVELOPER
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                    isActive
                      ? "text-white"
                      : "text-neutral-400 hover:text-neutral-100"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full border border-white/15 bg-white/5"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              </li>
            );
          })}
          <li>
            <a
              href="#contact"
              className="btn-shine ml-2 rounded-full border border-white/25 bg-white px-4 py-2 text-sm font-semibold text-black transition-transform hover:scale-[1.04] active:scale-95"
            >
              Hire Me
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 bg-white/5 text-neutral-200 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-16 z-40 flex flex-col bg-[#060606]/97 backdrop-blur-2xl md:hidden"
          >
            <ul className="flex flex-1 flex-col gap-2 px-8 pt-10">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.07, duration: 0.4 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 border-b border-white/5 py-5"
                  >
                    <span className="font-mono text-xs text-neutral-600">
                      0{i + 1}
                    </span>
                    <span className="font-display text-3xl font-bold text-neutral-100">
                      {link.label}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="flex items-center gap-3 px-8 pb-12"
            >
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="grid h-11 w-11 place-items-center rounded-lg border border-white/15 bg-white/5 text-neutral-300"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="grid h-11 w-11 place-items-center rounded-lg border border-white/15 bg-white/5 text-neutral-300"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
