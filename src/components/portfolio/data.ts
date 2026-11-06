export const GITHUB_URL = "https://github.com/AbdullahAzeem12";
export const LINKEDIN_URL =
  "https://www.linkedin.com/in/abdullah-azeem-307ab7418/";

export const TYPING_ROLES = [
  "Mobile Application Developer",
  "Flutter Developer",
  "Android Developer",
  "React Native Developer",
];

export interface TechSkill {
  name: string;
  icon: "flutter" | "java" | "kotlin" | "sql" | "firebase" | "react-native" | "rest";
  tagline: string;
  detail: string;
  tags: string[];
  level: number;
  span: string;
}

export const SKILLS: TechSkill[] = [
  {
    name: "Flutter",
    icon: "flutter",
    tagline: "Primary framework",
    detail:
      "End-to-end cross-platform app development with Dart, from pixel-perfect UI to Play Store releases.",
    tags: ["Dart", "Material 3", "Cupertino", "Widgets", "State Management"],
    level: 95,
    span: "md:col-span-2 md:row-span-2",
  },
  {
    name: "Java",
    icon: "java",
    tagline: "Native Android",
    detail: "Native Android development, OOP architecture and backend logic.",
    tags: ["Android SDK", "OOP"],
    level: 88,
    span: "md:col-span-1",
  },
  {
    name: "Kotlin",
    icon: "kotlin",
    tagline: "Modern Android",
    detail: "Concise, null-safe Android code with coroutines and Jetpack libraries.",
    tags: ["Coroutines", "Jetpack"],
    level: 85,
    span: "md:col-span-1",
  },
  {
    name: "SQL",
    icon: "sql",
    tagline: "Data layer",
    detail: "Relational modeling, queries and local persistence with SQLite.",
    tags: ["SQLite", "Schema Design"],
    level: 86,
    span: "md:col-span-1",
  },
  {
    name: "Firebase",
    icon: "firebase",
    tagline: "Cloud backend",
    detail: "Realtime Firestore sync, Auth, Cloud Messaging and analytics.",
    tags: ["Firestore", "Auth", "FCM"],
    level: 90,
    span: "md:col-span-1",
  },
  {
    name: "React Native",
    icon: "react-native",
    tagline: "Cross-platform JS",
    detail: "JavaScript-driven mobile apps sharing logic across iOS and Android.",
    tags: ["React", "JSX", "Hooks"],
    level: 82,
    span: "md:col-span-2",
  },
  {
    name: "REST APIs",
    icon: "rest",
    tagline: "Connectivity",
    detail: "Consuming and integrating secure RESTful services with clean error handling.",
    tags: ["HTTP", "JSON", "Auth Tokens"],
    level: 90,
    span: "md:col-span-2",
  },
];

export interface Repo {
  name: string;
  description: string;
  language: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  pinned?: boolean;
}

export const FALLBACK_REPOS: Repo[] = [
  {
    name: "PaidiX",
    description:
      "High-velocity cross-border invoice and payout platform bridging USD revenues (Cash App, Zelle) to Pakistani bank accounts (1-LINK) with flat 12 percent fees, real-time FX (1 USD = 273 PKR) and biometric KYC.",
    language: "Dart",
    html_url: "https://github.com/AbdullahAzeem12/PaidiX",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-11-01T00:00:00Z",
    pinned: true,
  },
  {
    name: "Groclyra",
    description:
      "Full-stack Flutter e-commerce super-app purpose-built for the Pakistani market. It bridges local vendors, supermarkets, restaurants and customers under a single platform featuring real-time Firestore synchronization, intelligent search, glassmorphic UI and a 4-portal role system (Customer, Seller, Admin, Rider).",
    language: "Dart",
    html_url: "https://github.com/AbdullahAzeem12/Groclyra",
    stargazers_count: 1,
    forks_count: 0,
    updated_at: "2026-11-04T08:05:05Z",
  },
  {
    name: "CookMate",
    description:
      "Your personal kitchen companion. CookMate is styled as a luxury editorial digital cookbook inspired by modern food publications and high-end culinary apps.",
    language: "Dart",
    html_url: "https://github.com/AbdullahAzeem12/CookMate",
    stargazers_count: 1,
    forks_count: 0,
    updated_at: "2026-11-02T11:26:15Z",
  },
  {
    name: "glassynote",
    description:
      "The Living Notes Vault. A production-oriented real-time notes application with 3D liquid glassmorphism and cloud sync.",
    language: "Dart",
    html_url: "https://github.com/AbdullahAzeem12/glassynote",
    stargazers_count: 1,
    forks_count: 0,
    updated_at: "2026-10-25T13:03:46Z",
  },
  {
    name: "MoodMuse",
    description:
      "Android application that recommends music based on the user's current emotional state. Using facial recognition and machine learning (TensorFlow Lite), the app scans the user's mood and dynamically curates a personalized listening experience.",
    language: "Dart",
    html_url: "https://github.com/AbdullahAzeem12/MoodMuse",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-10-25T12:34:05Z",
  },
  {
    name: "Lumawave-music-app",
    description:
      "Premium music discovery and playback application built around a glossy, 3D-inspired visual identity. It combines a luminous splash screen, dark immersive surfaces, rounded glass-like cards, expressive album artwork and smooth interactions.",
    language: "Dart",
    html_url: "https://github.com/AbdullahAzeem12/Lumawave-music-app",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-10-13T12:51:01Z",
  },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const MARQUEE_ITEMS = [
  "Flutter",
  "Dart",
  "Java",
  "Kotlin",
  "SQL",
  "Firebase",
  "React Native",
  "REST APIs",
  "TensorFlow Lite",
  "Firestore",
  "Material Design",
  "Git & GitHub",
];
