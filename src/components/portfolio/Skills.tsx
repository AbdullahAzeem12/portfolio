"use client";

import { motion } from "framer-motion";
import { Reveal, SectionHeading } from "./Reveal";
import { SKILLS } from "./data";
import { TechIcon } from "./icons";

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-20 bg-[#090909] py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="02"
          eyebrow="tools & technologies"
          title="The stack behind my apps"
          description="Every tool here has shipped real features in my projects: from Flutter front ends and native Android modules to Firebase clouds, SQL data layers and REST integrations."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {SKILLS.map((skill, i) => (
            <Reveal
              key={skill.name}
              delay={0.05 * i}
              className={skill.span}
            >
              <motion.article
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="card-surface card-surface-hover group relative flex h-full flex-col overflow-hidden rounded-2xl p-6"
              >
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/[0.04] blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/[0.05] text-neutral-200 transition-all duration-500 group-hover:scale-110 group-hover:text-white">
                    <TechIcon icon={skill.icon} className="h-6 w-6" />
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-neutral-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="font-display mt-5 text-xl font-bold text-neutral-100">
                  {skill.name}
                </h3>
                <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-neutral-500">
                  {skill.tagline}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-400">
                  {skill.detail}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-between font-mono text-[10px] text-neutral-500">
                    <span>PROFICIENCY</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div
                    className="mt-2 h-1 overflow-hidden rounded-full bg-white/[0.07]"
                    role="progressbar"
                    aria-valuenow={skill.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${skill.name} proficiency`}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{
                        duration: 1.3,
                        delay: 0.2,
                        ease: [0.21, 0.65, 0.35, 1],
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-neutral-500 to-neutral-100"
                    />
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
