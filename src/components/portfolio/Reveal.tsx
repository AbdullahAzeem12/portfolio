"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}

export function Reveal({
  children,
  delay = 0,
  y = 36,
  className,
  once = true,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.65, 0.35, 1] }}
    >
      {children}
    </motion.div>
  );
}

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <Reveal>
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-neutral-500 flex items-center gap-3">
          <span className="inline-block h-px w-8 bg-neutral-700" aria-hidden="true" />
          {index} . {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gradient">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.16}>
          <p className="mt-4 text-neutral-400 leading-relaxed">{description}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
