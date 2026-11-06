"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  X,
  FileText,
  ExternalLink,
  GraduationCap,
  Briefcase,
  CheckCircle2,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Code,
} from "lucide-react";
import { toast } from "sonner";
import {
  EMAIL_ADDRESS,
  PHONE_NUMBER,
  LOCATION_STRING,
  EDUCATION,
  EXPERIENCES,
  SKILLS,
} from "./data";

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CvModal({ isOpen, onClose }: CvModalProps) {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    try {
      setDownloading(true);
      // Trigger download via the backend route
      const link = document.createElement("a");
      link.href = "/api/cv/download";
      link.download = "Abdullah_Azeem_Mobile_Developer_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast.success("CV Download Started!", {
        description: "Abdullah Azeem's official resume is downloading as PDF.",
      });
    } catch {
      toast.error("Failed to start download. Please try again.");
    } finally {
      setTimeout(() => setDownloading(false), 1200);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#070305]/85 backdrop-blur-xl"
            aria-hidden="true"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl border border-rose-500/25 bg-gradient-to-b from-[#14080e]/95 via-[#0b0508]/98 to-[#070305]/98 shadow-[0_0_60px_-15px_rgba(225,29,72,0.45)] backdrop-blur-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="relative border-b border-white/10 px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-rose-500/30 bg-rose-500/10 text-rose-400">
                  <FileText className="h-5 w-5" />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-display text-lg sm:text-xl font-bold text-white">
                      Curriculum Vitae
                    </h2>
                    <span className="rounded-full border border-rose-500/30 bg-rose-500/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-rose-300">
                      PDF Document
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400">
                    Abdullah Azeem • Mobile Application Developer
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleDownload}
                  disabled={downloading}
                  className="btn-shine-maroon hidden sm:inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold text-white transition-all disabled:opacity-60"
                >
                  <Download className="h-3.5 w-3.5" />
                  {downloading ? "Downloading..." : "Download PDF"}
                </button>
                <a
                  href="/api/cv/download?view=inline"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs text-neutral-300 hover:text-white hover:border-white/30 transition-colors"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Open PDF Tab
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close modal"
                  className="grid h-9 w-9 place-items-center rounded-xl border border-white/15 bg-white/5 text-neutral-400 hover:text-white hover:border-white/30 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Body */}
            <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8 sm:py-7 space-y-7 custom-scrollbar">
              {/* Summary Hero in CV */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white">
                      Abdullah Azeem
                    </h3>
                    <p className="font-mono text-xs tracking-wider text-rose-400 mt-1">
                      MOBILE APPLICATION DEVELOPER (ANDROID & FLUTTER)
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 text-xs text-neutral-300">
                    <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1">
                      <Mail className="h-3 w-3 text-rose-400" />
                      {EMAIL_ADDRESS}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1">
                      <Phone className="h-3 w-3 text-rose-400" />
                      {PHONE_NUMBER}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1">
                      <MapPin className="h-3 w-3 text-rose-400" />
                      {LOCATION_STRING}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-neutral-300 text-justify">
                  Innovative Android Application Developer with expertise in Java and XML,
                  specializing in integrating on-device machine learning models (TensorFlow Lite,
                  ML Kit) into responsive mobile interfaces. Proven ability to design secure,
                  user-centric applications featuring seamless third-party media API integrations.
                  Dedicated to building intelligent, scalable mobile solutions that enhance user
                  engagement through data-driven personalization and robust, secure backend architectures (Firebase).
                </p>
              </div>

              {/* Education */}
              <div>
                <h4 className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3">
                  <GraduationCap className="h-4 w-4 text-rose-400" /> Education
                </h4>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h5 className="font-display text-base font-semibold text-white">
                      {EDUCATION.degree}
                    </h5>
                    <span className="font-mono text-xs text-rose-300">
                      {EDUCATION.period}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    {EDUCATION.institution}, {EDUCATION.location}
                  </p>
                  <p className="text-xs leading-relaxed text-neutral-300 mt-3 text-justify">
                    {EDUCATION.description}
                  </p>
                  <ul className="mt-2 space-y-1">
                    {EDUCATION.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-neutral-400">
                        <CheckCircle2 className="h-3.5 w-3.5 text-rose-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Professional Experience */}
              <div>
                <h4 className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3">
                  <Briefcase className="h-4 w-4 text-rose-400" /> Professional Experience
                </h4>
                <div className="space-y-4">
                  {EXPERIENCES.map((exp) => (
                    <div
                      key={exp.id}
                      className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <div>
                          <h5 className="font-display text-base font-semibold text-white">
                            {exp.role}
                          </h5>
                          <p className="text-xs text-rose-300">
                            {exp.company} • {exp.location}
                          </p>
                        </div>
                        <span className="font-mono text-xs text-neutral-400">
                          {exp.period}
                        </span>
                      </div>
                      <p className="mt-2.5 text-xs text-neutral-300 leading-relaxed text-justify">
                        {exp.summary}
                      </p>
                      <ul className="mt-3 space-y-1.5">
                        {exp.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-neutral-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {exp.technologies.map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-neutral-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Grid */}
              <div>
                <h4 className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3">
                  <Code className="h-4 w-4 text-rose-400" /> Technical Skills & Tools
                </h4>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                    <p className="font-mono text-xs font-semibold text-rose-300 mb-2">
                      Mobile Frontend Development
                    </p>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      Java, XML, Android SDK, Flutter (Dart), React Native, Material 3, Responsive UI/UX implementation.
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                    <p className="font-mono text-xs font-semibold text-rose-300 mb-2">
                      Cloud & Backend Integration
                    </p>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      Firebase (Firestore, Realtime Database, Authentication, Storage), SQLite, Room DB, Relational Schemas.
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                    <p className="font-mono text-xs font-semibold text-rose-300 mb-2">
                      On-Device AI & Machine Learning
                    </p>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      TensorFlow Lite, Google ML Kit, Face & Emotion Recognition, Edge vision models on mobile streams.
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                    <p className="font-mono text-xs font-semibold text-rose-300 mb-2">
                      APIs, Tooling & Testing
                    </p>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      RESTful APIs, Spotify/Transport APIs, Android Studio, Git, Gradle, Logcat, JUnit & Espresso testing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer with Actions */}
            <div className="border-t border-white/10 bg-black/40 px-6 py-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <Sparkles className="h-4 w-4 text-rose-400" />
                <span>Original PDF verified • 118 KB • Ready for immediate download</span>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href="/api/cv/download?view=inline"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none text-center rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-medium text-neutral-200 hover:text-white hover:border-white/30 transition-colors"
                >
                  View in Browser
                </a>
                <button
                  type="button"
                  onClick={handleDownload}
                  disabled={downloading}
                  className="btn-shine-maroon flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-xs font-semibold text-white transition-all disabled:opacity-60"
                >
                  <Download className="h-3.5 w-3.5" />
                  {downloading ? "Preparing PDF..." : "Download Official PDF"}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

