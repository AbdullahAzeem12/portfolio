import { NextResponse } from "next/server";

export async function GET() {
  const now = new Date();

  // Time in Asia/Karachi (Lahore, Pakistan)
  const lahoreTime = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Karachi",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).format(now);

  const lahoreDate = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Karachi",
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(now);

  // Derive day/night status in Lahore
  const hourPart = parseInt(
    new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Karachi",
      hour: "numeric",
      hour12: false,
    }).format(now),
    10
  );

  const isWorkingHours = hourPart >= 9 && hourPart <= 23;

  return NextResponse.json(
    {
      success: true,
      developer: "Abdullah Azeem",
      role: "Mobile Application Developer",
      location: {
        city: "Lahore",
        country: "Pakistan",
        timezone: "Asia/Karachi (PKT, UTC+5)",
      },
      time: {
        currentTime: lahoreTime,
        currentDate: lahoreDate,
        iso: now.toISOString(),
      },
      status: {
        availability: "Available for Mobile App Roles & Freelance",
        isAvailable: true,
        currentActivity: isWorkingHours
          ? "Coding production Flutter & Android applications"
          : "Deep focus & async review (Available via Email/LinkedIn)",
        responseTime: "< 24 hours",
      },
      technologiesInFocus: [
        "Flutter 3.x & Dart",
        "Android Native (Java & XML)",
        "Firebase Firestore & Cloud Auth",
        "TensorFlow Lite & ML Kit",
        "React Native",
        "REST APIs",
      ],
    },
    {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    }
  );
}

