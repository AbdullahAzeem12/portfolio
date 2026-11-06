export const GITHUB_URL = "https://github.com/AbdullahAzeem12";
export const LINKEDIN_URL =
  "https://www.linkedin.com/in/abdullah-azeem-307ab7418/";
export const EMAIL_ADDRESS = "abdullah.androiddeveloper@gmail.com";
export const PHONE_NUMBER = "+923217649976";
export const WHATSAPP_URL = "https://wa.me/923217649976";
export const LOCATION_STRING = "Lahore, Pakistan";

export const TYPING_ROLES = [
  "Mobile Application Developer",
  "Flutter & Dart Engineer",
  "Android Native (Java & XML)",
  "On-Device AI & ML Integrator",
  "Firebase & Cloud Architect",
  "React Native Developer",
];

export interface TechSkill {
  name: string;
  category: "Mobile Frontend" | "Cloud & Backend" | "AI & ML" | "Tools & Testing";
  icon:
    | "flutter"
    | "java"
    | "kotlin"
    | "sql"
    | "firebase"
    | "react-native"
    | "rest"
    | "tflite"
    | "git"
    | "android-studio"
    | "figma";
  tagline: string;
  detail: string;
  tags: string[];
  level: number;
  featured?: boolean;
}

export const SKILLS: TechSkill[] = [
  {
    name: "Flutter & Dart",
    category: "Mobile Frontend",
    icon: "flutter",
    tagline: "Primary Framework",
    detail:
      "End-to-end cross-platform app development with Dart, Material 3, custom glassmorphic shaders, Cupertino widgets, state management (Bloc/Provider/Riverpod), and Play Store releases.",
    tags: ["Flutter 3.x", "Dart", "Material 3", "State Management", "Animations"],
    level: 96,
    featured: true,
  },
  {
    name: "Java & XML",
    category: "Mobile Frontend",
    icon: "java",
    tagline: "Android Native Core",
    detail:
      "Deep native Android development with Java and XML layouts. OOP architecture, Activities/Fragments lifecycle, services, broadcast receivers, and background workers.",
    tags: ["Android SDK", "XML Layouts", "OOP", "Lifecycle", "Services"],
    level: 92,
    featured: true,
  },
  {
    name: "Kotlin & Coroutines",
    category: "Mobile Frontend",
    icon: "kotlin",
    tagline: "Modern Android",
    detail:
      "Modern native Android features with null safety, coroutines for asynchronous task handling, Jetpack components, and clean architectural patterns.",
    tags: ["Coroutines", "Jetpack", "Clean Architecture", "Null Safety"],
    level: 86,
  },
  {
    name: "TensorFlow Lite & ML Kit",
    category: "AI & ML",
    icon: "tflite",
    tagline: "On-Device Intelligence",
    detail:
      "Deploying high-speed, on-device machine learning models: real-time facial expression analysis, emotion classification, vision models, and camera streams.",
    tags: ["TFLite", "Google ML Kit", "Face Detection", "Emotion AI", "Edge ML"],
    level: 90,
    featured: true,
  },
  {
    name: "Firebase Suite",
    category: "Cloud & Backend",
    icon: "firebase",
    tagline: "Real-time Cloud Backend",
    detail:
      "Real-time Cloud Firestore synchronization, Firebase Authentication (OAuth, Phone, Email), Cloud Storage, Push Notifications via FCM, and Cloud Functions.",
    tags: ["Firestore", "Auth", "FCM Push", "Storage", "Rules & Security"],
    level: 94,
    featured: true,
  },
  {
    name: "RESTful APIs & Media Integration",
    category: "Cloud & Backend",
    icon: "rest",
    tagline: "Network & Connectivity",
    detail:
      "Architecting secure network layers, handling token refresh, parsing complex nested JSON, caching, and integrating third-party media APIs (Spotify, YouTube, iTunes, Darwin).",
    tags: ["Dio / HTTP", "JSON Serialization", "OAuth2", "Darwin API", "Spotify API"],
    level: 92,
  },
  {
    name: "SQL & SQLite",
    category: "Cloud & Backend",
    icon: "sql",
    tagline: "Local Data Layer",
    detail:
      "Offline-first mobile applications with SQLite and Room persistence, relational schema design, indexing, transactions, and migration management.",
    tags: ["SQLite", "Room DB", "Relational Modeling", "Offline Sync"],
    level: 88,
  },
  {
    name: "React Native",
    category: "Mobile Frontend",
    icon: "react-native",
    tagline: "Cross-Platform JS",
    detail:
      "React Native development for multi-platform delivery, bridging native modules, and writing fast, responsive mobile layouts with TypeScript.",
    tags: ["React Native", "TypeScript", "Native Bridges", "Hooks"],
    level: 84,
  },
  {
    name: "Android Studio & Tooling",
    category: "Tools & Testing",
    icon: "android-studio",
    tagline: "IDE & Profiling",
    detail:
      "Mastery of Android Studio, Gradle build pipelines, Logcat debugging, memory profiling, CPU trace analysis, and Android Emulators.",
    tags: ["Gradle", "Logcat", "Profiler", "APK Optimization", "NDK"],
    level: 92,
  },
  {
    name: "Git, GitHub & CI/CD",
    category: "Tools & Testing",
    icon: "git",
    tagline: "Version Control",
    detail:
      "Disciplined Git workflow, branch management, merge conflict resolution, pull request code reviews, and automated release packaging.",
    tags: ["Git", "GitHub Actions", "Release Builds", "Semantic Versioning"],
    level: 90,
  },
  {
    name: "Figma UI/UX & Prototyping",
    category: "Tools & Testing",
    icon: "figma",
    tagline: "Design to Code",
    detail:
      "Translating Figma design systems into pixel-perfect mobile code, creating design tokens, interactive micro-animations, and fluid responsive layouts.",
    tags: ["Design Systems", "Figma", "Auto-Layout", "Micro-Interactions"],
    level: 88,
  },
];

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: "Internship" | "Full-time" | "Contract";
  active?: boolean;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "mktecknotrons",
    role: "Mobile Application Development (Intern)",
    company: "Mktecknotrons",
    location: "PIA, Lahore, Pakistan",
    period: "16 Jul 2026 - Present",
    type: "Internship",
    active: true,
    summary:
      "Spearheading cross-platform Flutter development, building four production applications with real-time Firebase backends and high-velocity RESTful API integrations.",
    highlights: [
      "Built at least four complete Flutter applications from scratch using Dart, Firebase, and RESTful APIs.",
      "Implemented responsive UI, secure phone/social authentication, complex state management, and real-time backend synchronization.",
      "Debugged, tested, and systematically optimized Flutter codebases for high frame-rates and memory efficiency across varied Android devices.",
      "Architected clean multi-tier directory structure separating state, domain, and data layers.",
    ],
    technologies: ["Flutter", "Dart", "Firebase Firestore", "RESTful APIs", "State Management", "Git"],
  },
  {
    id: "innoviast",
    role: "Mobile Application (Intern)",
    company: "Innoviast",
    location: "Johar Town, Lahore, Pakistan",
    period: "May 2026",
    type: "Internship",
    active: false,
    summary:
      "Developed scalable mobile applications bridging Figma UI designs into native Java and React Native codebases with high-performance client delivery.",
    highlights: [
      "Developed scalable mobile applications using Figma design specs, Java, and React Native, delivering robust client solutions.",
      "Collaborated cross-functionally with senior engineers and UI designers to diagnose and optimize application performance.",
      "Developed and tested new mobile app features under senior guidance, resolving native device bugs and troubleshooting app stability.",
      "Integrated dynamic REST APIs to support live content feeds, media streaming, and user profile management.",
    ],
    technologies: ["Java", "Android SDK", "React Native", "Figma", "REST APIs", "Debugging"],
  },
];

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
}

