import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { LanguageProvider } from "@/lib/i18n";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://abdullahazeem.dev"
  ),
  title: "Abdullah Azeem | Mobile Application Developer (Flutter & Android)",
  description:
    "Official portfolio of Abdullah Azeem, an innovative Mobile Application Developer specializing in Flutter (Dart), Android Native (Java/XML), TensorFlow Lite on-device ML, Firebase and REST APIs.",
  keywords: [
    "Abdullah Azeem",
    "Mobile Application Developer",
    "Flutter Developer",
    "Android Developer",
    "Dart",
    "Java",
    "Kotlin",
    "TensorFlow Lite",
    "ML Kit",
    "Firebase",
    "React Native",
    "Lahore Pakistan",
  ],
  authors: [{ name: "Abdullah Azeem" }],
  openGraph: {
    title: "Abdullah Azeem | Mobile Application Developer",
    description:
      "Innovative Android & Flutter Developer with on-device machine learning (TensorFlow Lite), Firebase architectures, and production apps.",
    type: "website",
    siteName: "Abdullah Azeem Portfolio",
    images: [
      {
        url: "/abdullah-azeem.jpg",
        width: 1200,
        height: 630,
        alt: "Abdullah Azeem Mobile Application Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Azeem | Mobile Application Developer",
    description:
      "Flutter & Android Developer building production-grade apps with on-device ML, Firebase, and real-time APIs.",
    images: ["/abdullah-azeem.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#070305",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abdullah Azeem",
    jobTitle: "Mobile Application Developer",
    url: "https://github.com/AbdullahAzeem12",
    sameAs: [
      "https://github.com/AbdullahAzeem12",
      "https://www.linkedin.com/in/abdullah-azeem-307ab7418/",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressCountry: "Pakistan",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Superior University",
    },
    knowsAbout: [
      "Flutter",
      "Dart",
      "Android Native",
      "Java",
      "Kotlin",
      "TensorFlow Lite",
      "Google ML Kit",
      "Firebase Firestore",
      "RESTful APIs",
      "React Native",
    ],
  };

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-[#070305] text-[#f5f0f2]`}
      >
        <LanguageProvider>
          {children}
          <SonnerToaster richColors position="top-right" />
        </LanguageProvider>
      </body>
    </html>
  );
}
