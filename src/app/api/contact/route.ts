import { NextRequest, NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+]?[\d\s()-]{7,20}$/;

// In-memory rate limiting map (IP -> timestamps)
const rateLimits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute
  const maxRequests = 4;

  const timestamps = (rateLimits.get(ip) || []).filter(
    (t) => now - t < windowMs
  );
  if (timestamps.length >= maxRequests) {
    return true;
  }
  timestamps.push(now);
  rateLimits.set(ip, timestamps);
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many messages sent. Please wait a minute before trying again.",
        },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, phone, message, honeypot } = body;

    // Spam check
    if (honeypot) {
      return NextResponse.json({
        success: true,
        message: "Message processed successfully.",
      });
    }

    // Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid full name." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || !PHONE_RE.test(phone.trim())) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid phone number." },
        { status: 400 }
      );
    }

    const cleanMessage =
      typeof message === "string" && message.trim().length > 0
        ? message.trim()
        : "Recruiter / Client inquiry from Portfolio";

    const accessKey =
      process.env.WEB3FORMS_ACCESS_KEY ||
      "59443a45-e464-4a49-a37f-f65d69d706f0";

    // Forward to Web3Forms
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        message: cleanMessage,
        subject: `[Portfolio Inquiry] from ${name.trim()} - Mobile App Dev`,
        from_name: "Abdullah Azeem Portfolio",
      }),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || "Failed to deliver message");
    }

    return NextResponse.json({
      success: true,
      message:
        "Thank you! Your message has been sent directly to Abdullah Azeem.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred while sending your message.",
      },
      { status: 500 }
    );
  }
}