export const EDUCATION: EducationItem = {
  degree: "Bachelor of Science in Computer Science (BS CS)",
  institution: "Superior University",
  location: "Lahore, Punjab, Pakistan",
  period: "Sep 2022 - May 2026",
  description:
    "Rigorous curriculum focused on Object-Oriented Programming, Data Structures & Algorithms, Mobile Computing, Machine Learning, Database Management Systems, and Software Architecture.",
  highlights: [
    "Specialized in Mobile Computing and On-Device Machine Learning (TFLite & ML Kit)",
    "Led mobile development teams in senior capstone and semester design projects",
    "Consistently delivered high-grade software engineering prototypes and research experiments",
  ],
};

export interface FeaturedProject {
  id: string;
  name: string;
  tagline: string;
  category: "Flutter" | "Android Native & AI" | "Fintech & E-Commerce";
  description: string;
  features: string[];
  technologies: string[];
  metrics?: { label: string; value: string };
  githubUrl: string;
  liveDemoUrl?: string;
  accent: string;
  badge?: string;
  image?: string;
}

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "moodmuse",
    name: "MoodMuse",
    tagline: "AI Emotion-Driven Music Recommendation App",
    category: "Android Native & AI",
    badge: "Flagship AI Project",
    description:
      "Groundbreaking Android application that detects user emotions in real-time using facial analysis machine learning (TensorFlow Lite & Google ML Kit) and dynamically curates customized music playlists.",
    features: [
      "Live camera stream emotion detection with on-device TensorFlow Lite model",
      "Dynamic song recommendation engine based on 7 classified emotional states",
      "Third-party media API integrations (Spotify / YouTube music APIs)",
      "Secure Firebase Firestore sync for saved mood playlists and history",
    ],
    technologies: ["Java", "XML", "Android Studio", "TensorFlow Lite", "ML Kit", "Firebase", "Spotify API"],
    metrics: { label: "Model Latency", value: "<45ms On-Device" },
    githubUrl: "https://github.com/AbdullahAzeem12/MoodMuse",
    accent: "from-rose-600 via-pink-600 to-rose-900",
  },
  {
    id: "swifttrack",
    name: "SwiftTrack",
    tagline: "Heathrow Express Railway Ticketing Clone",
    category: "Flutter",
    badge: "Real-Time Transit",
    description:
      "A production-grade Flutter railway ticketing clone of the official Heathrow Express application. Integrates real-time UK rail transit REST APIs for live train departures, platform allocations, and digital ticketing.",
    features: [
      "Real-time UK rail REST API feeds (National Rail Darwin & Transport API)",
      "Live platform indicators, journey duration calculators, and service alerts",
      "Dynamic booking workflows with simulated barcode boarding passes",
      "Firebase Authentication and Firestore real-time ticket wallet sync",
    ],
    technologies: ["Flutter", "Dart", "Firebase Auth", "Firestore", "Darwin API", "Transport API", "REST"],
    metrics: { label: "Live API Feeds", value: "Real-time Timetables" },
    githubUrl: "https://github.com/AbdullahAzeem12/SwiftTrack",
    accent: "from-red-600 via-rose-700 to-amber-600",
  },
  {
    id: "paidix",
    name: "PaidiX",
    tagline: "Cross-Border Invoice & Instant Payout Platform",
    category: "Fintech & E-Commerce",
    badge: "Fintech Innovation",
    description:
      "High-velocity cross-border payment platform purpose-built for Pakistani freelancers and businesses. Bridges US revenue streams (Cash App, Zelle) to Pakistani bank accounts (1-LINK) with real-time FX calculation and biometric KYC.",
    features: [
      "Real-time USD to PKR foreign exchange engine with automated 12% flat fee calculation",
      "Biometric biometric face/fingerprint authentication with local KYC compliance",
      "1-LINK bank payout gateway integration simulator",
      "Interactive ledger, automated invoice generation, and audit logging",
    ],
    technologies: ["Flutter", "Dart", "1-LINK Gateway", "Real-Time FX", "Biometric Auth", "Firebase"],
    metrics: { label: "Conversion Speed", value: "Instant 1-LINK Payout" },
    githubUrl: "https://github.com/AbdullahAzeem12/PaidiX",
    accent: "from-rose-700 via-red-800 to-neutral-900",
  },
  {
    id: "groclyra",
    name: "Groclyra",
    tagline: "4-Portal E-Commerce Super-App for Pakistan",
    category: "Fintech & E-Commerce",
    badge: "Super-App Ecosystem",
    description:
      "Full-stack Flutter e-commerce super-app uniting local vendors, supermarkets, restaurants, and customers. Engineered with a unified codebase powering 4 distinct role-based portals.",
    features: [
      "4-portal architecture: Customer App, Merchant Dashboard, Admin Console, Rider Dispatch",
      "Live order dispatching with real-time Firestore synchronization",
      "Intelligent instant grocery search with category filtering",
      "Luminous dark glassmorphism interface styled for high visual engagement",
    ],
    technologies: ["Flutter", "Dart", "Cloud Firestore", "Role-Based Auth", "FCM Push", "Google Maps"],
    metrics: { label: "Role Architecture", value: "4 Dedicated Portals" },
    githubUrl: "https://github.com/AbdullahAzeem12/Groclyra",
    accent: "from-rose-600 via-red-700 to-rose-950",
  },
  {
    id: "glassynote",
    name: "glassynote",
    tagline: "The Living Notes Vault with 3D Liquid Glassmorphism",
    category: "Flutter",
    badge: "Award-Winning UI",
    description:
      "A production-oriented real-time notes and knowledge vault application featuring custom 3D liquid glassmorphism surfaces, markdown support, tag organization, and instantaneous cloud synchronization.",
    features: [
      "Custom 3D liquid glassmorphic UI shaders and blur physics",
      "Full markdown editing with syntax highlighting and quick preview",
      "Real-time Firestore backup and offline-first SQLite cache",
      "Biometric note locking for sensitive data encryption",
    ],
    technologies: ["Flutter", "Dart", "Liquid Glassmorphism", "SQLite", "Firebase", "Markdown"],
    metrics: { label: "UI Experience", value: "60 FPS Fluid Shaders" },
    githubUrl: "https://github.com/AbdullahAzeem12/glassynote",
    accent: "from-rose-800 via-pink-900 to-neutral-950",
  },
  {
    id: "cookmate",
    name: "CookMate",
    tagline: "Luxury Editorial Digital Cookbook",
    category: "Flutter",
    description:
      "Personal kitchen companion styled as a luxury editorial food publication with step-by-step interactive cooking timers, nutritional breakdowns, and offline bookmarking.",
    features: [
      "Editorial culinary typography and high-resolution media galleries",
      "Interactive multi-stage cooking timers with vibration alerts",
      "Smart pantry ingredient calculator and grocery checklist",
      "Offline local persistence with instant search",
    ],
    technologies: ["Flutter", "Dart", "SQLite", "Animation Controller", "Material 3"],
    metrics: { label: "Storage", value: "100% Offline Capable" },
    githubUrl: "https://github.com/AbdullahAzeem12/CookMate",
    accent: "from-red-700 via-rose-800 to-stone-900",
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
    name: "MoodMuse",
    description:
      "Android application that recommends music based on the user's emotional state using on-device facial recognition and TensorFlow Lite machine learning.",
    language: "Java",
    html_url: "https://github.com/AbdullahAzeem12/MoodMuse",
    stargazers_count: 2,
    forks_count: 0,
    updated_at: "2026-10-25T12:34:05Z",
    pinned: true,
  },
  {
    name: "SwiftTrack",
    description:
      "Production-grade Flutter railway ticketing clone of Heathrow Express with real-time Darwin REST API integrations, timetables, and mobile ticket wallet.",
    language: "Dart",
    html_url: "https://github.com/AbdullahAzeem12/SwiftTrack",
    stargazers_count: 2,
    forks_count: 0,
    updated_at: "2026-11-05T14:20:00Z",
    pinned: true,
  },
  {
    name: "PaidiX",
    description:
      "High-velocity cross-border invoice & payout platform bridging USD revenues (Cash App, Zelle) to Pakistani bank accounts (1-LINK) with flat 12% fees and biometric KYC.",
    language: "Dart",
    html_url: "https://github.com/AbdullahAzeem12/PaidiX",
    stargazers_count: 3,
    forks_count: 1,
    updated_at: "2026-11-01T00:00:00Z",
    pinned: true,
  },
  {
    name: "Groclyra",
    description:
      "Full-stack Flutter e-commerce super-app with 4-portal role architecture (Customer, Seller, Admin, Rider), real-time Firestore sync and glassmorphic UI.",
    language: "Dart",
    html_url: "https://github.com/AbdullahAzeem12/Groclyra",
    stargazers_count: 2,
    forks_count: 0,
    updated_at: "2026-11-04T08:05:05Z",
    pinned: true,
  },
  {
    name: "glassynote",
    description:
      "The Living Notes Vault. A production-oriented real-time notes application with 3D liquid glassmorphism, markdown syntax, and cloud sync.",
    language: "Dart",
    html_url: "https://github.com/AbdullahAzeem12/glassynote",
    stargazers_count: 1,
    forks_count: 0,
    updated_at: "2026-10-25T13:03:46Z",
  },
  {
    name: "CookMate",
    description:
      "Luxury editorial digital cookbook inspired by modern food publications with interactive kitchen timers and offline persistence.",
    language: "Dart",
    html_url: "https://github.com/AbdullahAzeem12/CookMate",
    stargazers_count: 1,
    forks_count: 0,
    updated_at: "2026-11-02T11:26:15Z",
  },
  {
    name: "Lumawave-music-app",
    description:
      "Premium music discovery and playback application with luminous dark surfaces, rounded glass-like cards, and expressive artwork.",
    language: "Dart",
    html_url: "https://github.com/AbdullahAzeem12/Lumawave-music-app",
    stargazers_count: 1,
    forks_count: 0,
    updated_at: "2026-10-13T12:51:01Z",
  },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const MARQUEE_ITEMS = [
  "Flutter 3.x",
  "Dart",
  "Java",
  "Kotlin",
  "TensorFlow Lite",
  "Google ML Kit",
  "Firebase Firestore",
  "REST APIs",
  "Android Studio",
  "React Native",
  "SQLite & SQL",
  "Git & GitHub",
  "Figma",
  "JUnit & Espresso",
];
