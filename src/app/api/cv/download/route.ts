import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// Simple file-backed download tracking
const STATS_FILE = path.join(process.cwd(), ".data", "cv-stats.json");

async function recordDownload(): Promise<number> {
  try {
    const dir = path.dirname(STATS_FILE);
    await fs.mkdir(dir, { recursive: true });

    let count = 42; // baseline initial download count
    try {
      const data = await fs.readFile(STATS_FILE, "utf8");
      const parsed = JSON.parse(data);
      if (typeof parsed.count === "number") {
        count = parsed.count;
      }
    } catch {
      // file didn't exist yet
    }

    count += 1;
    await fs.writeFile(
      STATS_FILE,
      JSON.stringify(
        { count, lastDownloaded: new Date().toISOString() },
        null,
        2
      )
    );
    return count;
  } catch (err) {
    console.error("Failed to record CV download stat:", err);
    return 43;
  }
}

export async function HEAD(req: NextRequest) {
  return GET(req);
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const isInline = searchParams.get("view") === "inline" || searchParams.get("inline") === "true";

    // Path to the CV in public
    const filePath = path.join(process.cwd(), "public", "Abdullah_Azeem_CV.pdf");

    // Read the PDF binary
    const fileBuffer = await fs.readFile(filePath);

    // Record download stat asynchronously (only when downloading or viewed)
    const currentDownloads = await recordDownload();

    const disposition = isInline
      ? 'inline; filename="Abdullah_Azeem_Mobile_Developer_CV.pdf"'
      : 'attachment; filename="Abdullah_Azeem_Mobile_Developer_CV.pdf"';

    const headers = new Headers();
    headers.set("Content-Type", "application/pdf");
    headers.set("Content-Disposition", disposition);
    headers.set("Content-Length", fileBuffer.length.toString());
    headers.set("Cache-Control", "public, max-age=3600, s-maxage=3600");
    headers.set("X-Total-Downloads", currentDownloads.toString());

    return new NextResponse(fileBuffer, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error("Error serving CV PDF:", error);
    return NextResponse.json(
      { error: "CV document temporarily unavailable" },
      { status: 500 }
    );
  }
}
