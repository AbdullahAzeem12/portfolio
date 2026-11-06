"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Download,
  Eye,
  FolderGit2,
  Sparkles,
  Smartphone,
  Cpu,
  Flame,
  CheckCircle2,
  Clock,
  Radio,
  Scan,
  RefreshCw,
  Sliders,
} from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import {
  GITHUB_URL,
  LINKEDIN_URL,
  MARQUEE_ITEMS,
  TYPING_ROLES,
  WHATSAPP_URL,
} from "./data";
import { GithubIcon, LinkedinIcon, WhatsAppIcon, FlutterIcon, JavaIcon, TfLiteIcon } from "./icons";
import { CvModal } from "./CvModal";
import { useLanguage } from "@/lib/i18n";

function useTypingEffect(
  words: string[],
  typeSpeed = 60,
  deleteSpeed = 30,
  pause = 1800
) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      timeout = setTimeout(() => {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      }, 250);
    } else {
      timeout = setTimeout(
        () => {
          setText((t) =>
            deleting ? word.slice(0, t.length - 1) : word.slice(0, t.length + 1)
          );
        },
        deleting ? deleteSpeed : typeSpeed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

type AppPreview = "moodmuse" | "swifttrack" | "paidix";

export function Hero() {
  const typed = useTypingEffect(TYPING_ROLES);
  const { t } = useLanguage();
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [activePreview, setActivePreview] = useState<AppPreview>("moodmuse");
  const [localTime, setLocalTime] = useState<string>("Loading...");
  const [downloadCount, setDownloadCount] = useState<number>(42);

  // Simulation interactive state
  const [moodState, setMoodState] = useState({
    emotion: "Energetic Joy",
    score: "96%",
    track: "Lofi Beats for Focus",
  });
  const [isScanningMood, setIsScanningMood] = useState(false);

  const [transitState, setTransitState] = useState({
    status: "On Time",
    departureMin: 14,
    platform: "Platform 6",
  });

  const [paidixAmount, setPaidixAmount] = useState(1250);

  // Fetch real-time presence data and download stats from our backend logic
  useEffect(() => {
    async function fetchPresence() {
      try {
        const res = await fetch("/api/presence");
        if (res.ok) {
          const data = await res.json();
          if (data.time?.currentTime) {
            setLocalTime(data.time.currentTime);
          }
        }
      } catch {
        const now = new Date();
        setLocalTime(
          now.toLocaleTimeString("en-US", {
            timeZone: "Asia/Karachi",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          }) + " PKT"
        );
      }
    }

    async function fetchStats() {
      try {
        const res = await fetch("/api/cv/stats");
        if (res.ok) {
          const data = await res.json();
          if (data.totalDownloads) {
            setDownloadCount(data.totalDownloads);
          }
        }
      } catch {
        // keep default
      }
    }

    fetchPresence();
    fetchStats();
    const interval = setInterval(fetchPresence, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/api/cv/download";
    link.download = "Abdullah_Azeem_Mobile_Developer_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadCount((prev) => prev + 1);
    toast.success("Downloading CV (PDF)", {
      description: "Abdullah Azeem's official mobile developer resume.",
    });
  };

  const handleScanMood = () => {
    setIsScanningMood(true);
    setTimeout(() => {
      const moods = [
        { emotion: "Euphoric Creative", score: "98%", track: "Synthwave Pulse 120BPM" },
        { emotion: "Deep Flow State", score: "94%", track: "Binaural Chillhop Waves" },
        { emotion: "Energetic Joy", score: "97%", track: "Upbeat Acoustic Vibes" },
      ];
      const random = moods[Math.floor(Math.random() * moods.length)];
      setMoodState(random);
      setIsScanningMood(false);
      toast.success("AI Emotion Classified!", {
        description: `TensorFlow Lite: ${random.emotion} (${random.score})`,
      });
    }, 600);
  };

  const handleRefreshTransit = () => {
    setTransitState((prev) => ({
      status: "On Time",
      departureMin: prev.departureMin > 2 ? prev.departureMin - 2 : 15,
      platform: prev.departureMin > 8 ? "Platform 6" : "Platform 7",
    }));
    toast.success("Darwin Rail API Live Feed Updated!");
  };

  return (
    <>
      <section
        id="top"
        className="relative flex min-h-screen flex-col overflow-hidden bg-grid pt-24 sm:pt-28"
      >
        {/* Ambient Dark Shiny Maroon Breathers */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-32 left-1/4 h-[550px] w-[550px] rounded-full bg-rose-950/35 blur-[140px] animate-breather-1" />
          <div className="absolute top-1/3 -right-20 h-[600px] w-[600px] rounded-full bg-[#800020]/25 blur-[160px] animate-breather-2" />
          <div className="absolute bottom-10 left-10 h-[450px] w-[450px] rounded-full bg-rose-900/20 blur-[130px] animate-breather-3" />
          <div className="absolute inset-0 bg-noise opacity-30" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#070305] to-transparent" />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 py-12 sm:px-8 lg:py-16"
        >
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              {/* Availability & Location Live Badge */}
              <motion.div variants={item} className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-950/40 px-3.5 py-1.5 font-mono text-xs text-rose-200 shadow-[0_0_20px_rgba(225,29,72,0.25)] backdrop-blur-xl">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-rose-400 animate-pulse-maroon" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-500" />
                  </span>
                  {t.hero.availableBadge}
                </span>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[11px] text-neutral-400">
                  <Clock className="h-3 w-3 text-rose-400" />
                  Lahore: {localTime}
                </span>
              </motion.div>

              <motion.p
                variants={item}
                className="mt-6 font-mono text-xs tracking-[0.25em] text-neutral-400 uppercase"
              >
                {t.hero.greeting}
              </motion.p>

              <motion.h1
                variants={item}
                className="font-display mt-2 text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
              >
                <span className="text-gradient-silver-rose">{t.hero.title}</span>
              </motion.h1>

              {/* Dynamic Animated Typing Header */}
              <motion.div
                variants={item}
                className="font-display mt-3 flex min-h-[2.6em] items-center text-xl font-semibold text-rose-200 sm:text-3xl lg:text-4xl"
              >
                <span className="text-white drop-shadow-[0_0_20px_rgba(225,29,72,0.3)]">
                  {typed}
                </span>
                <span
                  className="ml-1.5 inline-block h-[0.9em] w-[3px] bg-rose-500 animate-caret shadow-[0_0_8px_#f43f5e]"
                  aria-hidden="true"
                />
              </motion.div>

              <motion.p
                variants={item}
                className="mt-5 max-w-xl text-sm leading-relaxed text-neutral-300 sm:text-base text-justify"
              >
                {t.hero.bio}
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                variants={item}
                className="mt-8 flex flex-wrap items-center gap-3.5"
              >
                {/* Download CV CTA */}
                <button
                  type="button"
                  onClick={handleDownloadCV}
                  className="btn-shine-maroon group inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-xs sm:text-sm font-semibold text-white transition-all shadow-[0_0_30px_rgba(225,29,72,0.4)]"
                >
                  <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                  <span>{t.hero.downloadCv}</span>
                  <span className="rounded-full bg-white/20 px-2 py-0.5 font-mono text-[10px]">
                    {downloadCount}+
                  </span>
                </button>

                {/* View CV Quick Modal */}
                <button
                  type="button"
                  onClick={() => setCvModalOpen(true)}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3.5 text-xs sm:text-sm font-semibold text-neutral-200 backdrop-blur-xl transition-all hover:border-rose-500/40 hover:bg-rose-950/30 hover:text-white"
                >
                  <Eye className="h-4 w-4 text-rose-400" />
                  <span>{t.hero.viewResume}</span>
                </button>

                {/* View Projects Link */}
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-5 py-3.5 text-xs sm:text-sm font-semibold text-neutral-300 transition-all hover:border-white/30 hover:text-white"
                >
                  <FolderGit2 className="h-4 w-4" />
                  <span>{t.hero.projects}</span>
                  <ArrowRight className="h-3.5 w-3.5 text-neutral-400" />
                </a>

                {/* Social Icons */}
                <div className="flex items-center gap-2 pl-1">
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-neutral-300 transition-all hover:scale-110 hover:border-rose-500/50 hover:text-white hover:shadow-[0_0_15px_rgba(225,29,72,0.3)]"
                  >
                    <GithubIcon className="h-4.5 w-4.5" />
                  </a>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-neutral-300 transition-all hover:scale-110 hover:border-rose-500/50 hover:text-white hover:shadow-[0_0_15px_rgba(225,29,72,0.3)]"
                  >
                    <LinkedinIcon className="h-4.5 w-4.5" />
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp Contact"
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-neutral-300 transition-all hover:scale-110 hover:border-emerald-500/50 hover:text-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                  >
                    <WhatsAppIcon className="h-4.5 w-4.5" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right Column: User Portrait & Interactive Mobile Device Mockup */}
            <motion.div
              variants={item}
              className="lg:col-span-5 relative flex justify-center lg:justify-end"
            >
              {/* Outer Glow Halo */}
              <div className="relative w-full max-w-sm sm:max-w-md">
                <div className="absolute -inset-1 rounded-[36px] bg-gradient-to-r from-rose-700 via-rose-600 to-amber-700 opacity-40 blur-2xl animate-breather-2" />

                {/* Glassmorphic Mobile App Frame */}
                <div className="relative rounded-[32px] border border-rose-500/35 bg-gradient-to-b from-[#190a12]/95 via-[#0e0509]/95 to-[#070305]/98 p-4 shadow-[0_0_50px_-10px_rgba(225,29,72,0.4)] backdrop-blur-2xl">
                  {/* Speaker & Sensor Notch */}
                  <div className="mx-auto h-4 w-24 rounded-full bg-black/60 border border-white/10 flex items-center justify-center gap-1.5 mb-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-neutral-600" />
                    <span className="h-1 w-8 rounded-full bg-neutral-700" />
                  </div>

                  {/* Top Bar with Profile Showcase */}
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-3.5">
                    <div className="flex items-center gap-3">
                      {/* User's uploaded picture */}
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border-2 border-rose-500/50 shadow-[0_0_20px_rgba(225,29,72,0.4)]">
                        <Image
                          src="/abdullah-azeem.jpg"
                          alt="Abdullah Azeem portrait"
                          width={64}
                          height={64}
                          className="h-full w-full object-cover"
                          priority
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <h2 className="font-display text-sm font-bold text-white truncate">
                            Abdullah Azeem
                          </h2>
                          <span className="rounded bg-rose-500/20 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-rose-300">
                            PRO
                          </span>
                        </div>
                        <p className="font-mono text-[10px] text-rose-300/90 truncate">
                          Mobile Application Dev
                        </p>
                        <p className="text-[10px] text-neutral-400 truncate">
                          Lahore • Superior Univ BS CS
                        </p>
                      </div>
                    </div>

                    {/* Floating mini stats */}
                    <div className="mt-3 grid grid-cols-3 gap-1.5 border-t border-white/10 pt-2.5 text-center font-mono text-[10px]">
                      <div className="rounded-lg bg-white/[0.03] p-1 border border-white/5">
                        <span className="block font-bold text-rose-400">4+</span>
                        <span className="text-[9px] text-neutral-400">Apps Built</span>
                      </div>
                      <div className="rounded-lg bg-white/[0.03] p-1 border border-white/5">
                        <span className="block font-bold text-rose-400">TFLite</span>
                        <span className="text-[9px] text-neutral-400">On-Device</span>
                      </div>
                      <div className="rounded-lg bg-white/[0.03] p-1 border border-white/5">
                        <span className="block font-bold text-rose-400">10+</span>
                        <span className="text-[9px] text-neutral-400">Git Repos</span>
                      </div>
                    </div>
                  </div>

                  {/* Interactive App Screen Switcher */}
                  <div className="mt-3.5">
                    <div className="flex items-center justify-between px-1 mb-2">
                      <span className="font-mono text-[10px] tracking-wider text-rose-300 uppercase flex items-center gap-1.5">
                        <Radio className="h-3 w-3 text-rose-400 animate-pulse" />{" "}
                        {t.hero.simulationsTitle}
                      </span>
                      <span className="font-mono text-[9px] text-neutral-500">
                        Interactive Tap
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-1.5 rounded-xl bg-black/40 p-1 border border-white/10">
                      <button
                        type="button"
                        onClick={() => setActivePreview("moodmuse")}
                        className={`rounded-lg py-1.5 px-2 text-[10px] font-semibold transition-all ${
                          activePreview === "moodmuse"
                            ? "bg-rose-900/70 text-white shadow-[0_0_12px_rgba(225,29,72,0.4)] border border-rose-500/40"
                            : "text-neutral-400 hover:text-white"
                        }`}
                      >
                        MoodMuse
                      </button>
                      <button
                        type="button"
                        onClick={() => setActivePreview("swifttrack")}
                        className={`rounded-lg py-1.5 px-2 text-[10px] font-semibold transition-all ${
                          activePreview === "swifttrack"
                            ? "bg-rose-900/70 text-white shadow-[0_0_12px_rgba(225,29,72,0.4)] border border-rose-500/40"
                            : "text-neutral-400 hover:text-white"
                        }`}
                      >
                        SwiftTrack
                      </button>
                      <button
                        type="button"
                        onClick={() => setActivePreview("paidix")}
                        className={`rounded-lg py-1.5 px-2 text-[10px] font-semibold transition-all ${
                          activePreview === "paidix"
                            ? "bg-rose-900/70 text-white shadow-[0_0_12px_rgba(225,29,72,0.4)] border border-rose-500/40"
                            : "text-neutral-400 hover:text-white"
                        }`}
                      >
                        PaidiX
                      </button>
                    </div>

                    {/* Simulation Card Display */}
                    <div className="mt-2.5 min-h-[175px] rounded-2xl border border-rose-500/20 bg-gradient-to-br from-[#1d0914]/90 to-[#0e0409]/95 p-3.5 shadow-inner">
                      <AnimatePresence mode="wait">
                        {activePreview === "moodmuse" && (
                          <motion.div
                            key="moodmuse"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.25 }}
                            className="space-y-2.5"
                          >
                            <div className="flex items-center justify-between">
                              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-rose-300">
                                <Cpu className="h-3 w-3 text-rose-400" />
                                TFLite Emotion AI
                              </span>
                              <button
                                type="button"
                                onClick={handleScanMood}
                                disabled={isScanningMood}
                                className="inline-flex items-center gap-1 rounded bg-rose-500/20 hover:bg-rose-500/40 px-2 py-0.5 font-mono text-[9px] text-rose-200 transition-colors"
                              >
                                <Scan className="h-2.5 w-2.5" />
                                {isScanningMood ? "Scanning..." : "Simulate Scan"}
                              </button>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/40 p-2.5 flex items-center justify-between">
                              <div>
                                <p className="text-[10px] text-neutral-400">
                                  Detected Emotion
                                </p>
                                <p className="font-display text-sm font-bold text-white flex items-center gap-1.5">
                                  <span>{moodState.emotion}</span>
                                  <span className="text-xs text-rose-400">
                                    ✨ {moodState.score}
                                  </span>
                                </p>
                              </div>
                              <div className="flex gap-0.5 items-end h-6">
                                <span className="w-1 bg-rose-500 rounded-full h-3 animate-pulse" />
                                <span
                                  className="w-1 bg-rose-400 rounded-full h-6 animate-pulse"
                                  style={{ animationDelay: "0.2s" }}
                                />
                                <span
                                  className="w-1 bg-rose-600 rounded-full h-4 animate-pulse"
                                  style={{ animationDelay: "0.4s" }}
                                />
                                <span
                                  className="w-1 bg-rose-300 rounded-full h-5 animate-pulse"
                                  style={{ animationDelay: "0.1s" }}
                                />
                              </div>
                            </div>

                            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-2 flex items-center justify-between text-[10px]">
                              <span className="text-neutral-300 truncate">
                                Track: {moodState.track}
                              </span>
                              <span className="text-rose-400 font-mono">Spotify API</span>
                            </div>
                          </motion.div>
                        )}

                        {activePreview === "swifttrack" && (
                          <motion.div
                            key="swifttrack"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.25 }}
                            className="space-y-2.5"
                          >
                            <div className="flex items-center justify-between">
                              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-rose-300">
                                <Smartphone className="h-3 w-3 text-rose-400" />
                                Heathrow Express Transit
                              </span>
                              <button
                                type="button"
                                onClick={handleRefreshTransit}
                                className="inline-flex items-center gap-1 rounded bg-emerald-500/20 hover:bg-emerald-500/30 px-2 py-0.5 font-mono text-[9px] text-emerald-300 transition-colors"
                              >
                                <RefreshCw className="h-2.5 w-2.5" />
                                Refresh
                              </button>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/40 p-2.5">
                              <div className="flex items-center justify-between text-xs font-bold text-white">
                                <span>London Paddington</span>
                                <ArrowRight className="h-3.5 w-3.5 text-rose-400" />
                                <span>Heathrow T2&3</span>
                              </div>
                              <div className="mt-2 flex items-center justify-between font-mono text-[10px] text-neutral-400">
                                <span className="text-rose-300 font-semibold">
                                  {transitState.platform}
                                </span>
                                <span>In: {transitState.departureMin} mins</span>
                                <span className="text-emerald-400">{transitState.status}</span>
                              </div>
                            </div>

                            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-2 flex items-center justify-between text-[10px]">
                              <span className="text-neutral-300">Digital Boarding Pass</span>
                              <span className="text-rose-400 font-mono">Darwin Feed</span>
                            </div>
                          </motion.div>
                        )}

                        {activePreview === "paidix" && (
                          <motion.div
                            key="paidix"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.25 }}
                            className="space-y-2.5"
                          >
                            <div className="flex items-center justify-between">
                              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-rose-300">
                                <Flame className="h-3 w-3 text-rose-400" />
                                USD to PKR Payout
                              </span>
                              <div className="flex gap-1">
                                {[500, 1250, 2500].map((amt) => (
                                  <button
                                    key={amt}
                                    type="button"
                                    onClick={() => setPaidixAmount(amt)}
                                    className={`rounded px-1.5 py-0.5 font-mono text-[9px] ${
                                      paidixAmount === amt
                                        ? "bg-rose-500 text-white"
                                        : "bg-white/5 text-neutral-400"
                                    }`}
                                  >
                                    ${amt}
                                  </button>
                                ))}
                              </div>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/40 p-2.5 flex items-center justify-between">
                              <div>
                                <p className="text-[10px] text-neutral-400">
                                  Transfer Revenue
                                </p>
                                <p className="font-display text-sm font-bold text-white">
                                  ${paidixAmount.toLocaleString()}.00 USD
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="font-mono text-[10px] text-emerald-400 font-bold">
                                  = {(paidixAmount * 278).toLocaleString()} PKR
                                </p>
                                <p className="text-[9px] text-neutral-500">
                                  12% fee • 1-LINK Net
                                </p>
                              </div>
                            </div>

                            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-2 flex items-center justify-between text-[10px]">
                              <span className="text-neutral-300">Biometric KYC</span>
                              <span className="text-emerald-400 font-mono">Instant Payout</span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Running Tech Marquee with Shiny Maroon Glass Badges */}
        <div className="relative border-t border-rose-500/15 bg-[#070305]/80 py-4.5 backdrop-blur-xl">
          <div className="marquee-mask overflow-hidden">
            <div className="flex w-max animate-marquee gap-8">
              {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((tech, i) => (
                <span
                  key={`${tech}-${i}`}
                  className="flex items-center gap-8 whitespace-nowrap font-mono text-xs tracking-[0.2em] text-neutral-400 hover:text-rose-300 transition-colors"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-500/80 shadow-[0_0_8px_rgba(225,29,72,0.6)]" />
                  {tech.toUpperCase()}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CV Modal */}
      <CvModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </>
  );
}
