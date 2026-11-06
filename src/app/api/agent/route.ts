import { NextRequest, NextResponse } from "next/server";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const ABDULLAH_KNOWLEDGE = {
  name: "Abdullah Azeem",
  title: "Mobile Application Developer",
  email: "abdullah.androiddeveloper@gmail.com",
  phone: "+92 321 7649976",
  location: "Lahore, Pakistan",
  education: "BS in Computer Science, Superior University, Lahore (Sep 2022 - May 2026)",
  experience: [
    {
      company: "Mktecknotrons",
      role: "Mobile Application Development (Intern)",
      period: "16 Jul 2026 - Present",
      location: "PIA, Lahore",
      details: "Built 4+ complete Flutter apps using Dart, Firebase Firestore, and RESTful APIs with clean state management and responsive UI.",
    },
    {
      company: "Innoviast",
      role: "Mobile Application (Intern)",
      period: "May 2026",
      location: "Johar Town, Lahore",
      details: "Developed scalable mobile apps using Java, React Native, and Figma designs with senior mentoring and API integrations.",
    },
  ],
  flagshipProjects: [
    {
      name: "MoodMuse",
      tagline: "AI Emotion-Driven Music Recommendation App",
      stack: "Java, XML, Android Studio, TensorFlow Lite, Google ML Kit, Firebase, Spotify API",
      description: "Uses on-device computer vision and TensorFlow Lite ML to scan facial emotions in real-time (<45ms) and automatically curate personalized music playlists.",
    },
    {
      name: "SwiftTrack",
      tagline: "Heathrow Express UK Railway Ticketing Clone",
      stack: "Flutter, Dart, Firebase Auth, Firestore, UK National Rail Darwin REST API, Transport API",
      description: "Real-time railway booking app with live UK train timetable feeds, platform indicators, journey planning, and dynamic digital ticket wallet.",
    },
    {
      name: "PaidiX",
      tagline: "Cross-Border Invoice & Instant Payout Platform",
      stack: "Flutter, Dart, 1-LINK Payout Gateway, Real-Time FX, Biometric KYC",
      description: "Bridges USD revenues (Cash App, Zelle) to Pakistani bank accounts via 1-LINK with flat 12% fee calculation and biometric verification.",
    },
    {
      name: "Groclyra",
      tagline: "4-Portal E-Commerce Super-App for Pakistan",
      stack: "Flutter, Dart, Cloud Firestore, Role-Based Auth",
      description: "Unifies 4 distinct role systems: Customer App, Merchant Dashboard, Admin Console, and Rider Dispatch with real-time order tracking.",
    },
    {
      name: "glassynote",
      tagline: "3D Liquid Glassmorphic Notes Vault",
      stack: "Flutter, Dart, Liquid Shaders, SQLite, Firebase",
      description: "High-performance encrypted notes vault with 3D liquid glassmorphism, markdown syntax, and cloud sync.",
    },
  ],
  skills: {
    mobileFrontend: ["Flutter (Dart)", "Java & XML", "Kotlin", "React Native", "Material 3", "State Management (Bloc/Provider/Riverpod)"],
    cloudBackend: ["Firebase (Firestore, Realtime DB, Auth, FCM Push, Storage)", "SQLite", "Room DB", "RESTful APIs", "JSON Serialization"],
    aiMl: ["TensorFlow Lite", "Google ML Kit", "Face & Emotion Recognition", "On-Device Neural Inference"],
    tools: ["Android Studio", "Gradle", "Logcat", "Git & GitHub", "Figma", "JUnit & Espresso Testing"],
  },
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message, history } = body;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    const query = message.toLowerCase().trim();

    // Contextual intelligent responses tailored to Abdullah Azeem
    let reply = "";
    let action: "download_cv" | "contact_whatsapp" | "view_projects" | null = null;
    let suggestedQuestions: string[] = [];

    if (query.includes("cv") || query.includes("resume") || query.includes("download")) {
      reply = `You can download Abdullah's official resume directly in PDF! It contains his verified experience at Mktecknotrons and Innoviast, education at Superior University (BS CS), and complete technical skillset.`;
      action = "download_cv";
      suggestedQuestions = [
        "What projects has Abdullah built?",
        "What are his Flutter and Android skills?",
        "How can I contact him directly?",
      ];
    } else if (
      query.includes("moodmuse") ||
      query.includes("ai") ||
      query.includes("machine learning") ||
      query.includes("tensorflow") ||
      query.includes("tflite") ||
      query.includes("ml")
    ) {
      reply = `MoodMuse is Abdullah's flagship AI project! It's a native Android application built with Java, XML, and Android Studio that integrates on-device machine learning models (TensorFlow Lite & Google ML Kit). It scans the user's face in real-time (<45ms latency), classifies emotional states (Joy, Focus, Energy, Calm), and dynamically streams custom playlists via Spotify API integrations.`;
      action = "view_projects";
      suggestedQuestions = [
        "Tell me about SwiftTrack (Heathrow Express clone)",
        "What is PaidiX cross-border payout?",
        "Can I download Abdullah's CV?",
      ];
    } else if (
      query.includes("swifttrack") ||
      query.includes("train") ||
      query.includes("railway") ||
      query.includes("heathrow")
    ) {
      reply = `SwiftTrack is a production-grade Flutter railway ticketing clone of the UK's Heathrow Express. It integrates live UK rail transit REST APIs (National Rail Darwin & Transport API) for live train departures, platform allocations, journey duration calculations, and dynamic barcode digital ticket passes stored in Firebase Firestore.`;
      action = "view_projects";
      suggestedQuestions = [
        "Tell me about Groclyra 4-portal super-app",
        "What are Abdullah's primary skills?",
        "Download CV in PDF",
      ];
    } else if (query.includes("paidix") || query.includes("fintech") || query.includes("payout") || query.includes("1-link")) {
      reply = `PaidiX is a high-velocity cross-border payment app built with Flutter and Dart, specifically designed for Pakistani freelancers and businesses. It bridges USD revenue (Cash App, Zelle) to Pakistani bank accounts (1-LINK) with flat 12% fees, real-time FX calculation (1 USD = 278 PKR), and biometric KYC authentication.`;
      action = "view_projects";
      suggestedQuestions = [
        "What Flutter apps has Abdullah built?",
        "Where has Abdullah worked?",
        "How can I hire him?",
      ];
    } else if (
      query.includes("experience") ||
      query.includes("work") ||
      query.includes("mktecknotrons") ||
      query.includes("innoviast") ||
      query.includes("internship")
    ) {
      reply = `Abdullah has strong production experience:\n\n1. Mobile App Development Intern at Mktecknotrons (PIA, Lahore, Jul 2026 - Present): Built 4+ complete Flutter apps with Dart, Firebase, and RESTful APIs.\n2. Mobile App Intern at Innoviast (Johar Town, Lahore, May 2026): Developed scalable mobile apps using Java, React Native, and Figma.\n3. BS Computer Science at Superior University (2022 - 2026).`;
      suggestedQuestions = [
        "Download his CV in PDF",
        "What are his technical skills?",
        "Schedule an interview or chat",
      ];
    } else if (
      query.includes("skill") ||
      query.includes("tech") ||
      query.includes("stack") ||
      query.includes("flutter") ||
      query.includes("android") ||
      query.includes("java") ||
      query.includes("kotlin")
    ) {
      reply = `Abdullah's primary tech stack includes:\n• Mobile: Flutter (Dart), Java & XML, Kotlin, React Native\n• Cloud & Backend: Firebase Firestore, Auth, Storage, FCM, SQLite, Room DB, REST APIs\n• AI & ML: TensorFlow Lite, Google ML Kit, On-device Computer Vision\n• Tools: Android Studio, Gradle, Git, GitHub Actions, Figma, JUnit & Espresso.`;
      suggestedQuestions = [
        "Tell me about MoodMuse AI music app",
        "Can he build cross-platform iOS & Android apps?",
        "Download CV (PDF)",
      ];
    } else if (
      query.includes("hire") ||
      query.includes("contact") ||
      query.includes("whatsapp") ||
      query.includes("email") ||
      query.includes("phone") ||
      query.includes("available")
    ) {
      reply = `Abdullah is open for Mobile Application Developer roles (Full-time & Freelance). You can reach him instantly:\n• WhatsApp / Phone: +92 321 7649976\n• Email: abdullah.androiddeveloper@gmail.com\n• Location: Lahore, Pakistan (available worldwide remotely)\n• Typical response time is under 24 hours!`;
      action = "contact_whatsapp";
      suggestedQuestions = [
        "Download his official CV",
        "What Flutter apps has he completed?",
        "Tell me about his university degree",
      ];
    } else {
      reply = `Hello! I am AzeemAI, Abdullah Azeem's interactive portfolio assistant. Abdullah is an innovative Mobile Application Developer specializing in Flutter (Dart), Android Native (Java/XML), and on-device AI with TensorFlow Lite. How can I help you today?`;
      suggestedQuestions = [
        "What Flutter & Android apps has he built?",
        "What was his experience at Mktecknotrons?",
        "Can I download his CV in PDF?",
        "How can I contact him directly?",
      ];
    }

    return NextResponse.json({
      success: true,
      reply,
      action,
      suggestedQuestions,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Agent API error:", error);
    return NextResponse.json(
      {
        success: false,
        reply:
          "I'm currently unable to process your request. You can reach Abdullah directly at abdullah.androiddeveloper@gmail.com or on WhatsApp at +923217649976.",
      },
      { status: 500 }
    );
  }
}

