"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  X,
  Send,
  Sparkles,
  Download,
  ExternalLink,
  MessageSquare,
  ArrowRight,
  User,
  Loader2,
  Minimize2,
} from "lucide-react";
import { toast } from "sonner";
import { WHATSAPP_URL } from "./data";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  action?: "download_cv" | "contact_whatsapp" | "view_projects" | null;
  timestamp: string;
}

const DEFAULT_SUGGESTIONS = [
  "What apps has Abdullah built?",
  "Tell me about MoodMuse AI (TFLite)",
  "What was his role at Mktecknotrons?",
  "Can I download his CV in PDF?",
  "How can I contact or hire him?",
];

export function AiAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Hi! I am AzeemAI, Abdullah Azeem's interactive portfolio assistant. Ask me anything about Abdullah's mobile development experience, Flutter & Android projects, TensorFlow Lite AI models, or download his CV!",
      timestamp: "Just now",
    },
  ]);
  const [suggestions, setSuggestions] = useState<string[]>(DEFAULT_SUGGESTIONS);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || loading) return;

    const userMsg: Message = {
      id: String(Date.now()),
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: query }),
      });

      const data = await res.json();

      const botMsg: Message = {
        id: String(Date.now() + 1),
        sender: "bot",
        text: data.reply || "I am here to help you learn more about Abdullah Azeem.",
        action: data.action,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, botMsg]);
      if (data.suggestedQuestions && Array.isArray(data.suggestedQuestions)) {
        setSuggestions(data.suggestedQuestions);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: String(Date.now() + 1),
          sender: "bot",
          text: "I'm having trouble connecting right now. Please feel free to email Abdullah directly at abdullah.androiddeveloper@gmail.com or WhatsApp at +923217649976.",
          timestamp: "Just now",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleAction = (action: string) => {
    if (action === "download_cv") {
      const link = document.createElement("a");
      link.href = "/api/cv/download";
      link.download = "Abdullah_Azeem_Mobile_Developer_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast.success("Downloading CV PDF", {
        description: "Official resume of Abdullah Azeem is downloading.",
      });
    } else if (action === "contact_whatsapp") {
      window.open(WHATSAPP_URL, "_blank");
    } else if (action === "view_projects") {
      const el = document.getElementById("projects");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Floating Launcher Pill Button */}
      <div className="fixed bottom-5 right-5 z-40 sm:bottom-7 sm:right-7">
        <motion.button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex items-center gap-2.5 rounded-full border border-rose-500/40 bg-gradient-to-r from-[#200914]/95 via-[#14060c]/98 to-[#0a0306]/98 px-4 py-3 text-xs font-semibold text-white shadow-[0_0_35px_rgba(225,29,72,0.45)] backdrop-blur-2xl transition-all hover:border-rose-400"
          aria-label={isOpen ? "Close AI Assistant" : "Ask Abdullah's AI Agent"}
        >
          <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-rose-600/30 text-rose-300 border border-rose-500/40 shadow-[0_0_12px_rgba(225,29,72,0.5)]">
            <Bot className="h-4 w-4" />
          </span>
          <div className="text-left hidden sm:block pr-1">
            <span className="block font-display text-xs font-bold text-white group-hover:text-rose-200">
              AzeemAI
            </span>
            <span className="block font-mono text-[9px] text-rose-300">
              Interactive Bot
            </span>
          </div>
          <span className="inline-block h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
        </motion.button>
      </div>

      {/* Expandable Chat Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="fixed bottom-20 right-4 z-50 flex h-[540px] max-h-[85vh] w-[calc(100vw-2rem)] sm:w-[410px] flex-col overflow-hidden rounded-3xl border border-rose-500/35 bg-gradient-to-b from-[#180811]/98 via-[#0f050b]/98 to-[#070305]/98 shadow-[0_0_60px_-10px_rgba(225,29,72,0.5)] backdrop-blur-3xl sm:right-7 sm:bottom-24"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-rose-500/20 bg-white/[0.02] px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="relative grid h-10 w-10 place-items-center rounded-2xl border border-rose-500/40 bg-rose-950/60 text-rose-300 shadow-[0_0_15px_rgba(225,29,72,0.3)]">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-display text-sm font-bold text-white">
                      AzeemAI Agent
                    </h3>
                    <span className="rounded-full bg-rose-500/20 px-1.5 py-0.2 font-mono text-[9px] text-rose-300">
                      LIVE
                    </span>
                  </div>
                  <p className="font-mono text-[10px] text-neutral-400">
                    Ask anything about Abdullah Azeem
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="grid h-8 w-8 place-items-center rounded-xl border border-white/10 bg-white/5 text-neutral-400 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3.5 custom-scrollbar text-xs">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex gap-2.5 ${
                    m.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {m.sender === "bot" && (
                    <div className="grid h-7 w-7 shrink-0 place-items-center rounded-xl bg-rose-950/60 border border-rose-500/30 text-rose-300">
                      <Sparkles className="h-3.5 w-3.5" />
                    </div>
                  )}

                  <div
                    className={`max-w-[82%] rounded-2xl p-3.5 leading-relaxed text-justify whitespace-pre-line ${
                      m.sender === "user"
                        ? "bg-rose-900/60 border border-rose-500/40 text-white shadow-[0_0_15px_rgba(225,29,72,0.2)]"
                        : "bg-black/50 border border-white/10 text-neutral-200"
                    }`}
                  >
                    <p>{m.text}</p>

                    {/* Interactive Action Buttons */}
                    {m.action === "download_cv" && (
                      <button
                        type="button"
                        onClick={() => handleAction("download_cv")}
                        className="btn-shine-maroon mt-3 inline-flex items-center gap-2 rounded-xl px-3 py-1.5 font-mono text-[11px] font-semibold text-white"
                      >
                        <Download className="h-3 w-3" />
                        Download Official CV (PDF)
                      </button>
                    )}

                    {m.action === "contact_whatsapp" && (
                      <button
                        type="button"
                        onClick={() => handleAction("contact_whatsapp")}
                        className="mt-3 inline-flex items-center gap-2 rounded-xl bg-emerald-900/60 border border-emerald-500/40 px-3 py-1.5 font-mono text-[11px] font-semibold text-emerald-200 hover:bg-emerald-900"
                      >
                        <ExternalLink className="h-3 w-3" />
                        Open WhatsApp Chat (+92 321 7649976)
                      </button>
                    )}

                    {m.action === "view_projects" && (
                      <button
                        type="button"
                        onClick={() => handleAction("view_projects")}
                        className="mt-3 inline-flex items-center gap-2 rounded-xl bg-rose-950/70 border border-rose-500/30 px-3 py-1.5 font-mono text-[11px] font-semibold text-rose-200 hover:text-white"
                      >
                        <ArrowRight className="h-3 w-3" />
                        Scroll to Projects Section
                      </button>
                    )}

                    <span className="block mt-1 font-mono text-[9px] text-neutral-500 text-right">
                      {m.timestamp}
                    </span>
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex items-center gap-2 text-rose-300 font-mono text-xs pl-2">
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  <span>AzeemAI is typing...</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Prompt Suggestion Chips */}
            {suggestions.length > 0 && (
              <div className="px-4 py-2 border-t border-white/5 bg-black/40 overflow-x-auto whitespace-nowrap flex gap-1.5 custom-scrollbar">
                {suggestions.slice(0, 3).map((s, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSendMessage(s)}
                    className="rounded-lg border border-rose-500/20 bg-rose-950/30 hover:bg-rose-900/40 px-2.5 py-1 font-mono text-[10px] text-neutral-300 hover:text-white transition-colors shrink-0"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input Bar */}
            <div className="border-t border-rose-500/20 bg-black/60 p-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  placeholder="Ask about Abdullah's Flutter apps, AI..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs text-white placeholder:text-neutral-500 outline-none focus:border-rose-500/50"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || loading}
                  className="btn-shine-maroon grid h-9 w-9 place-items-center rounded-xl text-white disabled:opacity-40"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

