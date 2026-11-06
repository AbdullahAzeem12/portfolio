import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

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
  title: "Abdullah Azeem | Mobile Application Developer & Flutter Developer",
  description:
    "Portfolio of Abdullah Azeem, a Mobile Application Developer specializing in Flutter (Dart), Java, Kotlin, SQL, Firebase, React Native and REST APIs. Explore projects, skills and get in touch.",
  keywords: [
    "Abdullah Azeem",
    "Mobile Application Developer",
    "Flutter Developer",
    "Dart",
    "Android Developer",
    "Java",
    "Kotlin",
    "Firebase",
    "React Native",
    "Lahore",
  ],
  authors: [{ name: "Abdullah Azeem" }],
  openGraph: {
    title: "Abdullah Azeem | Mobile Application Developer",
    description:
      "Mobile Application Developer building production-grade apps with Flutter, Java, Kotlin, Firebase and React Native.",
    type: "website",
    siteName: "Abdullah Azeem Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Abdullah Azeem | Mobile Application Developer",
    description:
      "Flutter Developer portfolio featuring projects built with Dart, Java, Kotlin, Firebase and React Native.",
  },
};

export const viewport: Viewport = {
  themeColor: "#060606",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
