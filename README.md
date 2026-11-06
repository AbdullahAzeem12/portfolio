# Abdullah Azeem — Mobile Application Developer Portfolio

An ultra-modern, interactive, and high-performance portfolio website for **Abdullah Azeem**, Mobile Application Developer (Flutter & Android Native). Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Framer Motion, and HTML5 Canvas, styled in an aesthetic **Dark Obsidian & Shiny Maroon Glassmorphism** theme with ambient breathers, real-time particle animators, interactive mobile simulations, translations, and robust backend APIs.

---

## 🌟 Highlights & Features

- **Obsidian & Dark Shiny Maroon Glassmorphism**:
  - Deep velvet obsidian background (`#070305`) accented with rich wine maroon (`#800020`, `#420712`) and glowing ruby crimson highlights (`#e11d48`, `#f43f5e`, `#fda4af`).
  - Specular laser-sheen card borders, frosted glass surfaces (`backdrop-blur-2xl`), and shiny maroon hover gloss effects (`.btn-shine-maroon`).
  - Ambient breathing light orbs (`animate-breather-1`, `animate-breather-2`, `animate-breather-3`) pulsing softly in the background.

- **Real-Time Particle Canvas Animator (`ParticleCanvas.tsx`)**:
  - Silky-smooth 60 FPS HTML5 canvas generating floating maroon embers and constellation laser threads that dynamically interact with mouse proximity.

- **Interactive Mobile Device Simulator in Hero (`Hero.tsx`)**:
  - Features Abdullah's portrait in a titanium glass phone frame with live status indicator.
  - Interactive 3-way app screen switcher:
    - **MoodMuse**: On-device TensorFlow Lite facial emotion recognition & Spotify playlist generator.
    - **SwiftTrack**: Live UK Heathrow Express train tracker with real-time Darwin transit feeds.
    - **PaidiX**: Instant USD-to-PKR FX conversion engine with flat 12% fees and 1-LINK bank payout.

- **Curriculum Vitae (CV) in PDF with Full Backend Logic**:
  - Official PDF document located at `public/Abdullah_Azeem_CV.pdf`.
  - **Backend Route `/api/cv/download`**: Streams the PDF with download and inline disposition headers and tracks total downloads.
  - **Backend Route `/api/cv/stats`**: Returns real-time download counts and last-downloaded timestamps.
  - **Interactive CV Modal (`CvModal.tsx`)**: Full in-portfolio resume viewer with education, work history, skills breakdown, and 1-click download.

- **Live Backend APIs**:
  - **`/api/presence`**: Returns Abdullah's real-time developer presence, computing local time in Lahore, Pakistan (PKT, UTC+5), current working status, and under-24-hour response SLA.
  - **`/api/github`**: Server-side cached GitHub repository proxy (15-min TTL) protecting against API rate limits with instant fallback.
  - **`/api/contact`**: Server-side validation, anti-spam honeypot, rate limiting, and Web3Forms forwarding.

- **Translations & Multilingual Support (`i18n.tsx`)**:
  - Instant one-click language translation in the navigation bar supporting **English (EN)**, **Urdu (اردو)**, and **German (DE)**.

- **Work Experience & Education Timeline (`Experience.tsx`)**:
  - **Mktecknotrons (PIA, Lahore)**: Mobile Application Development (Intern) — Built 4+ complete Flutter apps with Dart, Firebase, and RESTful APIs.
  - **Innoviast (Johar Town, Lahore)**: Mobile Application (Intern) — Scalable mobile apps with Java, React Native, and Figma.
  - **Superior University (Lahore)**: BS in Computer Science (Sep 2022 - May 2026).
  - Interactive tabs and expandable contribution impact lists.

- **Categorized Technical Arsenal (`Skills.tsx`)**:
  - Filterable tabs: Mobile Frontend, AI & ML, Cloud & Backend, Tools & Testing.
  - Animated proficiency progress meters with glowing maroon gradients.

- **Featured Mobile Applications (`Projects.tsx`)**:
  - Showcases **MoodMuse**, **SwiftTrack**, **PaidiX**, **Groclyra**, **glassynote**, and **CookMate**.
  - Live GitHub repository stream with manual sync trigger.

