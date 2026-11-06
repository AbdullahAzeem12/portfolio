"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, SectionHeading } from "./Reveal";
import { SKILLS, type TechSkill } from "./data";
import { TechIcon } from "./icons";
import { Sparkles, Layers, Cpu, Database, Wrench } from "lucide-react";

type CategoryFilter = "All" | TechSkill["category"];

const CATEGORIES: { label: CategoryFilter; icon: any }[] = [
  { label: "All", icon: Layers },
  { label: "Mobile Frontend", icon: Layers },
  { label: "AI & ML", icon: Cpu },
  { label: "Cloud & Backend", icon: Database },
  { label: "Tools & Testing", icon: Wrench },
];

export function Skills() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("All");

  const filteredSkills =
    activeFilter === "All"
      ? SKILLS
      : SKILLS.filter((s) => s.category === activeFilter);

  return (
    <section
      id="skills"
      className="relative scroll-mt-20 py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-[#070305] via-[#0d0509] to-[#070305]"
    >
      {/* Top divider border with maroon sheen */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose-500/30 to-transparent"
        aria-hidden="true"
      />

      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute left-1/3 top-1/2 -translate-y-1/2 h-[550px] w-[550px] rounded-full bg-rose-950/25 blur-[150px] animate-breather-2"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            index="03"
            eyebrow="technical arsenal"
            title="Production tools engineered for speed"
            description="From Flutter state management and native Java/XML Android architectures to on-device TensorFlow Lite neural networks and real-time Firebase backends."
          />

          {/* Interactive Category Filter Pills */}
          <Reveal delay={0.15}>
            <div className="flex flex-wrap items-center gap-1.5 rounded-2xl border border-white/10 bg-[#14080f]/80 p-1.5 backdrop-blur-xl">
              {CATEGORIES.map(({ label, icon: Icon }) => {
                const isActive = activeFilter === label;
                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setActiveFilter(label)}
                    className={`relative flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all ${
                      isActive
                        ? "text-white"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="skills-filter-pill"
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-rose-700/80 to-rose-900/90 border border-rose-500/40 shadow-[0_0_20px_-3px_rgba(225,29,72,0.4)]"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    <Icon className="relative z-10 h-3.5 w-3.5" />
                    <span className="relative z-10">{label}</span>
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* Skills Cards Grid */}
        <motion.div layout className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, i) => (
              <motion.article
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: 0.04 * i }}
                whileHover={{ y: -6 }}
                className={`card-surface card-surface-hover group relative flex h-full flex-col overflow-hidden rounded-3xl p-6 sm:p-7 border ${
                  skill.featured
                    ? "border-rose-500/35 shadow-[0_0_25px_-5px_rgba(225,29,72,0.2)]"
                    : "border-white/10"
                }`}
              >
                {/* Shiny specular hover highlight */}
                <div
                  className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-rose-600/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />

                <div className="flex items-start justify-between">
                  <span className="grid h-13 w-13 place-items-center rounded-2xl border border-rose-500/30 bg-rose-950/40 text-rose-300 transition-all duration-500 group-hover:scale-110 group-hover:border-rose-400 group-hover:text-white shadow-[0_0_15px_rgba(225,29,72,0.2)]">
                    <TechIcon icon={skill.icon} className="h-6 w-6" />
                  </span>

                  <div className="flex items-center gap-2">
                    {skill.featured && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-rose-500/40 bg-rose-950/60 px-2 py-0.5 font-mono text-[9px] font-semibold text-rose-300">
                        <Sparkles className="h-2.5 w-2.5" />
                        PRIMARY
                      </span>
                    )}
                    <span className="font-mono text-[10px] tracking-wider text-neutral-500">
                      {skill.category}
                    </span>
                  </div>
                </div>

                <h3 className="font-display mt-5 text-xl font-bold text-white transition-colors group-hover:text-rose-200">
                  {skill.name}
                </h3>
                <p className="font-mono text-[11px] tracking-wider uppercase text-rose-400/90 font-medium mt-0.5">
                  {skill.tagline}
                </p>

                <p className="mt-3 flex-1 text-xs leading-relaxed text-neutral-300 text-justify">
                  {skill.detail}
                </p>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] text-neutral-300 group-hover:border-rose-500/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Animated Proficiency Bar */}
                <div className="mt-6 border-t border-white/5 pt-4">
                  <div className="flex items-center justify-between font-mono text-[10px] text-neutral-400">
                    <span className="uppercase tracking-wider">Mastery Level</span>
                    <span className="text-rose-300 font-semibold">{skill.level}%</span>
                  </div>
                  <div
                    className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.06]"
                    role="progressbar"
                    aria-valuenow={skill.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${skill.name} proficiency`}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{
                        duration: 1.2,
                        delay: 0.15,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-rose-700 via-rose-500 to-rose-300 shadow-[0_0_12px_rgba(225,29,72,0.6)]"
                    />
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
