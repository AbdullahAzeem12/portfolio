import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const STATS_FILE = path.join(process.cwd(), ".data", "cv-stats.json");

export async function GET() {
  try {
    let count = 42;
    let lastDownloaded = new Date().toISOString();

    try {
      const data = await fs.readFile(STATS_FILE, "utf8");
      const parsed = JSON.parse(data);
      if (typeof parsed.count === "number") {
        count = parsed.count;
      }
      if (parsed.lastDownloaded) {
        lastDownloaded = parsed.lastDownloaded;
      }
    } catch {
      // Return defaults if not initialized
    }

    return NextResponse.json({
      success: true,
      totalDownloads: count,
      lastDownloaded,
      fileName: "Abdullah_Azeem_CV.pdf",
      fileSize: "118 KB",
      updatedAt: "May 2026",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, totalDownloads: 42, error: "Stats unavailable" },
      { status: 200 }
    );
  }
}