- **Validated Contact System (`Contact.tsx`)**:
  - Integrated with `/api/contact` with rate limiting, honeypot verification, Sonner toast alerts, and 1-click WhatsApp/Email/Phone links.

---

## 🛠️ Tech Stack

| Layer | Technology |
| --- | --- |
| **Framework** | Next.js 16.4 (App Router) + React 19 |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 4 + tw-animate-css |
| **Animations** | Framer Motion + HTML5 Canvas (Particle Animator) |
| **Icons** | Lucide React + Custom SVG Tech & Brand Icons |
| **Backend APIs** | Next.js Route Handlers (`/api/cv/*`, `/api/presence`, `/api/github`, `/api/contact`) |
| **Form Delivery** | Web3Forms API with Server Validation & Rate Limiter |
| **Feedback** | Sonner Toasts |
| **Fonts** | Inter, Space Grotesk, JetBrains Mono |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm (or bun / pnpm)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AbdullahAzeem12/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables (optional):
   ```bash
   cp .env.example .env
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm run start
```

---

## 📂 Project Architecture

```
src/
├── app/
│   ├── api/
│   │   ├── contact/route.ts        # Server-side contact form handler & rate limiting
│   │   ├── cv/
│   │   │   ├── download/route.ts   # Stream CV PDF with download tracking
│   │   │   └── stats/route.ts      # Live CV download statistics
│   │   ├── github/route.ts         # Cached GitHub API proxy (15m TTL)
│   │   └── presence/route.ts       # Real-time Lahore PKT presence status
│   ├── globals.css                 # Dark shiny maroon glassmorphic theme & breathers
│   ├── layout.tsx                  # Root layout, fonts, metadata & LanguageProvider
│   └── page.tsx                    # Main landing page combining all sections
├── components/
│   ├── portfolio/
│   │   ├── About.tsx               # Bio, profile photo card, quick copy & stats
│   │   ├── Contact.tsx             # Validated contact form & direct social triggers
│   │   ├── CvModal.tsx             # Interactive glassmorphic CV viewer & download
│   │   ├── data.ts                 # Full portfolio data, projects, skills & experience
│   │   ├── Experience.tsx          # Career & education timeline with interactive tabs
│   │   ├── Footer.tsx              # Footer with profile, quick links & back-to-top
│   │   ├── Hero.tsx                # Hero with typing roles, photo & mobile mockup
│   │   ├── icons.tsx               # Tech icons (Flutter, Java, Kotlin, TFLite, etc.)
│   │   ├── Navbar.tsx              # Glassmorphic nav with language switcher & CV CTA
│   │   ├── ParticleCanvas.tsx      # Real-time interactive HTML5 canvas animator
│   │   ├── Projects.tsx            # Featured mobile apps & live GitHub stream
│   │   ├── Reveal.tsx              # Framer Motion scroll-reveal wrapper
│   │   └── Skills.tsx              # Categorized technical arsenal with animated meters
│   └── ui/                         # shadcn/ui components (Sonner, Skeleton, etc.)
├── lib/
│   ├── i18n.tsx                    # Multilingual translation dictionary (EN, UR, DE)
│   └── utils.ts                    # Classnames merger (clsx + twMerge)
public/
├── Abdullah_Azeem_CV.pdf           # Downloadable resume in PDF
├── abdullah-azeem.jpg              # High-resolution developer portrait
└── profile.jpg                     # Profile image asset
```

---

## 👤 Author

**Abdullah Azeem** — Mobile Application Developer  
- **Email**: [abdullah.androiddeveloper@gmail.com](mailto:abdullah.androiddeveloper@gmail.com)  
- **Phone / WhatsApp**: [+92 321 7649976](https://wa.me/923217649976)  
- **LinkedIn**: [linkedin.com/in/abdullah-azeem-307ab7418](https://www.linkedin.com/in/abdullah-azeem-307ab7418/)  
- **GitHub**: [github.com/AbdullahAzeem12](https://github.com/AbdullahAzeem12)  
- **Location**: Lahore, Punjab, Pakistan  
