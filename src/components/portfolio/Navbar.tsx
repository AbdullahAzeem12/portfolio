"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Download, FileText, Sparkles, Send, Globe } from "lucide-react";
import Image from "next/image";
import { GITHUB_URL, LINKEDIN_URL, NAV_LINKS, WHATSAPP_URL } from "./data";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "./icons";
import { CvModal } from "./CvModal";
import { toast } from "sonner";
import { useLanguage, type Language } from "@/lib/i18n";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [langDropdown, setLangDropdown] = useState(false);

  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
      { rootMargin: "-35% 0px -50% 0px" }
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

  const handleDirectDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    const link = document.createElement("a");
    link.href = "/api/cv/download";
    link.download = "Abdullah_Azeem_Mobile_Developer_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Downloading CV (PDF)", {
      description: "Abdullah Azeem's official mobile developer resume.",
    });
  };

  const navLabels: Record<string, string> = {
    "#about": t.nav.about,
    "#experience": t.nav.experience,
    "#skills": t.nav.skills,
    "#projects": t.nav.projects,
    "#contact": t.nav.contact,
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled
            ? "border-b border-rose-500/15 bg-[#070305]/85 shadow-[0_4px_30px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
            : "bg-transparent"
        }`}
      >
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8"
        >
          {/* Logo with User Photo Thumbnail */}
          <a
            href="#top"
            className="group flex items-center gap-3.5"
            aria-label="Abdullah Azeem, back to top"
          >
            <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-rose-500/30 bg-gradient-to-br from-rose-950 to-neutral-900 p-0.5 shadow-[0_0_15px_rgba(225,29,72,0.3)] transition-transform duration-300 group-hover:scale-105 group-hover:border-rose-400/60">
              <Image
                src="/abdullah-azeem.jpg"
                alt="Abdullah Azeem portrait"
                width={40}
                height={40}
                className="h-full w-full rounded-[10px] object-cover"
                priority
              />
            </div>

            <div>
              <span className="flex items-center gap-2 font-display text-base font-bold tracking-tight text-white transition-colors group-hover:text-rose-200">
                Abdullah Azeem
                <span className="hidden sm:inline-block rounded-full bg-rose-500/15 px-2 py-0.5 font-mono text-[9px] font-semibold text-rose-300 border border-rose-500/30">
                  MOBILE DEV
                </span>
              </span>
              <div className="flex items-center gap-1.5 font-mono text-[10px] text-neutral-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{t.hero.locationBadge}</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center rounded-full border border-white/10 bg-white/[0.03] p-1.5 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
            <ul className="flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = active === link.href.slice(1);
                const isHovered = hoveredLink === link.href;

                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onMouseEnter={() => setHoveredLink(link.href)}
                      onMouseLeave={() => setHoveredLink(null)}
                      className={`relative rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-colors ${
                        isActive
                          ? "text-white"
                          : "text-neutral-400 hover:text-neutral-100"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-active-pill"
                          className="absolute inset-0 rounded-full border border-rose-500/40 bg-gradient-to-r from-rose-950/80 via-rose-900/60 to-rose-950/80 shadow-[0_0_16px_rgba(225,29,72,0.35)]"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 32,
                          }}
                        />
                      )}
                      {!isActive && isHovered && (
                        <motion.span
                          layoutId="nav-hover-pill"
                          className="absolute inset-0 rounded-full bg-white/[0.05]"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      )}
                      <span className="relative z-10">
                        {navLabels[link.href] || link.label}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Action Buttons: Language Switcher, CV & Hire Me */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Language Switcher */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangDropdown((prev) => !prev)}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-mono uppercase text-neutral-300 hover:border-rose-500/40 hover:text-white transition-all"
                title="Change language / ترجمہ"
              >
                <Globe className="h-3.5 w-3.5 text-rose-400" />
                <span>{language}</span>
              </button>

              <AnimatePresence>
                {langDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-32 rounded-2xl border border-rose-500/30 bg-[#12050b]/98 p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-2xl z-50 font-mono text-xs"
                  >
                    {[
                      { code: "en", label: "English" },
                      { code: "ur", label: "اردو (Urdu)" },
                      { code: "de", label: "Deutsch" },
                    ].map((l) => (
                      <button
                        key={l.code}
                        type="button"
                        onClick={() => {
                          setLanguage(l.code as Language);
                          setLangDropdown(false);
                          toast.success(`Language changed to ${l.label}`);
                        }}
                        className={`w-full text-left px-3 py-1.5 rounded-xl transition-colors ${
                          language === l.code
                            ? "bg-rose-900/60 text-white font-bold"
                            : "text-neutral-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {l.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* View / Download CV Button */}
            <button
              type="button"
              onClick={() => setCvModalOpen(true)}
              className="group relative inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-950/40 px-4 py-2 text-xs font-semibold text-rose-200 transition-all duration-300 hover:border-rose-400 hover:bg-rose-900/50 hover:text-white shadow-[0_0_20px_-4px_rgba(225,29,72,0.3)]"
            >
              <FileText className="h-3.5 w-3.5 text-rose-400 transition-transform group-hover:scale-110" />
              <span>{t.nav.resume}</span>
              <span
                onClick={handleDirectDownload}
                title="Direct PDF Download"
                className="ml-0.5 rounded-full bg-rose-500/30 p-1 hover:bg-rose-500 hover:text-white transition-colors"
              >
                <Download className="h-3 w-3" />
              </span>
            </button>

            {/* Hire Me Button */}
            <a
              href="#contact"
              className="btn-shine-maroon inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold text-white"
            >
              <Send className="h-3 w-3" />
              <span>{t.nav.hireMe}</span>
            </a>
          </div>

          {/* Mobile Menu Toggle & Lang Switcher */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={() =>
                setLanguage(language === "en" ? "ur" : language === "ur" ? "de" : "en")
              }
              className="inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 px-2.5 py-1.5 font-mono text-[11px] text-neutral-300 uppercase"
            >
              <Globe className="h-3 w-3 text-rose-400" />
              {language}
            </button>

            <button
              type="button"
              onClick={() => setCvModalOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-xl border border-rose-500/30 bg-rose-950/50 px-3 py-1.5 text-xs font-semibold text-rose-200"
            >
              <FileText className="h-3.5 w-3.5 text-rose-400" />
              <span>CV</span>
            </button>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-white/5 text-neutral-200"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Slide-down Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-x-0 top-20 z-40 border-b border-rose-500/20 bg-[#070305]/98 px-6 py-8 backdrop-blur-2xl sm:hidden overflow-hidden shadow-2xl"
            >
              <ul className="flex flex-col gap-2">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between border-b border-white/5 py-3.5 text-base font-semibold text-neutral-200 hover:text-rose-400"
                    >
                      <span>{navLabels[link.href] || link.label}</span>
                      <span className="font-mono text-xs text-neutral-600">
                        0{i + 1}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Mobile CTA */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    setCvModalOpen(true);
                  }}
                  className="btn-shine-maroon flex items-center justify-center gap-2 rounded-xl py-3 text-xs font-semibold text-white w-full"
                >
                  <Download className="h-4 w-4" />
                  {t.hero.downloadCv}
                </button>

                <div className="flex items-center justify-center gap-3 pt-2">
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-white/5 text-neutral-300"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="h-4.5 w-4.5" />
                  </a>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-white/5 text-neutral-300"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon className="h-4.5 w-4.5" />
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-white/5 text-emerald-400"
                    aria-label="WhatsApp Chat"
                  >
                    <WhatsAppIcon className="h-4.5 w-4.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* CV Modal */}
      <CvModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </>
  );
}
