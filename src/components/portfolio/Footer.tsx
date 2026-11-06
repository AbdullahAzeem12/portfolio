"use client";

import { ArrowUp, Download, Heart } from "lucide-react";
import Image from "next/image";
import { GITHUB_URL, LINKEDIN_URL, NAV_LINKS, WHATSAPP_URL } from "./data";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "./icons";
import { toast } from "sonner";

export function Footer() {
  const year = new Date().getFullYear();

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/api/cv/download";
    link.download = "Abdullah_Azeem_Mobile_Developer_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Downloading CV PDF", {
      description: "Abdullah Azeem's official mobile developer resume.",
    });
  };

  return (
    <footer className="relative mt-auto border-t border-rose-500/15 bg-gradient-to-b from-[#0a0408] to-[#050204] pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div>
            <a
              href="#top"
              className="flex items-center gap-3.5 group"
              aria-label="Back to top"
            >
              <div className="relative h-11 w-11 overflow-hidden rounded-xl border border-rose-500/30 bg-rose-950/40 p-0.5 shadow-[0_0_15px_rgba(225,29,72,0.3)] transition-transform group-hover:scale-105">
                <Image
                  src="/abdullah-azeem.jpg"
                  alt="Abdullah Azeem portrait"
                  width={44}
                  height={44}
                  className="h-full w-full rounded-[10px] object-cover"
                />
              </div>

              <div>
                <span className="font-display text-lg font-bold text-white group-hover:text-rose-200 transition-colors">
                  Abdullah Azeem
                </span>
                <span className="block font-mono text-[10px] font-medium tracking-[0.2em] text-rose-400">
                  MOBILE APPLICATION DEVELOPER
                </span>
              </div>
            </a>

            <p className="mt-3.5 max-w-sm text-xs leading-relaxed text-neutral-400">
              Designing and engineering high-velocity mobile solutions with Flutter,
              Java, Kotlin, Firebase and TensorFlow Lite. Based in Lahore, Pakistan.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs font-medium text-neutral-400 transition-colors hover:text-rose-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={handleDownloadCV}
                  className="flex items-center gap-1.5 text-xs font-semibold text-rose-400 hover:text-white transition-colors"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download CV</span>
                </button>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile of Abdullah Azeem"
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-neutral-300 transition-all hover:scale-105 hover:border-rose-500/40 hover:text-white hover:shadow-[0_0_12px_rgba(225,29,72,0.3)]"
              >
                <GithubIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile of Abdullah Azeem"
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-neutral-300 transition-all hover:scale-105 hover:border-rose-500/40 hover:text-white hover:shadow-[0_0_12px_rgba(225,29,72,0.3)]"
              >
                <LinkedinIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp of Abdullah Azeem"
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-emerald-400 transition-all hover:scale-105 hover:border-emerald-500/40 hover:text-emerald-300 hover:shadow-[0_0_12px_rgba(16,185,129,0.3)]"
              >
                <WhatsAppIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href="#top"
                aria-label="Scroll back to top"
                className="ml-auto grid h-10 w-10 place-items-center rounded-xl border border-rose-500/30 bg-rose-950/40 text-rose-300 transition-all hover:scale-105 hover:border-rose-400 hover:text-white md:ml-4 shadow-[0_0_15px_rgba(225,29,72,0.25)]"
              >
                <ArrowUp className="h-4 w-4" />
              </a>
            </div>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 font-mono text-[11px] text-neutral-500 sm:flex-row sm:items-center">
          <p>© {year} Abdullah Azeem. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Built with Next.js, React, Tailwind CSS & Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
