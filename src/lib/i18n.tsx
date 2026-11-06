"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "en" | "ur" | "de";

export interface TranslationDictionary {
  nav: {
    about: string;
    experience: string;
    skills: string;
    projects: string;
    contact: string;
    resume: string;
    hireMe: string;
    downloadCv: string;
  };
  hero: {
    greeting: string;
    title: string;
    tagline: string;
    bio: string;
    downloadCv: string;
    viewResume: string;
    projects: string;
    availableBadge: string;
    locationBadge: string;
    simulationsTitle: string;
  };
  about: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    quickFacts: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    workTab: string;
    eduTab: string;
    currentRole: string;
    technologies: string;
  };
  skills: {
    eyebrow: string;
    title: string;
    desc: string;
    all: string;
    mobileFrontend: string;
    aiMl: string;
    cloudBackend: string;
    toolsTesting: string;
    mastery: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    desc: string;
    all: string;
    syncRepos: string;
    githubTitle: string;
    viewRepo: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    desc: string;
    directChannels: string;
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    messageLabel: string;
    sendButton: string;
    sending: string;
    sent: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      resume: "Resume (CV)",
      hireMe: "Hire Me",
      downloadCv: "Download CV",
    },
    hero: {
      greeting: "HI, MY NAME IS",
      title: "Abdullah Azeem",
      tagline: "Mobile Application Developer",
      bio: "Innovative Mobile Application Developer specializing in Flutter and native Android (Java & XML). Proven track record at Mktecknotrons and Innoviast, shipping production applications with real-time Firebase backends and on-device machine learning with TensorFlow Lite & ML Kit.",
      downloadCv: "Download CV (PDF)",
      viewResume: "View Resume",
      projects: "Projects",
      availableBadge: "Available for Mobile Roles & Freelance",
      locationBadge: "Lahore, PK • Open to work",
      simulationsTitle: "Live App Simulations",
    },
    about: {
      eyebrow: "ABOUT THE ENGINEER",
      title: "Dedicated to building intelligent, scalable mobile solutions",
      p1: "I am a passionate Mobile Application Developer with solid expertise in Flutter (Dart) and native Android (Java & XML). Currently completing my BS in Computer Science at Superior University, Lahore, I specialize in combining responsive, glassmorphic mobile interfaces with secure real-time backend architectures and on-device machine learning models.",
      p2: "Through my professional internships at Mktecknotrons (PIA, Lahore) and Innoviast (Johar Town, Lahore), I have built and shipped at least four complete Flutter applications, integrated real-time RESTful APIs, engineered cross-border payout workflows (PaidiX), and integrated on-device facial emotion classifiers using TensorFlow Lite and Google ML Kit.",
      p3: "Whether architecting a 4-portal super-app (Groclyra), designing liquid glass shaders for note-taking vaults (glassynote), or optimizing Android lifecycles for low latency, my objective is simple: build resilient, beautiful mobile software that delivers real commercial impact.",
      quickFacts: "Direct Channels & Profile",
    },
    experience: {
      eyebrow: "CAREER & EDUCATION",
      title: "Experience that transforms ideas into apps",
      workTab: "Work Experience",
      eduTab: "Education",
      currentRole: "CURRENT ROLE",
      technologies: "Technologies:",
    },
    skills: {
      eyebrow: "TECHNICAL ARSENAL",
      title: "Production tools engineered for speed",
      desc: "From Flutter state management and native Java/XML Android architectures to on-device TensorFlow Lite neural networks and real-time Firebase backends.",
      all: "All",
      mobileFrontend: "Mobile Frontend",
      aiMl: "AI & ML",
      cloudBackend: "Cloud & Backend",
      toolsTesting: "Tools & Testing",
      mastery: "Mastery Level",
    },
    projects: {
      eyebrow: "PORTFOLIO OF APPS",
      title: "Production Mobile Applications",
      desc: "Explore full-stack mobile applications featuring AI computer vision, live transportation APIs, and cross-border financial architectures.",
      all: "All",
      syncRepos: "Sync Repos",
      githubTitle: "All Repositories on GitHub",
      viewRepo: "View GitHub Repository",
    },
    contact: {
      eyebrow: "GET IN TOUCH",
      title: "Let's build your next mobile app",
      desc: "Have a freelance mobile project, an engineering role, or a partnership in mind? Send a message and let's bring it to life.",
      directChannels: "Direct Channels",
      nameLabel: "Your Name",
      emailLabel: "Email Address",
      phoneLabel: "Phone / WhatsApp Number",
      messageLabel: "Project Details / Role Specification",
      sendButton: "Send Message to Abdullah",
      sending: "Sending Message...",
      sent: "Message Sent!",
    },
  },
  ur: {
    nav: {
      about: "تعارف",
      experience: "تجربہ",
      skills: "مہارتیں",
      projects: "منصوبے",
      contact: "رابطہ",
      resume: "سی وی (CV)",
      hireMe: "مجھے ہائر کریں",
      downloadCv: "سی وی ڈاؤنلوڈ کریں",
    },
    hero: {
      greeting: "السلام علیکم، میرا نام ہے",
      title: "عبداللہ عظیم",
      tagline: "موبائل ایپلیکیشن ڈویلپر",
      bio: "جدید موبائل ایپلیکیشن ڈویلپر جو فلٹر (Flutter) اور اینڈرائیڈ نیٹِو (Java & XML) میں مہارت رکھتے ہیں۔ میکٹیکنوٹرونز اور انوویاسٹ میں پروڈکشن ایپس، فائر بیس ریئل ٹائم بیک اینڈ، اور ٹینسر فلو لائٹ کے ساتھ مشین لرننگ ماڈلز تیار کیے ہیں۔",
      downloadCv: "سی وی ڈاؤنلوڈ کریں (PDF)",
      viewResume: "سی وی دیکھیں",
      projects: "منصوبے دیکھیں",
      availableBadge: "موبائل ایپس اور فری لانس کے لیے دستیاب",
      locationBadge: "لاہور، پاکستان • اوپن ٹو ورک",
      simulationsTitle: "براہِ راست ایپ سمولیشنز",
    },
    about: {
      eyebrow: "ڈویلپر کے بارے میں",
      title: "ذہین اور تیز رفتار موبائل سلوشنز کی تیاری",
      p1: "میں فلٹر (Dart) اور نیٹِو اینڈرائیڈ (Java & XML) کا باصلاحیت موبائل ایپلیکیشن ڈویلپر ہوں۔ سپیریئر یونیورسٹی لاہور سے بی ایس کمپیوٹر سائنس مکمل کر رہا ہوں اور خوبصورت گلاسمورفک انٹرفیس کے ساتھ ریئل ٹائم بیک اینڈ اور آن ڈیوائس مشین لرننگ میں مہارت رکھتا ہوں۔",
      p2: "میکٹیکنوٹرونز اور انوویاسٹ میں انٹرن شپس کے دوران میں نے چار سے زائد مکمل فلٹر ایپس بنائیں، لائیو ریسٹ اے پی آئیز جوڑیں، اور ٹینسر فلو لائٹ کی مدد سے چہرے کے تاثرات پہچاننے والے آن ڈیوائس AI ماڈلز ضم کیے۔",
      p3: "خواہ گروکلائرا جیسی سپر ایپ ہو یا پے ڈی ایکس جیسی فن ٹیک پیمنٹ ایپلی کیشن، میرا مقصد تیز رفتار اور پائیدار موبائل پروڈکٹس فراہم کرنا ہے۔",
      quickFacts: "براہِ راست رابطے اور تفصیلات",
    },
    experience: {
      eyebrow: "کیریئر اور تعلیم",
      title: "خیالات کو حقیقت میں بدلنے والا عملی تجربہ",
      workTab: "پیشہ ورانہ تجربہ",
      eduTab: "تعلیم",
      currentRole: "موجودہ انٹرن شپ",
      technologies: "استعمال شدہ ٹیکنالوجیز:",
    },
    skills: {
      eyebrow: "تکنیکی مہارتیں",
      title: "تیز رفتاری اور کارکردگی کے ٹولز",
      desc: "فلٹر اور اینڈرائیڈ نیٹِو سے لے کر ٹینسر فلو لائٹ نیورل نیٹ ورکس اور کلاؤڈ فائر بیس تک ہر ٹول پر عبور۔",
      all: "سب",
      mobileFrontend: "موبائل فرنٹ اینڈ",
      aiMl: "مصنوعی ذہانت و مشین لرننگ",
      cloudBackend: "کلاؤڈ اور بیک اینڈ",
      toolsTesting: "ٹولز اور ٹیسٹنگ",
      mastery: "مہارت کی سطح",
    },
    projects: {
      eyebrow: "موبائل ایپس پورٹ فولیو",
      title: "تیار کردہ لائیو موبائل ایپلی کیشنز",
      desc: "کمپیوٹر ویژن، لائیو ٹرانزٹ اے پی آئیز، اور کراس بارڈر فنانشل سسٹمز سے لیس موبائل ایپس دریافت کریں۔",
      all: "سب",
      syncRepos: "تازہ ترین ریپوز حاصل کریں",
      githubTitle: "گٹ ہب پر تمام ریپوزیٹریز",
      viewRepo: "گٹ ہب پر کوڈ دیکھیں",
    },
    contact: {
      eyebrow: "رابطہ کریں",
      title: "آئیے مل کر آپ کی اگلی موبائل ایپ بنائیں",
      desc: "کیا آپ کو کوئی نیا موبائل پراجیکٹ بنوانا ہے یا جاب کے لیے بات کرنی ہے؟ مجھے ابھی میسج بھیجیں۔",
      directChannels: "براہ راست چینلز",
      nameLabel: "آپ کا نام",
      emailLabel: "ای میل ایڈریس",
      phoneLabel: "فون / واٹس ایپ نمبر",
      messageLabel: "پراجیکٹ کی تفصیلات",
      sendButton: "عبداللہ کو میسج بھیجیں",
      sending: "پیغام بھیجا جا رہا ہے...",
      sent: "پیغام کامیابی سے پہنچ گیا!",
    },
  },
  de: {
    nav: {
      about: "Über mich",
      experience: "Erfahrung",
      skills: "Skills",
      projects: "Projekte",
      contact: "Kontakt",
      resume: "Lebenslauf (CV)",
      hireMe: "Kontaktieren",
      downloadCv: "CV Herunterladen",
    },
    hero: {
      greeting: "HALLO, MEIN NAME IST",
      title: "Abdullah Azeem",
      tagline: "Mobile App Entwickler",
      bio: "Innovativer Mobile Application Developer mit Schwerpunkt auf Flutter und nativem Android (Java & XML). Erfahrung bei Mktecknotrons und Innoviast in der Entwicklung von Produktionsanwendungen mit Firebase und On-Device Machine Learning (TensorFlow Lite & ML Kit).",
      downloadCv: "CV Herunterladen (PDF)",
      viewResume: "Lebenslauf Ansehen",
      projects: "Projekte",
      availableBadge: "Verfügbar für Mobile Projekte & Vollzeit",
      locationBadge: "Lahore, PK • Offen für Angebote",
      simulationsTitle: "Live App Simulationen",
    },
    about: {
      eyebrow: "ÜBER DEN ENTWICKLER",
      title: "Intelligente, skalierbare mobile Lösungen",
      p1: "Ich bin ein Mobile Application Developer mit fundierter Expertise in Flutter (Dart) und nativem Android (Java & XML). Ich studiere Informatik (B.Sc.) an der Superior University in Lahore und kombiniere responsive Glasmorphismus-Oberflächen mit cloud-basierten Firebase-Backends und On-Device Machine Learning.",
      p2: "In meinen Praktika bei Mktecknotrons und Innoviast habe ich vier komplette Flutter-Apps entwickelt, REST-APIs integriert und KI-Modelle mit TensorFlow Lite und Google ML Kit implementiert.",
      p3: "Mein Ziel: performante, langlebige Softwarelösungen mit echtem Mehrwert schaffen.",
      quickFacts: "Direktkanäle & Profil",
    },
    experience: {
      eyebrow: "KARRIERE & BILDUNG",
      title: "Praxiserfahrung, die Ideen in Apps verwandelt",
      workTab: "Berufserfahrung",
      eduTab: "Ausbildung",
      currentRole: "AKTUELLE ROLLE",
      technologies: "Technologien:",
    },
    skills: {
      eyebrow: "TECHNISCHES ARSENAL",
      title: "Produktionstools für maximale Performance",
      desc: "Von Flutter State Management und nativem Android bis zu TensorFlow Lite und Firebase Cloud Architekturen.",
      all: "Alle",
      mobileFrontend: "Mobile Frontend",
      aiMl: "KI & ML",
      cloudBackend: "Cloud & Backend",
      toolsTesting: "Tools & Tests",
      mastery: "Kompetenzniveau",
    },
    projects: {
      eyebrow: "PROJEKTPORTFOLIO",
      title: "Mobile Anwendungen in Produktion",
      desc: "Vollwertige Apps mit Computer Vision, Live-Transit-APIs und grenzüberschreitenden Fintech-Architekturen.",
      all: "Alle",
      syncRepos: "Repos Synchronisieren",
      githubTitle: "Alle Repositories auf GitHub",
      viewRepo: "GitHub Repository Öffnen",
    },
    contact: {
      eyebrow: "KONTAKT AUFNEHMEN",
      title: "Lassen Sie uns Ihre nächste App bauen",
      desc: "Haben Sie ein Projekt, eine offene Stelle oder eine Kooperationsidee? Schreiben Sie mir direkt.",
      directChannels: "Direkte Kanäle",
      nameLabel: "Ihr Name",
      emailLabel: "E-Mail-Adresse",
      phoneLabel: "Telefon- / WhatsApp-Nummer",
      messageLabel: "Projektbeschreibung / Details",
      sendButton: "Nachricht an Abdullah senden",
      sending: "Wird gesendet...",
      sent: "Nachricht gesendet!",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationDictionary;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: translations.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio_lang") as Language;
    if (saved && (saved === "en" || saved === "ur" || saved === "de")) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("portfolio_lang", lang);
    if (lang === "ur") {
      document.documentElement.lang = "ur";
    } else {
      document.documentElement.lang = lang;
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

