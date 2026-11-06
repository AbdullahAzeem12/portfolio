"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Building2,
  Award,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { EXPERIENCES, EDUCATION } from "./data";

export function Experience() {
  const [activeTab, setActiveTab] = useState<"experience" | "education">(
    "experience"
  );
  const [expandedId, setExpandedId] = useState<string | null>("mktecknotrons");

  return (
    <section
      id="experience"
      className="relative scroll-mt-20 py-24 sm:py-32 overflow-hidden"
    >
      {/* Background ambient breather */}
      <div
        className="pointer-events-none absolute -right-32 top-1/4 h-[500px] w-[500px] rounded-full bg-rose-950/20 blur-[130px] animate-breather-2"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-1/4 h-[450px] w-[450px] rounded-full bg-rose-900/15 blur-[120px] animate-breather-3"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            index="02"
            eyebrow="career & education"
            title="Experience that transforms ideas into apps"
            description="Proven track record in high-impact mobile development roles, building production applications, optimizing performance, and integrating machine learning."
          />

          {/* Toggle Tabs */}
          <Reveal delay={0.15}>
            <div className="inline-flex items-center gap-1.5 rounded-2xl border border-white/10 bg-[#12080d]/80 p-1.5 backdrop-blur-xl">
              <button
                type="button"
                onClick={() => setActiveTab("experience")}
                className={`relative flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                  activeTab === "experience"
                    ? "text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {activeTab === "experience" && (
                  <motion.div
                    layoutId="exp-pill"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-rose-700/80 to-rose-900/90 border border-rose-500/40 shadow-[0_0_20px_-3px_rgba(225,29,72,0.4)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Briefcase className="relative z-10 h-3.5 w-3.5" />
                <span className="relative z-10">Work Experience</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("education")}
                className={`relative flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                  activeTab === "education"
                    ? "text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {activeTab === "education" && (
                  <motion.div
                    layoutId="exp-pill"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-rose-700/80 to-rose-900/90 border border-rose-500/40 shadow-[0_0_20px_-3px_rgba(225,29,72,0.4)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <GraduationCap className="relative z-10 h-3.5 w-3.5" />
                <span className="relative z-10">Education</span>
              </button>
            </div>
          </Reveal>
        </div>

        {/* Timeline Content */}
        <div className="mt-14">
          <AnimatePresence mode="wait">
            {activeTab === "experience" ? (
              <motion.div
                key="tab-experience"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                {EXPERIENCES.map((exp, i) => {
                  const isExpanded = expandedId === exp.id;
                  return (
                    <Reveal key={exp.id} delay={0.08 * i}>
                      <article
                        className={`group relative overflow-hidden rounded-3xl border transition-all duration-500 ${
                          exp.active
                            ? "border-rose-500/40 bg-gradient-to-br from-[#1c0a13]/90 via-[#10060b]/90 to-[#090306]/95 shadow-[0_0_35px_-8px_rgba(225,29,72,0.25)]"
                            : "border-white/10 bg-gradient-to-br from-[#16080f]/70 to-[#0a0407]/80 hover:border-rose-500/30"
                        } p-6 sm:p-8 backdrop-blur-2xl`}
                      >
                        {/* Status Ribbon */}
                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <div className="flex items-center gap-3.5">
                            <span className="grid h-12 w-12 place-items-center rounded-2xl border border-rose-500/30 bg-rose-950/40 text-rose-300 transition-transform duration-300 group-hover:scale-105">
                              <Building2 className="h-6 w-6" />
                            </span>
                            <div>
                              <div className="flex items-center gap-2.5 flex-wrap">
                                <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                                  {exp.role}
                                </h3>
                                {exp.active && (
                                  <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/40 bg-rose-950/50 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-rose-300 shadow-[0_0_12px_rgba(225,29,72,0.4)]">
                                    <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse-maroon" />
                                    CURRENT ROLE
                                  </span>
                                )}
                              </div>
                              <p className="font-display text-sm font-semibold text-rose-300">
                                {exp.company}{" "}
                                <span className="text-neutral-500 font-normal">
                                  • {exp.location}
                                </span>
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <span className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-neutral-300">
                              <Calendar className="h-3.5 w-3.5 text-rose-400" />
                              {exp.period}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                setExpandedId(isExpanded ? null : exp.id)
                              }
                              className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-neutral-400 hover:text-white transition-colors"
                              aria-label={
                                isExpanded
                                  ? "Collapse details"
                                  : "Expand details"
                              }
                            >
                              <ChevronRight
                                className={`h-4 w-4 transition-transform duration-300 ${
                                  isExpanded ? "rotate-90 text-rose-400" : ""
                                }`}
                              />
                            </button>
                          </div>
                        </div>

                        {/* Summary */}
                        <p className="mt-5 text-sm leading-relaxed text-neutral-300 text-justify">
                          {exp.summary}
                        </p>

                        {/* Collapsible Key Highlights */}
                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="mt-5 border-t border-white/10 pt-5 space-y-2.5">
                                <p className="font-mono text-xs font-semibold tracking-wider text-rose-300 uppercase">
                                  Key Contributions & Impact
                                </p>
                                <ul className="space-y-2">
                                  {exp.highlights.map((h, idx) => (
                                    <li
                                      key={idx}
                                      className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300"
                                    >
                                      <CheckCircle2 className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
                                      <span>{h}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Tech pills */}
                        <div className="mt-6 flex flex-wrap items-center gap-2">
                          <span className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase mr-1">
                            Technologies:
                          </span>
                          {exp.technologies.map((t) => (
                            <span
                              key={t}
                              className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-neutral-300 hover:border-rose-500/30 transition-colors"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </article>
                    </Reveal>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                key="tab-education"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
              >
                <article className="rounded-3xl border border-rose-500/30 bg-gradient-to-br from-[#1c0a13]/90 via-[#10060b]/90 to-[#090306]/95 p-6 sm:p-9 backdrop-blur-2xl shadow-[0_0_35px_-8px_rgba(225,29,72,0.25)]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="grid h-14 w-14 place-items-center rounded-2xl border border-rose-500/30 bg-rose-950/40 text-rose-300">
                        <GraduationCap className="h-7 w-7" />
                      </span>
                      <div>
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                          {EDUCATION.degree}
                        </h3>
                        <p className="font-display text-sm font-semibold text-rose-300">
                          {EDUCATION.institution}{" "}
                          <span className="text-neutral-500 font-normal">
                            • {EDUCATION.location}
                          </span>
                        </p>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-2 rounded-xl border border-rose-500/30 bg-rose-950/40 px-3.5 py-1.5 font-mono text-xs text-rose-200">
                      <Calendar className="h-3.5 w-3.5" />
                      {EDUCATION.period}
                    </span>
                  </div>

                  <p className="mt-6 text-sm leading-relaxed text-neutral-300 text-justify">
                    {EDUCATION.description}
                  </p>

                  <div className="mt-6 border-t border-white/10 pt-6">
                    <h4 className="font-mono text-xs font-semibold tracking-wider text-rose-300 uppercase mb-3 flex items-center gap-2">
                      <Award className="h-4 w-4" /> Academic Highlights & Specializations
                    </h4>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {EDUCATION.highlights.map((h, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs sm:text-sm text-neutral-300"
                        >
                          <Sparkles className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

