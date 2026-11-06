"use client";

import { ArrowUp } from "lucide-react";
import { GITHUB_URL, LINKEDIN_URL, NAV_LINKS } from "./data";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto border-t border-white/5 bg-[#060606] pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-12">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div>
            <a href="#top" className="flex items-center gap-3" aria-label="Back to top">
              <span className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 bg-white/5 font-display text-sm font-bold text-white">
                AA
              </span>
              <span className="font-display text-base font-semibold text-neutral-100">
                Abdullah Azeem
                <span className="block font-mono text-[10px] font-normal tracking-[0.22em] text-neutral-500">
                  MOBILE APPLICATION DEVELOPER
                </span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-500">
              Crafting production-grade mobile experiences with Flutter, Java,
              Kotlin, Firebase and React Native from Lahore to the world.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile of Abdullah Azeem"
                className="grid h-10 w-10 place-items-center rounded-lg border border-white/12 bg-white/[0.04] text-neutral-300 transition-all hover:scale-105 hover:border-white/40 hover:text-white"
              >
                <GithubIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile of Abdullah Azeem"
                className="grid h-10 w-10 place-items-center rounded-lg border border-white/12 bg-white/[0.04] text-neutral-300 transition-all hover:scale-105 hover:border-white/40 hover:text-white"
              >
                <LinkedinIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href="#top"
                aria-label="Scroll back to top"
                className="ml-auto grid h-10 w-10 place-items-center rounded-lg border border-white/12 bg-white/[0.04] text-neutral-300 transition-all hover:scale-105 hover:border-white/40 hover:text-white md:ml-6"
              >
                <ArrowUp className="h-4 w-4" />
              </a>
            </div>
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 font-mono text-xs text-neutral-600 sm:flex-row sm:items-center">
          <p>© {year} Abdullah Azeem. All rights reserved.</p>
          <p>Designed and built with React, Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
