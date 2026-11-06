"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, GitFork, Pin, Star, RefreshCw } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Reveal, SectionHeading } from "./Reveal";
import { FALLBACK_REPOS, GITHUB_URL, type Repo } from "./data";
import { GithubIcon } from "./icons";

const PINNED = ["PaidiX"];

function formatDate(iso: string) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "recently updated";
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export function Projects() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch(
          "https://api.github.com/users/AbdullahAzeem12/repos?per_page=100&sort=updated",
          { headers: { Accept: "application/vnd.github+json" } }
        );
        if (!res.ok) throw new Error(`GitHub API responded ${res.status}`);
        const data: Repo[] = await res.json();
        const owned = data.filter((r) => !r.fork && !r.archived);
        if (cancelled) return;
        const sorted = [
          ...owned.filter((r) => PINNED.includes(r.name)),
          ...owned.filter((r) => !PINNED.includes(r.name)),
        ];
        setRepos(sorted.length > 0 ? sorted : FALLBACK_REPOS);
      } catch {
        if (!cancelled) setRepos(FALLBACK_REPOS);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const shown = useMemo(() => repos ?? [], [repos]);

  return (
    <section id="projects" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            index="03"
            eyebrow="projects"
            title="Imported straight from GitHub"
            description="These repositories are pulled live from my GitHub profile, so the list always reflects my latest work. If the API is unreachable, a cached snapshot takes over."
          />
          <Reveal delay={0.2}>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-neutral-200 transition-colors hover:border-white/45 hover:text-white"
            >
              <GithubIcon className="h-4 w-4" />
              All repositories
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {loading &&
            Array.from({ length: 4 }).map((_, i) => (
              <div
                key={`skeleton-${i}`}
                className="card-surface rounded-2xl p-7"
              >
                <div className="flex items-center justify-between">
                  <Skeleton className="h-10 w-10 rounded-lg bg-white/5" />
                  <Skeleton className="h-4 w-20 bg-white/5" />
                </div>
                <Skeleton className="mt-6 h-6 w-40 bg-white/10" />
                <Skeleton className="mt-4 h-4 w-full bg-white/5" />
                <Skeleton className="mt-2 h-4 w-4/5 bg-white/5" />
                <Skeleton className="mt-2 h-4 w-3/5 bg-white/5" />
                <div className="mt-6 flex gap-3">
                  <Skeleton className="h-6 w-16 rounded-full bg-white/5" />
                  <Skeleton className="h-6 w-16 rounded-full bg-white/5" />
                </div>
              </div>
            ))}

          {!loading &&
            shown.map((repo, i) => (
              <Reveal key={repo.name} delay={0.05 * (i % 4)}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="card-surface card-surface-hover group relative flex h-full flex-col rounded-2xl p-7"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.05] text-neutral-200 transition-all duration-500 group-hover:scale-110 group-hover:text-white">
                      <GithubIcon className="h-5 w-5" />
                    </span>
                    <div className="flex items-center gap-2">
                      {PINNED.includes(repo.name) && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/[0.05] px-2.5 py-1 font-mono text-[10px] tracking-wider text-neutral-300">
                          <Pin className="h-3 w-3" />
                          PINNED
                        </span>
                      )}
                      <span className="font-mono text-[10px] tracking-[0.18em] text-neutral-600">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display mt-6 flex items-center gap-2 text-2xl font-bold tracking-tight text-neutral-100">
                    {repo.name}
                    <ArrowUpRight className="h-5 w-5 text-neutral-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neutral-200" />
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-400">
                    {repo.description || "A mobile development project built with Dart and Flutter."}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-neutral-500">
                    <span className="inline-flex items-center gap-1.5">
                      <span
                        className="h-2.5 w-2.5 rounded-full bg-neutral-300"
                        aria-hidden="true"
                      />
                      {repo.language || "Dart"}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Star className="h-3.5 w-3.5" aria-hidden="true" />
                      {repo.stargazers_count}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <GitFork className="h-3.5 w-3.5" aria-hidden="true" />
                      {repo.forks_count}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <RefreshCw className="h-3 w-3" aria-hidden="true" />
                      Updated {formatDate(repo.updated_at)}
                    </span>
                  </div>

                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0"
                    aria-label={`View ${repo.name} on GitHub`}
                  />
                </motion.article>
              </Reveal>
            ))}
        </div>

        {!loading && shown.length === 0 && (
          <p className="mt-10 text-center text-neutral-500">
            Repositories are temporarily unavailable. Please check my GitHub
            profile directly.
          </p>
        )}
      </div>
    </section>
  );
}
