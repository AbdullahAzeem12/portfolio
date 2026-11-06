import { NextResponse } from "next/server";
import { FALLBACK_REPOS, type Repo } from "@/components/portfolio/data";

interface CacheState {
  data: Repo[] | null;
  timestamp: number;
}

const cache: CacheState = {
  data: null,
  timestamp: 0,
};

const CACHE_TTL_MS = 15 * 60 * 1000; // 15 minutes

export async function GET() {
  const now = Date.now();

  if (cache.data && now - cache.timestamp < CACHE_TTL_MS) {
    return NextResponse.json({
      success: true,
      source: "cache",
      repos: cache.data,
    });
  }

  try {
    const res = await fetch(
      "https://api.github.com/users/AbdullahAzeem12/repos?per_page=100&sort=updated",
      {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "AbdullahAzeemPortfolio/2.0",
        },
        next: { revalidate: 900 },
      }
    );

    if (!res.ok) {
      throw new Error(`GitHub API error ${res.status}`);
    }

    const fetched: Repo[] = await res.json();
    const owned = fetched.filter((r: any) => !r.fork && !r.archived);

    // Ensure our high-profile flagship projects have rich descriptions
    const PINNED = ["MoodMuse", "SwiftTrack", "PaidiX", "Groclyra"];

    const enriched = (owned.length > 0 ? owned : FALLBACK_REPOS).map((repo) => {
      const fallbackMatch = FALLBACK_REPOS.find((f) => f.name.toLowerCase() === repo.name.toLowerCase());
      return {
        ...repo,
        description: repo.description || fallbackMatch?.description || "High-performance mobile application project.",
        language: repo.language || fallbackMatch?.language || "Dart",
        pinned: PINNED.includes(repo.name) || Boolean(fallbackMatch?.pinned),
      };
    });

    const sorted = [
      ...enriched.filter((r) => r.pinned),
      ...enriched.filter((r) => !r.pinned),
    ];

    cache.data = sorted;
    cache.timestamp = now;

    return NextResponse.json({
      success: true,
      source: "github-api",
      repos: sorted,
    });
  } catch (err) {
    console.warn("GitHub fetch failed, serving enhanced fallback:", err);
    return NextResponse.json({
      success: true,
      source: "fallback",
      repos: FALLBACK_REPOS,
    });
  }
}

