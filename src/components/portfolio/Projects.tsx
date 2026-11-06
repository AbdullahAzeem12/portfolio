"use client";

import { useEffect, useMemo, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  GitFork,
  Pin,
  Star,
  RefreshCw,
  Sparkles,
  Smartphone,
  ExternalLink,
  Code2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  SlidersHorizontal,
} from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Reveal, SectionHeading } from "./Reveal";
import {
  FALLBACK_REPOS,
  FEATURED_PROJECTS,
  GITHUB_URL,
  type FeaturedProject,
  type Repo,
} from "./data";
import { GithubIcon } from "./icons";
import { toast } from "sonner";

function formatDate(iso: string) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "recently updated";
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

type ProjectFilter = "All" | "Flutter" | "Android Native & AI" | "Fintech & E-Commerce";

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("All");
  const [viewMode, setViewMode] = useState<"grid" | "slider">("grid");
  const [activeSlide, setActiveSlide] = useState(0);
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [loadingRepos, setLoadingRepos] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const sliderRef = useRef<HTMLDivElement | null>(null);

  const loadRepos = async (showToast = false) => {
    try {
      if (showToast) setRefreshing(true);
      const res = await fetch("/api/github");
      if (!res.ok) throw new Error("Failed to fetch GitHub repos");
      const data = await res.json();
      if (data.repos && Array.isArray(data.repos)) {
        setRepos(data.repos);
      } else {
        setRepos(FALLBACK_REPOS);
      }
      if (showToast) {
        toast.success("GitHub repositories refreshed!");
      }
    } catch {
      setRepos(FALLBACK_REPOS);
      if (showToast) toast.info("Loaded cached project repository list.");
    } finally {
      setLoadingRepos(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadRepos();
  }, []);

  const filteredFeatured = useMemo(() => {
    if (filter === "All") return FEATURED_PROJECTS;
    return FEATURED_PROJECTS.filter((p) => p.category === filter);
  }, [filter]);

  const slideNext = () => {
    setActiveSlide((prev) =>
      prev < filteredFeatured.length - 1 ? prev + 1 : 0
    );
  };

  const slidePrev = () => {
    setActiveSlide((prev) =>
      prev > 0 ? prev - 1 : filteredFeatured.length - 1
    );
  };

  return (
    <section id="projects" className="relative scroll-mt-20 py-24 sm:py-32 overflow-hidden">
      {/* Ambient Maroon Breathers */}
      <div
        className="pointer-events-none absolute -right-32 top-1/4 h-[550px] w-[550px] rounded-full bg-rose-950/20 blur-[150px] animate-breather-1"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-1/4 h-[500px] w-[500px] rounded-full bg-[#800020]/20 blur-[140px] animate-breather-3"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            index="04"
            eyebrow="portfolio of apps"
            title="Production Mobile Applications"
            description="Explore full-stack mobile applications featuring AI computer vision, live transportation APIs, and cross-border financial architectures."
          />

          <div className="flex flex-wrap items-center gap-3">
            {/* View Mode Slipper Toggle */}
            <div className="inline-flex items-center gap-1 rounded-2xl border border-white/10 bg-[#12080d]/80 p-1 backdrop-blur-xl">
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold transition-all ${
                  viewMode === "grid"
                    ? "bg-rose-950/80 text-white border border-rose-500/40 shadow-[0_0_12px_rgba(225,29,72,0.3)]"
                    : "text-neutral-400 hover:text-white"
                }`}
                title="Grid layout"
              >
                <LayoutGrid className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Grid</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("slider")}
                className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold transition-all ${
                  viewMode === "slider"
                    ? "bg-rose-950/80 text-white border border-rose-500/40 shadow-[0_0_12px_rgba(225,29,72,0.3)]"
                    : "text-neutral-400 hover:text-white"
                }`}
                title="Smooth touch slider"
              >
                <SlidersHorizontal className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Slider</span>
              </button>
            </div>

            {/* Filter Tabs */}
            <Reveal delay={0.15}>
              <div className="flex flex-wrap items-center gap-1 rounded-2xl border border-white/10 bg-[#12080d]/80 p-1 backdrop-blur-xl">
                {(
                  [
                    "All",
                    "Flutter",
                    "Android Native & AI",
                    "Fintech & E-Commerce",
                  ] as ProjectFilter[]
                ).map((cat) => {
                  const isActive = filter === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        setFilter(cat);
                        setActiveSlide(0);
                      }}
                      className={`relative rounded-xl px-3 py-1.5 text-xs font-semibold transition-all ${
                        isActive
                          ? "text-white"
                          : "text-neutral-400 hover:text-white"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="projects-filter-pill"
                          className="absolute inset-0 rounded-xl bg-gradient-to-r from-rose-700/80 to-rose-900/90 border border-rose-500/40 shadow-[0_0_20px_-3px_rgba(225,29,72,0.4)]"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                      <span className="relative z-10">{cat}</span>
                    </button>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Mode 1: Slider / Dragger View with Smooth Touch & Mouse Controls */}
        {viewMode === "slider" && (
          <div className="mt-12 relative">
            {/* Slipper Prev/Next Controls */}
            <div className="flex items-center justify-between mb-4 px-1">
              <span className="font-mono text-xs text-neutral-400">
                Swipe or drag freely • {activeSlide + 1} of {filteredFeatured.length}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={slidePrev}
                  className="grid h-9 w-9 place-items-center rounded-xl border border-rose-500/30 bg-rose-950/40 text-rose-300 hover:bg-rose-900/60 transition-colors shadow-[0_0_12px_rgba(225,29,72,0.25)]"
                  aria-label="Previous Project"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={slideNext}
                  className="grid h-9 w-9 place-items-center rounded-xl border border-rose-500/30 bg-rose-950/40 text-rose-300 hover:bg-rose-900/60 transition-colors shadow-[0_0_12px_rgba(225,29,72,0.25)]"
                  aria-label="Next Project"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Draggable Carousel Container */}
            <div className="overflow-hidden cursor-grab active:cursor-grabbing pb-4" ref={sliderRef}>
              <motion.div
                drag="x"
                dragConstraints={{ left: -(filteredFeatured.length - 1) * 360, right: 0 }}
                dragElastic={0.15}
                className="flex gap-6 w-max"
              >
                {filteredFeatured.map((project, i) => (
                  <div
                    key={project.id}
                    className="w-[300px] sm:w-[380px] md:w-[460px] shrink-0"
                  >
                    <article className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-rose-500/35 bg-gradient-to-br from-[#1c0913]/90 via-[#10060b]/95 to-[#070305]/98 p-6 sm:p-7 shadow-[0_0_40px_-10px_rgba(225,29,72,0.25)] backdrop-blur-2xl transition-all duration-300 hover:border-rose-400/60 min-h-[440px]">
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/40 bg-rose-950/60 px-3 py-1 font-mono text-[10px] font-semibold text-rose-300">
                            <Sparkles className="h-3 w-3 text-rose-400" />
                            {project.badge || project.category}
                          </span>
                          {project.metrics && (
                            <span className="font-mono text-[10px] font-bold text-rose-200">
                              {project.metrics.value}
                            </span>
                          )}
                        </div>

                        <h3 className="font-display mt-4 flex items-center justify-between text-2xl font-bold text-white">
                          <span>{project.name}</span>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 text-neutral-400 hover:text-white"
                          >
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        </h3>
                        <p className="font-mono text-xs text-rose-400/90 mt-1">
                          {project.tagline}
                        </p>

                        <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-neutral-300 text-justify">
                          {project.description}
                        </p>

                        <div className="mt-4 space-y-1.5 border-t border-white/5 pt-3">
                          {project.features.slice(0, 3).map((f, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                              <CheckCircle2 className="h-3.5 w-3.5 text-rose-400 shrink-0 mt-0.5" />
                              <span className="truncate">{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 border-t border-white/10 pt-4 flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 4).map((t) => (
                          <span
                            key={t}
                            className="rounded-lg border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-neutral-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </article>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        )}

        {/* Mode 2: Standard Grid View */}
        {viewMode === "grid" && (
          <motion.div layout className="mt-14 grid gap-7 lg:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filteredFeatured.map((project, i) => (
                <motion.article
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                  whileHover={{ y: -6 }}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-rose-500/30 bg-gradient-to-br from-[#1c0913]/90 via-[#10060b]/95 to-[#070305]/98 p-6 sm:p-8 shadow-[0_0_40px_-10px_rgba(225,29,72,0.25)] backdrop-blur-2xl transition-all duration-500 hover:border-rose-400/60 hover:shadow-[0_0_50px_-5px_rgba(225,29,72,0.4)]"
                >
                  <div
                    className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-rose-600/15 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                  />

                  <div>
                    {/* Header Row with Badge & Metric */}
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/40 bg-rose-950/60 px-3 py-1 font-mono text-[10px] font-semibold text-rose-300 shadow-[0_0_12px_rgba(225,29,72,0.3)]">
                          <Sparkles className="h-3 w-3 text-rose-400" />
                          {project.badge || project.category}
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] text-neutral-400">
                          {project.category}
                        </span>
                      </div>

                      {project.metrics && (
                        <div className="rounded-xl border border-rose-500/20 bg-rose-950/30 px-3 py-1 text-right font-mono">
                          <span className="block text-[9px] uppercase tracking-wider text-neutral-400">
                            {project.metrics.label}
                          </span>
                          <span className="text-xs font-bold text-rose-200">
                            {project.metrics.value}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="font-display mt-5 flex items-center justify-between text-2xl sm:text-3xl font-extrabold tracking-tight text-white group-hover:text-rose-100 transition-colors">
                      <span>{project.name}</span>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-neutral-400 group-hover:border-rose-500/50 group-hover:bg-rose-950/50 group-hover:text-white transition-all"
                        aria-label={`View ${project.name} repository`}
                      >
                        <ArrowUpRight className="h-5 w-5" />
                      </a>
                    </h3>
                    <p className="font-mono text-xs font-medium text-rose-400/90 mt-1">
                      {project.tagline}
                    </p>

                    {/* Description */}
                    <p className="mt-4 text-xs sm:text-sm leading-relaxed text-neutral-300 text-justify">
                      {project.description}
                    </p>

                    {/* Feature Checklist */}
                    <div className="mt-5 space-y-2 border-t border-white/5 pt-4">
                      {project.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 text-xs text-neutral-300"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-rose-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer with Tech Stack and GitHub Link */}
                  <div className="mt-7 border-t border-white/10 pt-5">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {project.technologies.map((t) => (
                        <span
                          key={t}
                          className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] text-neutral-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between pt-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-rose-300 hover:text-white transition-colors"
                      >
                        <GithubIcon className="h-3.5 w-3.5" />
                        <span>View GitHub Repository</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                      <span className="font-mono text-[10px] text-neutral-500">
                        Open Source Mobile App
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Live GitHub Repository Feed */}
        <div className="mt-20 border-t border-white/10 pt-16">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-rose-400 flex items-center gap-2">
                <GithubIcon className="h-4 w-4" /> Live Code Repository Stream
              </p>
              <h3 className="font-display mt-1 text-2xl font-bold text-white">
                All Repositories on GitHub
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => loadRepos(true)}
                disabled={refreshing}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs text-neutral-300 hover:text-white hover:border-rose-500/30 transition-all disabled:opacity-50"
              >
                <RefreshCw
                  className={`h-3.5 w-3.5 text-rose-400 ${
                    refreshing ? "animate-spin" : ""
                  }`}
                />
                <span>Sync Repos</span>
              </button>

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine-maroon inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold text-white"
              >
                <span>GitHub Profile</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* GitHub Repos Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {loadingRepos &&
              Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={`skeleton-${i}`}
                  className="card-surface rounded-2xl p-5 border border-white/10"
                >
                  <Skeleton className="h-5 w-32 bg-white/10" />
                  <Skeleton className="mt-3 h-4 w-full bg-white/5" />
                  <Skeleton className="mt-2 h-4 w-3/4 bg-white/5" />
                  <div className="mt-5 flex gap-2">
                    <Skeleton className="h-5 w-16 rounded-md bg-white/5" />
                    <Skeleton className="h-5 w-12 rounded-md bg-white/5" />
                  </div>
                </div>
              ))}

            {!loadingRepos &&
              (repos ?? []).map((repo, i) => (
                <Reveal key={repo.name} delay={0.03 * (i % 6)}>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-surface card-surface-hover group flex h-full flex-col justify-between rounded-2xl border border-white/10 p-5 hover:border-rose-500/40 transition-all duration-300 block"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-display text-base font-bold text-white group-hover:text-rose-200 transition-colors flex items-center gap-1.5">
                          <span>{repo.name}</span>
                          {repo.pinned && (
                            <Pin className="h-3 w-3 text-rose-400 fill-rose-400" />
                          )}
                        </h4>
                        <ArrowUpRight className="h-4 w-4 text-neutral-500 group-hover:text-rose-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </div>

                      <p className="mt-2 text-xs leading-relaxed text-neutral-400 text-justify line-clamp-3">
                        {repo.description ||
                          "Mobile application repository built with Flutter and Dart."}
                      </p>
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-3 font-mono text-[11px] text-neutral-400">
                      <span className="flex items-center gap-1.5 text-neutral-300">
                        <span className="h-2 w-2 rounded-full bg-rose-400" />
                        {repo.language || "Dart"}
                      </span>

                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-amber-400" />
                          {repo.stargazers_count}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork className="h-3 w-3 text-neutral-400" />
                          {repo.forks_count}
                        </span>
                      </div>
                    </div>
                  </a>
                </Reveal>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
